const php = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Exiba 'Olá, Mundo!' usando echo.",
    solucao: `<?php
echo "Olá, Mundo!";`,
  },
  {
    nivel: "basico",
    enunciado: "Declare variáveis de diferentes tipos e exiba seus valores.",
    solucao: `<?php
$nome   = "Matheus";
$idade  = 25;
$altura = 1.75;
$ativo  = true;

echo "$nome tem $idade anos e $altura metros de altura.";`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um array de nomes e percorra-o com foreach.",
    solucao: `<?php
$nomes = ["Matheus", "João", "Maria"];
foreach ($nomes as $nome) {
    echo $nome . PHP_EOL;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use if/elseif/else para classificar uma nota de 0 a 10.",
    solucao: `<?php
$nota = 7.5;

if ($nota >= 9) {
    echo "Excelente";
} elseif ($nota >= 7) {
    echo "Bom";
} elseif ($nota >= 5) {
    echo "Regular";
} else {
    echo "Insuficiente";
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função que recebe nome e retorna uma saudação.",
    solucao: `<?php
function saudar(string $nome): string {
    return "Olá, $nome!";
}

echo saudar("Matheus");`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um array associativo representando um usuário.",
    solucao: `<?php
$usuario = [
    "nome"  => "Matheus",
    "email" => "matheus@email.com",
    "idade" => 25,
];

echo $usuario["nome"] . " - " . $usuario["email"];`,
  },
  {
    nivel: "basico",
    enunciado: "Use count() e um loop for para iterar um array.",
    solucao: `<?php
$frutas = ["maçã", "banana", "uva"];
for ($i = 0; $i < count($frutas); $i++) {
    echo ($i + 1) . ". " . $frutas[$i] . PHP_EOL;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Concatene strings e use funções de string como strtoupper() e strlen().",
    solucao: `<?php
$nome = "matheus";
echo strtoupper($nome) . PHP_EOL; // MATHEUS
echo strlen($nome) . " caracteres" . PHP_EOL; // 7
echo ucfirst($nome) . PHP_EOL; // Matheus`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função com valor padrão no parâmetro.",
    solucao: `<?php
function cumprimentar(string $nome, string $saudacao = "Olá"): string {
    return "$saudacao, $nome!";
}

echo cumprimentar("Matheus");         // Olá, Matheus!
echo cumprimentar("João", "Bem-vindo"); // Bem-vindo, João!`,
  },
  {
    nivel: "basico",
    enunciado: "Use array_push(), array_pop() e implode() em um array.",
    solucao: `<?php
$lista = ["a", "b", "c"];
array_push($lista, "d");
array_pop($lista);
echo implode(", ", $lista); // a, b, c`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Crie uma classe Usuario com propriedades privadas e getters/setters.",
    solucao: `<?php
class Usuario {
    private string $nome;
    private string $email;

    public function __construct(string $nome, string $email) {
        $this->nome  = $nome;
        $this->email = $email;
    }

    public function getNome(): string  { return $this->nome; }
    public function getEmail(): string { return $this->email; }
    public function setNome(string $nome): void { $this->nome = $nome; }
}

$u = new Usuario("Matheus", "m@email.com");
echo $u->getNome();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente herança e sobrescrita de método em PHP.",
    solucao: `<?php
class Animal {
    public string $nome;
    public function __construct(string $nome) { $this->nome = $nome; }
    public function falar(): string { return "{$this->nome} faz um som"; }
}

class Gato extends Animal {
    public function falar(): string { return "{$this->nome} diz: Miau!"; }
}

$g = new Gato("Felix");
echo $g->falar();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma interface Repositorio e implemente-a para Usuario.",
    solucao: `<?php
interface Repositorio {
    public function salvar(array $item): void;
    public function buscarPorId(int $id): ?array;
    public function listar(): array;
}

class UsuarioRepositorio implements Repositorio {
    private array $dados = [];

    public function salvar(array $item): void {
        $this->dados[$item['id']] = $item;
    }
    public function buscarPorId(int $id): ?array {
        return $this->dados[$id] ?? null;
    }
    public function listar(): array { return array_values($this->dados); }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Filtre e mapeie arrays com array_filter() e array_map().",
    solucao: `<?php
$usuarios = [
    ["nome" => "Matheus", "ativo" => true],
    ["nome" => "João",    "ativo" => false],
    ["nome" => "Maria",   "ativo" => true],
];

$ativos = array_filter($usuarios, fn($u) => $u["ativo"]);
$nomes  = array_map(fn($u) => strtoupper($u["nome"]), $ativos);
print_r(array_values($nomes));`,
  },
  {
    nivel: "intermediario",
    enunciado: "Leia e escreva dados em um arquivo JSON.",
    solucao: `<?php
// Salvar:
$usuarios = [["id" => 1, "nome" => "Matheus"]];
file_put_contents("usuarios.json", json_encode($usuarios, JSON_PRETTY_PRINT));

// Carregar:
$dados = json_decode(file_get_contents("usuarios.json"), true);
foreach ($dados as $u) echo $u["nome"] . PHP_EOL;`,
  },
  {
    nivel: "intermediario",
    enunciado: "Trate exceções com try/catch e crie uma exceção personalizada.",
    solucao: `<?php
class EmailInvalidoException extends RuntimeException {}

function validarEmail(string $email): void {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new EmailInvalidoException("E-mail inválido: $email");
    }
}

try {
    validarEmail("nao-e-um-email");
} catch (EmailInvalidoException $e) {
    echo "Erro: " . $e->getMessage();
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Conecte ao MySQL com PDO e execute uma consulta segura com prepared statement.",
    solucao: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=app", "usuario", "senha");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = :email");
$stmt->execute([":email" => "m@email.com"]);
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);
echo $usuario["nome"] ?? "Não encontrado";`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use traits para compartilhar comportamento entre classes.",
    solucao: `<?php
trait Timestamps {
    private ?DateTime $criadoEm = null;

    public function marcarCriacao(): void {
        $this->criadoEm = new DateTime();
    }
    public function getCriadoEm(): string {
        return $this->criadoEm?->format("d/m/Y H:i") ?? "—";
    }
}

class Post {
    use Timestamps;
    public string $titulo;
    public function __construct(string $titulo) {
        $this->titulo = $titulo;
        $this->marcarCriacao();
    }
}

$p = new Post("Meu Post");
echo $p->getCriadoEm();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie e consuma uma sessão PHP para manter o usuário logado.",
    solucao: `<?php
session_start();

// Login:
function login(string $email, string $senha): void {
    // Verificar credenciais no banco...
    $_SESSION["usuario"] = ["email" => $email, "logado" => true];
}

// Verificar autenticação:
function estaLogado(): bool {
    return isset($_SESSION["usuario"]["logado"]) && $_SESSION["usuario"]["logado"];
}

// Logout:
function logout(): void {
    session_destroy();
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use generators para iterar sobre grandes conjuntos de dados sem carregar tudo em memória.",
    solucao: `<?php
function lerLinhasArquivo(string $arquivo): Generator {
    $handle = fopen($arquivo, "r");
    while (!feof($handle)) {
        yield fgets($handle);
    }
    fclose($handle);
}

foreach (lerLinhasArquivo("grande.csv") as $linha) {
    echo trim($linha) . PHP_EOL;
}`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Crie uma API REST com roteamento manual em PHP puro.",
    solucao: `<?php
header("Content-Type: application/json");

$metodo = $_SERVER["REQUEST_METHOD"];
$uri    = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

$rotas = [
    "GET /api/users"  => fn() => json_encode(["usuarios" => []]),
    "POST /api/users" => fn() => json_encode(["criado" => true]),
];

$chave = "$metodo $uri";
if (isset($rotas[$chave])) {
    echo $rotas[$chave]();
} else {
    http_response_code(404);
    echo json_encode(["erro" => "Rota não encontrada"]);
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente autenticação JWT manualmente em PHP.",
    solucao: `<?php
function base64url(string $data): string {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function gerarJWT(array $payload, string $secret): string {
    $header  = base64url(json_encode(["alg" => "HS256", "typ" => "JWT"]));
    $body    = base64url(json_encode($payload));
    $assinatura = base64url(hash_hmac("sha256", "$header.$body", $secret, true));
    return "$header.$body.$assinatura";
}

$token = gerarJWT(["sub" => 1, "exp" => time() + 3600], "meu_secret");
echo $token;`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Repository com injeção de dependência via construtor.",
    solucao: `<?php
interface IUsuarioRepository {
    public function encontrarPorId(int $id): ?array;
    public function salvar(array $usuario): array;
}

class UsuarioRepository implements IUsuarioRepository {
    public function __construct(private PDO $db) {}

    public function encontrarPorId(int $id): ?array {
        $stmt = $this->db->prepare("SELECT * FROM usuarios WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
    }

    public function salvar(array $u): array {
        $stmt = $this->db->prepare("INSERT INTO usuarios (nome,email) VALUES (?,?)");
        $stmt->execute([$u["nome"], $u["email"]]);
        return array_merge($u, ["id" => (int) $this->db->lastInsertId()]);
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use Fibers (PHP 8.1) para concorrência cooperativa.",
    solucao: `<?php
$fiber = new Fiber(function(): void {
    echo "Início da Fiber" . PHP_EOL;
    $valor = Fiber::suspend("primeiro");
    echo "Recebeu: $valor" . PHP_EOL;
    Fiber::suspend("segundo");
    echo "Fiber finalizada" . PHP_EOL;
});

$v1 = $fiber->start();
echo "Suspenso com: $v1" . PHP_EOL;
$v2 = $fiber->resume("dados do exterior");
echo "Suspenso com: $v2" . PHP_EOL;
$fiber->resume();`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um pipeline de middlewares para uma requisição HTTP.",
    solucao: `<?php
class Request  { public array $dados = []; }
class Response { public int $status = 200; public string $body = ""; }

class Pipeline {
    private array $middlewares = [];

    public function pipe(callable $mw): static {
        $this->middlewares[] = $mw;
        return $this;
    }

    public function run(Request $req, Response $res): Response {
        $chain = array_reduce(
            array_reverse($this->middlewares),
            fn($next, $mw) => fn($req, $res) => $mw($req, $res, $next),
            fn($req, $res) => $res
        );
        return ($chain)($req, $res);
    }
}

$pipeline = (new Pipeline())
    ->pipe(fn($req, $res, $next) => ($res->body .= "[Auth]") ? $next($req, $res) : $res)
    ->pipe(fn($req, $res, $next) => ($res->body .= "[Log]")  ? $next($req, $res) : $res);

$res = $pipeline->run(new Request(), new Response());
echo $res->body; // [Auth][Log]`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um sistema de cache com APCu e fallback para banco.",
    solucao: `<?php
class CacheRepositorio {
    private int $ttl = 300;

    public function __construct(private IUsuarioRepository $repositorio) {}

    public function encontrarPorId(int $id): ?array {
        $chave = "usuario:$id";
        if (apcu_exists($chave)) {
            return apcu_fetch($chave);
        }
        $usuario = $this->repositorio->encontrarPorId($id);
        if ($usuario) apcu_store($chave, $usuario, $this->ttl);
        return $usuario;
    }

    public function invalidar(int $id): void {
        apcu_delete("usuario:$id");
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um ORM simples com Active Record pattern.",
    solucao: `<?php
abstract class Model {
    protected static string $tabela = "";
    protected array $atributos = [];

    public function __set(string $k, mixed $v): void { $this->atributos[$k] = $v; }
    public function __get(string $k): mixed { return $this->atributos[$k] ?? null; }

    public static function find(PDO $db, int $id): ?static {
        $stmt = $db->prepare("SELECT * FROM " . static::$tabela . " WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) return null;
        $obj = new static();
        foreach ($row as $k => $v) $obj->$k = $v;
        return $obj;
    }
}

class Usuario extends Model {
    protected static string $tabela = "usuarios";
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Escreva testes unitários com PHPUnit para uma classe de serviço.",
    solucao: `<?php
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;

class UsuarioServiceTest extends TestCase {
    private MockObject $repo;
    private UsuarioService $service;

    protected function setUp(): void {
        $this->repo    = $this->createMock(IUsuarioRepository::class);
        $this->service = new UsuarioService($this->repo);
    }

    public function testCriarUsuario(): void {
        $dados = ["nome" => "Matheus", "email" => "m@email.com"];
        $this->repo->expects($this->once())
            ->method("salvar")
            ->willReturn(array_merge($dados, ["id" => 1]));

        $resultado = $this->service->criar($dados);
        $this->assertEquals(1, $resultado["id"]);
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um event dispatcher para desacoplar componentes.",
    solucao: `<?php
class EventDispatcher {
    private array $ouvintes = [];

    public function ouvir(string $evento, callable $fn): void {
        $this->ouvintes[$evento][] = $fn;
    }

    public function disparar(string $evento, array $dados = []): void {
        foreach ($this->ouvintes[$evento] ?? [] as $fn) {
            $fn($dados);
        }
    }
}

$dispatcher = new EventDispatcher();
$dispatcher->ouvir("usuario.criado", fn($d) => print("Email para: " . $d["email"]));
$dispatcher->ouvir("usuario.criado", fn($d) => print("Log: " . $d["nome"] . " criado"));
$dispatcher->disparar("usuario.criado", ["nome" => "Matheus", "email" => "m@e.com"]);`,
  },
  {
    nivel: "avancado",
    enunciado: "Use Enums (PHP 8.1) com interface para representar estados de pedido.",
    solucao: `<?php
interface PodeTransitar {
    public function proximosEstados(): array;
    public function podeTransitarPara(self $estado): bool;
}

enum StatusPedido: string implements PodeTransitar {
    case Pendente   = "pendente";
    case Processando = "processando";
    case Enviado    = "enviado";
    case Entregue   = "entregue";

    public function proximosEstados(): array {
        return match($this) {
            self::Pendente    => [self::Processando],
            self::Processando => [self::Enviado],
            self::Enviado     => [self::Entregue],
            self::Entregue    => [],
        };
    }

    public function podeTransitarPara(self $estado): bool {
        return in_array($estado, $this->proximosEstados());
    }
}

$status = StatusPedido::Pendente;
echo $status->podeTransitarPara(StatusPedido::Processando) ? "OK" : "Inválido";`,
  },
];

export default php;
