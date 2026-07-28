/**
 * dados.js — Aggregator de exercícios por linguagem.
 *
 * Importa os módulos individuais e exporta um objeto indexado
 * pela chave de linguagem usada no <select> do HTML.
 *
 * Top 10 linguagens mais usadas no mundo (StackOverflow Survey / TIOBE):
 * JavaScript, Python, Java, TypeScript, C#, C++, PHP, Go, Kotlin, Swift
 */

import javascript from './dados/javascript.js';
import python     from './dados/python.js';
import java       from './dados/java.js';
import typescript from './dados/typescript.js';
import csharp     from './dados/csharp.js';
import cpp        from './dados/cpp.js';
import php        from './dados/php.js';
import go         from './dados/go.js';
import kotlin     from './dados/kotlin.js';
import swift      from './dados/swift.js';

const exercicios = {
  javascript,
  python,
  java,
  typescript,
  csharp,
  cpp,
  php,
  go,
  kotlin,
  swift,
};

export default exercicios;
