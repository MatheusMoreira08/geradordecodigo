import { ProgressoUsuario, SubmissaoHistorico } from '../types';

const STORAGE_KEY = 'geradordecodigo_progresso_v1';

/**
 * Serviço responsável por gerenciar e salvar o progresso do usuário no LocalStorage
 */
export class ProgressService {
  /**
   * Obtém o objeto de progresso atual do usuário
   */
  static getProgresso(): ProgressoUsuario {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data) as ProgressoUsuario;
        return {
          exerciciosResolvidos: parsed.exerciciosResolvidos || [],
          favoritos: parsed.favoritos || [],
          rascunhos: parsed.rascunhos || {},
          submissoes: parsed.submissoes || [],
          apiKeyGemini: parsed.apiKeyGemini || '',
          estatisticas: {
            totalResolvidos: parsed.estatisticas?.totalResolvidos ?? 0,
            diasSeguidosStreak: parsed.estatisticas?.diasSeguidosStreak ?? 0,
            ultimoAcesso: parsed.estatisticas?.ultimoAcesso ?? new Date().toISOString()
          }
        };
      }
    } catch (e) {
      console.error('Erro ao ler progresso do localStorage', e);
    }

    return {
      exerciciosResolvidos: [],
      favoritos: [],
      rascunhos: {},
      submissoes: [],
      estatisticas: {
        totalResolvidos: 0,
        diasSeguidosStreak: 0,
        ultimoAcesso: new Date().toISOString()
      }
    };
  }

  /**
   * Salva a chave de API do Gemini no LocalStorage
   */
  static setApiKeyGemini(key: string): void {
    const progresso = this.getProgresso();
    progresso.apiKeyGemini = key.trim();
    this.salvarProgresso(progresso);
  }

  /**
   * Obtém a chave de API do Gemini salva
   */
  static getApiKeyGemini(): string {
    const progresso = this.getProgresso();
    return progresso.apiKeyGemini || '';
  }

  /**
   * Salva o estado do progresso do usuário
   */
  private static salvarProgresso(progresso: ProgressoUsuario): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progresso));
    } catch (e) {
      console.error('Erro ao salvar progresso no localStorage', e);
    }
  }

  /**
   * Marca um exercício como resolvido com sucesso
   */
  static marcarResolvido(exercicioId: string): ProgressoUsuario {
    const progresso = this.getProgresso();

    if (!progresso.exerciciosResolvidos.includes(exercicioId)) {
      progresso.exerciciosResolvidos.push(exercicioId);
      progresso.estatisticas.totalResolvidos = progresso.exerciciosResolvidos.length;
    }
    this.atualizarStreak(progresso);
    this.salvarProgresso(progresso);

    return progresso;
  }

  /**
   * Alterna o estado de favorito de um exercício (retorna true se ficou marcado como favorito)
   */
  static toggleFavorito(exercicioId: string): boolean {
    const progresso = this.getProgresso();
    const index = progresso.favoritos.indexOf(exercicioId);
    let ehFavorito = false;

    if (index >= 0) {
      progresso.favoritos.splice(index, 1);
      ehFavorito = false;
    } else {
      progresso.favoritos.push(exercicioId);
      ehFavorito = true;
    }

    this.salvarProgresso(progresso);
    return ehFavorito;
  }

  /**
   * Verifica se um exercício está na lista de favoritos
   */
  static isFavorito(exercicioId: string): boolean {
    const progresso = this.getProgresso();
    return progresso.favoritos.includes(exercicioId);
  }

  /**
   * Salva uma tentativa/submissão de código no histórico do usuário
   */
  static salvarSubmissao(
    submissaoData: Omit<SubmissaoHistorico, 'id' | 'timestamp'>
  ): SubmissaoHistorico {
    const progresso = this.getProgresso();
    const submissao: SubmissaoHistorico = {
      ...submissaoData,
      id: `sub-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString()
    };

    // Mantém as submissões mais recentes primeiro (limite de 100 submissões)
    progresso.submissoes.unshift(submissao);
    if (progresso.submissoes.length > 100) {
      progresso.submissoes = progresso.submissoes.slice(0, 100);
    }

    this.salvarProgresso(progresso);
    return submissao;
  }

  /**
   * Obtém as submissões guardadas (opcionalmente filtrando por exercício)
   */
  static getSubmissoes(exercicioId?: string): SubmissaoHistorico[] {
    const progresso = this.getProgresso();
    if (!exercicioId) return progresso.submissoes;
    return progresso.submissoes.filter((s) => s.exercicioId === exercicioId);
  }

  /**
   * Salva um rascunho de código do usuário para um determinado exercício
   */
  static salvarRascunho(exercicioId: string, codigo: string): void {
    const progresso = this.getProgresso();
    progresso.rascunhos[exercicioId] = codigo;
    this.salvarProgresso(progresso);
  }

  /**
   * Obtém o rascunho de código de um exercício
   */
  static getRascunho(exercicioId: string): string | null {
    const progresso = this.getProgresso();
    return progresso.rascunhos[exercicioId] ?? null;
  }

  /**
   * Atualiza a contagem de dias seguidos (streak) de estudo
   */
  private static atualizarStreak(progresso: ProgressoUsuario): void {
    const hoje = new Date().toISOString().split('T')[0];
    const ultimoAcessoIso = progresso.estatisticas.ultimoAcesso;
    const ultimoAcessoData = ultimoAcessoIso ? ultimoAcessoIso.split('T')[0] : '';

    if (!ultimoAcessoData) {
      progresso.estatisticas.diasSeguidosStreak = 1;
    } else if (ultimoAcessoData !== hoje) {
      const dataHoje = new Date(hoje);
      const dataUltimo = new Date(ultimoAcessoData);
      const diffDias = Math.round((dataHoje.getTime() - dataUltimo.getTime()) / (1000 * 3600 * 24));

      if (diffDias === 1) {
        progresso.estatisticas.diasSeguidosStreak += 1;
      } else if (diffDias > 1) {
        progresso.estatisticas.diasSeguidosStreak = 1;
      }
    }

    progresso.estatisticas.ultimoAcesso = new Date().toISOString();
  }
}
