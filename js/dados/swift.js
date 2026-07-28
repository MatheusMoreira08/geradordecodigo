const swift = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Escreva um programa Swift que exibe 'Olá, Mundo!' no console.",
    solucao: `import Foundation

print("Olá, Mundo!")`,
  },
  {
    nivel: "basico",
    enunciado: "Declare constantes e variáveis com let e var e use string interpolation.",
    solucao: `let nome = "Matheus"
var idade = 25
let altura: Double = 1.75

print("\\(nome) tem \\(idade) anos e \\(altura)m")
idade = 26
print("Novo: \\(idade)")`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um array de strings e percorra com for-in.",
    solucao: `let nomes = ["Matheus", "João", "Maria"]
for nome in nomes {
    print(nome)
}
print("Total: \\(nomes.count)")`,
  },
  {
    nivel: "basico",
    enunciado: "Use Optional para representar um valor que pode ser nulo.",
    solucao: `var email: String? = nil

// Optional binding:
if let e = email {
    print("Email: \\(e)")
} else {
    print("Sem email")
}

// Nil coalescing:
let exibir = email ?? "não informado"
print(exibir)`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma struct para representar um Produto com nome e preço.",
    solucao: `struct Produto {
    let nome: String
    var preco: Double

    func descricao() -> String {
        return "\\(nome): R$ \\(String(format: "%.2f", preco))"
    }
}

let p = Produto(nome: "Notebook", preco: 3500.00)
print(p.descricao())`,
  },
  {
    nivel: "basico",
    enunciado: "Use switch com pattern matching para classificar um número.",
    solucao: `let numero = 42

switch numero {
case ..<0:
    print("Negativo")
case 0:
    print("Zero")
case 1...10:
    print("Pequeno")
case 11...100:
    print("Médio")
default:
    print("Grande")
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma enum com casos associados para representar formas geométricas.",
    solucao: `enum Forma {
    case circulo(raio: Double)
    case retangulo(largura: Double, altura: Double)
    case triangulo(base: Double, altura: Double)
}

func calcularArea(_ forma: Forma) -> Double {
    switch forma {
    case .circulo(let r):
        return .pi * r * r
    case .retangulo(let l, let a):
        return l * a
    case .triangulo(let b, let a):
        return (b * a) / 2
    }
}

print(calcularArea(.circulo(raio: 5)))`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função com múltiplos retornos usando tupla.",
    solucao: `func dividir(_ a: Double, _ b: Double) -> (quociente: Double, resto: Double)? {
    guard b != 0 else { return nil }
    return (quociente: a / b, resto: a.truncatingRemainder(dividingBy: b))
}

if let resultado = dividir(17, 5) {
    print("Quociente: \\(resultado.quociente)")
    print("Resto: \\(resultado.resto)")
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use guard let para early return em funções.",
    solucao: `func processarUsuario(nome: String?, email: String?) {
    guard let nome = nome, !nome.isEmpty else {
        print("Nome inválido")
        return
    }
    guard let email = email, email.contains("@") else {
        print("Email inválido")
        return
    }
    print("Processando \\(nome) <\\(email)>")
}

processarUsuario(nome: "Matheus", email: "m@email.com")
processarUsuario(nome: nil, email: "m@email.com")`,
  },
  {
    nivel: "basico",
    enunciado: "Use closures como parâmetros de funções de alta ordem.",
    solucao: `let numeros = [5, 2, 8, 1, 9, 3]

let ordenados  = numeros.sorted { $0 < $1 }
let dobrados   = numeros.map    { $0 * 2 }
let pares      = numeros.filter { $0 % 2 == 0 }
let soma       = numeros.reduce(0, +)

print("Ordenados: \\(ordenados)")
print("Dobrados:  \\(dobrados)")
print("Pares:     \\(pares)")
print("Soma:      \\(soma)")`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Crie um protocolo Descritivel e implemente-o em várias structs.",
    solucao: `protocol Descritivel {
    var descricao: String { get }
}

struct Usuario: Descritivel {
    let nome: String
    var descricao: String { "Usuário: \\(nome)" }
}

struct Produto: Descritivel {
    let titulo: String
    let preco: Double
    var descricao: String { "\\(titulo) por R$\\(preco)" }
}

func exibir(_ item: Descritivel) { print(item.descricao) }

exibir(Usuario(nome: "Matheus"))
exibir(Produto(titulo: "iPhone", preco: 7999.00))`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use extensions para adicionar funcionalidades a tipos existentes.",
    solucao: `extension String {
    var isPalindromo: Bool {
        let limpo = self.lowercased().filter { $0.isLetter }
        return limpo == String(limpo.reversed())
    }

    func repetir(_ vezes: Int) -> String {
        return String(repeating: self + " ", count: vezes).trimmingCharacters(in: .whitespace)
    }
}

extension Int {
    var ehPrimo: Bool {
        guard self > 1 else { return false }
        return !(2..<self).contains { self % $0 == 0 }
    }
}

print("arara".isPalindromo) // true
print("Swift".repetir(3))   // Swift Swift Swift
print(7.ehPrimo)             // true`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente tratamento de erros com throws, try e catch.",
    solucao: `enum ErroRede: Error {
    case semConexao
    case timeout(segundos: Int)
    case statusHTTP(codigo: Int)
}

func buscarDados(url: String) throws -> String {
    guard url.hasPrefix("https") else {
        throw ErroRede.statusHTTP(codigo: 400)
    }
    // Simula falha
    throw ErroRede.timeout(segundos: 30)
}

do {
    let dados = try buscarDados(url: "https://api.exemplo.com")
    print(dados)
} catch ErroRede.timeout(let s) {
    print("Timeout após \\(s)s")
} catch ErroRede.statusHTTP(let c) {
    print("Erro HTTP \\(c)")
} catch {
    print("Erro desconhecido: \\(error)")
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use generics para criar uma estrutura de dados Stack.",
    solucao: `struct Stack<T> {
    private var elementos: [T] = []

    var isEmpty: Bool { elementos.isEmpty }
    var topo: T?      { elementos.last }

    mutating func push(_ item: T) { elementos.append(item) }
    mutating func pop() -> T?    { elementos.popLast() }
}

var pilha = Stack<Int>()
pilha.push(1); pilha.push(2); pilha.push(3)
print(pilha.topo ?? "vazia") // 3
pilha.pop()
print(pilha.topo ?? "vazia") // 2`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use Codable para serializar e desserializar JSON.",
    solucao: `import Foundation

struct Usuario: Codable {
    let id: Int
    let nome: String
    let email: String
}

let json = """
{"id": 1, "nome": "Matheus", "email": "m@email.com"}
""".data(using: .utf8)!

let decoder = JSONDecoder()
let usuario = try! decoder.decode(Usuario.self, from: json)
print("\\(usuario.nome) - \\(usuario.email)")

let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
let data = try! encoder.encode(usuario)
print(String(data: data, encoding: .utf8)!)`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente o padrão Delegate com protocol.",
    solucao: `protocol BotaoDelegate: AnyObject {
    func botaoFoiPressionado(id: String)
}

class Botao {
    weak var delegate: BotaoDelegate?
    let id: String

    init(id: String) { self.id = id }
    func pressionar() { delegate?.botaoFoiPressionado(id: id) }
}

class ViewController: BotaoDelegate {
    func botaoFoiPressionado(id: String) {
        print("Botão \\(id) pressionado na ViewController")
    }
}

let vc = ViewController()
let btn = Botao(id: "login")
btn.delegate = vc
btn.pressionar()`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use async/await com Swift Concurrency para requisições assíncronas.",
    solucao: `import Foundation

struct Post: Codable {
    let id: Int
    let title: String
}

func buscarPost(id: Int) async throws -> Post {
    let url = URL(string: "https://jsonplaceholder.typicode.com/posts/\\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(Post.self, from: data)
}

// Uso em Task:
Task {
    do {
        let post = try await buscarPost(id: 1)
        print("Post: \\(post.title)")
    } catch {
        print("Erro: \\(error)")
    }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma SwiftUI View básica com estado reativo usando @State.",
    solucao: `import SwiftUI

struct ContadorView: View {
    @State private var contador = 0

    var body: some View {
        VStack(spacing: 20) {
            Text("Contador: \\(contador)")
                .font(.largeTitle)
                .bold()

            HStack {
                Button("−") { contador -= 1 }
                    .buttonStyle(.bordered)
                Button("＋") { contador += 1 }
                    .buttonStyle(.borderedProminent)
            }

            Button("Zerar") { contador = 0 }
                .foregroundColor(.red)
        }
        .padding()
    }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use Combine para criar uma pipeline reativa de transformação de dados.",
    solucao: `import Combine

let publicador = [1, 2, 3, 4, 5, 6, 7, 8].publisher

var cancelamentos = Set<AnyCancellable>()

publicador
    .filter  { $0 % 2 == 0 }
    .map     { $0 * $0 }
    .reduce(0, +)
    .sink    { soma in print("Soma dos quadrados dos pares: \\(soma)") }
    .store(in: &cancelamentos)`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente um cache simples com NSCache.",
    solucao: `import Foundation

class ImageCache {
    static let shared = ImageCache()
    private let cache = NSCache<NSString, NSData>()

    private init() {
        cache.countLimit = 100
        cache.totalCostLimit = 50 * 1024 * 1024 // 50 MB
    }

    func salvar(_ data: Data, chave: String) {
        cache.setObject(data as NSData, forKey: chave as NSString)
    }

    func buscar(chave: String) -> Data? {
        cache.object(forKey: chave as NSString) as Data?
    }
}

let cache = ImageCache.shared
cache.salvar(Data("imagem".utf8), chave: "foto_1")
if let d = cache.buscar(chave: "foto_1") {
    print("Cache hit: \\(String(data: d, encoding: .utf8)!)")
}`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Crie uma View SwiftUI com MVVM usando @StateObject e @Published.",
    solucao: `import SwiftUI
import Combine

class UsuariosViewModel: ObservableObject {
    @Published var usuarios: [String] = []
    @Published var carregando = false
    @Published var erro: String? = nil

    func carregar() {
        carregando = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.usuarios = ["Matheus", "João", "Maria"]
            self.carregando = false
        }
    }
}

struct UsuariosView: View {
    @StateObject var viewModel = UsuariosViewModel()

    var body: some View {
        Group {
            if viewModel.carregando {
                ProgressView("Carregando...")
            } else {
                List(viewModel.usuarios, id: \\.self) { Text($0) }
            }
        }
        .onAppear { viewModel.carregar() }
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente Result builders para criar uma DSL tipo-segura.",
    solucao: `@resultBuilder
struct HTMLBuilder {
    static func buildBlock(_ componentes: String...) -> String {
        componentes.joined(separator: "\\n")
    }
}

func div(@HTMLBuilder conteudo: () -> String) -> String {
    "<div>\\n\\(conteudo())\\n</div>"
}

func p(_ texto: String) -> String { "<p>\\(texto)</p>" }
func h1(_ texto: String) -> String { "<h1>\\(texto)</h1>" }

let html = div {
    h1("Bem-vindo!")
    p("Este é um HTML gerado com Swift.")
    p("Usando Result Builders.")
}

print(html)`,
  },
  {
    nivel: "avancado",
    enunciado: "Use PropertyWrapper para criar um wrapper de validação.",
    solucao: `@propertyWrapper
struct Validado<T> {
    private var valor: T
    private let validar: (T) -> Bool
    private let padrao: T

    var wrappedValue: T {
        get { valor }
        set { valor = validar(newValue) ? newValue : padrao }
    }

    init(wrappedValue: T, padrao: T, _ validar: @escaping (T) -> Bool) {
        self.padrao = padrao
        self.validar = validar
        self.valor = validar(wrappedValue) ? wrappedValue : padrao
    }
}

struct Perfil {
    @Validado(padrao: "Anônimo", { !$0.isEmpty })
    var nome: String = "Matheus"

    @Validado(padrao: 0, { $0 >= 0 && $0 <= 120 })
    var idade: Int = 25
}

var p = Perfil()
p.nome = ""    // Revertido para "Anônimo"
p.idade = 200  // Revertido para 0
print("\\(p.nome), \\(p.idade)")`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente Actor para acesso seguro a estado compartilhado.",
    solucao: `actor ContaBancaria {
    private var saldo: Double

    init(saldoInicial: Double) { self.saldo = saldoInicial }

    func depositar(_ valor: Double) {
        guard valor > 0 else { return }
        saldo += valor
        print("Depósito: +R$\\(valor) | Saldo: R$\\(saldo)")
    }

    func sacar(_ valor: Double) -> Bool {
        guard valor <= saldo else { return false }
        saldo -= valor
        print("Saque: -R$\\(valor) | Saldo: R$\\(saldo)")
        return true
    }

    func consultarSaldo() -> Double { saldo }
}

Task {
    let conta = ContaBancaria(saldoInicial: 1000)
    await conta.depositar(500)
    let sucesso = await conta.sacar(200)
    print("Saque OK: \\(sucesso)")
    print("Saldo final: \\(await conta.consultarSaldo())")
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um macro Swift para geração de código automático.",
    solucao: `// Macros são compiladas separadamente em um target de macro
import SwiftCompilerPlugin
import SwiftSyntaxMacros
import SwiftSyntax
import SwiftSyntaxBuilder

public struct AutoEquatableMacro: MemberMacro {
    public static func expansion(
        of node: AttributeSyntax,
        providingMembersOf declaration: some DeclGroupSyntax,
        in context: some MacroExpansionContext
    ) throws -> [DeclSyntax] {
        guard let structDecl = declaration.as(StructDeclSyntax.self) else { return [] }
        let campos = structDecl.memberBlock.members
            .compactMap { $0.decl.as(VariableDeclSyntax.self) }
            .flatMap { $0.bindings }
            .compactMap { $0.pattern.as(IdentifierPatternSyntax.self)?.identifier.text }

        let comparacoes = campos.map { "lhs.\\($0) == rhs.\\($0)" }.joined(separator: " && ")
        return ["static func == (lhs: Self, rhs: Self) -> Bool { \\(raw: comparacoes) }"]
    }
}

// Uso: @AutoEquatable struct Produto { var nome: String; var preco: Double }`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um sistema de injeção de dependência simples.",
    solucao: `protocol Servico: AnyObject {}

class Container {
    private var registros: [ObjectIdentifier: () -> Any] = [:]

    func registrar<T: Servico>(_ tipo: T.Type, factory: @escaping () -> T) {
        registros[ObjectIdentifier(tipo)] = factory
    }

    func resolver<T: Servico>(_ tipo: T.Type) -> T? {
        registros[ObjectIdentifier(tipo)]?() as? T
    }
}

protocol LogService: Servico {
    func log(_ msg: String)
}

class ConsoleLog: LogService {
    func log(_ msg: String) { print("[LOG] \\(msg)") }
}

let container = Container()
container.registrar(LogService.self) { ConsoleLog() }

if let logger = container.resolver(LogService.self) {
    logger.log("Container funcionando!")
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use AsyncStream para criar uma sequência assíncrona customizada.",
    solucao: `import Foundation

func eventosDeTempo(intervalo: Double, total: Int) -> AsyncStream<Date> {
    AsyncStream { continuation in
        Task {
            for _ in 0..<total {
                try? await Task.sleep(nanoseconds: UInt64(intervalo * 1_000_000_000))
                continuation.yield(Date())
            }
            continuation.finish()
        }
    }
}

Task {
    let formatter = DateFormatter()
    formatter.timeStyle = .medium

    for await data in eventosDeTempo(intervalo: 0.5, total: 3) {
        print("Evento em: \\(formatter.string(from: data))")
    }
    print("Stream finalizado")
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um parser combinatório simples.",
    solucao: `struct Parser<A> {
    let run: (inout Substring) -> A?
}

extension Parser {
    func map<B>(_ f: @escaping (A) -> B) -> Parser<B> {
        Parser<B> { input in
            guard let a = self.run(&input) else { return nil }
            return f(a)
        }
    }

    func flatMap<B>(_ f: @escaping (A) -> Parser<B>) -> Parser<B> {
        Parser<B> { input in
            var copia = input
            guard let a = self.run(&copia) else { return nil }
            guard let b = f(a).run(&copia) else { return nil }
            input = copia
            return b
        }
    }
}

let digito = Parser<Int> { input in
    guard let c = input.first, c.isNumber else { return nil }
    input.removeFirst()
    return Int(String(c))
}

var entrada: Substring = "42abc"
print(digito.run(&entrada) as Any) // Optional(4)
print(digito.run(&entrada) as Any) // Optional(2)`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie testes XCTest com mocks para um serviço de rede.",
    solucao: `import XCTest

protocol NetworkSession {
    func data(from url: URL) async throws -> (Data, URLResponse)
}

class MockSession: NetworkSession {
    var dadosMock: Data = Data()
    func data(from url: URL) async throws -> (Data, URLResponse) {
        let response = HTTPURLResponse(url: url, statusCode: 200, httpVersion: nil, headerFields: nil)!
        return (dadosMock, response)
    }
}

class APIService {
    init(private let session: NetworkSession) {}
    func buscar<T: Decodable>(_ tipo: T.Type, url: URL) async throws -> T {
        let (data, _) = try await session.data(from: url)
        return try JSONDecoder().decode(tipo, from: data)
    }
}

struct APIServiceTests: XCTestCase {
    func testBuscarUsuario() async throws {
        let mock = MockSession()
        mock.dadosMock = #"{"id":1,"nome":"Matheus"}"#.data(using: .utf8)!
        let service = APIService(session: mock)
        // let u: Usuario = try await service.buscar(Usuario.self, url: URL(string: "https://...")!)
        // XCTAssertEqual(u.nome, "Matheus")
        XCTAssertNotNil(mock.dadosMock)
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um observer thread-safe com Combine e custom Publisher.",
    solucao: `import Combine
import Foundation

struct EventoPublisher<Evento>: Publisher {
    typealias Output  = Evento
    typealias Failure = Never

    private let subject = PassthroughSubject<Evento, Never>()

    func receive<S: Subscriber>(subscriber: S) where S.Input == Evento, S.Failure == Never {
        subject.receive(subscriber: subscriber)
    }

    func enviar(_ evento: Evento) { subject.send(evento) }
}

enum AppEvento {
    case usuarioCriado(nome: String)
    case pedidoFeito(total: Double)
}

let barramento = EventoPublisher<AppEvento>()
var subs = Set<AnyCancellable>()

barramento
    .filter { if case .usuarioCriado = $0 { return true }; return false }
    .sink   { print("Usuário criado: \\($0)") }
    .store(in: &subs)

barramento.enviar(.usuarioCriado(nome: "Matheus"))
barramento.enviar(.pedidoFeito(total: 299.90))`,
  },
];

export default swift;
