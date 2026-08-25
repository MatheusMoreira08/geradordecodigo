/**
 * Constantes da aplicação
 */
export const APP_CONFIG = {
  NOME: 'Gerador de Códigos',
  VERSAO: '1.0.0',
  STORAGE_KEY: {
    THEME: 'theme'
  },
  MENSAGENS: {
    SELECIONE_OPCOES: 'Selecione linguagem e nível!',
    NENHUM_EXERCICIO: 'Nenhum exercício encontrado.',
    COPIA_SUCESSO: 'Copiado!',
    COPIA_ERRO: 'Erro ao copiar! Verifique as permissões do navegador.'
  }
} as const;

/**
 * Mapeamento de linguagens para exibição
 */
export const LINGUAGENS = [
  { valor: 'javascript', label: 'JavaScript' },
  { valor: 'python', label: 'Python' },
  { valor: 'java', label: 'Java' },
  { valor: 'typescript', label: 'TypeScript' },
  { valor: 'csharp', label: 'C#' },
  { valor: 'cpp', label: 'C++' },
  { valor: 'php', label: 'PHP' },
  { valor: 'go', label: 'Go (Golang)' },
  { valor: 'rust', label: 'Rust' },
  { valor: 'sql', label: 'SQL' }
] as const;

/**
 * Níveis de dificuldade
 */
export const NIVEIS = [
  { valor: 'basico', label: 'Básico' },
  { valor: 'intermediario', label: 'Intermediário' },
  { valor: 'avancado', label: 'Avançado' }
] as const;

/**
 * Categorias de exercícios disponíveis para filtragem
 */
export const CATEGORIAS = [
  { valor: '', label: 'Todas as Categorias' },
  { valor: 'arrays', label: 'Arrays & Coleções' },
  { valor: 'strings', label: 'Strings & Texto' },
  { valor: 'logica', label: 'Lógica & Matemática' },
  { valor: 'funcoes', label: 'Funções & Algoritmos' },
  { valor: 'poo', label: 'POO & Objetos' }
] as const;