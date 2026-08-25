import { Exercicio, ResultadoExecucao, DicaIa, ExplicacaoErroIa } from '../types';
import { ProgressService } from './ProgressService';

/**
 * Serviço de Tutoria e Inteligência Artificial do Gerador de Código
 */
export class AiAssistantService {
  /**
   * Obtém dica pedagógica em 3 níveis graduais
   */
  static async obterDica(
    exercicio: Exercicio,
    codigoUsuario: string,
    nivelDica: number
  ): Promise<DicaIa> {
    const apiKey = ProgressService.getApiKeyGemini();

    if (apiKey) {
      try {
        const prompt = `Você é um tutor pedagógico de programação altamente encorajador.
Exercício: "${exercicio.titulo}": ${exercicio.enunciado}
Linguagem: ${exercicio.linguagem}
Nível da Dica solicitada: Nível ${nivelDica} de 3.
- Nível 1: Dica conceitual/estratégica leve (sem mostrar código).
- Nível 2: Dica estrutural com pseudo-código ou padrão recomendado.
- Nível 3: Dica direta mostrando o trecho ou método essencial.

Código atual do aluno:
\`\`\`${exercicio.linguagem}
${codigoUsuario || '(ainda não escreveu código)'}
\`\`\`

Responda em formato JSON com a estrutura:
{
  "titulo": "Título curto da dica",
  "conteudo": "Explicação em português claro e formatada em Markdown"
}`;

        const data = await this.chamarGeminiApi(apiKey, prompt);
        if (data.titulo && data.conteudo) {
          return {
            nivel: nivelDica,
            titulo: data.titulo,
            conteudo: data.conteudo,
          };
        }
      } catch (e) {
        console.warn('Erro ao chamar API do Gemini para dica, utilizando fallback offline:', e);
      }
    }

    // Fallback Offline Inteligente
    return this.gerarDicaOffline(exercicio, codigoUsuario, nivelDica);
  }

  /**
   * Explica o motivo do erro de execução ou falha em testes
   */
  static async explicarErro(
    exercicio: Exercicio,
    codigoUsuario: string,
    resultado: ResultadoExecucao
  ): Promise<ExplicacaoErroIa> {
    const apiKey = ProgressService.getApiKeyGemini();
    const falhas = resultado.detalhes.filter((d) => !d.passou);

    if (apiKey) {
      try {
        const prompt = `Você é um instrutor de programação especialista em diagnósticos de código.
Exercício: ${exercicio.titulo} (${exercicio.enunciado})
Linguagem: ${exercicio.linguagem}
Código do Aluno:
\`\`\`${exercicio.linguagem}
${codigoUsuario}
\`\`\`

Falhas nos Testes:
${JSON.stringify(falhas, null, 2)}

Analise o erro e responda estritamente no formato JSON:
{
  "resumo": "Resumo do problema em 1 frase",
  "analise": "Explicação detalhada do porquê o teste falhou ou gerou exceção",
  "sugestao": "Orientação passo-a-passo de como o aluno pode ajustar o código"
}`;

        const data = await this.chamarGeminiApi(apiKey, prompt);
        if (data.resumo && data.analise && data.sugestao) {
          return data as ExplicacaoErroIa;
        }
      } catch (e) {
        console.warn('Erro ao chamar API do Gemini para explicação de erro:', e);
      }
    }

    // Fallback Offline para explicação de erro
    const primeiraFalha = falhas[0];
    const erroMsg = primeiraFalha?.erro
      ? `Ocorreu um erro de sintaxe/execução: "${primeiraFalha.erro}"`
      : `O teste esperava o valor ${JSON.stringify(
          primeiraFalha?.esperava
        )}, mas sua função retornou ${JSON.stringify(primeiraFalha?.obteve)}.`;

    return {
      resumo: primeiraFalha?.erro ? 'Erro de Execução no Código' : 'Resultado Divergente do Esperado',
      analise: `Ao executar seu código contra os casos de teste do exercício "${exercicio.titulo}", os retornos não bateram com a especificação.\n\n${erroMsg}`,
      sugestao:
        'Verifique os tipos de retorno, se os parâmetros estão sendo tratados corretamente e se a função retorna explicitamente o valor desejado usando `return`.',
    };
  }

  /**
   * Gera um exercício inédito customizado com IA baseado num tema/prompt livre
   */
  static async gerarExercicioCustomizado(
    temaOuPrompt: string,
    linguagem: string,
    nivel: string
  ): Promise<Exercicio> {
    const apiKey = ProgressService.getApiKeyGemini();

    if (apiKey) {
      try {
        const prompt = `Gere um exercício de programação inédito para a linguagem ${linguagem} no nível ${nivel} sobre o tema "${temaOuPrompt}".
Responda estritamente no formato JSON:
{
  "titulo": "Título curto do desafio",
  "enunciado": "Enunciado claro explicando a tarefa",
  "templateCodigo": "// Template inicial de código",
  "solucao": "// Solução completa funcional",
  "categoria": "arrays|strings|logica|funcoes|poo",
  "testCases": [
    { "id": "tc-1", "entrada": [valor1], "saidaEsperada": resultadoEsperado }
  ]
}`;

        const data = await this.chamarGeminiApi(apiKey, prompt);
        if (data.titulo && data.enunciado && data.solucao) {
          return {
            id: `ai-custom-${Date.now()}`,
            titulo: data.titulo,
            linguagem,
            nivel,
            categoria: data.categoria || 'logica',
            tags: ['IA', nivel, linguagem],
            enunciado: data.enunciado,
            solucao: data.solucao,
            templateCodigo: data.templateCodigo || `// Solução para ${linguagem}:\nfunction solucao() {\n  // escreva aqui\n}`,
            testCases: data.testCases || [{ id: 'tc-1', entrada: [], saidaEsperada: undefined }],
          };
        }
      } catch (e) {
        console.warn('Erro ao chamar API do Gemini para criar exercício customizado:', e);
      }
    }

    // Fallback Offline para exercício customizado
    const idCustom = `ai-offline-${Date.now()}`;
    return {
      id: idCustom,
      titulo: `Desafio Customizado: ${temaOuPrompt}`,
      linguagem,
      nivel,
      categoria: 'logica',
      tags: ['IA Offline', nivel, linguagem],
      enunciado: `Desafio sob medida para praticar ${temaOuPrompt} em ${linguagem}.\nCrie uma função que resolva o problema de ${temaOuPrompt} e retorne o resultado esperado.`,
      templateCodigo: `// Desafio sob medida: ${temaOuPrompt}\nfunction solucao() {\n  // Implemente sua solução aqui\n}`,
      solucao: `// Exemplo de solução para ${temaOuPrompt}\nfunction solucao() {\n  return true;\n}`,
      testCases: [{ id: 'tc-1', entrada: [], saidaEsperada: undefined }],
    };
  }

  /**
   * Chamada HTTP para a Gemini API REST
   */
  private static async chamarGeminiApi(apiKey: string, prompt: string): Promise<any> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro API Gemini: ${response.statusText}`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
    return JSON.parse(rawText);
  }

  /**
   * Geração de Dica Offline inteligente
   */
  private static gerarDicaOffline(
    exercicio: Exercicio,
    codigoUsuario: string,
    nivelDica: number
  ): DicaIa {
    if (nivelDica === 1) {
      return {
        nivel: 1,
        titulo: '💡 Dica Nível 1: Entendimento do Conceito',
        conteudo: `Leia atentamente o enunciado de **${exercicio.titulo}**.\n\nIdentifique qual o dado de entrada fornecido e o que a função precisa retornar. Pergunte-se: qual método ou estrutura (ex: loop, ` +
          (exercicio.categoria || 'método de array') +
          `) resolve este problema em ${exercicio.linguagem}?`,
      };
    } else if (nivelDica === 2) {
      const statusCodigo = codigoUsuario.trim()
        ? 'Você já começou a escrever código no editor.'
        : 'Você ainda não começou a escrever no editor.';
      return {
        nivel: 2,
        titulo: '🧩 Dica Nível 2: Estrutura da Solução',
        conteudo: `${statusCodigo}\n\nPara resolver **${exercicio.titulo}**, tente dividir em passos:\n1. Declare a função e capture os parâmetros de entrada.\n2. Aplique a transformação necessária (ex: iteração ou verificação condicional).\n3. Use a palavra-chave \`return\` para devolver o resultado final.`,
      };
    } else {
      return {
        nivel: 3,
        titulo: '⚡ Dica Nível 3: Padrão Recomendado',
        conteudo: `Aqui está a ideia central da solução:\n\`\`\`${exercicio.linguagem}\n${exercicio.solucao}\n\`\`\`\nAnalise como a solução acima estrutura o retorno!`,
      };
    }
  }
}
