import { ExercicioResult, Exercicio } from '../types';
import exercicios from '../data/exercicios';
import { ProgressService } from './ProgressService';

/**
 * Serviço de exercícios
 */
export class ExercicioService {
  /**
   * Gerador de código inicial (starter template) sem revelar a solução
   */
  static getStarterTemplate(linguagem: string, titulo?: string): string {
    const lang = (linguagem || 'javascript').toLowerCase();
    const headerComment = titulo ? `Para ${titulo}` : `Solução em ${linguagem}`;

    switch (lang) {
      case 'javascript':
        return `// ${headerComment} (JavaScript):\nfunction solucao() {\n  // escreva seu código aqui\n}\n`;

      case 'typescript':
        return `// Escreva sua solução em TypeScript:\nfunction solucao(): any {\n  // seu código aqui\n}\n`;

      case 'python':
        return `# Escreva sua solução em Python:\ndef solucao():\n    pass\n`;

      case 'go':
      case 'golang':
        return `// Escreva sua solução em Go (Golang):\npackage main\n\nfunc getPreco() float64 {\n    // seu código aqui\n    return 0.0\n}\n`;

      case 'java':
        return `// Escreva sua solução em Java:\npublic class Solucao {\n    public static void main(String[] args) {\n        // seu código aqui\n    }\n}\n`;

      case 'csharp':
        return `// Escreva sua solução em C#:\nusing System;\n\npublic class Program {\n    public static void Main() {\n        // seu código aqui\n    }\n}\n`;

      case 'cpp':
        return `// Escreva sua solução em C++:\n#include <iostream>\n\nint main() {\n    // seu código aqui\n    return 0;\n}\n`;

      case 'php':
        return `<?php\n// Escreva sua solução em PHP:\nfunction solucao() {\n    // seu código aqui\n}\n`;

      case 'rust':
        return `// Escreva sua solução em Rust:\nfn main() {\n    // seu código aqui\n}\n`;

      case 'sql':
        return `-- Escreva sua consulta SQL aqui:\nSELECT * FROM tabela;\n`;

      default:
        return `// Escreva sua solução para ${linguagem}:\nfunction solucao() {\n  // seu código aqui\n}\n`;
    }
  }

  /**
   * Inferência automática de categoria baseada no enunciado e solução do exercício
   */
  static inferirCategoria(ex: { enunciado: string; solucao: string; categoria?: string }): string {
    if (ex.categoria) return ex.categoria;

    const texto = `${ex.enunciado} ${ex.solucao}`.toLowerCase();

    if (/array|matriz|lista|vetor|push|pop|shift|slice|splice|filter|map|reduce|length/.test(texto)) {
      return 'arrays';
    }
    if (/string|texto|palavra|caractere|letra|substitu|maiúscul|minúscul|concat|regex|email/.test(texto)) {
      return 'strings';
    }
    if (/objeto|class|classe|interface|struct|construtor|poo|propriedade|instância/.test(texto)) {
      return 'poo';
    }
    if (/função|funcao|function|algoritmo|fibonacci|fatorial|recurs|orden|busca|sort/.test(texto)) {
      return 'funcoes';
    }
    return 'logica';
  }

  /**
   * Filtra e retorna um exercício aleatório baseado nos critérios
   */
  static gerarExercicio(
    linguagem: string,
    nivel: string,
    categoria?: string,
    apenasFavoritos: boolean = false
  ): ExercicioResult {
    if (!linguagem || !nivel) {
      return {
        sucesso: false,
        mensagem: 'Selecione linguagem e nível!'
      };
    }

    const progresso = ProgressService.getProgresso();

    const filtrados = exercicios.filter((ex, index) => {
      const idEstavel = ex.id || `${ex.linguagem}-${ex.nivel}-${index}`;

      if (ex.linguagem !== linguagem || ex.nivel !== nivel) {
        return false;
      }

      const catEfetiva = ex.categoria || this.inferirCategoria(ex);

      if (categoria && catEfetiva !== categoria) {
        return false;
      }

      if (apenasFavoritos && !progresso.favoritos.includes(idEstavel)) {
        return false;
      }

      return true;
    });

    if (filtrados.length === 0) {
      const msg = apenasFavoritos
        ? 'Nenhum exercício favorito encontrado para este filtro.'
        : 'Nenhum exercício encontrado com esses filtros.';
      return {
        sucesso: false,
        mensagem: msg
      };
    }

    const indiceAleatorio = Math.floor(Math.random() * filtrados.length);
    const exercicioOriginal = filtrados[indiceAleatorio];
    const originalIndex = exercicios.indexOf(exercicioOriginal);

    // Garante que todo exercício tenha um ID único e metadados de execução
    const id = exercicioOriginal.id || `${exercicioOriginal.linguagem}-${exercicioOriginal.nivel}-${originalIndex}`;
    const titulo = exercicioOriginal.titulo || exercicioOriginal.enunciado.split('.')[0] || 'Desafio de Programação';
    const catEfetiva = exercicioOriginal.categoria || this.inferirCategoria(exercicioOriginal);

    // Cria um template padrão starter SEM REVELAR A SOLUÇÃO
    let templateCodigo = exercicioOriginal.templateCodigo;
    if (!templateCodigo || templateCodigo.includes(exercicioOriginal.solucao)) {
      templateCodigo = this.getStarterTemplate(exercicioOriginal.linguagem, titulo);
    }

    const exercicio: Exercicio = {
      ...exercicioOriginal,
      id,
      titulo,
      categoria: catEfetiva,
      tags: exercicioOriginal.tags || [exercicioOriginal.nivel, catEfetiva],
      templateCodigo,
      testCases: exercicioOriginal.testCases || [
        { id: 'tc-1', entrada: [], saidaEsperada: undefined }
      ]
    };

    return {
      sucesso: true,
      exercicio
    };
  }

  /**
   * Retorna a contagem de exercícios por linguagem e nível
   */
  static getEstatisticas(): Record<string, Record<string, number>> {
    const estatisticas: Record<string, Record<string, number>> = {};

    exercicios.forEach((ex) => {
      if (!estatisticas[ex.linguagem]) {
        estatisticas[ex.linguagem] = {};
      }
      estatisticas[ex.linguagem][ex.nivel] = 
        (estatisticas[ex.linguagem][ex.nivel] || 0) + 1;
    });

    return estatisticas;
  }
}