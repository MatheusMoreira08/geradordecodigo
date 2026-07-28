/**
 * main.js — Lógica principal do Gerador de Exercícios de Código.
 *
 * Responsabilidades:
 * - Toggle de tema claro/escuro com persistência em localStorage
 * - Geração aleatória de exercícios filtrados por linguagem e nível
 * - Exibição e ocultação da solução com animação
 * - Cópia da solução para a área de transferência com feedback visual
 * - Contador de exercícios gerados na sessão
 */

import exercicios from './dados.js';

// ─── Referências aos elementos do DOM ────────────────────────────────────────
const btnGerar          = document.getElementById('btn-gerar');
const btnSolucao        = document.getElementById('btn-solucao');
const btnCopiar         = document.getElementById('btn-copiar');
const btnTema           = document.getElementById('btn-tema');
const selLinguagem      = document.getElementById('linguagem');
const selNivel          = document.getElementById('nivel');
const areaExercicio     = document.getElementById('area-exercicio');
const txtEnunciado      = document.getElementById('enunciado');
const containerSolucao  = document.getElementById('container-solucao');
const codeSolucao       = document.getElementById('code-solucao');
const msgCopiar         = document.getElementById('msg-copiar');
const badgeNivel        = document.getElementById('badge-nivel');
const badgeLinguagem    = document.getElementById('badge-linguagem');
const contadorEl        = document.getElementById('contador');
const msgErro           = document.getElementById('msg-erro');

// ─── Estado da aplicação ─────────────────────────────────────────────────────
let exercicioAtual = null;
let contadorSessao = 0;

// ─── Tema ────────────────────────────────────────────────────────────────────

/** Aplica o tema passado ('dark' | 'light') ao documento. */
function aplicarTema(tema) {
  document.documentElement.setAttribute('data-theme', tema);
  btnTema.textContent = tema === 'dark' ? '☀️' : '🌙';
  btnTema.setAttribute('aria-label', tema === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
}

/** Inicializa o tema a partir do localStorage ou preferência do sistema. */
function inicializarTema() {
  const salvo = localStorage.getItem('tema');
  if (salvo) {
    aplicarTema(salvo);
    return;
  }
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  aplicarTema(prefereEscuro ? 'dark' : 'light');
}

btnTema.addEventListener('click', () => {
  const atual = document.documentElement.getAttribute('data-theme');
  const novo  = atual === 'dark' ? 'light' : 'dark';
  aplicarTema(novo);
  localStorage.setItem('tema', novo);
});

// ─── Utilitários ─────────────────────────────────────────────────────────────

/** Retorna um item aleatório de um array. */
function aleatorio(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Exibe ou oculta a mensagem de erro de validação. */
function setErro(mostrar, msg = '') {
  msgErro.textContent = msg;
  msgErro.hidden = !mostrar;
}

/** Atualiza o contador de exercícios gerados na sessão. */
function atualizarContador() {
  contadorSessao++;
  contadorEl.textContent = contadorSessao;
}

// ─── Gerar exercício ──────────────────────────────────────────────────────────

/** Renderiza um exercício na tela. */
function renderizarExercicio(exercicio, linguagem, nivel) {
  // Conteúdo
  txtEnunciado.textContent = exercicio.enunciado;
  codeSolucao.textContent  = exercicio.solucao;

  // Badges
  const rotulos = {
    javascript: 'JavaScript',
    python:     'Python',
    java:       'Java',
    typescript: 'TypeScript',
    csharp:     'C#',
    basico:       'Básico',
    intermediario: 'Intermediário',
    avancado:     'Avançado',
  };
  badgeLinguagem.textContent = rotulos[linguagem] ?? linguagem;
  badgeNivel.textContent     = rotulos[nivel] ?? nivel;
  badgeNivel.className = `badge badge-nivel badge-${nivel}`;

  // Visibilidade
  areaExercicio.hidden   = false;
  containerSolucao.hidden = true;
  btnSolucao.textContent  = '👁️ Ver Solução';
  setErro(false);
}

btnGerar.addEventListener('click', () => {
  const linguagem = selLinguagem.value;
  const nivel     = selNivel.value;

  // Validação
  if (!linguagem) {
    setErro(true, '⚠️ Por favor, selecione uma linguagem.');
    return;
  }
  if (!nivel) {
    setErro(true, '⚠️ Por favor, selecione um nível de dificuldade.');
    return;
  }

  // Filtra exercícios disponíveis
  const disponiveis = (exercicios[linguagem] ?? []).filter(e => e.nivel === nivel);
  if (disponiveis.length === 0) {
    setErro(true, '⚠️ Nenhum exercício encontrado para essa combinação.');
    return;
  }

  exercicioAtual = aleatorio(disponiveis);
  renderizarExercicio(exercicioAtual, linguagem, nivel);
  atualizarContador();
});

// ─── Revelar solução ─────────────────────────────────────────────────────────

btnSolucao.addEventListener('click', () => {
  if (!exercicioAtual) return;

  const oculto = containerSolucao.hidden;
  containerSolucao.hidden = !oculto;
  btnSolucao.textContent  = oculto ? '🙈 Ocultar Solução' : '👁️ Ver Solução';
});

// ─── Copiar solução ───────────────────────────────────────────────────────────

btnCopiar.addEventListener('click', async () => {
  if (!exercicioAtual) return;

  try {
    await navigator.clipboard.writeText(exercicioAtual.solucao);
    exibirFeedbackCopia(true);
  } catch {
    exibirFeedbackCopia(false);
  }
});

/** Exibe feedback temporário após tentativa de cópia. */
function exibirFeedbackCopia(sucesso) {
  msgCopiar.textContent = sucesso ? '✅ Copiado!' : '❌ Falha ao copiar';
  msgCopiar.className   = `msg-copiar ${sucesso ? 'sucesso' : 'erro'}`;
  msgCopiar.hidden = false;

  clearTimeout(exibirFeedbackCopia._timer);
  exibirFeedbackCopia._timer = setTimeout(() => {
    msgCopiar.hidden = true;
  }, 2000);
}

// ─── Inicialização ────────────────────────────────────────────────────────────
inicializarTema();
