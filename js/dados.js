const exercicios = [
    // ==========================================
    // 1. JAVASCRIPT
    // ==========================================
    // Básico
    { linguagem: "javascript", nivel: "basico", enunciado: "Crie uma função que receba um nome e retorne 'Olá, [nome]!'.", solucao: "function saudacao(nome) {\n  return `Olá, ${nome}!`;\n}" },
    { linguagem: "javascript", nivel: "basico", enunciado: "Crie uma função que receba dois números e retorne a soma deles.", solucao: "function somar(a, b) {\n  return a + b;\n}" },
    { linguagem: "javascript", nivel: "basico", enunciado: "Verifique se um número é par ou ímpar.", solucao: "function verificarPar(n) {\n  return n % 2 === 0 ? 'Par' : 'Ímpar';\n}" },
    { linguagem: "javascript", nivel: "basico", enunciado: "Converta uma temperatura de Celsius para Fahrenheit.", solucao: "function celsiusParaFahrenheit(c) {\n  return c * 1.8 + 32;\n}" },
    { linguagem: "javascript", nivel: "basico", enunciado: "Retorne o maior número entre dois valores.", solucao: "function maior(a, b) {\n  return a > b ? a : b;\n}" },
    // Intermediário
    { linguagem: "javascript", nivel: "intermediario", enunciado: "Filtre apenas os números positivos de um array.", solucao: "const filtrarPositivos = arr => arr.filter(n => n > 0);" },
    { linguagem: "javascript", nivel: "intermediario", enunciado: "Inverta uma string (ex: 'amor' -> 'roma').", solucao: "function inverter(str) {\n  return str.split('').reverse().join('');\n}" },
    { linguagem: "javascript", nivel: "intermediario", enunciado: "Verifique se uma palavra é um palíndromo.", solucao: "function ehPalindromo(str) {\n  const invertida = str.split('').reverse().join('');\n  return str === invertida;\n}" },
    { linguagem: "javascript", nivel: "intermediario", enunciado: "Crie um contador usando closures.", solucao: "function criarContador() {\n  let cont = 0;\n  return () => ++cont;\n}" },
    { linguagem: "javascript", nivel: "intermediario", enunciado: "Remova itens duplicados de um array.", solucao: "const unicos = arr => [...new Set(arr)];" },
    // Avançado
    { linguagem: "javascript", nivel: "avancado", enunciado: "Implemente uma função de 'debounce'.", solucao: "function debounce(fn, delay) {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  };\n}" },
    { linguagem: "javascript", nivel: "avancado", enunciado: "Faça uma chamada de API usando async/await e trate erros.", solucao: "async function buscarDados(url) {\n  try {\n    const res = await fetch(url);\n    return await res.json();\n  } catch (e) {\n    console.error(e);\n  }\n}" },
    { linguagem: "javascript", nivel: "avancado", enunciado: "Crie uma Promise manual que resolve após 2 segundos.", solucao: "const esperar = () => new Promise(res => setTimeout(res, 2000));" },
    { linguagem: "javascript", nivel: "avancado", enunciado: "Implemente uma função de 'deep clone' (cópia profunda) simples.", solucao: "const deepClone = obj => JSON.parse(JSON.stringify(obj));" },
    { linguagem: "javascript", nivel: "avancado", enunciado: "Use Generators para criar uma sequência infinita de ID.", solucao: "function* idGenerator() {\n  let i = 0;\n  while(true) yield i++;\n}" },

    // ==========================================
    // 2. PYTHON
    // ==========================================
    // Básico
    { linguagem: "python", nivel: "basico", enunciado: "Imprima 'Olá Mundo' na tela.", solucao: "print('Olá Mundo')" },
    { linguagem: "python", nivel: "basico", enunciado: "Peça um número e mostre o dobro.", solucao: "num = float(input('Numero: '))\nprint(num * 2)" },
    { linguagem: "python", nivel: "basico", enunciado: "Verifique se um número é positivo.", solucao: "n = 5\nif n > 0:\n    print('Positivo')" },
    { linguagem: "python", nivel: "basico", enunciado: "Crie uma lista com 3 frutas.", solucao: "frutas = ['maçã', 'banana', 'uva']" },
    { linguagem: "python", nivel: "basico", enunciado: "Some dois números digitados.", solucao: "a = int(input())\nb = int(input())\nprint(a + b)" },
    // Intermediário
    { linguagem: "python", nivel: "intermediario", enunciado: "Crie uma função que calcule o fatorial de um número.", solucao: "def fatorial(n):\n    if n == 0: return 1\n    return n * fatorial(n-1)" },
    { linguagem: "python", nivel: "intermediario", enunciado: "Conte quantas vogais existem em uma string.", solucao: "def contar_vogais(texto):\n    return sum(1 for c in texto if c.lower() in 'aeiou')" },
    { linguagem: "python", nivel: "intermediario", enunciado: "Crie um dicionário representando um aluno.", solucao: "aluno = {'nome': 'Ana', 'nota': 9.5}" },
    { linguagem: "python", nivel: "intermediario", enunciado: "Escreva em um arquivo de texto.", solucao: "with open('arquivo.txt', 'w') as f:\n    f.write('Olá arquivo')" },
    { linguagem: "python", nivel: "intermediario", enunciado: "Use List Comprehension para criar lista de pares.", solucao: "pares = [x for x in range(10) if x % 2 == 0]" },
    // Avançado
    { linguagem: "python", nivel: "avancado", enunciado: "Crie um Decorator que mede tempo de execução.", solucao: "import time\ndef timer(func):\n    def wrapper(*args):\n        start = time.time()\n        res = func(*args)\n        print(time.time() - start)\n        return res\n    return wrapper" },
    { linguagem: "python", nivel: "avancado", enunciado: "Use Generators para sequência de Fibonacci.", solucao: "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b" },
    { linguagem: "python", nivel: "avancado", enunciado: "Manipule exceções customizadas.", solucao: "class ErroCustom(Exception): pass\nraise ErroCustom('Erro!')" },
    { linguagem: "python", nivel: "avancado", enunciado: "Faça uma requisição HTTP com 'requests'.", solucao: "import requests\nres = requests.get('https://api.com')\nprint(res.json())" },
    { linguagem: "python", nivel: "avancado", enunciado: "Use classes abstratas (ABC).", solucao: "from abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def som(self): pass" },

    // ==========================================
    // 3. JAVA
    // ==========================================
    // Básico
    { linguagem: "java", nivel: "basico", enunciado: "Imprima 'Java é legal' no console.", solucao: "System.out.println(\"Java é legal\");" },
    { linguagem: "java", nivel: "basico", enunciado: "Declare uma variável inteira e imprima.", solucao: "int idade = 25;\nSystem.out.println(idade);" },
    { linguagem: "java", nivel: "basico", enunciado: "Use um loop 'for' de 1 a 10.", solucao: "for(int i=1; i<=10; i++) {\n  System.out.println(i);\n}" },
    { linguagem: "java", nivel: "basico", enunciado: "Verifique se idade é maior que 18.", solucao: "if(idade >= 18) System.out.println(\"Maior\");" },
    { linguagem: "java", nivel: "basico", enunciado: "Crie um array de Strings.", solucao: "String[] nomes = {\"Ana\", \"Bia\"};" },
    // Intermediário
    { linguagem: "java", nivel: "intermediario", enunciado: "Crie uma classe 'Carro' com atributos.", solucao: "class Carro {\n  String modelo;\n  int ano;\n}" },
    { linguagem: "java", nivel: "intermediario", enunciado: "Use ArrayList para guardar nomes.", solucao: "ArrayList<String> lista = new ArrayList<>();\nlista.add(\"Java\");" },
    { linguagem: "java", nivel: "intermediario", enunciado: "Trate uma exceção com Try-Catch.", solucao: "try {\n  int x = 1/0;\n} catch(Exception e) {\n  System.out.println(\"Erro\");\n}" },
    { linguagem: "java", nivel: "intermediario", enunciado: "Crie um método estático de soma.", solucao: "public static int soma(int a, int b) {\n  return a + b;\n}" },
    { linguagem: "java", nivel: "intermediario", enunciado: "Leia input do usuário com Scanner.", solucao: "Scanner sc = new Scanner(System.in);\nString texto = sc.nextLine();" },
    // Avançado
    { linguagem: "java", nivel: "avancado", enunciado: "Use Streams para filtrar lista.", solucao: "lista.stream().filter(s -> s.startsWith(\"A\")).collect(Collectors.toList());" },
    { linguagem: "java", nivel: "avancado", enunciado: "Implemente uma Interface Funcional.", solucao: "@FunctionalInterface\ninterface Operacao {\n  int executar(int a, int b);\n}" },
    { linguagem: "java", nivel: "avancado", enunciado: "Use Threads com Runnable.", solucao: "new Thread(() -> System.out.println(\"Rodando\")).start();" },
    { linguagem: "java", nivel: "avancado", enunciado: "Crie um Singleton.", solucao: "class Singleton {\n  private static final Singleton INSTANCE = new Singleton();\n  private Singleton(){}\n  public static Singleton get() { return INSTANCE; }\n}" },
    { linguagem: "java", nivel: "avancado", enunciado: "Use Generics em uma classe.", solucao: "class Caixa<T> {\n  private T obj;\n  public void set(T t) { this.obj = t; }\n}" },

    // ==========================================
    // 4. TYPESCRIPT
    // ==========================================
    // Básico
    { linguagem: "typescript", nivel: "basico", enunciado: "Tipar uma variável como string.", solucao: "let nome: string = 'Carlos';" },
    { linguagem: "typescript", nivel: "basico", enunciado: "Crie uma função com tipos nos parâmetros.", solucao: "function soma(a: number, b: number): number {\n  return a + b;\n}" },
    { linguagem: "typescript", nivel: "basico", enunciado: "Defina um Array de números.", solucao: "let numeros: number[] = [1, 2, 3];" },
    { linguagem: "typescript", nivel: "basico", enunciado: "Crie uma Enum de Cores.", solucao: "enum Cores { Verde, Amarelo, Azul };" },
    { linguagem: "typescript", nivel: "basico", enunciado: "Use 'any' (com moderação).", solucao: "let valor: any = 5;\nvalor = 'texto';" },
    // Intermediário
    { linguagem: "typescript", nivel: "intermediario", enunciado: "Crie uma Interface para 'Usuário'.", solucao: "interface Usuario {\n  nome: string;\n  idade: number;\n}" },
    { linguagem: "typescript", nivel: "intermediario", enunciado: "Use Union Types (string ou number).", solucao: "let id: string | number;\nid = 10; id = 'abc';" },
    { linguagem: "typescript", nivel: "intermediario", enunciado: "Crie um Type Alias.", solucao: "type Ponto = { x: number; y: number };" },
    { linguagem: "typescript", nivel: "intermediario", enunciado: "Use Optional chaining.", solucao: "console.log(usuario?.endereco?.rua);" },
    { linguagem: "typescript", nivel: "intermediario", enunciado: "Tipar o retorno de uma Promise.", solucao: "async function get(): Promise<string> {\n  return 'ok';\n}" },
    // Avançado
    { linguagem: "typescript", nivel: "avancado", enunciado: "Use Generics em uma função.", solucao: "function identidade<T>(arg: T): T {\n  return arg;\n}" },
    { linguagem: "typescript", nivel: "avancado", enunciado: "Crie um Utility Type 'Partial'.", solucao: "type UsuarioParcial = Partial<Usuario>;" },
    { linguagem: "typescript", nivel: "avancado", enunciado: "Use Decorators de classe.", solucao: "@Component\nclass MinhaClasse {}" },
    { linguagem: "typescript", nivel: "avancado", enunciado: "Manipule 'keyof'.", solucao: "function getProp<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }" },
    { linguagem: "typescript", nivel: "avancado", enunciado: "Use Mapped Types.", solucao: "type ReadOnly<T> = { readonly [P in keyof T]: T[P] };" },

    // ==========================================
    // 5. C# (CSHARP)
    // ==========================================
    // Básico
    { linguagem: "csharp", nivel: "basico", enunciado: "Imprima 'Hello World'.", solucao: "Console.WriteLine(\"Hello World\");" },
    { linguagem: "csharp", nivel: "basico", enunciado: "Leia uma linha do console.", solucao: "string input = Console.ReadLine();" },
    { linguagem: "csharp", nivel: "basico", enunciado: "Declare um inteiro anulável (nullable).", solucao: "int? numero = null;" },
    { linguagem: "csharp", nivel: "basico", enunciado: "Use interpolação de strings.", solucao: "string msg = $\"Nome: {nome}\";" },
    { linguagem: "csharp", nivel: "basico", enunciado: "Converta string para int.", solucao: "int num = int.Parse(\"10\");" },
    // Intermediário
    { linguagem: "csharp", nivel: "intermediario", enunciado: "Crie uma Propriedade automática.", solucao: "public int Idade { get; set; }" },
    { linguagem: "csharp", nivel: "intermediario", enunciado: "Use LINQ para filtrar lista.", solucao: "var pares = lista.Where(n => n % 2 == 0).ToList();" },
    { linguagem: "csharp", nivel: "intermediario", enunciado: "Crie um método de extensão.", solucao: "public static bool IsPar(this int i) => i % 2 == 0;" },
    { linguagem: "csharp", nivel: "intermediario", enunciado: "Use StringBuilder para concatenar.", solucao: "var sb = new StringBuilder();\nsb.Append(\"Olá\");" },
    { linguagem: "csharp", nivel: "intermediario", enunciado: "Trate exceções.", solucao: "try { } catch(Exception ex) { }" },
    // Avançado
    { linguagem: "csharp", nivel: "avancado", enunciado: "Use Async / Await.", solucao: "public async Task<string> GetAsync() {\n  await Task.Delay(1000);\n  return \"Done\";\n}" },
    { linguagem: "csharp", nivel: "avancado", enunciado: "Crie um Record (C# 9+).", solucao: "public record Pessoa(string Nome, int Idade);" },
    { linguagem: "csharp", nivel: "avancado", enunciado: "Use Delegates e Events.", solucao: "public event EventHandler Click;" },
    { linguagem: "csharp", nivel: "avancado", enunciado: "Use Pattern Matching.", solucao: "if (obj is Pessoa p) { Console.WriteLine(p.Nome); }" },
    { linguagem: "csharp", nivel: "avancado", enunciado: "Injeção de Dependência manual.", solucao: "public Servico(IRepository repo) { _repo = repo; }" },

    // ==========================================
    // 6. C++ (CPP)
    // ==========================================
    // Básico
    { linguagem: "cpp", nivel: "basico", enunciado: "Imprima 'Ola' com cout.", solucao: "std::cout << \"Ola\" << std::endl;" },
    { linguagem: "cpp", nivel: "basico", enunciado: "Receba input com cin.", solucao: "int x; std::cin >> x;" },
    { linguagem: "cpp", nivel: "basico", enunciado: "Crie um loop for simples.", solucao: "for(int i=0; i<5; i++) {}" },
    { linguagem: "cpp", nivel: "basico", enunciado: "Declare um ponteiro nulo.", solucao: "int* ptr = nullptr;" },
    { linguagem: "cpp", nivel: "basico", enunciado: "Crie uma referência.", solucao: "int a = 10; int& ref = a;" },
    // Intermediário
    { linguagem: "cpp", nivel: "intermediario", enunciado: "Crie uma classe com construtor.", solucao: "class A { public: A() {} };" },
    { linguagem: "cpp", nivel: "intermediario", enunciado: "Use std::vector.", solucao: "std::vector<int> v = {1, 2, 3};\nv.push_back(4);" },
    { linguagem: "cpp", nivel: "intermediario", enunciado: "Use std::string.", solucao: "std::string s = \"Texto\";" },
    { linguagem: "cpp", nivel: "intermediario", enunciado: "Leia arquivos.", solucao: "std::ifstream file(\"dados.txt\");" },
    { linguagem: "cpp", nivel: "intermediario", enunciado: "Aloque memória com new/delete.", solucao: "int* p = new int; delete p;" },
    // Avançado
    { linguagem: "cpp", nivel: "avancado", enunciado: "Use Smart Pointers (unique_ptr).", solucao: "std::unique_ptr<int> p(new int(5));" },
    { linguagem: "cpp", nivel: "avancado", enunciado: "Use Templates.", solucao: "template <typename T> T soma(T a, T b) { return a+b; }" },
    { linguagem: "cpp", nivel: "avancado", enunciado: "Use Lambda Functions.", solucao: "auto func = [](int x) { return x*x; };" },
    { linguagem: "cpp", nivel: "avancado", enunciado: "Implemente Move Semantics.", solucao: "A(A&& other) noexcept { ... }" },
    { linguagem: "cpp", nivel: "avancado", enunciado: "Use std::map.", solucao: "std::map<string, int> m; m[\"chave\"] = 1;" },

    // ==========================================
    // 7. PHP
    // ==========================================
    // Básico
    { linguagem: "php", nivel: "basico", enunciado: "Imprima texto na tela.", solucao: "echo 'Olá Mundo';" },
    { linguagem: "php", nivel: "basico", enunciado: "Declare uma variável.", solucao: "$nome = 'João';" },
    { linguagem: "php", nivel: "basico", enunciado: "Crie um array simples.", solucao: "$arr = [1, 2, 3];" },
    { linguagem: "php", nivel: "basico", enunciado: "Concatene strings.", solucao: "$nome = 'Olá' . ' Mundo';" },
    { linguagem: "php", nivel: "basico", enunciado: "Use if/else.", solucao: "if($x > 0) { echo 'Maior'; }" },
    // Intermediário
    { linguagem: "php", nivel: "intermediario", enunciado: "Crie um Array Associativo.", solucao: "$user = ['nome' => 'Ana', 'id' => 1];" },
    { linguagem: "php", nivel: "intermediario", enunciado: "Crie uma função com Type Hint.", solucao: "function soma(int $a, int $b): int { return $a + $b; }" },
    { linguagem: "php", nivel: "intermediario", enunciado: "Conecte ao banco com PDO.", solucao: "$pdo = new PDO('mysql:host=l;dbname=d', 'u', 'p');" },
    { linguagem: "php", nivel: "intermediario", enunciado: "Leia parâmetros GET da URL.", solucao: "$id = $_GET['id'] ?? 0;" },
    { linguagem: "php", nivel: "intermediario", enunciado: "Manipule JSON.", solucao: "$json = json_encode(['a' => 1]);" },
    // Avançado
    { linguagem: "php", nivel: "avancado", enunciado: "Use Namespaces.", solucao: "namespace App\\Controllers;" },
    { linguagem: "php", nivel: "avancado", enunciado: "Implemente uma Classe Abstrata.", solucao: "abstract class Animal { abstract public function som(); }" },
    { linguagem: "php", nivel: "avancado", enunciado: "Use Traits.", solucao: "trait Log { function msg($s) { echo $s; } }" },
    { linguagem: "php", nivel: "avancado", enunciado: "Use Closures (Funções anônimas).", solucao: "$dobro = function($n) { return $n * 2; };" },
    { linguagem: "php", nivel: "avancado", enunciado: "Manipule Sessões.", solucao: "session_start();\n$_SESSION['user'] = 'Admin';" },

    // ==========================================
    // 8. GO (GOLANG)
    // ==========================================
    // Básico
    { linguagem: "go", nivel: "basico", enunciado: "Imprima no console.", solucao: "fmt.Println(\"Olá Go\")" },
    { linguagem: "go", nivel: "basico", enunciado: "Declare variável com inferência.", solucao: "x := 10" },
    { linguagem: "go", nivel: "basico", enunciado: "Crie um loop for (único loop em Go).", solucao: "for i := 0; i < 5; i++ { }" },
    { linguagem: "go", nivel: "basico", enunciado: "Declare um array fixo.", solucao: "var arr [5]int" },
    { linguagem: "go", nivel: "basico", enunciado: "Crie uma função simples.", solucao: "func soma(a int, b int) int { return a + b }" },
    // Intermediário
    { linguagem: "go", nivel: "intermediario", enunciado: "Use Slices (array dinâmico).", solucao: "s := []int{1, 2, 3}\ns = append(s, 4)" },
    { linguagem: "go", nivel: "intermediario", enunciado: "Crie um Map.", solucao: "m := make(map[string]int)\nm[\"k\"] = 10" },
    { linguagem: "go", nivel: "intermediario", enunciado: "Crie uma Struct.", solucao: "type Pessoa struct {\n  Nome string\n}" },
    { linguagem: "go", nivel: "intermediario", enunciado: "Retorne múltiplos valores.", solucao: "func vals() (int, int) { return 3, 7 }" },
    { linguagem: "go", nivel: "intermediario", enunciado: "Use Ponteiros.", solucao: "i := 1\np := &i\n*p = 2" },
    // Avançado
    { linguagem: "go", nivel: "avancado", enunciado: "Crie uma Goroutine.", solucao: "go func() { fmt.Println(\"Async\") }()" },
    { linguagem: "go", nivel: "avancado", enunciado: "Use Channels.", solucao: "c := make(chan int)\ngo func() { c <- 1 }()\nval := <-c" },
    { linguagem: "go", nivel: "avancado", enunciado: "Implemente uma Interface.", solucao: "type Geo interface {\n  Area() float64\n}" },
    { linguagem: "go", nivel: "avancado", enunciado: "Trate erros de forma idiomática.", solucao: "if err != nil {\n  log.Fatal(err)\n}" },
    { linguagem: "go", nivel: "avancado", enunciado: "Use Defer para limpeza.", solucao: "f, _ := os.Open(\"f\")\ndefer f.Close()" },

    // ==========================================
    // 9. RUST
    // ==========================================
    // Básico
    { linguagem: "rust", nivel: "basico", enunciado: "Imprima com macro println.", solucao: "println!(\"Hello Rust\");" },
    { linguagem: "rust", nivel: "basico", enunciado: "Declare variável imutável.", solucao: "let x = 5;" },
    { linguagem: "rust", nivel: "basico", enunciado: "Declare variável mutável.", solucao: "let mut x = 5;\nx = 6;" },
    { linguagem: "rust", nivel: "basico", enunciado: "Função com retorno.", solucao: "fn cinco() -> i32 { 5 }" },
    { linguagem: "rust", nivel: "basico", enunciado: "Use Pattern Matching simples.", solucao: "match x {\n  1 => println!(\"Um\"),\n  _ => println!(\"Outro\"),\n}" },
    // Intermediário
    { linguagem: "rust", nivel: "intermediario", enunciado: "Use Vector (Vec).", solucao: "let mut v = vec![1, 2, 3];\nv.push(4);" },
    { linguagem: "rust", nivel: "intermediario", enunciado: "Crie uma Struct.", solucao: "struct User {\n  username: String,\n}" },
    { linguagem: "rust", nivel: "intermediario", enunciado: "Entenda Ownership (movimentação).", solucao: "let s1 = String::from(\"Ola\");\nlet s2 = s1; // s1 invalido agora" },
    { linguagem: "rust", nivel: "intermediario", enunciado: "Use Borrowing (referências).", solucao: "fn len(s: &String) -> usize { s.len() }" },
    { linguagem: "rust", nivel: "intermediario", enunciado: "Use Enums com dados.", solucao: "enum Ip { V4(u8,u8,u8,u8), V6(String) }" },
    // Avançado
    { linguagem: "rust", nivel: "avancado", enunciado: "Trate erros com Result.", solucao: "fn div(a:i32, b:i32) -> Result<i32, String> { ... }" },
    { linguagem: "rust", nivel: "avancado", enunciado: "Use o operador '?' para erros.", solucao: "File::open(\"a.txt\")?;" },
    { linguagem: "rust", nivel: "avancado", enunciado: "Use Traits (Interfaces).", solucao: "trait Resumo { fn resumir(&self) -> String; }" },
    { linguagem: "rust", nivel: "avancado", enunciado: "Use Lifetimes explicitos.", solucao: "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str { ... }" },
    { linguagem: "rust", nivel: "avancado", enunciado: "Closures e Iterators.", solucao: "v.iter().map(|x| x + 1).collect();" },

    // ==========================================
    // 10. SQL
    // ==========================================
    // Básico
    { linguagem: "sql", nivel: "basico", enunciado: "Selecione todos os dados da tabela 'users'.", solucao: "SELECT * FROM users;" },
    { linguagem: "sql", nivel: "basico", enunciado: "Selecione apenas nome e email de 'clientes'.", solucao: "SELECT nome, email FROM clientes;" },
    { linguagem: "sql", nivel: "basico", enunciado: "Filtre usuários ativos (status = 1).", solucao: "SELECT * FROM usuarios WHERE status = 1;" },
    { linguagem: "sql", nivel: "basico", enunciado: "Ordene produtos por preço decrescente.", solucao: "SELECT * FROM produtos ORDER BY preco DESC;" },
    { linguagem: "sql", nivel: "basico", enunciado: "Conte quantos registros existem na tabela.", solucao: "SELECT COUNT(*) FROM vendas;" },
    // Intermediário
    { linguagem: "sql", nivel: "intermediario", enunciado: "Use INNER JOIN para unir 'pedidos' e 'clientes'.", solucao: "SELECT * FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id;" },
    { linguagem: "sql", nivel: "intermediario", enunciado: "Agrupe vendas por vendedor e some o total.", solucao: "SELECT vendedor, SUM(total) FROM vendas GROUP BY vendedor;" },
    { linguagem: "sql", nivel: "intermediario", enunciado: "Insira um novo registro.", solucao: "INSERT INTO alunos (nome, idade) VALUES ('Ana', 20);" },
    { linguagem: "sql", nivel: "intermediario", enunciado: "Atualize o salário de um funcionário.", solucao: "UPDATE funcionarios SET salario = 3000 WHERE id = 5;" },
    { linguagem: "sql", nivel: "intermediario", enunciado: "Delete registros antigos.", solucao: "DELETE FROM logs WHERE data < '2023-01-01';" },
    // Avançado
    { linguagem: "sql", nivel: "avancado", enunciado: "Use uma Subquery no WHERE.", solucao: "SELECT * FROM produtos WHERE preco > (SELECT AVG(preco) FROM produtos);" },
    { linguagem: "sql", nivel: "avancado", enunciado: "Use LEFT JOIN para achar registros sem correspondência.", solucao: "SELECT c.nome FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id WHERE p.id IS NULL;" },
    { linguagem: "sql", nivel: "avancado", enunciado: "Crie uma Stored Procedure.", solucao: "CREATE PROCEDURE ver_estoque() BEGIN SELECT * FROM estoque; END;" },
    { linguagem: "sql", nivel: "avancado", enunciado: "Use funções de janela (Window Functions).", solucao: "SELECT nome, salario, RANK() OVER (ORDER BY salario DESC) FROM func;" },
    { linguagem: "sql", nivel: "avancado", enunciado: "Crie um índice para otimizar busca.", solucao: "CREATE INDEX idx_email ON usuarios(email);" }
];

export default exercicios;