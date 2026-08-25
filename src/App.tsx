import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { ExerciseFilters } from './components/ExerciseFilters';
import { ExerciseCard } from './components/ExerciseCard';
import { CodeEditorContainer } from './components/CodeEditorContainer';
import { TestResults } from './components/TestResults';
import { SubmissionsModal } from './components/SubmissionsModal';
import { StatsModal } from './components/StatsModal';
import { AiTutorPanel } from './components/AiTutorPanel';
import { AiGeneratorModal } from './components/AiGeneratorModal';
import { AiConfigModal } from './components/AiConfigModal';
import { ExercicioService, ProgressService, CodeRunnerService, ThemeService } from './services';
import { Exercicio, ResultadoExecucao, ProgressoUsuario } from './types';
import { APP_CONFIG } from './constants';

export const App: React.FC = () => {
  const [progresso, setProgresso] = useState<ProgressoUsuario>(() => ProgressService.getProgresso());
  const [tema, setTema] = useState<'light' | 'dark'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const [linguagem, setLinguagem] = useState<string>('javascript');
  const [categoria, setCategoria] = useState<string>('');
  const [nivel, setNivel] = useState<string>('basico');
  const [apenasFavoritos, setApenasFavoritos] = useState<boolean>(false);

  const [exercicioAtual, setExercicioAtual] = useState<Exercicio | null>(null);
  const [codigo, setCodigo] = useState<string>('');
  const [isExecutando, setIsExecutando] = useState<boolean>(false);
  const [resultado, setResultado] = useState<ResultadoExecucao | null>(null);
  const [mostrarSolucao, setMostrarSolucao] = useState<boolean>(false);
  const [isRascunhoSalvo, setIsRascunhoSalvo] = useState<boolean>(false);

  const [modalHistoricoOpen, setModalHistoricoOpen] = useState<boolean>(false);
  const [modalEstatisticasOpen, setModalEstatisticasOpen] = useState<boolean>(false);

  // Estados dos Recursos de IA
  const [modalAiTutorOpen, setModalAiTutorOpen] = useState<boolean>(false);
  const [modalAiGeneratorOpen, setModalAiGeneratorOpen] = useState<boolean>(false);
  const [modalAiConfigOpen, setModalAiConfigOpen] = useState<boolean>(false);

  const rascunhoTimerRef = useRef<number | undefined>(undefined);

  // Sincroniza tema inicial
  useEffect(() => {
    ThemeService.init();
    setTema(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const handleToggleTema = () => {
    ThemeService.toggle();
    setTema(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };

  const refreshProgresso = () => {
    setProgresso(ProgressService.getProgresso());
  };

  // Gerar novo exercício do banco de dados
  const handleGerarExercicio = () => {
    if (!linguagem || !nivel) {
      alert(APP_CONFIG.MENSAGENS.SELECIONE_OPCOES);
      return;
    }

    const res = ExercicioService.gerarExercicio(linguagem, nivel, categoria, apenasFavoritos);

    if (!res.sucesso || !res.exercicio) {
      alert(res.mensagem ?? APP_CONFIG.MENSAGENS.NENHUM_EXERCICIO);
      return;
    }

    const ex = res.exercicio;
    setExercicioAtual(ex);
    setResultado(null);
    setMostrarSolucao(false);

    if (ex.id) {
      const rascunho = ProgressService.getRascunho(ex.id);
      setCodigo(
        rascunho ||
          ex.templateCodigo ||
          ExercicioService.getStarterTemplate(ex.linguagem, ex.titulo)
      );
    }
  };

  // Carregar exercício customizado gerado pela IA
  const handleExercicioGeradoPorIa = (novoExercicio: Exercicio) => {
    setExercicioAtual(novoExercicio);
    setResultado(null);
    setMostrarSolucao(false);
    setCodigo(
      novoExercicio.templateCodigo ||
        ExercicioService.getStarterTemplate(novoExercicio.linguagem, novoExercicio.titulo)
    );
  };

  // Auto-save de rascunhos com debounce
  const handleCodigoChange = (novoCodigo: string) => {
    setCodigo(novoCodigo);
    if (!exercicioAtual?.id) return;

    setIsRascunhoSalvo(false);
    if (rascunhoTimerRef.current) clearTimeout(rascunhoTimerRef.current);

    rascunhoTimerRef.current = window.setTimeout(() => {
      if (exercicioAtual?.id) {
        ProgressService.salvarRascunho(exercicioAtual.id, novoCodigo);
        setIsRascunhoSalvo(true);
        setTimeout(() => setIsRascunhoSalvo(false), 2000);
      }
    }, 800);
  };

  // Alternar favorito do exercício atual
  const handleToggleFavorito = () => {
    if (!exercicioAtual?.id) return;
    ProgressService.toggleFavorito(exercicioAtual.id);
    refreshProgresso();
  };

  // Executar código no Web Worker
  const handleExecutarCodigo = async () => {
    if (!exercicioAtual) return;
    if (!codigo.trim()) {
      alert('Digite o código antes de executar!');
      return;
    }

    setIsExecutando(true);
    const res: ResultadoExecucao = await CodeRunnerService.executar(
      codigo,
      exercicioAtual.testCases || []
    );
    setIsExecutando(false);
    setResultado(res);

    if (exercicioAtual.id) {
      ProgressService.salvarSubmissao({
        exercicioId: exercicioAtual.id,
        tituloExercicio: exercicioAtual.titulo,
        linguagem: exercicioAtual.linguagem,
        nivel: exercicioAtual.nivel,
        codigo,
        sucesso: res.sucesso,
        testesPassados: res.testesPassados,
        totalTestes: res.totalTestes,
        tempoExecucaoMs: res.tempoExecucaoMs,
      });

      if (res.sucesso) {
        ProgressService.marcarResolvido(exercicioAtual.id);
      }
      refreshProgresso();
    }
  };

  const ehFavorito = exercicioAtual?.id ? progresso.favoritos.includes(exercicioAtual.id) : false;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-950 text-slate-900 dark:text-white flex flex-col items-center p-4 md:p-8 transition-colors duration-300">
      <main className="w-full max-w-7xl flex flex-col gap-6">
        {/* Barra de Navegação Superior */}
        <Header
          progresso={progresso}
          tema={tema}
          onToggleTema={handleToggleTema}
          onOpenHistorico={() => setModalHistoricoOpen(true)}
          onOpenEstatisticas={() => setModalEstatisticasOpen(true)}
          onOpenAiTutor={() => setModalAiTutorOpen(true)}
          onOpenAiGenerator={() => setModalAiGeneratorOpen(true)}
        />

        {/* Barra Horizontal de Filtros de Exercício */}
        <ExerciseFilters
          linguagem={linguagem}
          setLinguagem={setLinguagem}
          categoria={categoria}
          setCategoria={setCategoria}
          nivel={nivel}
          setNivel={setNivel}
          apenasFavoritos={apenasFavoritos}
          setApenasFavoritos={setApenasFavoritos}
          onGerar={handleGerarExercicio}
          onOpenHistorico={() => setModalHistoricoOpen(true)}
          onOpenEstatisticas={() => setModalEstatisticasOpen(true)}
        />

        {/* Workspace Principal em Grid de 2 Colunas (LeetCode / Replit Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Coluna Esquerda: Enunciado do Desafio (5 cols) */}
          <div className="md:col-span-5 h-full">
            <ExerciseCard
              exercicio={exercicioAtual}
              ehFavorito={ehFavorito}
              onToggleFavorito={handleToggleFavorito}
            />
          </div>

          {/* Coluna Direita: Editor de Código & Testes (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {exercicioAtual ? (
              <>
                <CodeEditorContainer
                  codigo={codigo}
                  onChangeCodigo={handleCodigoChange}
                  linguagem={exercicioAtual.linguagem}
                  tema={tema}
                  isRascunhoSalvo={isRascunhoSalvo}
                  isExecutando={isExecutando}
                  onExecutar={handleExecutarCodigo}
                  onVerSolucao={() => setMostrarSolucao(!mostrarSolucao)}
                />

                {/* Resultado dos Testes */}
                <TestResults resultado={resultado} />

                {/* Solução Exemplo (Oculta por padrão) */}
                {mostrarSolucao && (
                  <div className="p-5 bg-slate-950 border border-slate-800 rounded-3xl animate-fade-in flex flex-col gap-2 shadow-xl">
                    <span className="text-xs font-black text-emerald-400 font-mono uppercase tracking-wider">
                      💡 Solução Exemplo Recomendada:
                    </span>
                    <pre className="text-xs md:text-sm font-mono text-emerald-300 whitespace-pre-wrap break-words w-full">
                      {exercicioAtual.solucao}
                    </pre>
                  </div>
                )}
              </>
            ) : (
              <div className="h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 flex flex-col justify-center items-center text-center gap-3 min-h-[350px] shadow-xl shadow-indigo-500/5">
                <span className="text-4xl animate-bounce">⚡</span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Área de Resolução de Código
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-sm">
                  Gere um exercício no painel acima para carregar o editor CodeMirror e a suite de testes automatizada!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modais */}
      <SubmissionsModal
        isOpen={modalHistoricoOpen}
        onClose={() => setModalHistoricoOpen(false)}
        submissoes={progresso.submissoes}
      />

      <StatsModal
        isOpen={modalEstatisticasOpen}
        onClose={() => setModalEstatisticasOpen(false)}
        progresso={progresso}
      />

      {/* Recursos de IA */}
      <AiTutorPanel
        isOpen={modalAiTutorOpen}
        onClose={() => setModalAiTutorOpen(false)}
        exercicio={exercicioAtual}
        codigoUsuario={codigo}
        resultado={resultado}
        onOpenConfigIa={() => setModalAiConfigOpen(true)}
      />

      <AiGeneratorModal
        isOpen={modalAiGeneratorOpen}
        onClose={() => setModalAiGeneratorOpen(false)}
        linguagemAtual={linguagem}
        nivelAtual={nivel}
        onExercícioGerado={handleExercicioGeradoPorIa}
      />

      <AiConfigModal
        isOpen={modalAiConfigOpen}
        onClose={() => setModalAiConfigOpen(false)}
        onSaved={refreshProgresso}
      />
    </div>
  );
};
