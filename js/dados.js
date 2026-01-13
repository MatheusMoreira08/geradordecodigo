const exercicios = [
    // ==================================================================================
    // 1. JAVASCRIPT (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Desenvolva uma função que utilize 'Template Literals' para receber um nome e retornar uma saudação formatada, demonstrando a interpolação de strings.",
        solucao: "function saudar(nome) {\n  return `Olá, ${nome}! Seja bem-vindo.`;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Crie uma função que receba dois números e retorne a soma deles, demonstrando a estrutura básica de declaração de funções e retorno de valores.",
        solucao: "function somar(a, b) {\n  return a + b;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Implemente uma lógica utilizando o operador ternário para verificar se um número é par ou ímpar, demonstrando condicionais simplificadas.",
        solucao: "const verificarPar = n => n % 2 === 0 ? 'Par' : 'Ímpar';"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Escreva uma função que converta graus Celsius para Fahrenheit utilizando a fórmula padrão, demonstrando operações aritméticas.",
        solucao: "function converter(c) {\n  return c * 1.8 + 32;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Utilize o método 'Math.max' com o operador 'spread' para encontrar o maior número em um array simples, demonstrando o uso de bibliotecas nativas.",
        solucao: "function maiorNumero(lista) {\n  return Math.max(...lista);\n}"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Crie um loop 'for' clássico que exiba no console os números de 1 a 10, demonstrando o controle de fluxo de repetição.",
        solucao: "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Declare um objeto 'Carro' com propriedades 'marca' e 'ano', e acesse esses valores, demonstrando a estrutura de objetos literais.",
        solucao: "const carro = { marca: 'Toyota', ano: 2022 };\nconsole.log(carro.marca);"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Desenvolva uma função que calcule a área de um círculo dado o raio, utilizando 'const' para definir o valor de PI.",
        solucao: "const PI = 3.14159;\nfunction areaCirculo(r) {\n  return PI * r * r;\n}"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Implemente uma função usando '.filter()' para retornar apenas os números positivos de uma lista, demonstrando a manipulação imutável de arrays.",
        solucao: "const positivos = arr => arr.filter(n => n > 0);"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Utilize os métodos '.split()', '.reverse()' e '.join()' encadeados para inverter uma string, demonstrando a manipulação de protótipos de String.",
        solucao: "function inverter(str) {\n  return str.split('').reverse().join('');\n}"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente), demonstrando lógica algorítmica de comparação.",
        solucao: "function ehPalindromo(str) {\n  const rev = str.split('').reverse().join('');\n  return str.toLowerCase() === rev.toLowerCase();\n}"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Desenvolva um contador utilizando 'Closures' para criar variáveis privadas que mantêm estado entre chamadas de função.",
        solucao: "function criarContador() {\n  let count = 0;\n  return () => ++count;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Remova duplicatas de um array utilizando a estrutura de dados 'Set', demonstrando a eliminação eficiente de redundâncias.",
        solucao: "const unicos = arr => [...new Set(arr)];"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Utilize o método '.map()' para transformar um array de objetos 'Produto', aplicando um desconto de 10% no preço de cada item.",
        solucao: "const aplicarDesconto = produtos => produtos.map(p => ({ ...p, preco: p.preco * 0.9 }));"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Crie uma função que utilize 'Destructuring' para extrair propriedades específicas de um objeto aninhado, demonstrando sintaxe moderna do ES6.",
        solucao: "function infoUsuario({ endereco: { cidade } }) {\n  return `Mora em ${cidade}`;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Implemente uma função que utilize '.reduce()' para calcular a soma total de um array de números, demonstrando agregação de dados.",
        solucao: "const somaTotal = arr => arr.reduce((acc, curr) => acc + curr, 0);"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Implemente o padrão 'Debounce' para limitar a taxa de execução de uma função repetitiva, essencial para otimização de eventos de DOM.",
        solucao: "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie uma função assíncrona com 'async/await' que consuma uma API e trate erros com blocos 'try/catch', demonstrando controle de fluxo assíncrono moderno.",
        solucao: "async function buscar(url) {\n  try {\n    const res = await fetch(url);\n    return await res.json();\n  } catch (e) {\n    console.error('Erro:', e);\n  }\n}"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Desenvolva uma 'Promise' manualmente que simule um atraso de rede e resolva após X milissegundos, demonstrando o funcionamento interno de promessas.",
        solucao: "const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Implemente uma função de 'Deep Clone' (cópia profunda) utilizando recursão ou JSON, para evitar referências compartilhadas em objetos complexos.",
        solucao: "const deepClone = obj => JSON.parse(JSON.stringify(obj));"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Utilize 'Generators' (função*) para criar um iterador infinito de IDs sequenciais, demonstrando controle de execução pausável.",
        solucao: "function* idGenerator() {\n  let id = 1;\n  while(true) yield id++;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie um 'Proxy' para interceptar e validar atribuições a um objeto, demonstrando metaprogramação e validação dinâmica.",
        solucao: "const validador = {\n  set: (obj, prop, valor) => {\n    if (prop === 'idade' && !Number.isInteger(valor)) throw new TypeError();\n    obj[prop] = valor;\n    return true;\n  }\n};"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Implemente uma função de 'Currying' que transforme uma função de múltiplos argumentos em uma sequência de funções aninhadas.",
        solucao: "const currying = f => a => b => f(a, b);\nconst soma = a => b => a + b;"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Utilize o método 'Promise.allSettled' para lidar com múltiplas requisições simultâneas, garantindo que o resultado de todas seja processado independente de falhas.",
        solucao: "async function carregarTudo(urls) {\n  const res = await Promise.allSettled(urls.map(u => fetch(u)));\n  return res;\n}"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Implemente o padrão 'Memoization' para armazenar em cache o resultado de funções computacionalmente caras, otimizando o desempenho.",
        solucao: "const memoize = (fn) => {\n  const cache = {};\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (!cache[key]) cache[key] = fn(...args);\n    return cache[key];\n  };\n};"
    },

    // ==================================================================================
    // 2. PYTHON (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Escreva um programa que solicite o nome do usuário e exiba uma mensagem de boas-vindas formatada (f-string).",
        solucao: "nome = input('Nome: ')\nprint(f'Bem-vindo {nome}!')"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Desenvolva uma calculadora simples que receba dois números e mostre o resultado da multiplicação entre eles.",
        solucao: "a = float(input())\nb = float(input())\nprint(a * b)"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Crie uma estrutura condicional que verifique se um número digitado é positivo, negativo ou zero.",
        solucao: "n = int(input())\nif n > 0: print('Positivo')\nelif n < 0: print('Negativo')\nelse: print('Zero')"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Utilize uma lista para armazenar 3 nomes de frutas e imprima a segunda fruta da lista.",
        solucao: "frutas = ['Maca', 'Banana', 'Uva']\nprint(frutas[1])"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Implemente um loop 'while' que imprima uma contagem regressiva de 5 até 1.",
        solucao: "x = 5\nwhile x > 0:\n    print(x)\n    x -= 1"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Crie uma função simples que receba um número e retorne o seu quadrado.",
        solucao: "def quadrado(n):\n    return n ** 2"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Demonstre o uso de fatiamento de strings (slicing) para retornar apenas os 3 primeiros caracteres de uma palavra.",
        solucao: "texto = 'Python'\nprint(texto[:3])"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Utilize o método 'append' para adicionar um novo item a uma lista existente dinamicamente.",
        solucao: "lista = [1, 2]\nlista.append(3)\nprint(lista)"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Crie uma função recursiva para calcular o Fatorial de um número, demonstrando chamadas de função a si mesma.",
        solucao: "def fatorial(n):\n    if n == 0: return 1\n    return n * fatorial(n-1)"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Utilize 'List Comprehension' para criar uma nova lista contendo apenas os números pares de um intervalo de 0 a 10.",
        solucao: "pares = [x for x in range(11) if x % 2 == 0]"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Desenvolva uma função que conte a frequência de cada caractere em uma string usando um Dicionário.",
        solucao: "def contar(s):\n    freq = {}\n    for c in s:\n        freq[c] = freq.get(c, 0) + 1\n    return freq"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Manipule arquivos de texto utilizando o gerenciador de contexto 'with open' para escrever e ler dados de forma segura.",
        solucao: "with open('dados.txt', 'w') as f:\n    f.write('Teste')\nwith open('dados.txt', 'r') as f:\n    print(f.read())"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Utilize a função 'lambda' junto com 'filter' para remover palavras com menos de 4 letras de uma lista.",
        solucao: "palavras = ['oi', 'casa', 'sol']\nfiltradas = list(filter(lambda x: len(x) >= 4, palavras))"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Crie uma classe 'Aluno' com método construtor '__init__' e um método para exibir a média de notas.",
        solucao: "class Aluno:\n    def __init__(self, notas):\n        self.notas = notas\n    def media(self):\n        return sum(self.notas)/len(self.notas)"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Trate erros de divisão por zero utilizando a estrutura 'try', 'except' e 'finally'.",
        solucao: "try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print('Erro')\nfinally:\n    print('Fim')"
    },
    {
        linguagem: "python",
        nivel: "intermediario",
        enunciado: "Utilize 'Sets' (conjuntos) para realizar a união e a interseção entre dois grupos de números, eliminando duplicatas automaticamente.",
        solucao: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b) # União\nprint(a & b) # Interseção"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Implemente um 'Decorator' que meça e imprima o tempo de execução de qualquer função decorada.",
        solucao: "import time\ndef timer(func):\n    def wrapper(*args):\n        inicio = time.time()\n        res = func(*args)\n        print(time.time() - inicio)\n        return res\n    return wrapper"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Crie um 'Generator' que produza a sequência de Fibonacci infinitamente, economizando memória em comparação com listas.",
        solucao: "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Defina uma exceção personalizada herdando de 'Exception' e lance-a quando uma regra de negócio for violada.",
        solucao: "class ValorInvalidoError(Exception): pass\ndef validar(n):\n    if n < 0: raise ValorInvalidoError('Negativo!')"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Utilize a biblioteca 'requests' para fazer uma requisição HTTP GET e parsear a resposta JSON (requer instalação externa, simule a lógica).",
        solucao: "import requests\nres = requests.get('https://api.exemplo.com/dados')\ndados = res.json()\nprint(dados)"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Implemente uma classe abstrata usando 'ABC' e '@abstractmethod' para obrigar subclasses a implementarem métodos específicos.",
        solucao: "from abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def som(self): pass"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Utilize 'Context Managers' criando uma classe com métodos '__enter__' e '__exit__' para gerenciar recursos automaticamente.",
        solucao: "class Arquivo:\n    def __enter__(self):\n        print('Abrindo')\n    def __exit__(self, type, value, trace):\n        print('Fechando')"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Demonstre o uso de 'Type Hinting' (tipagem estática opcional) em funções para indicar os tipos de argumentos e retorno.",
        solucao: "def saudacao(nome: str) -> str:\n    return f'Olá {nome}'"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Utilize 'args' e 'kwargs' para criar uma função flexível que aceite qualquer número de argumentos posicionais e nomeados.",
        solucao: "def flexivel(*args, **kwargs):\n    print(args)\n    print(kwargs)"
    },
    {
        linguagem: "python",
        nivel: "avancado",
        enunciado: "Implemente multitarefa simples utilizando a biblioteca 'threading' para executar duas funções simultaneamente.",
        solucao: "import threading\ndef tarefa(): print('Rodando')\nt = threading.Thread(target=tarefa)\nt.start()"
    },

    // ==================================================================================
    // 3. JAVA (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Utilize o método 'System.out.println' para exibir uma mensagem formatada no console, demonstrando a saída padrão de dados na plataforma Java.",
        solucao: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Sistema Inicializado\");\n  }\n}"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Declare variáveis primitivas dos tipos 'int' e 'double' para calcular a área de um retângulo, demonstrando a tipagem estática forte do Java.",
        solucao: "int base = 10;\ndouble altura = 5.5;\ndouble area = base * altura;"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Implemente um laço 'for' para iterar de 1 a 10 e exibir apenas os números pares, demonstrando controle de fluxo e operadores aritméticos.",
        solucao: "for(int i=1; i<=10; i++) {\n  if(i % 2 == 0) System.out.println(i);\n}"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Utilize a classe 'Scanner' para capturar uma entrada de texto do usuário via terminal, demonstrando a interação básica de entrada e saída (I/O).",
        solucao: "Scanner sc = new Scanner(System.in);\nString nome = sc.nextLine();"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Crie um array de Strings estático para armazenar dias da semana e acesse o terceiro elemento, demonstrando a estrutura de arrays em Java.",
        solucao: "String[] dias = {\"Seg\", \"Ter\", \"Qua\"};\nSystem.out.println(dias[2]);"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Desenvolva um método estático que receba dois inteiros e retorne o maior deles utilizando 'Math.max', demonstrando chamadas de métodos utilitários.",
        solucao: "public static int maior(int a, int b) {\n  return Math.max(a, b);\n}"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Utilize a estrutura condicional 'switch-case' para verificar o valor de uma variável inteira, demonstrando seleção de múltiplos caminhos.",
        solucao: "int op = 1;\nswitch(op) {\n  case 1: System.out.println(\"A\"); break;\n  default: System.out.println(\"B\");\n}"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Concatene strings utilizando o operador '+' e o método 'concat', demonstrando a manipulação básica de objetos String.",
        solucao: "String a = \"Ola\";\nString b = \" Mundo\";\nString c = a + b;"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Crie uma classe 'Pessoa' encapsulada com atributos privados e métodos getters e setters, demonstrando o princípio de encapsulamento da POO.",
        solucao: "class Pessoa {\n  private String nome;\n  public String getNome() { return nome; }\n  public void setNome(String n) { this.nome = n; }\n}"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Utilize a classe 'ArrayList' para criar uma lista dinâmica de números e adicione elementos, demonstrando o framework de Coleções (Collections).",
        solucao: "ArrayList<Integer> lista = new ArrayList<>();\nlista.add(10);\nlista.add(20);"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Implemente herança criando uma classe 'Gerente' que estenda 'Funcionario', demonstrando reutilização de código e hierarquia de classes.",
        solucao: "class Funcionario {}\nclass Gerente extends Funcionario {}"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Trate possíveis erros de conversão de tipos utilizando blocos 'try' e 'catch' para 'NumberFormatException', demonstrando robustez.",
        solucao: "try {\n  int n = Integer.parseInt(\"abc\");\n} catch (NumberFormatException e) {\n  System.out.println(\"Erro\");\n}"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Utilize a classe 'StringBuilder' para concatenar strings dentro de um loop, demonstrando otimização de memória em operações de texto.",
        solucao: "StringBuilder sb = new StringBuilder();\nfor(int i=0; i<10; i++) sb.append(i);"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Crie uma interface 'Veiculo' com um método 'acelerar' e implemente-a em uma classe 'Carro', demonstrando contratos de polimorfismo.",
        solucao: "interface Veiculo { void acelerar(); }\nclass Carro implements Veiculo {\n  public void acelerar() { System.out.println(\"Vrum\"); }\n}"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Sobrescreva o método 'toString' de uma classe para fornecer uma representação textual personalizada do objeto.",
        solucao: "@Override\npublic String toString() {\n  return \"Meu Objeto Personalizado\";\n}"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Utilize o laço 'for-each' para iterar sobre uma coleção de nomes, demonstrando uma sintaxe mais limpa para percorrer listas.",
        solucao: "for(String nome : listaNomes) {\n  System.out.println(nome);\n}"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Utilize a API de Streams para filtrar uma lista de números, mantendo apenas os pares, e coletá-los em uma nova lista.",
        solucao: "List<Integer> pares = numeros.stream()\n  .filter(n -> n % 2 == 0)\n  .collect(Collectors.toList());"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Implemente uma expressão Lambda para definir o comportamento de uma interface funcional 'Comparator' na ordenação de uma lista.",
        solucao: "lista.sort((a, b) -> a.compareTo(b));"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Crie uma Thread simples implementando a interface 'Runnable' para executar uma tarefa em paralelo.",
        solucao: "new Thread(() -> System.out.println(\"Executando em paralelo\")).start();"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Utilize a classe 'Optional' para evitar 'NullPointerException' ao buscar um valor que pode não existir.",
        solucao: "Optional<String> opt = Optional.ofNullable(valor);\nSystem.out.println(opt.orElse(\"Vazio\"));"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Implemente o padrão Singleton para garantir que uma classe de conexão tenha apenas uma instância global.",
        solucao: "public class Conexao {\n  private static final Conexao INSTANCE = new Conexao();\n  private Conexao(){}\n  public static Conexao get() { return INSTANCE; }\n}"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Utilize Generics para criar uma classe 'Caixa' que possa armazenar qualquer tipo de objeto, garantindo segurança de tipo em tempo de compilação.",
        solucao: "class Caixa<T> {\n  private T t;\n  public void set(T t) { this.t = t; }\n  public T get() { return t; }\n}"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Realize a leitura de um arquivo utilizando a API java.nio (Files.lines) para processar linhas de forma eficiente com Streams.",
        solucao: "try (Stream<String> stream = Files.lines(Paths.get(\"arquivo.txt\"))) {\n  stream.forEach(System.out::println);\n} catch (IOException e) {}"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Implemente uma interface funcional personalizada anotada com '@FunctionalInterface' e utilize-a em um método.",
        solucao: "@FunctionalInterface\ninterface Operacao {\n  int executar(int a, int b);\n}"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Utilize Reflection para inspecionar os métodos declarados em uma classe em tempo de execução, demonstrando metaprogramação.",
        solucao: "Method[] metodos = MinhaClasse.class.getDeclaredMethods();\nfor(Method m : metodos) System.out.println(m.getName());"
    },

    // ==================================================================================
    // 4. C# (CSHARP) (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Utilize 'Console.WriteLine' e interpolação de strings ($) para exibir uma mensagem personalizada.",
        solucao: "string nome = \"Dev\";\nConsole.WriteLine($\"Olá, {nome}!\");"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Declare uma variável anulável (Nullable Type) 'int?' e verifique se ela possui valor, demonstrando segurança contra nulos.",
        solucao: "int? numero = null;\nif (numero.HasValue) Console.WriteLine(numero.Value);"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Realize a conversão segura de uma string para inteiro utilizando 'int.TryParse', evitando exceções em tempo de execução.",
        solucao: "if (int.TryParse(\"123\", out int resultado)) {\n  Console.WriteLine(resultado);\n}"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Utilize um laço 'foreach' para iterar sobre um array de inteiros, demonstrando a forma mais comum de iteração em C#.",
        solucao: "int[] nums = {1, 2, 3};\nforeach(var n in nums) Console.WriteLine(n);"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Implemente uma estrutura condicional 'if/else' para verificar se um usuário é maior de idade.",
        solucao: "int idade = 20;\nif (idade >= 18) Console.WriteLine(\"Maior\");\nelse Console.WriteLine(\"Menor\");"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Receba uma entrada do usuário com 'Console.ReadLine' e converta para letras maiúsculas.",
        solucao: "string input = Console.ReadLine();\nConsole.WriteLine(input.ToUpper());"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Crie um método simples que receba dois números e retorne a soma, demonstrando a sintaxe de métodos.",
        solucao: "public int Somar(int a, int b) {\n  return a + b;\n}"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "Utilize o operador ternário para atribuir um status baseado em uma nota boolean.",
        solucao: "bool aprovado = true;\nstring status = aprovado ? \"Sim\" : \"Não\";"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Crie uma 'Propriedade Automática' em uma classe para encapsular um dado sem precisar declarar um campo privado manualmente.",
        solucao: "public class Produto {\n  public string Nome { get; set; }\n}"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Utilize LINQ (Language Integrated Query) com o método 'Where' para filtrar números pares de uma lista.",
        solucao: "var pares = lista.Where(n => n % 2 == 0).ToList();"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Implemente um 'Extension Method' para a classe String que conta o número de palavras, estendendo a funcionalidade nativa.",
        solucao: "public static class Ext {\n  public static int Contar(this string s) => s.Split(' ').Length;\n}"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Utilize 'StringBuilder' para manipulação eficiente de strings em um cenário de concatenação intensiva.",
        solucao: "var sb = new StringBuilder();\nsb.Append(\"Linha 1\");\nsb.Append(\"Linha 2\");"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Crie um 'Enum' para representar dias da semana e utilize-o em um switch case.",
        solucao: "enum Dia { Seg, Ter }\nDia hoje = Dia.Seg;"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Utilize um Dicionário (Dictionary<K,V>) para mapear IDs de usuários para seus nomes, demonstrando busca rápida.",
        solucao: "var users = new Dictionary<int, string>();\nusers.Add(1, \"Ana\");\nConsole.WriteLine(users[1]);"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Implemente uma 'struct' ao invés de 'class' para representar um Ponto (X, Y), demonstrando tipos de valor vs referência.",
        solucao: "struct Ponto {\n  public int X; public int Y;\n}"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "Utilize a instrução 'using' para garantir que recursos de I/O (como StreamWriter) sejam descartados corretamente.",
        solucao: "using (var sw = new StreamWriter(\"log.txt\")) {\n  sw.WriteLine(\"Log\");\n}"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Implemente um método assíncrono utilizando 'async' e 'await' para simular uma operação de longa duração sem bloquear a thread principal.",
        solucao: "public async Task<string> GetData() {\n  await Task.Delay(1000);\n  return \"Dados\";\n}"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Utilize 'Records' (C# 9+) para criar um objeto de transferência de dados imutável com sintaxe concisa.",
        solucao: "public record Pessoa(string Nome, int Idade);"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Implemente 'Pattern Matching' com switch expressions para classificar um objeto baseado em seu tipo ou propriedades.",
        solucao: "string tipo = obj switch {\n  int i => \"Inteiro\",\n  string s => \"Texto\",\n  _ => \"Outro\"\n};"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Crie um Evento e um Delegate para notificar assinantes quando uma ação for concluída.",
        solucao: "public event EventHandler ProcessoConcluido;\nprotected virtual void OnProcessoConcluido() => ProcessoConcluido?.Invoke(this, EventArgs.Empty);"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Utilize 'Dependency Injection' manual via construtor para desacoplar a lógica de negócios da implementação de um repositório.",
        solucao: "public class Servico {\n  private readonly IRepo _repo;\n  public Servico(IRepo repo) { _repo = repo; }\n}"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Implemente um iterador customizado utilizando 'yield return' para retornar uma sequência de números sob demanda.",
        solucao: "public IEnumerable<int> Numeros() {\n  yield return 1;\n  yield return 2;\n}"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Utilize Reflection para acessar propriedades de um objeto dinamicamente em tempo de execução.",
        solucao: "var props = typeof(MinhaClasse).GetProperties();\nforeach(var p in props) Console.WriteLine(p.Name);"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Crie um Atributo personalizado e aplique-o a uma classe para adicionar metadados.",
        solucao: "[AttributeUsage(AttributeTargets.Class)]\npublic class InfoAttribute : Attribute { }"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "Utilize PLINQ (Parallel LINQ) para processar uma coleção grande de dados em paralelo, utilizando múltiplos núcleos da CPU.",
        solucao: "var resultado = lista.AsParallel().Where(x => x % 2 == 0).ToList();"
    },

    // ==================================================================================
    // 5. TYPESCRIPT (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Defina uma variável com tipagem explícita para armazenar um nome e outra para a idade, demonstrando o sistema de tipos estáticos básicos.",
        solucao: "let nome: string = 'Ana';\nlet idade: number = 25;"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Crie uma função que aceite dois números como argumentos tipados e retorne a multiplicação deles, garantindo a integridade dos dados de entrada.",
        solucao: "function multiplicar(a: number, b: number): number {\n  return a * b;\n}"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Desenvolva uma Interface simples 'Produto' com propriedades obrigatórias (id, nome) e utilize-a para tipar um objeto.",
        solucao: "interface Produto {\n  id: number;\n  nome: string;\n}\nconst p1: Produto = { id: 1, nome: 'Mouse' };"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Utilize 'Union Types' para permitir que uma variável aceite tanto 'string' quanto 'number', demonstrando flexibilidade controlada.",
        solucao: "let codigo: string | number;\ncodigo = 123;\ncodigo = 'ABC';"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Crie um 'Array' tipado estritamente para aceitar apenas strings, prevenindo a inserção de outros tipos de dados.",
        solucao: "let nomes: string[] = ['Ana', 'Bia'];\n// nomes.push(1); // Erro"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Implemente um 'Enum' numérico para representar os estados de um pedido (Pendente, Aprovado, Cancelado).",
        solucao: "enum Status { Pendente, Aprovado, Cancelado }\nlet s: Status = Status.Aprovado;"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Utilize o tipo 'any' para declarar uma variável que aceite qualquer valor (uso deve ser moderado), demonstrando a desativação da checagem de tipos.",
        solucao: "let valor: any = 5;\nvalor = 'texto';\nvalor = true;"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Defina uma função que não retorna nada utilizando o tipo de retorno 'void', comum em funções de log ou efeitos colaterais.",
        solucao: "function log(msg: string): void {\n  console.log(msg);\n}"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Crie uma Interface com uma propriedade opcional utilizando '?', permitindo objetos que não possuam todos os campos preenchidos.",
        solucao: "interface Usuario {\n  nome: string;\n  email?: string;\n}"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Implemente uma função genérica (Generics) que aceite um argumento de qualquer tipo e o retorne, mantendo a informação do tipo original.",
        solucao: "function identity<T>(arg: T): T {\n  return arg;\n}"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Utilize 'Type Aliases' para criar um tipo personalizado para coordenadas geográficas (latitude e longitude).",
        solucao: "type Coord = { lat: number; long: number };\nconst local: Coord = { lat: 10, long: 20 };"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Implemente uma classe com modificadores de acesso 'private' e 'public', demonstrando o encapsulamento em TypeScript.",
        solucao: "class Carro {\n  private modelo: string;\n  constructor(m: string) { this.modelo = m; }\n}"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Utilize 'Intersection Types' (&) para combinar duas interfaces 'Pessoa' e 'Funcionario' em um único tipo.",
        solucao: "type Dev = Pessoa & Funcionario;\n// Deve ter propriedades de ambos"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Tipar uma Promise para garantir que o valor resolvido seja de um tipo específico (ex: string).",
        solucao: "const tarefa = (): Promise<string> => {\n  return Promise.resolve('Sucesso');\n};"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Use 'Literal Types' para restringir o valor de uma variável a apenas strings específicas ('esquerda', 'direita').",
        solucao: "type Direcao = 'esquerda' | 'direita';\nlet d: Direcao = 'esquerda';"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Utilize o operador 'unknown' como uma alternativa segura ao 'any', obrigando a checagem de tipo antes do uso.",
        solucao: "let valor: unknown = 10;\nif (typeof valor === 'number') console.log(valor + 1);"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Implemente 'Type Guards' personalizados (funções 'is...') para verificar em tempo de execução se um objeto pertence a uma interface específica.",
        solucao: "function isCarro(obj: any): obj is Carro {\n  return 'modelo' in obj;\n}"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Utilize 'Mapped Types' para transformar todas as propriedades de uma interface em opcionais (semelhante ao Partial<T>).",
        solucao: "type Opcional<T> = {\n  [P in keyof T]?: T[P];\n};"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Crie um 'Conditional Type' que detecte se um tipo é um Array e extraia o tipo de seus elementos (infer).",
        solucao: "type Unpack<T> = T extends (infer U)[] ? U : T;\ntype T1 = Unpack<string[]>; // string"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Utilize o Utility Type 'Record' para criar um objeto onde as chaves são nomes de páginas e os valores são objetos de configuração.",
        solucao: "const paginas: Record<string, { title: string }> = {\n  home: { title: 'Início' }\n};"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Implemente 'Keyof Operator' para criar uma função que aceite apenas chaves válidas de um objeto como argumento.",
        solucao: "function getProp<T, K extends keyof T>(obj: T, key: K) {\n  return obj[key];\n}"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Utilize o Utility Type 'Pick' para criar um novo tipo selecionando apenas um subconjunto de propriedades de uma interface existente.",
        solucao: "interface User { id: number; nome: string; email: string }\ntype UserPreview = Pick<User, 'id' | 'nome'>;"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Crie um Decorator de Classe que adicione uma propriedade 'dataCriacao' automaticamente ao instanciar a classe.",
        solucao: "function Log(target: Function) {\n  target.prototype.data = new Date();\n}"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Utilize o utilitário 'Readonly' para tornar um objeto totalmente imutável após a sua criação.",
        solucao: "const config: Readonly<{ host: string }> = { host: 'localhost' };\n// config.host = 'ip'; // Erro"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Implemente 'Function Overloading' para permitir que uma função se comporte de maneira diferente dependendo dos tipos dos argumentos passados.",
        solucao: "function add(a: string, b: string): string;\nfunction add(a: number, b: number): number;\nfunction add(a: any, b: any) { return a + b; }"
    },

    // ==================================================================================
    // 6. C++ (CPP) (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Utilize 'std::cout' e 'std::cin' para criar um programa que pergunte a idade do usuário e a exiba na tela.",
        solucao: "int idade;\nstd::cin >> idade;\nstd::cout << \"Idade: \" << idade << std::endl;"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Declare uma constante usando 'const' para o valor de PI e calcule a área de um círculo, demonstrando imutabilidade.",
        solucao: "const double PI = 3.14;\ndouble area = PI * raio * raio;"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Implemente um loop 'while' que imprima os números pares de 0 a 10.",
        solucao: "int i = 0;\nwhile(i <= 10) {\n  if(i%2==0) std::cout << i;\n  i++;\n}"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Crie uma função que receba dois inteiros por valor e retorne a soma, demonstrando passagem de parâmetros básica.",
        solucao: "int soma(int a, int b) {\n  return a + b;\n}"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Utilize referências (&) para criar uma função que modifique o valor de uma variável original (ex: swap).",
        solucao: "void incrementar(int &n) {\n  n++;\n}"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Declare um array estático de inteiros e utilize um loop 'for' para calcular a média dos valores.",
        solucao: "int arr[] = {10, 20, 30};\nint soma = 0;\nfor(int x : arr) soma += x;"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Crie uma 'struct' simples para representar um Ponto 2D e instancie um objeto dessa estrutura.",
        solucao: "struct Ponto { int x; int y; };\nPonto p; p.x = 10;"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "Utilize ponteiros básicos (*) para armazenar o endereço de memória de uma variável e modificar seu valor indiretamente.",
        solucao: "int a = 10;\nint* ptr = &a;\n*ptr = 20; // a vira 20"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Crie uma classe com Construtor e Destrutor, exibindo mensagens quando o objeto é criado e destruído (RAII básico).",
        solucao: "class Teste {\npublic:\n  Teste() { cout << \"Criado\"; }\n  ~Teste() { cout << \"Destruido\"; }\n};"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Implemente Herança criando uma classe base 'Animal' e uma derivada 'Cachorro', demonstrando reutilização.",
        solucao: "class Animal {};\nclass Cachorro : public Animal {};"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Utilize 'std::vector' da biblioteca padrão (STL) para armazenar strings dinamicamente e adicionar elementos.",
        solucao: "#include <vector>\nstd::vector<std::string> lista;\nlista.push_back(\"Texto\");"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Implemente Polimorfismo utilizando funções virtuais ('virtual') para permitir que subclasses tenham comportamentos diferentes.",
        solucao: "class Base { public: virtual void show() {} };\nclass Derived : public Base { void show() override {} };"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Manipule arquivos de texto usando 'std::ofstream' para escrever dados em um arquivo no disco.",
        solucao: "std::ofstream file(\"saida.txt\");\nfile << \"Ola Mundo\";\nfile.close();"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Sobrecarregue o operador '+' (Operator Overloading) para permitir a soma direta de dois objetos 'Vetor2D'.",
        solucao: "Vetor2D operator+(const Vetor2D& v) {\n  return Vetor2D(x + v.x, y + v.y);\n}"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Utilize 'std::map' para criar um dicionário de chave-valor (ex: nome -> idade) e realizar buscas.",
        solucao: "std::map<string, int> idades;\nidades[\"Ana\"] = 25;"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "Crie um Template de função simples que permita somar dois números de qualquer tipo (int, float, double).",
        solucao: "template <typename T>\nT soma(T a, T b) { return a + b; }"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Utilize 'std::unique_ptr' (Smart Pointer) para gerenciar memória automaticamente e evitar vazamentos (memory leaks).",
        solucao: "std::unique_ptr<int> p = std::make_unique<int>(10);\n// Auto deletado ao sair do escopo"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Implemente 'Move Semantics' (std::move) para transferir a posse de recursos pesados sem realizar cópias profundas.",
        solucao: "string a = \"longa string\";\nstring b = std::move(a); // a agora está vazio"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Utilize 'Lambda Expressions' com captura de variáveis ([&]) para passar um bloco de código a um algoritmo STL.",
        solucao: "int fator = 2;\nstd::for_each(v.begin(), v.end(), [&](int &n){ n *= fator; });"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Implemente multithreading básico usando 'std::thread' para executar uma função em paralelo.",
        solucao: "void task() { ... }\nstd::thread t(task);\nt.join();"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Utilize 'std::mutex' e 'std::lock_guard' para proteger dados compartilhados em um ambiente multithread (Thread Safety).",
        solucao: "std::mutex mtx;\nvoid safe() {\n  std::lock_guard<std::mutex> lock(mtx);\n  // codigo seguro\n}"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Use 'std::optional' (C++17) para indicar que uma função pode não retornar um valor válido, evitando ponteiros nulos ou códigos de erro.",
        solucao: "std::optional<int> find() {\n  if(ok) return 1;\n  return std::nullopt;\n}"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Demonstre o uso de 'Perfect Forwarding' com 'std::forward' dentro de um template variadic.",
        solucao: "template<typename T>\nvoid wrapper(T&& arg) {\n  func(std::forward<T>(arg));\n}"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Utilize 'std::variant' para armazenar um valor que pode assumir diferentes tipos (Type-safe Union) e visite-o com 'std::visit'.",
        solucao: "std::variant<int, string> v = 10;\nv = \"Texto\";"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "Implemente RAII (Resource Acquisition Is Initialization) criando uma classe wrapper para gerenciar um 'file handle' de C puro.",
        solucao: "class File {\n  FILE* f;\npublic:\n  File(const char* n) { f = fopen(n, \"r\"); }\n  ~File() { if(f) fclose(f); }\n};"
    },

    // ==================================================================================
    // 7. PHP (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Utilize a instrução 'echo' para exibir uma string formatada com tags HTML, demonstrando a integração nativa com a web.",
        solucao: "echo \"<h1>Olá Mundo</h1>\";"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Declare uma variável representando um preço e utilize a função 'number_format' para exibir o valor formatado com duas casas decimais.",
        solucao: "$preco = 19.9;\necho number_format($preco, 2, ',', '.');"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Crie um array indexado contendo nomes de cores e acesse o primeiro elemento, demonstrando a estrutura básica de vetores.",
        solucao: "$cores = ['Azul', 'Vermelho'];\necho $cores[0];"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Implemente uma estrutura condicional que verifique se uma variável é 'null' utilizando a função 'is_null' ou o operador de identidade.",
        solucao: "$var = null;\nif (is_null($var)) echo 'Nulo';"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Utilize o operador de concatenação (.) para juntar o primeiro e o último nome de uma pessoa em uma única string.",
        solucao: "$nome = 'Ana';\n$sobre = 'Silva';\necho $nome . ' ' . $sobre;"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Crie um loop 'foreach' para iterar sobre um array de números e exibi-los, a forma mais comum de iteração em PHP.",
        solucao: "$nums = [1, 2, 3];\nforeach($nums as $n) echo $n;"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Defina uma função que aceite um parâmetro com valor padrão (default), demonstrando flexibilidade na chamada.",
        solucao: "function ola($nome = 'Visitante') {\n  echo \"Oi, $nome\";\n}"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "Utilize a superglobal '$_GET' para capturar um parâmetro passado via URL, demonstrando a interação com requisições HTTP.",
        solucao: "$id = $_GET['id'];\necho \"ID: \" . $id;"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Crie um Array Associativo (semelhante a um dicionário) para armazenar os dados de um usuário (nome, email) e acesse por chave.",
        solucao: "$user = ['nome' => 'Leo', 'email' => 'leo@mail.com'];\necho $user['email'];"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Implemente Type Hinting (tipagem de argumentos) em uma função para garantir que ela receba apenas inteiros.",
        solucao: "function somar(int $a, int $b): int {\n  return $a + $b;\n}"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Utilize a classe 'PDO' para estabelecer uma conexão segura com um banco de dados MySQL, prevenindo SQL Injection.",
        solucao: "$pdo = new PDO('mysql:host=localhost;dbname=teste', 'user', 'pass');"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Manipule dados JSON utilizando 'json_encode' e 'json_decode' para converter arrays PHP para o formato de troca de dados.",
        solucao: "$json = json_encode(['status' => 'ok']);\necho $json;"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Utilize a função 'file_put_contents' para escrever log em um arquivo de texto, demonstrando manipulação de sistema de arquivos.",
        solucao: "file_put_contents('log.txt', 'Erro 404', FILE_APPEND);"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Implemente o uso de Sessões com 'session_start' e '$_SESSION' para persistir dados do usuário entre requisições.",
        solucao: "session_start();\n$_SESSION['user_id'] = 123;"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Utilize a classe 'DateTime' para manipular datas e calcular a diferença (diff) entre dois momentos no tempo.",
        solucao: "$d1 = new DateTime();\n$d2 = new DateTime('+1 day');\necho $d1->diff($d2)->days;"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "Utilize o operador de coalescência nula (??) para atribuir um valor padrão caso uma variável não exista.",
        solucao: "$usuario = $_POST['user'] ?? 'Convidado';"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Implemente 'Namespaces' para organizar classes e evitar conflitos de nomes em projetos grandes.",
        solucao: "namespace App\\Models;\nclass User {}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Crie uma Classe Abstrata que force as classes filhas a implementarem um método específico, garantindo um contrato estrutural.",
        solucao: "abstract class Pagamento {\n  abstract public function processar();\n}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Utilize 'Traits' para reutilizar um conjunto de métodos em várias classes independentes, simulando herança múltipla horizontal.",
        solucao: "trait Log { function log($m) { echo $m; } }\nclass User { use Log; }"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Implemente uma função anônima (Closure) que capture variáveis do escopo pai utilizando a palavra-chave 'use'.",
        solucao: "$taxa = 10;\n$calc = function($v) use ($taxa) { return $v + $taxa; };"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Utilize 'Generators' com a palavra-chave 'yield' para processar grandes conjuntos de dados sem carregar tudo na memória.",
        solucao: "function lerLinhas() {\n  while($l = fgets($f)) yield $l;\n}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Implemente o método mágico '__call' para interceptar chamadas a métodos inexistentes e lidar com elas dinamicamente.",
        solucao: "public function __call($name, $args) {\n  echo \"Metodo $name nao existe\";\n}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Utilize a interface 'Throwable' em um bloco 'try/catch' para capturar tanto Exceções quanto Erros fatais (PHP 7+).",
        solucao: "try {\n  codPerigoso();\n} catch (Throwable $e) {\n  echo $e->getMessage();\n}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Implemente o padrão Singleton em PHP garantindo que o método construtor seja privado e a instância estática.",
        solucao: "class DB {\n  private static $inst;\n  private function __construct(){}\n  public static function get() { if(!self::$inst) self::$inst = new DB(); return self::$inst; }\n}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "Demonstre o uso de 'variadic functions' (Spread operator ...) para aceitar um número indefinido de argumentos em uma função.",
        solucao: "function somar(...$nums) {\n  return array_sum($nums);\n}"
    },

    // ==================================================================================
    // 8. GO (GOLANG) (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Utilize a declaração curta de variável (:=) para criar e inicializar uma string dentro de uma função.",
        solucao: "func main() {\n  msg := \"Ola Go\"\n  fmt.Println(msg)\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Crie um loop 'for' (única estrutura de repetição em Go) que simule um 'while' imprimindo números de 1 a 5.",
        solucao: "i := 1\nfor i <= 5 {\n  fmt.Println(i)\n  i++\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Implemente uma função que aceite dois inteiros e retorne a soma, declarando explicitamente os tipos.",
        solucao: "func somar(a int, b int) int {\n  return a + b\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Declare um array de tamanho fixo [3]int e atribua valores a ele, demonstrando a rigidez de arrays em Go.",
        solucao: "var arr [3]int\narr[0] = 10\nfmt.Println(arr)"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Utilize a estrutura 'if/else' para verificar se um número é par, sem usar parênteses na condição (idiomático em Go).",
        solucao: "if n%2 == 0 {\n  fmt.Println(\"Par\")\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Implemente um 'switch' case que avalie uma string e execute uma ação sem precisar de 'break' (automático em Go).",
        solucao: "switch dia {\ncase \"Seg\": fmt.Println(1)\ndefault: fmt.Println(0)\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Declare e utilize ponteiros básicos para imprimir o endereço de memória de uma variável.",
        solucao: "x := 10\np := &x\nfmt.Println(p)"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "Importe múltiplos pacotes ('fmt', 'math') em um único bloco 'import' parênteses.",
        solucao: "import (\n  \"fmt\"\n  \"math\"\n)"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Utilize 'Slices' para criar uma lista dinâmica e use a função 'append' para adicionar elementos.",
        solucao: "s := []int{1, 2}\ns = append(s, 3)\nfmt.Println(s)"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Crie um 'Map' para associar nomes (string) a idades (int) e acesse um valor pela chave.",
        solucao: "m := make(map[string]int)\nm[\"Ana\"] = 30\nfmt.Println(m[\"Ana\"])"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Defina uma 'Struct' para representar um 'Carro' e instancie-a com valores iniciais.",
        solucao: "type Carro struct {\n  Modelo string\n}\nc := Carro{Modelo: \"Fusca\"}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Crie um Método associado à struct 'Retangulo' (Receiver function) que calcule sua área.",
        solucao: "func (r Retangulo) Area() int {\n  return r.Lar * r.Alt\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Implemente uma função que retorne múltiplos valores (ex: resultado e erro), característica marcante de Go.",
        solucao: "func div(a, b int) (int, error) {\n  return a / b, nil\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Utilize a palavra-chave 'defer' para garantir que um arquivo seja fechado ao final da execução da função.",
        solucao: "f, _ := os.Open(\"file\")\ndefer f.Close()"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Use 'range' para iterar sobre um Slice obtendo o índice e o valor de cada elemento.",
        solucao: "nums := []int{10, 20}\nfor i, v := range nums {\n  fmt.Println(i, v)\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "Defina uma Interface 'Geometria' e implemente-a implicitamente em uma struct 'Quadrado'.",
        solucao: "type Geo interface { Area() int }\ntype Quad struct{}\nfunc (q Quad) Area() int { return 4 }"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Inicie uma 'Goroutine' usando a palavra-chave 'go' para executar uma função de forma assíncrona/concorrente.",
        solucao: "go func() {\n  fmt.Println(\"Rodando em paralelo\")\n}()"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Utilize Channels (canais) para enviar e receber dados entre goroutines de forma segura.",
        solucao: "ch := make(chan int)\ngo func() { ch <- 10 }()\nval := <-ch"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Implemente 'Buffered Channels' para permitir o envio de múltiplos dados sem bloquear o remetente imediatamente.",
        solucao: "ch := make(chan string, 2)\nch <- \"A\"\nch <- \"B\""
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Utilize a estrutura 'Select' para aguardar operações em múltiplos canais simultaneamente (multiplexação).",
        solucao: "select {\ncase msg1 := <-c1: fmt.Println(msg1)\ncase msg2 := <-c2: fmt.Println(msg2)\n}"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Use 'sync.WaitGroup' para sincronizar a finalização de múltiplas goroutines antes de encerrar o programa principal.",
        solucao: "var wg sync.WaitGroup\nwg.Add(1)\ngo func() { defer wg.Done(); }()\nwg.Wait()"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Implemente exclusão mútua com 'sync.Mutex' para evitar Race Conditions ao acessar uma variável compartilhada.",
        solucao: "var mu sync.Mutex\nmu.Lock()\ncontador++\nmu.Unlock()"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Crie e manipule erros customizados implementando a interface 'error' nativa.",
        solucao: "type MeuErro struct{}\nfunc (e MeuErro) Error() string { return \"Falha\" }"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Utilize o pacote 'encoding/json' para fazer o Marshal (serialização) de uma struct para JSON.",
        solucao: "b, _ := json.Marshal(p)\nfmt.Println(string(b))"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "Utilize Tags em structs (`json:\"nome\"`) para controlar como os campos são serializados para JSON.",
        solucao: "type User struct {\n  Nome string `json:\"name\"`\n}"
    },

    // ==================================================================================
    // 9. RUST (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Utilize a macro 'println!' para imprimir uma mensagem formatada no console, demonstrando a saída padrão em Rust.",
        solucao: "fn main() {\n  println!(\"Ola Rust\");\n}"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Declare uma variável imutável usando 'let' e tente reatribuí-la (comentado), demonstrando a segurança de imutabilidade padrão.",
        solucao: "let x = 5;\n// x = 6; // Isso causaria erro de compilação"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Declare uma variável mutável com 'mut' para permitir a alteração de seu valor posteriormente.",
        solucao: "let mut x = 5;\nx = 10;\nprintln!(\"{}\", x);"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Utilize 'Shadowing' para redeclarar uma variável com o mesmo nome, alterando seu tipo ou valor dentro do mesmo escopo.",
        solucao: "let x = 5;\nlet x = \"texto\"; // Shadowing permitindo mudança de tipo"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Crie uma Tupla para agrupar diferentes tipos de dados e acesse seus elementos por índice (ex: 0, 1).",
        solucao: "let t = (500, 6.4, 1);\nlet quinhentos = t.0;"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Implemente uma função que retorne um valor implicitamente (sem a palavra 'return', apenas a expressão final sem ponto e vírgula).",
        solucao: "fn cinco() -> i32 {\n  5 // Retorno implícito\n}"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Utilize um 'Array' de tamanho fixo e iterar sobre ele, demonstrando que arrays em Rust ficam na stack.",
        solucao: "let a = [1, 2, 3];\nprintln!(\"{}\", a[0]);"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "Implemente controle de fluxo com 'if' como uma expressão (atribuindo o resultado a uma variável).",
        solucao: "let numero = 3;\nlet resultado = if numero < 5 { \"menor\" } else { \"maior\" };"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Demonstre o conceito de 'Ownership' (Posse) ao mover uma String de uma variável para outra, invalidando a original.",
        solucao: "let s1 = String::from(\"texto\");\nlet s2 = s1;\n// println!(\"{}\", s1); // Erro: s1 foi movido"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Utilize 'References' (&) para emprestar (borrow) uma variável para uma função sem transferir a posse (Ownership).",
        solucao: "fn calc(s: &String) -> usize {\n  s.len()\n}"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Use 'Slices' para referenciar apenas uma parte contígua de uma String, sem copiar os dados.",
        solucao: "let s = String::from(\"Ola Mundo\");\nlet ola = &s[0..3];"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Defina uma 'Struct' para representar um Usuário e implemente um método associado a ela.",
        solucao: "struct User { nome: String }\nimpl User {\n  fn new(name: String) -> User {\n    User { nome: name }\n  }\n}"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Utilize o 'Enum' Option<T> para lidar com um valor que pode ser 'Some' (existente) ou 'None' (nulo seguro).",
        solucao: "let x: Option<i32> = Some(5);\nlet y: Option<i32> = None;"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Implemente a estrutura de controle 'Match' (semelhante ao switch) para lidar exaustivamente com os variantes de um Enum.",
        solucao: "match numero {\n  1 => println!(\"Um\"),\n  _ => println!(\"Outro\"),\n}"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Utilize 'Vectors' (Vec<T>) para criar uma lista dinâmica que pode crescer, armazenada na Heap.",
        solucao: "let mut v = Vec::new();\nv.push(5);\nv.push(6);"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "Manipule erros recuperáveis utilizando 'Result<T, E>' e o método 'expect' para tratar falhas.",
        solucao: "let f = File::open(\"hello.txt\");\nlet f = f.expect(\"Falha ao abrir\");"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Defina um 'Trait' (interface) que especifique um comportamento comum e implemente-o para diferentes tipos.",
        solucao: "pub trait Resumo {\n  fn resumir(&self) -> String;\n}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Utilize 'Generics' para criar uma função que funcione com qualquer tipo de dado, evitando duplicação de código.",
        solucao: "fn maior<T: PartialOrd>(list: &[T]) -> &T {\n  &list[0]\n}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Implemente 'Lifetimes' explicitos ('a) para garantir ao compilador que referências em uma função são válidas.",
        solucao: "fn long<'a>(x: &'a str, y: &'a str) -> &'a str {\n  if x.len() > y.len() { x } else { y }\n}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Utilize 'Closures' (funções anônimas) que capturam o ambiente ao seu redor para processamento flexível.",
        solucao: "let x = 4;\nlet equal_to_x = |z| z == x;\nassert!(equal_to_x(4));"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Use 'Iterators' e métodos funcionais como 'map' e 'collect' para transformar vetores de forma concisa.",
        solucao: "let v1 = vec![1, 2, 3];\nlet v2: Vec<_> = v1.iter().map(|x| x + 1).collect();"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Implemente ponteiros inteligentes com 'Box<T>' para alocar dados na Heap de forma recursiva (ex: Lista Ligada).",
        solucao: "enum List {\n  Cons(i32, Box<List>),\n  Nil,\n}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Utilize o operador '?' para propagar erros de forma curta em funções que retornam Result.",
        solucao: "fn read_user() -> Result<String, io::Error> {\n  let mut s = String::new();\n  File::open(\"u.txt\")?.read_to_string(&mut s)?;\n  Ok(s)\n}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Crie threads com 'std::thread::spawn' e utilize 'move' para transferir dados para a nova thread.",
        solucao: "let v = vec![1, 2];\nthread::spawn(move || {\n  println!(\"{:?}\", v);\n}).join().unwrap();"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "Implemente 'Message Passing' entre threads usando canais (mpsc), garantindo concorrência segura.",
        solucao: "let (tx, rx) = mpsc::channel();\nthread::spawn(move || { tx.send(\"msg\").unwrap(); });"
    },

    // ==================================================================================
    // 10. SQL (25 Exercícios)
    // ==================================================================================

    // --- BÁSICO (8) ---
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Utilize a cláusula 'SELECT *' para recuperar todas as colunas de uma tabela de usuários.",
        solucao: "SELECT * FROM usuarios;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Escreva uma consulta que retorne apenas colunas específicas (nome, email) para otimizar o tráfego de dados.",
        solucao: "SELECT nome, email FROM clientes;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Utilize a cláusula 'WHERE' para filtrar registros que atendam a uma condição específica (ex: idade > 18).",
        solucao: "SELECT * FROM pessoas WHERE idade > 18;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Use 'ORDER BY' junto com 'DESC' para ordenar os resultados por preço do maior para o menor.",
        solucao: "SELECT * FROM produtos ORDER BY preco DESC;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Implemente 'LIMIT' para restringir o número de linhas retornadas, útil para paginação.",
        solucao: "SELECT * FROM logs LIMIT 10;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Utilize a palavra-chave 'DISTINCT' para retornar apenas valores únicos de uma coluna, eliminando duplicatas.",
        solucao: "SELECT DISTINCT cidade FROM clientes;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Use a função de agregação 'COUNT' para contar quantos registros existem em uma tabela.",
        solucao: "SELECT COUNT(*) AS total FROM pedidos;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "Filtre dados utilizando operadores lógicos 'AND' e 'OR' para combinar múltiplas condições.",
        solucao: "SELECT * FROM itens WHERE categoria = 'A' AND preco < 50;"
    },

    // --- INTERMEDIÁRIO (8) ---
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Utilize 'INSERT INTO' para adicionar um novo registro à tabela especificando as colunas.",
        solucao: "INSERT INTO alunos (nome, nota) VALUES ('Ana', 9.5);"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Implemente 'UPDATE' para modificar o valor de uma coluna baseado em uma condição 'WHERE'.",
        solucao: "UPDATE produtos SET preco = 20 WHERE id = 100;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Use 'DELETE' com cuidado para remover registros que atendam a um critério.",
        solucao: "DELETE FROM temporarios WHERE data_expiracao < NOW();"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Utilize o operador 'LIKE' com curingas (%) para buscar padrões em strings (ex: emails que terminam em gmail.com).",
        solucao: "SELECT * FROM users WHERE email LIKE '%@gmail.com';"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Implemente 'GROUP BY' para agrupar resultados por uma categoria e usar funções de agregação como 'AVG'.",
        solucao: "SELECT departamento, AVG(salario) FROM funcionarios GROUP BY departamento;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Use 'HAVING' para filtrar os resultados de um agrupamento (diferente do WHERE que filtra antes de agrupar).",
        solucao: "SELECT vendedor, SUM(vendas) FROM historico GROUP BY vendedor HAVING SUM(vendas) > 10000;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Utilize 'Aliases' (AS) para renomear colunas ou tabelas temporariamente, melhorando a legibilidade.",
        solucao: "SELECT p.nome AS produto_nome FROM produtos p;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "Implemente um 'INNER JOIN' para combinar dados de duas tabelas relacionadas por uma chave estrangeira.",
        solucao: "SELECT p.nome, c.nome FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id;"
    },

    // --- AVANÇADO (9) ---
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Utilize 'LEFT JOIN' para retornar todos os registros da tabela da esquerda, mesmo que não haja correspondência na direita.",
        solucao: "SELECT c.nome, p.id FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Crie uma 'Subquery' (consulta aninhada) dentro da cláusula WHERE para filtrar baseada em outro resultado.",
        solucao: "SELECT * FROM produtos WHERE preco > (SELECT AVG(preco) FROM produtos);"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Utilize 'Common Table Expressions' (CTE) com a cláusula 'WITH' para criar tabelas temporárias legíveis.",
        solucao: "WITH VendasAltas AS (SELECT * FROM vendas WHERE valor > 500) SELECT * FROM VendasAltas;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Implemente 'Window Functions' como 'RANK()' ou 'ROW_NUMBER()' para classificar registros dentro de uma partição.",
        solucao: "SELECT nome, salario, RANK() OVER (ORDER BY salario DESC) as ranking FROM funcionarios;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Crie uma 'Stored Procedure' para encapsular lógica de negócios complexa no banco de dados.",
        solucao: "CREATE PROCEDURE AtualizarEstoque(id INT, qtd INT) BEGIN UPDATE produtos SET estoque = estoque - qtd WHERE prod_id = id; END;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Utilize 'Indexes' (Índices) para otimizar drasticamente a velocidade de busca em colunas frequentemente consultadas.",
        solucao: "CREATE INDEX idx_email_user ON usuarios(email);"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Implemente Transações com 'BEGIN TRANSACTION', 'COMMIT' e 'ROLLBACK' para garantir integridade atômica.",
        solucao: "BEGIN; UPDATE conta SET saldo = saldo - 100 WHERE id=1; UPDATE conta SET saldo = saldo + 100 WHERE id=2; COMMIT;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Crie uma 'View' para salvar uma consulta complexa como uma tabela virtual reutilizável.",
        solucao: "CREATE VIEW RelatorioVendas AS SELECT v.data, c.nome, v.total FROM vendas v JOIN clientes c ON v.cliente_id = c.id;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "Defina um 'Trigger' para executar uma ação automática (como log) antes ou depois de uma inserção/atualização.",
        solucao: "CREATE TRIGGER LogUpdate AFTER UPDATE ON produtos FOR EACH ROW INSERT INTO logs (msg) VALUES ('Produto atualizado');"
    }
];

export default exercicios;