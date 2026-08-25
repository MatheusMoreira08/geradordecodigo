/**
 * Ponto de entrada da aplicação
 * Refatorado seguindo Clean Architecture e SOLID
 */

import { ThemeService, ExercicioService, ClipboardService, CodeRunnerService, ProgressService } from './services';
import { APP_CONFIG } from './constants';
import { getElement, getRadioValue } from './utils/dom';
import { renderLinguagens, renderCategorias, renderNiveis, renderSubmissoesModal, renderEstatisticasModal } from './utils/render';
import type { Exercicio, ResultadoExecucao } from './types';

/**
 * Estado atual da aplicação
 */
let exercicioAtual: Exercicio | null = null;
let rascunhoTimeoutId: number | undefined;

/**
 * Inicializa a aplicação
 */
function init(): void {
  renderLinguagens();
  renderCategorias();
  renderNiveis();
  ThemeService.init();
  atualizarEstatisticasUI();
  configurarEventListeners();
}

/**
 * Atualiza badges de estatísticas no cabeçalho
 */
function atualizarEstatisticasUI(): void {
  const progresso = ProgressService.getProgresso();
  
  const streakEl = getElement('#streak-counter');
  if (streakEl) {
    streakEl.textContent = `${progresso.estatisticas.diasSeguidosStreak} Dias`;
  }

  const resolvedEl = getElement('#resolved-counter');
  if (resolvedEl) {
    resolvedEl.textContent = `${progresso.estatisticas.totalResolvidos} Resolvidos`;
  }
}

/**
 * Configura todos os event listeners
 */
function configurarEventListeners(): void {
  getElement('#btn-gerar')?.addEventListener('click', gerarExercicio);
  getElement('#btn-executar')?.addEventListener('click', executarCodigo);
  getElement('#btn-solucao')?.addEventListener('click', mostrarSolucao);
  getElement('#copy-btn')?.addEventListener('click', copiarResultado);
  getElement('#theme-toggle')?.addEventListener('click', () => ThemeService.toggle());

  // Botão de Favoritar
  getElement('#btn-favorito')?.addEventListener('click', toggleFavoritoAtual);

  // Eventos de Modais (Histórico e Estatísticas)
  getElement('#btn-historico')?.addEventListener('click', abrirModalHistorico);
  getElement('#header-btn-historico')?.addEventListener('click', abrirModalHistorico);
  getElement('#close-modal-historico')?.addEventListener('click', fecharModalHistorico);

  getElement('#btn-estatisticas')?.addEventListener('click', abrirModalEstatisticas);
  getElement('#header-btn-estatisticas')?.addEventListener('click', abrirModalEstatisticas);
  getElement('#close-modal-estatisticas')?.addEventListener('click', fecharModalEstatisticas);

  // Fechar modais ao clicar no backdrop
  getElement('#modal-historico')?.addEventListener('click', (e) => {
    if (e.target === getElement('#modal-historico')) fecharModalHistorico();
  });
  getElement('#modal-estatisticas')?.addEventListener('click', (e) => {
    if (e.target === getElement('#modal-estatisticas')) fecharModalEstatisticas();
  });

  // Auto-save de rascunhos com debounce no editor
  const editor = getElement<HTMLTextAreaElement>('#code-editor');
  editor?.addEventListener('input', () => {
    if (!exercicioAtual?.id) return;
    
    const indicador = getElement('#draft-saved-indicator');
    if (indicador) indicador.classList.remove('hidden');

    if (rascunhoTimeoutId) clearTimeout(rascunhoTimeoutId);
    rascunhoTimeoutId = window.setTimeout(() => {
      if (exercicioAtual?.id) {
        ProgressService.salvarRascunho(exercicioAtual.id, editor.value);
        if (indicador) {
          indicador.textContent = 'Rascunho salvo!';
          setTimeout(() => indicador.classList.add('hidden'), 2000);
        }
      }
    }, 800);
  });
}

/**
 * Gera um novo exercício baseado na seleção do usuário
 */
function gerarExercicio(): void {
  const linguagem = getElement<HTMLSelectElement>('#linguagem')?.value ?? '';
  const categoria = getElement<HTMLSelectElement>('#categoria')?.value ?? '';
  const nivel = getRadioValue('nivel');
  const apenasFavoritos = getElement<HTMLInputElement>('#only-favorites')?.checked ?? false;

  if (!linguagem || !nivel) {
    alert(APP_CONFIG.MENSAGENS.SELECIONE_OPCOES);
    return;
  }

  const resultado = ExercicioService.gerarExercicio(linguagem, nivel, categoria, apenasFavoritos);

  if (!resultado.sucesso || !resultado.exercicio) {
    getElement('#resultado')!.textContent = resultado.mensagem ?? APP_CONFIG.MENSAGENS.NENHUM_EXERCICIO;
    getElement('#editor-section')?.classList.add('hidden');
    getElement('#btn-favorito')?.classList.add('hidden');
    getElement('#exercise-tags-container')!.innerHTML = '';
    return;
  }

  exercicioAtual = resultado.exercicio;
  getElement('#resultado')!.textContent = `${exercicioAtual.titulo}\n\n${exercicioAtual.enunciado}`;
  
  // Atualiza botão de favorito
  atualizarBotaoFavoritoUI();

  // Exibe badges de categoria/tags
  renderizarBadgesExercicio();

  // Exibe a seção do editor de código
  const editorSection = getElement('#editor-section');
  const codeEditor = getElement<HTMLTextAreaElement>('#code-editor');
  
  if (editorSection && codeEditor && exercicioAtual.id) {
    editorSection.classList.remove('hidden');
    
    // Tenta carregar rascunho salvo ou usa o template padrão
    const rascunho = ProgressService.getRascunho(exercicioAtual.id);
    codeEditor.value = rascunho || exercicioAtual.templateCodigo || `// Solução para ${exercicioAtual.linguagem}:\nfunction solucao() {\n  // escreva aqui\n}`;
  }

  // Reseta áreas de resultado de teste e soluções anteriores
  getElement('#test-results-container')?.classList.add('hidden');
  getElement('#solucao-container')?.classList.add('hidden');
  getElement('#solucao-container')!.textContent = '';
}

/**
 * Atualiza o botão de favorito na interface para o exercício atual
 */
function atualizarBotaoFavoritoUI(): void {
  const btnFavorito = getElement('#btn-favorito');
  const txtFavorito = getElement('#btn-favorito-text');

  if (!btnFavorito || !exercicioAtual?.id) return;

  btnFavorito.classList.remove('hidden');
  const ehFav = ProgressService.isFavorito(exercicioAtual.id);

  if (ehFav) {
    btnFavorito.className = 'px-2.5 py-1 text-xs rounded bg-amber-500 text-white font-bold transition-colors flex items-center gap-1 shadow-sm';
    if (txtFavorito) txtFavorito.textContent = 'Favoritado';
  } else {
    btnFavorito.className = 'px-2.5 py-1 text-xs rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/60 border border-amber-300 dark:border-amber-700/50 transition-colors flex items-center gap-1 font-semibold';
    if (txtFavorito) txtFavorito.textContent = 'Favoritar';
  }
}

/**
 * Alterna favorito do exercício atual
 */
function toggleFavoritoAtual(): void {
  if (!exercicioAtual?.id) return;
  ProgressService.toggleFavorito(exercicioAtual.id);
  atualizarBotaoFavoritoUI();
}

/**
 * Renderiza badges de tags do exercício atual
 */
function renderizarBadgesExercicio(): void {
  const container = getElement('#exercise-tags-container');
  if (!container || !exercicioAtual) return;

  const tags = [exercicioAtual.nivel, exercicioAtual.categoria].filter(Boolean) as string[];

  container.innerHTML = tags.map((t) => `
    <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
      ${t}
    </span>
  `).join('');
}

/**
 * Executa o código do usuário, exibe os resultados dos testes e grava submissão
 */
async function executarCodigo(): Promise<void> {
  if (!exercicioAtual) return;

  const codeEditor = getElement<HTMLTextAreaElement>('#code-editor');
  const codigo = codeEditor?.value ?? '';
  const btnExecutar = getElement<HTMLButtonElement>('#btn-executar');

  if (!codigo.trim()) {
    alert('Digite o código antes de executar!');
    return;
  }

  if (btnExecutar) {
    btnExecutar.disabled = true;
    btnExecutar.textContent = '⏳ Executando...';
  }

  const resultado: ResultadoExecucao = await CodeRunnerService.executar(codigo, exercicioAtual.testCases || []);

  if (btnExecutar) {
    btnExecutar.disabled = false;
    btnExecutar.innerHTML = '<span>⚡</span><span>Executar Código</span>';
  }

  renderizarResultadoTestes(resultado);

  // Registra submissão no histórico
  if (exercicioAtual.id) {
    ProgressService.salvarSubmissao({
      exercicioId: exercicioAtual.id,
      tituloExercicio: exercicioAtual.titulo,
      linguagem: exercicioAtual.linguagem,
      nivel: exercicioAtual.nivel,
      codigo,
      sucesso: resultado.sucesso,
      testesPassados: resultado.testesPassados,
      totalTestes: resultado.totalTestes,
      tempoExecucaoMs: resultado.tempoExecucaoMs
    });

    if (resultado.sucesso) {
      ProgressService.marcarResolvido(exercicioAtual.id);
      atualizarEstatisticasUI();
    }
  }
}

/**
 * Renderiza o painel de resultados da execução dos testes
 */
function renderizarResultadoTestes(resultado: ResultadoExecucao): void {
  const container = getElement('#test-results-container');
  const header = getElement('#test-status-header');
  const timeEl = getElement('#test-execution-time');
  const list = getElement('#test-details-list');

  if (!container || !header || !timeEl || !list) return;

  container.classList.remove('hidden');

  if (resultado.sucesso) {
    container.className = 'p-4 rounded-xl border bg-emerald-950/60 border-emerald-700/60 text-emerald-200 animate-fade-in';
    header.innerHTML = `<span class="text-emerald-400 text-lg">✅</span><span>Todos os testes passaram! (${resultado.testesPassados}/${resultado.totalTestes})</span>`;
  } else {
    container.className = 'p-4 rounded-xl border bg-rose-950/60 border-rose-700/60 text-rose-200 animate-fade-in';
    header.innerHTML = `<span class="text-rose-400 text-lg">❌</span><span>Falha nos testes (${resultado.testesPassados}/${resultado.totalTestes} passaram)</span>`;
  }

  timeEl.textContent = `⏱️ ${resultado.tempoExecucaoMs}ms`;

  list.innerHTML = resultado.detalhes.map((det, idx) => `
    <div class="p-2.5 rounded-lg ${det.passou ? 'bg-emerald-900/40 border border-emerald-800/40' : 'bg-rose-900/40 border border-rose-800/40'} flex flex-col gap-1">
      <div class="flex items-center justify-between font-bold">
        <span>Teste #${idx + 1} (${det.testCaseId})</span>
        <span class="${det.passou ? 'text-emerald-400' : 'text-rose-400'}">${det.passou ? 'APROVADO' : 'REPROVADO'}</span>
      </div>
      ${det.erro ? `<div class="text-rose-300 font-sans">Erro: ${det.erro}</div>` : ''}
      ${det.obteve !== undefined ? `<div class="text-gray-300">Retorno: <span class="text-amber-300">${JSON.stringify(det.obteve)}</span> | Esperado: <span class="text-blue-300">${JSON.stringify(det.esperava)}</span></div>` : ''}
    </div>
  `).join('');
}

/**
 * Exibe a solução do exercício atual
 */
function mostrarSolucao(): void {
  if (!exercicioAtual) return;

  const container = getElement('#solucao-container')!;
  container.textContent = exercicioAtual.solucao;
  container.classList.remove('hidden');
}

/**
 * Copia o resultado para a área de transferência
 */
async function copiarResultado(): Promise<void> {
  const areaResultado = getElement('#resultado');
  const texto = areaResultado?.textContent ?? '';

  if (!texto) return;

  const sucesso = await ClipboardService.copiar(texto);

  if (sucesso) {
    ClipboardService.mostrarMensagem();
  } else {
    ClipboardService.mostrarErro();
  }
}

/**
 * Gerenciamento de Modais
 */
function abrirModalHistorico(): void {
  const modal = getElement('#modal-historico');
  const listaContainer = getElement('#modal-historico-lista');
  if (!modal || !listaContainer) return;

  const submissoes = ProgressService.getSubmissoes();
  renderSubmissoesModal(submissoes, listaContainer);
  modal.classList.remove('hidden');
}

function fecharModalHistorico(): void {
  getElement('#modal-historico')?.classList.add('hidden');
}

function abrirModalEstatisticas(): void {
  const modal = getElement('#modal-estatisticas');
  const conteudoContainer = getElement('#modal-estatisticas-conteudo');
  if (!modal || !conteudoContainer) return;

  const progresso = ProgressService.getProgresso();
  renderEstatisticasModal(progresso, conteudoContainer);
  modal.classList.remove('hidden');
}

function fecharModalEstatisticas(): void {
  getElement('#modal-estatisticas')?.classList.add('hidden');
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);