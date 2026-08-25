# 🚀 Gerador de Código — Documento de Design e Arquitetura

## 1. Visão Geral
Transformação progressiva do projeto **Gerador de Código** em uma plataforma completa de estudos e resolução de problemas de programação no navegador.

### Roadmap de 4 Fases
1. **Fase 1 (Plataforma Interativa)** [CONCLUÍDA ✅]: Editor de código integrado, execução isolada em Web Worker (JS/TS), runner de testes automatizados e progresso do usuário.
2. **Fase 2 (Recursos & Engajamento)** [CONCLUÍDA ✅]: Filtro por tags/categorias, sistema de favoritos, histórico de submissões e contador de dias seguidos (streaks).
3. **Fase 3 (Modernização de UI/UX)** [CONCLUÍDA ✅]: Migração da arquitetura Vanilla JS para React 18 + Tailwind CSS com editor profissional CodeMirror e ícones Lucide.
4. **Fase 4 (Recursos de IA)** [CONCLUÍDA ✅]: Tutoria interativa em 3 níveis, explicação pedagógica de erros de execução e geração dinâmica de desafios com IA.

---

## 2. Decisões de Arquitetura (Decision Log)

| Tópico | Opção Escolhida | Justificativa |
| :--- | :--- | :--- |
| **Abordagem de Desenvolvimento** | Evolução Incremental em Vanilla TS -> React na Fase 3 | Menor risco, entregas rápidas e reutilização total das regras de negócio. |
| **Execução de Código** | Client-side Web Worker Sandbox | 100% no navegador, zero custo de servidor e isolamento completo contra congelamento da UI. |
| **Persistência de Dados** | LocalStorage / IndexedDB | Funcionamento 100% offline, simplicidade e privacidade do usuário. |
| **Validação de Exercícios** | Assertions por Casos de Teste (Entrada/Saída Esperada) | Dá feedback objetivo ("Passou em X/Y testes") ao usuário. |
| **Tratamento de Timeout** | Termination Guard (2000ms) | Protege a aba do navegador contra loops infinitos em códigos do usuário. |

---

## 3. Especificação Técnica (Fase 1)

### Modelo de Dados (`src/types/index.ts`)
```typescript
export interface TestCase {
  id: string;
  entrada: any[];       // Parâmetros passados para a função
  saidaEsperada: any;   // Retorno esperado
  ehOculto?: boolean;   // Se true, esconde os valores no relatório
}

export interface Exercicio {
  id: string;
  titulo: string;
  linguagem: 'javascript' | 'typescript' | 'python' | string;
  nivel: 'facil' | 'medio' | 'dificil';
  enunciado: string;
  solucao: string;
  templateCodigo?: string;
  testCases?: TestCase[];
}

export interface ResultadoExecucao {
  sucesso: boolean;
  testesPassados: number;
  totalTestes: number;
  detalhes: Array<{
    testCaseId: string;
    passou: boolean;
    obteve: any;
    esperava: any;
    erro?: string;
  }>;
  tempoExecucaoMs: number;
}
```

### Arquitetura do Runner (`src/services/CodeRunnerService.ts`)
* Instancia um `Worker` através de um `Blob URL` dinâmico.
* Injeta o código do usuário e executa contra a lista de `testCases`.
* Timeout de 2000ms cancela a execução e lança `TimeoutError`.

### Persistência de Progresso (`src/services/ProgressService.ts`)
* Grava exercícios resolvidos, códigos rascunhados e estatísticas de streak no `LocalStorage`.
