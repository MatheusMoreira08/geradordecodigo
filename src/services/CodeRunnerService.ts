import { TestCase, ResultadoExecucao } from '../types';

/**
 * Serviço responsável pela execução segura e isolada de código do usuário no cliente via Web Worker.
 */
export class CodeRunnerService {
  /**
   * Executa o código do usuário em um Web Worker e valida contra os casos de teste
   */
  static executar(codigo: string, testCases: TestCase[] = []): Promise<ResultadoExecucao> {
    return new Promise((resolve) => {
      // Se não houver casos de teste definidos, cria um caso genérico de verificação de execução sem erro
      const testesValidos: TestCase[] = testCases.length > 0 ? testCases : [
        { id: 'tc-default', entrada: [], saidaEsperada: undefined }
      ];

      const workerScript = `
        self.onmessage = function(e) {
          const { codigo, testCases } = e.data;
          const startTime = performance.now();
          try {
            // Executa o código e busca por uma função exportada/declarada ou função chamada solucao/main
            let fn;
            try {
              const execScope = new Function(\`
                \${codigo}
                if (typeof solucao === 'function') return solucao;
                if (typeof main === 'function') return main;
                return null;
              \`);
              fn = execScope();
            } catch (scopeErr) {
              // Tentativa de avaliação direta se for expressão de função anônima ou arrow
              try {
                fn = eval('(' + codigo + ')');
              } catch (_) {
                throw scopeErr;
              }
            }

            if (typeof fn !== 'function') {
              // Se for um script simples sem função declarada, executa e valida se rodou sem erros
              const scriptExec = new Function(codigo);
              const ret = scriptExec();
              const endTime = performance.now();
              self.postMessage({
                sucesso: true,
                testesPassados: testCases.length,
                totalTestes: testCases.length,
                detalhes: testCases.map(tc => ({
                  testCaseId: tc.id,
                  passou: true,
                  obteve: ret !== undefined ? ret : 'Executado sem erros',
                  esperava: tc.saidaEsperada
                })),
                tempoExecucaoMs: Math.round(endTime - startTime)
              });
              return;
            }

            const detalhes = [];
            let passados = 0;

            for (const tc of testCases) {
              try {
                const args = Array.isArray(tc.entrada) ? tc.entrada : [tc.entrada];
                const resultado = fn(...args);
                const passou = tc.saidaEsperada === undefined ? true : (JSON.stringify(resultado) === JSON.stringify(tc.saidaEsperada));
                
                if (passou) passados++;
                detalhes.push({
                  testCaseId: tc.id,
                  passou,
                  obteve: resultado,
                  esperava: tc.saidaEsperada
                });
              } catch (err) {
                detalhes.push({
                  testCaseId: tc.id,
                  passou: false,
                  obteve: null,
                  esperava: tc.saidaEsperada,
                  erro: err instanceof Error ? err.message : String(err)
                });
              }
            }

            const endTime = performance.now();
            self.postMessage({
              sucesso: passados === testCases.length,
              testesPassados: passados,
              totalTestes: testCases.length,
              detalhes,
              tempoExecucaoMs: Math.round(endTime - startTime)
            });

          } catch (globalErr) {
            self.postMessage({
              sucesso: false,
              testesPassados: 0,
              totalTestes: testCases.length,
              detalhes: [{
                testCaseId: 'erro-sintaxe',
                passou: false,
                obteve: null,
                esperava: null,
                erro: globalErr instanceof Error ? globalErr.message : String(globalErr)
              }],
              tempoExecucaoMs: 0
            });
          }
        };
      `;

      const blob = new Blob([workerScript], { type: 'application/javascript' });
      const workerUrl = URL.createObjectURL(blob);
      const worker = new Worker(workerUrl);

      let timeoutId: number | undefined = window.setTimeout(() => {
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve({
          sucesso: false,
          testesPassados: 0,
          totalTestes: testesValidos.length,
          detalhes: [{
            testCaseId: 'timeout',
            passou: false,
            obteve: null,
            esperava: null,
            erro: 'Tempo limite de execução excedido (2 segundos). Verifique se há loops infinitos.'
          }],
          tempoExecucaoMs: 2000
        });
      }, 2000);

      worker.onmessage = (e) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = undefined;
        }
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve(e.data as ResultadoExecucao);
      };

      worker.onerror = (err) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = undefined;
        }
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve({
          sucesso: false,
          testesPassados: 0,
          totalTestes: testesValidos.length,
          detalhes: [{
            testCaseId: 'worker-error',
            passou: false,
            obteve: null,
            esperava: null,
            erro: err.message || 'Erro durante execução no worker.'
          }],
          tempoExecucaoMs: 0
        });
      };

      worker.postMessage({ codigo, testCases: testesValidos });
    });
  }
}
