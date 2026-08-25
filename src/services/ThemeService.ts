import { APP_CONFIG } from '../constants';

/**
 * Serviço de gerenciamento de tema
 */
export class ThemeService {
  private static readonly THEME_CLASS = 'dark';

  /**
   * Inicializa o tema baseado na preferência salva
   */
  static init(): void {
    const savedTheme = localStorage.getItem(APP_CONFIG.STORAGE_KEY.THEME);
    
    if (savedTheme === 'light') {
      document.documentElement.classList.remove(this.THEME_CLASS);
    } else {
      document.documentElement.classList.add(this.THEME_CLASS);
    }
    
    this.updateIcon();
  }

  /**
   * Alterna entre tema claro e escuro
   */
  static toggle(): void {
    document.documentElement.classList.toggle(this.THEME_CLASS);
    const isDark = document.documentElement.classList.contains(this.THEME_CLASS);
    
    localStorage.setItem(
      APP_CONFIG.STORAGE_KEY.THEME,
      isDark ? 'dark' : 'light'
    );
    
    this.updateIcon();
  }

  /**
   * Atualiza o ícone do tema
   */
  static updateIcon(): void {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      const isDark = document.documentElement.classList.contains(this.THEME_CLASS);
      themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
  }
}