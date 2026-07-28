const csharp = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Exiba uma mensagem de boas-vindas no console com o nome do usuário.",
    solucao: `string nome = "Matheus";
Console.WriteLine($"Bem-vindo, {nome}!");`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma lista genérica de strings para armazenar nomes de usuários.",
    solucao: `using System.Collections.Generic;

List<string> usuarios = new List<string> { "Matheus", "João", "Maria" };`,
  },
  {
    nivel: "basico",
    enunciado: "Adicione e remova um elemento da lista de usuários.",
    solucao: `usuarios.Add("Ana");
usuarios.Remove("João");`,
  },
  {
    nivel: "basico",
    enunciado: "Percorra a lista com foreach e exiba cada nome.",
    solucao: `foreach (string usuario in usuarios)
{
    Console.WriteLine(usuario);
}`,
  },
  {
    nivel: "basico",
    enunciado: "Verifique se um nome existe na lista com Contains.",
    solucao: `if (usuarios.Contains("Matheus"))
{
    Console.WriteLine("Usuário encontrado!");
}`,
  },
  {
    nivel: "basico",
    enunciado: "Leia o nome do usuário a partir do console.",
    solucao: `Console.Write("Digite seu nome: ");
string nome = Console.ReadLine() ?? "";
Console.WriteLine($"Olá, {nome}!");`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma classe simples Usuario com propriedades Nome e Email.",
    solucao: `public class Usuario
{
    public string Nome { get; set; }
    public string Email { get; set; }

    public Usuario(string nome, string email)
    {
        Nome = nome;
        Email = email;
    }
}`,
  },
  {
    nivel: "basico",
    enunciado: "Instancie dois objetos da classe Usuario e exiba as propriedades.",
    solucao: `var u1 = new Usuario("Matheus", "m@email.com");
var u2 = new Usuario("João", "j@email.com");
Console.WriteLine($"{u1.Nome} — {u1.Email}");
Console.WriteLine($"{u2.Nome} — {u2.Email}");`,
  },
  {
    nivel: "basico",
    enunciado: "Use switch expression para retornar a descrição de um nível de acesso.",
    solucao: `string nivel = "admin";
string descricao = nivel switch
{
    "admin" => "Administrador",
    "user"  => "Usuário comum",
    _       => "Visitante",
};
Console.WriteLine(descricao);`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma lista de objetos Usuario e exiba os dados com LINQ.",
    solucao: `var usuarios = new List<Usuario>
{
    new("Matheus", "m@email.com"),
    new("João",    "j@email.com"),
};

usuarios.ForEach(u => Console.WriteLine($"{u.Nome} - {u.Email}"));`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Use LINQ para filtrar usuários cujo nome começa com 'M'.",
    solucao: `var filtrados = usuarios
    .Where(u => u.Nome.StartsWith("M"))
    .ToList();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Ordene a lista de usuários alfabeticamente pelo nome com LINQ.",
    solucao: `var ordenados = usuarios
    .OrderBy(u => u.Nome)
    .ToList();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma interface IRepositorio<T> com métodos Salvar, Buscar e Deletar.",
    solucao: `public interface IRepositorio<T>
{
    void Salvar(T item);
    T? BuscarPorId(int id);
    void Deletar(int id);
    IEnumerable<T> Listar();
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente IRepositorio<Usuario> usando uma lista em memória.",
    solucao: `public class UsuarioRepositorio : IRepositorio<Usuario>
{
    private readonly List<Usuario> _lista = new();

    public void Salvar(Usuario u) => _lista.Add(u);
    public Usuario? BuscarPorId(int id) => _lista.FirstOrDefault(u => u.Id == id);
    public void Deletar(int id) => _lista.RemoveAll(u => u.Id == id);
    public IEnumerable<Usuario> Listar() => _lista;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Lance e trate uma exceção personalizada para e-mail inválido.",
    solucao: `public class EmailInvalidoException : Exception
{
    public EmailInvalidoException(string email)
        : base($"E-mail inválido: {email}") { }
}

// Uso:
if (!email.Contains('@')) throw new EmailInvalidoException(email);`,
  },
  {
    nivel: "intermediario",
    enunciado: "Salve e carregue usuários em JSON usando System.Text.Json.",
    solucao: `using System.Text.Json;

// Salvar:
string json = JsonSerializer.Serialize(usuarios);
File.WriteAllText("usuarios.json", json);

// Carregar:
string conteudo = File.ReadAllText("usuarios.json");
var lista = JsonSerializer.Deserialize<List<Usuario>>(conteudo);`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use record para criar um tipo de valor imutável para UsuarioDTO.",
    solucao: `public record UsuarioDTO(string Nome, string Email);

var dto = new UsuarioDTO("Matheus", "m@email.com");
Console.WriteLine(dto.Nome);
// dto.Nome = "Outro"; // Erro — records são imutáveis por padrão`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente async/await para buscar usuários de forma assíncrona.",
    solucao: `public async Task<IEnumerable<Usuario>> BuscarTodosAsync()
{
    await Task.Delay(100); // Simula I/O
    return _repositorio.Listar();
}

// Uso:
var usuarios = await servico.BuscarTodosAsync();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use nullable reference types e o operador ?? para evitar nulls.",
    solucao: `string? nomeNullable = null;
string nome = nomeNullable ?? "Anônimo";
Console.WriteLine(nome); // Anônimo`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie um método de extensão que verifica se um e-mail é válido.",
    solucao: `public static class StringExtensions
{
    public static bool IsEmailValido(this string email)
    {
        return email.Contains('@') && email.Contains('.');
    }
}

// Uso:
bool valido = "m@email.com".IsEmailValido(); // true`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Configure um projeto ASP.NET Core com endpoint GET /users.",
    solucao: `var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
var app = builder.Build();

app.MapGet("/users", async (IUsuarioService svc) =>
    Results.Ok(await svc.ListarAsync()));

app.Run();`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Repository com Entity Framework Core.",
    solucao: `public class UsuarioRepositorio : IRepositorio<Usuario>
{
    private readonly AppDbContext _ctx;
    public UsuarioRepositorio(AppDbContext ctx) => _ctx = ctx;

    public async Task<IEnumerable<Usuario>> ListarAsync() =>
        await _ctx.Usuarios.ToListAsync();

    public async Task<Usuario?> BuscarPorIdAsync(int id) =>
        await _ctx.Usuarios.FindAsync(id);

    public async Task SalvarAsync(Usuario u)
    {
        _ctx.Usuarios.Add(u);
        await _ctx.SaveChangesAsync();
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Configure autenticação JWT no ASP.NET Core.",
    solucao: `builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt => opt.TokenValidationParameters = new()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"]!)),
        ValidateIssuer = false,
        ValidateAudience = false,
    });`,
  },
  {
    nivel: "avancado",
    enunciado: "Valide um DTO usando FluentValidation.",
    solucao: `public class UsuarioDTOValidator : AbstractValidator<UsuarioDTO>
{
    public UsuarioDTOValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().MinimumLength(2);
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
    }
}

// No endpoint:
app.MapPost("/users", async (UsuarioDTO dto, IValidator<UsuarioDTO> v, IUsuarioService svc) =>
{
    var resultado = await v.ValidateAsync(dto);
    if (!resultado.IsValid) return Results.ValidationProblem(resultado.ToDictionary());
    return Results.Created("/users", await svc.CriarAsync(dto));
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente paginação com EF Core e parâmetros de query.",
    solucao: `app.MapGet("/users", async (int pagina, int limite, AppDbContext ctx) =>
{
    var total = await ctx.Usuarios.CountAsync();
    var itens = await ctx.Usuarios
        .OrderBy(u => u.Nome)
        .Skip((pagina - 1) * limite)
        .Take(limite)
        .ToListAsync();

    return Results.Ok(new { Total = total, Pagina = pagina, Itens = itens });
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Use o padrão Mediator com MediatR para desacoplar comandos.",
    solucao: `// Comando:
public record CriarUsuarioCommand(string Nome, string Email) : IRequest<Usuario>;

// Handler:
public class CriarUsuarioHandler : IRequestHandler<CriarUsuarioCommand, Usuario>
{
    public async Task<Usuario> Handle(CriarUsuarioCommand cmd, CancellationToken ct)
    {
        var u = new Usuario { Nome = cmd.Nome, Email = cmd.Email };
        // salvar...
        return u;
    }
}

// Endpoint:
app.MapPost("/users", async (CriarUsuarioCommand cmd, IMediator mediator) =>
    Results.Created("/users", await mediator.Send(cmd)));`,
  },
  {
    nivel: "avancado",
    enunciado: "Escreva testes de integração com xUnit e WebApplicationFactory.",
    solucao: `public class UsuariosApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public UsuariosApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetUsers_DeveRetornar200()
    {
        var res = await _client.GetAsync("/users");
        Assert.Equal(HttpStatusCode.OK, res.StatusCode);
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Configure cache distribuído com IMemoryCache no ASP.NET Core.",
    solucao: `builder.Services.AddMemoryCache();

// No repositório:
public class UsuarioCacheRepositorio
{
    private readonly IMemoryCache _cache;
    private readonly IRepositorio<Usuario> _inner;

    public async Task<Usuario?> BuscarPorIdAsync(int id)
    {
        string chave = $"usuario:{id}";
        if (_cache.TryGetValue(chave, out Usuario? u)) return u;

        u = await _inner.BuscarPorIdAsync(id);
        _cache.Set(chave, u, TimeSpan.FromMinutes(5));
        return u;
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use Channels para comunicação producer-consumer assíncrona.",
    solucao: `using System.Threading.Channels;

var canal = Channel.CreateUnbounded<string>();

// Producer:
async Task Produzir()
{
    foreach (var nome in new[] { "Matheus", "João", "Maria" })
    {
        await canal.Writer.WriteAsync(nome);
        await Task.Delay(100);
    }
    canal.Writer.Complete();
}

// Consumer:
async Task Consumir()
{
    await foreach (var nome in canal.Reader.ReadAllAsync())
        Console.WriteLine($"Processando: {nome}");
}

await Task.WhenAll(Produzir(), Consumir());`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Specification para filtros dinâmicos com LINQ.",
    solucao: `public abstract class Especificacao<T>
{
    public abstract Expression<Func<T, bool>> ToExpression();
    public bool Satisfaz(T item) => ToExpression().Compile()(item);

    public Especificacao<T> E(Especificacao<T> outra) => new AndSpec<T>(this, outra);
}

public class UsuarioAtivo : Especificacao<Usuario>
{
    public override Expression<Func<Usuario, bool>> ToExpression() =>
        u => u.Ativo;
}

// Uso:
var spec = new UsuarioAtivo();
var ativos = await ctx.Usuarios.Where(spec.ToExpression()).ToListAsync();`,
  },
];

export default csharp;
