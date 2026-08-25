import { LINGUAGENS, NIVEIS, CATEGORIAS } from '../constants';
import { SubmissaoHistorico, ProgressoUsuario } from '../types';
import { ExercicioService } from '../services/ExercicioService';

export function renderLinguagens(): void {
  const container = document.getElementById('linguagem-container');
  if (!container) return;

  const select = document.createElement('select');
  select.id = 'linguagem';
  select.className =
    'px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition text-black dark:text-white cursor-pointer';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = 'Selecione uma linguagem...';
  select.appendChild(placeholder);

  LINGUAGENS.forEach(({ valor, label }) => {
    const option = document.createElement('option');
    option.value = valor;
    option.textContent = label;
    select.appendChild(option);
  });

  container.appendChild(select);
}

export function renderCategorias(): void {
  const container = document.getElementById('categoria-container');
  if (!container) return;

  const select = document.createElement('select');
  select.id = 'categoria';
  select.className =
    'px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition text-black dark:text-white cursor-pointer';

  CATEGORIAS.forEach(({ valor, label }) => {
    const option = document.createElement('option');
    option.value = valor;
    option.textContent = label;
    select.appendChild(option);
  });

  container.appendChild(select);
}

export function renderNiveis(): void {
  const container = document.getElementById('nivel-options');
  if (!container) return;

  NIVEIS.forEach(({ valor, label }) => {
    const labelEl = document.createElement('label');
    labelEl.className = 'flex items-center gap-1 cursor-pointer';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'nivel';
    radio.value = valor;

    labelEl.appendChild(radio);
    labelEl.appendChild(document.createTextNode(label));
    container.appendChild(labelEl);
  });
}

/**
 * Renderiza a lista de submissões passadas no modal de histórico
 */
export function renderSubmissoesModal(submissoes: SubmissaoHistorico[], containerEl: HTMLElement): void {
  if (submissoes.length === 0) {
    containerEl.innerHTML = `
      <div class="text-center py-8 text-gray-500 dark:text-gray-400">
        <span>📜 Nenhuma submissão registrada ainda.</span><br>
        <span class="text-xs">Execute o seu código em um exercício para gerar histórico!</span>
      </div>
    `;
    return;
  }

  containerEl.innerHTML = submissoes.map((sub) => {
    const dataFormatted = new Date(sub.timestamp).toLocaleString('pt-BR');
    const badgeColor = sub.sucesso
      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
      : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300 border-rose-300 dark:border-rose-700';

    return `
      <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 flex flex-col gap-2 transition hover:shadow-md">
        <div class="flex items-center justify-between gap-2 flex-wrap text-xs">
          <div class="flex items-center gap-2 font-bold">
            <span class="px-2 py-0.5 rounded border ${badgeColor}">
              ${sub.sucesso ? 'PASSED' : 'FAILED'}
            </span>
            <span class="text-gray-800 dark:text-gray-200 text-sm">${sub.tituloExercicio || sub.exercicioId}</span>
          </div>
          <span class="text-gray-400 font-mono">${dataFormatted}</span>
        </div>
        <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
          <span>Linguagem: <strong class="text-blue-500">${sub.linguagem}</strong> | Nível: <strong>${sub.nivel}</strong></span>
          <span>⏱️ ${sub.tempoExecucaoMs}ms (${sub.testesPassados}/${sub.totalTestes} testes)</span>
        </div>
        <details class="text-xs">
          <summary class="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline pt-1 font-semibold">
            Ver código submetido
          </summary>
          <pre class="mt-2 p-3 bg-gray-950 text-blue-300 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono border border-gray-800">${sub.codigo.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        </details>
      </div>
    `;
  }).join('');
}

/**
 * Renderiza os dados do modal de estatísticas do usuário
 */
export function renderEstatisticasModal(progresso: ProgressoUsuario, containerEl: HTMLElement): void {
  const statsGerais = ExercicioService.getEstatisticas();
  let totalExExistentes = 0;
  Object.values(statsGerais).forEach((niveis) => {
    Object.values(niveis).forEach((qtd) => (totalExExistentes += qtd));
  });

  const totalResolvidos = progresso.exerciciosResolvidos.length;
  const taxaConclusao = totalExExistentes > 0 ? Math.round((totalResolvidos / totalExExistentes) * 100) : 0;
  const totalSubmissoes = progresso.submissoes.length;
  const submissoesComSucesso = progresso.submissoes.filter((s) => s.sucesso).length;

  containerEl.innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-center">
        <span class="text-2xl">🔥</span>
        <div class="text-xl font-bold text-amber-700 dark:text-amber-300">${progresso.estatisticas.diasSeguidosStreak} Dias</div>
        <div class="text-xs text-amber-600 dark:text-amber-400">Streak de Estudos</div>
      </div>
      <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-center">
        <span class="text-2xl">🏆</span>
        <div class="text-xl font-bold text-emerald-700 dark:text-emerald-300">${totalResolvidos}</div>
        <div class="text-xs text-emerald-600 dark:text-emerald-400">Resolvidos (${taxaConclusao}%)</div>
      </div>
      <div class="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl text-center">
        <span class="text-2xl">⭐</span>
        <div class="text-xl font-bold text-blue-700 dark:text-blue-300">${progresso.favoritos.length}</div>
        <div class="text-xs text-blue-600 dark:text-blue-400">Favoritos</div>
      </div>
      <div class="p-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 rounded-xl text-center">
        <span class="text-2xl">⚡</span>
        <div class="text-xl font-bold text-purple-700 dark:text-purple-300">${totalSubmissoes}</div>
        <div class="text-xs text-purple-600 dark:text-purple-400">Submissões (${submissoesComSucesso} acertos)</div>
      </div>
    </div>
  `;
}
