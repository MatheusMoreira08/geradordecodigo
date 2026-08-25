/**
 * Seletores de elementos do DOM
 */
export const SELECTORS = {
  BOTAO_GERAR: '#btn-gerar',
  AREA_RESULTADO: '#resultado',
  BOTAO_SOLUCAO: '#btn-solucao',
  CONTAINER_SOLUCAO: '#solucao-container',
  BOTAO_TEMA: '#theme-toggle',
  ICONE_TEMA: '#theme-icon',
  BOTAO_COPIAR: '#copy-btn',
  MENSAGEM_COPIA: '#copy-msg',
  SELECT_LINGUAGEM: '#linguagem',
  RADIO_NIVEL: 'input[name="nivel"]:checked'
} as const;

/**
 * Obtém um elemento do DOM pelo seletor
 */
export function getElement<T extends HTMLElement>(selector: string): T | null {
  return document.querySelector(selector) as T | null;
}

/**
 * Obtém o valor selecionado de um grupo de radio buttons
 */
export function getRadioValue(name: string): string | null {
  const checked = document.querySelector(`input[name="${name}"]:checked`) as HTMLInputElement | null;
  return checked?.value ?? null;
}