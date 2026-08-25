import { APP_CONFIG } from '../constants';

/**
 * Serviço de manipulação de clipboard
 */
export class ClipboardService {
  /**
   * Copia texto para a área de transferência
   * @param texto Texto a ser copiado
   * @returns Promise que resolve se a cópia foi bem-sucedida
   */
  static async copiar(texto: string): Promise<boolean> {
    if (!texto) return false;

    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch (erro) {
      console.error('Erro ao copiar:', erro);
      return false;
    }
  }

  /**
   * Exibe mensagem de sucesso temporária
   */
  static mostrarMensagem(): void {
    const msgElement = document.getElementById('copy-msg');
    if (msgElement) {
      msgElement.classList.remove('hidden');
      setTimeout(() => {
        msgElement.classList.add('hidden');
      }, 2000);
    }
  }

  /**
   * Exibe mensagem de erro
   */
  static mostrarErro(): void {
    alert(APP_CONFIG.MENSAGENS.COPIA_ERRO);
  }
}