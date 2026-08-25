export interface TestCase {
  id: string;
  entrada: any[];       // Parâmetros passados para a função do usuário
  saidaEsperada: any;   // Retorno esperado da função
  ehOculto?: boolean;   // Se true, esconde os detalhes do teste no relatório
}

export interface DetalheTeste {
  testCaseId: string;
  passou: boolean;
  obteve: any;
  esperava: any;
  erro?: string;
}

export interface ResultadoExecucao {
  sucesso: boolean;
  testesPassados: number;
  totalTestes: number;
  detalhes: DetalheTeste[];
  tempoExecucaoMs: number;
}

export interface SubmissaoHistorico {
  id: string;
  exercicioId: string;
  tituloExercicio?: string;
  linguagem: string;
  nivel: string;
  timestamp: string; // ISO string
  codigo: string;
  sucesso: boolean;
  testesPassados: number;
  totalTestes: number;
  tempoExecucaoMs: number;
}

export interface DicaIa {
  nivel: number; // 1, 2 ou 3
  titulo: string;
  conteudo: string;
}

export interface ExplicacaoErroIa {
  resumo: string;
  analise: string;
  sugestao: string;
}

export interface ProgressoUsuario {
  exerciciosResolvidos: string[]; // IDs dos exercícios resolvidos
  favoritos: string[]; // IDs dos exercícios favoritados
  rascunhos: Record<string, string>; // Código salvo por exercício (idExercicio -> codigo)
  submissoes: SubmissaoHistorico[]; // Histórico de submissões de código
  apiKeyGemini?: string; // Chave de API opcional para os serviços de IA
  estatisticas: {
    totalResolvidos: number;
    diasSeguidosStreak: number;
    ultimoAcesso: string;
  };
}

/**
 * Tipo que representa um exercício de programação
 */
export interface Exercicio {
  id?: string;
  titulo?: string;
  linguagem: string;
  nivel: string;
  categoria?: string;
  tags?: string[];
  enunciado: string;
  solucao: string;
  templateCodigo?: string;
  testCases?: TestCase[];
}

/**
 * Níveis de dificuldade disponíveis
 */
export enum Nivel {
  BASICO = 'basico',
  INTERMEDIARIO = 'intermediario',
  AVANCADO = 'avancado'
}

/**
 * Tipos de linguagem suportadas
 */
export enum Linguagem {
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  JAVA = 'java',
  TYPESCRIPT = 'typescript',
  CSHARP = 'csharp',
  CPP = 'cpp',
  PHP = 'php',
  GO = 'go',
  RUST = 'rust',
  SQL = 'sql'
}

/**
 * Configuração do tema da aplicação
 */
export interface ThemeConfig {
  theme: 'light' | 'dark';
}

/**
 * Resultado da busca por exercícios
 */
export interface ExercicioResult {
  sucesso: boolean;
  exercicio?: Exercicio;
  mensagem?: string;
}