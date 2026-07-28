const java = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Crie uma variável String e exiba uma mensagem de boas-vindas no console.",
    solucao: `String nome = "Matheus";
System.out.println("Bem-vindo, " + nome + "!");`,
  },
  {
    nivel: "basico",
    enunciado: "Declare um ArrayList de Strings para armazenar nomes de usuários.",
    solucao: `import java.util.ArrayList;

ArrayList<String> usuarios = new ArrayList<>();
usuarios.add("Matheus");
usuarios.add("João");`,
  },
  {
    nivel: "basico",
    enunciado: "Adicione e remova um elemento do ArrayList.",
    solucao: `usuarios.add("Maria");
usuarios.remove("João");`,
  },
  {
    nivel: "basico",
    enunciado: "Percorra o ArrayList com um loop for-each e imprima cada nome.",
    solucao: `for (String usuario : usuarios) {
    System.out.println(usuario);
}`,
  },
  {
    nivel: "basico",
    enunciado: "Verifique se um nome existe no ArrayList.",
    solucao: `if (usuarios.contains("Matheus")) {
    System.out.println("Usuário encontrado");
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um método estático que recebe um nome e o adiciona ao ArrayList.",
    solucao: `public static void adicionarUsuario(ArrayList<String> lista, String nome) {
    lista.add(nome);
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use uma estrutura switch para simular um menu de opções.",
    solucao: `switch (opcao) {
    case 1:
        System.out.println("Listar usuários");
        break;
    case 2:
        System.out.println("Adicionar usuário");
        break;
    default:
        System.out.println("Opção inválida");
}`,
  },
  {
    nivel: "basico",
    enunciado: "Leia o nome do usuário a partir do console com Scanner.",
    solucao: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Nome: ");
String nome = sc.nextLine();
System.out.println("Olá, " + nome);`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma classe simples Usuario com atributos nome e email.",
    solucao: `public class Usuario {
    String nome;
    String email;

    public Usuario(String nome, String email) {
        this.nome = nome;
        this.email = email;
    }
}`,
  },
  {
    nivel: "basico",
    enunciado: "Instancie dois objetos da classe Usuario e exiba seus dados.",
    solucao: `Usuario u1 = new Usuario("Matheus", "matheus@email.com");
Usuario u2 = new Usuario("João", "joao@email.com");
System.out.println(u1.nome + " - " + u1.email);
System.out.println(u2.nome + " - " + u2.email);`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Adicione encapsulamento à classe Usuario com getters e setters.",
    solucao: `public class Usuario {
    private String nome;
    private String email;

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma interface Repositorio com métodos salvar, buscar e deletar.",
    solucao: `public interface Repositorio<T> {
    void salvar(T item);
    T buscarPorId(int id);
    void deletar(int id);
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente a interface Repositorio para a classe Usuario.",
    solucao: `public class UsuarioRepositorio implements Repositorio<Usuario> {
    private List<Usuario> lista = new ArrayList<>();

    @Override
    public void salvar(Usuario u) { lista.add(u); }

    @Override
    public Usuario buscarPorId(int id) {
        return lista.stream().filter(u -> u.getId() == id).findFirst().orElse(null);
    }

    @Override
    public void deletar(int id) { lista.removeIf(u -> u.getId() == id); }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use Streams para filtrar usuários cujo nome começa com 'M'.",
    solucao: `List<Usuario> filtrados = usuarios.stream()
    .filter(u -> u.getNome().startsWith("M"))
    .collect(Collectors.toList());`,
  },
  {
    nivel: "intermediario",
    enunciado: "Ordene a lista de usuários alfabeticamente pelo nome com Comparator.",
    solucao: `usuarios.sort(Comparator.comparing(Usuario::getNome));`,
  },
  {
    nivel: "intermediario",
    enunciado: "Lance e trate uma exceção personalizada para e-mail inválido.",
    solucao: `public class EmailInvalidoException extends RuntimeException {
    public EmailInvalidoException(String email) {
        super("E-mail inválido: " + email);
    }
}

// Uso:
if (!email.contains("@")) throw new EmailInvalidoException(email);`,
  },
  {
    nivel: "intermediario",
    enunciado: "Salve a lista de usuários em um arquivo .txt usando FileWriter.",
    solucao: `import java.io.FileWriter;

try (FileWriter fw = new FileWriter("usuarios.txt")) {
    for (Usuario u : usuarios) {
        fw.write(u.getNome() + "," + u.getEmail() + "\\n");
    }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use Optional para evitar NullPointerException ao buscar usuário.",
    solucao: `Optional<Usuario> encontrado = usuarios.stream()
    .filter(u -> u.getNome().equals("Matheus"))
    .findFirst();

encontrado.ifPresent(u -> System.out.println("Achei: " + u.getNome()));`,
  },
  {
    nivel: "intermediario",
    enunciado: "Converta a lista de usuarios para um Map<Integer, Usuario> indexado por ID.",
    solucao: `Map<Integer, Usuario> mapa = usuarios.stream()
    .collect(Collectors.toMap(Usuario::getId, u -> u));`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie um enum NivelAcesso com valores ADMIN, USER e GUEST.",
    solucao: `public enum NivelAcesso {
    ADMIN, USER, GUEST;
}

// Uso:
NivelAcesso nivel = NivelAcesso.ADMIN;
System.out.println("Nível: " + nivel);`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Configure um projeto Spring Boot com endpoint GET /users.",
    solucao: `@RestController
@RequestMapping("/users")
public class UsuarioController {
    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listarTodos();
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente uma camada de Service para lógica de negócios do Usuario.",
    solucao: `@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Usuario salvar(Usuario u) {
        return repository.save(u);
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Mapeie a entidade Usuario para banco de dados com JPA/Hibernate.",
    solucao: `@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(unique = true)
    private String email;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente paginação com Spring Data JPA.",
    solucao: `@GetMapping
public Page<Usuario> listar(
    @RequestParam(defaultValue = "0") int pagina,
    @RequestParam(defaultValue = "10") int tamanho
) {
    return repository.findAll(PageRequest.of(pagina, tamanho));
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Configure segurança básica com Spring Security e JWT.",
    solucao: `@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(s -> s.sessionCreationPolicy(STATELESS))
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Escreva um teste unitário com JUnit 5 para o UsuarioService.",
    solucao: `@ExtendWith(MockitoExtension.class)
class UsuarioServiceTest {
    @Mock
    private UsuarioRepository repository;

    @InjectMocks
    private UsuarioService service;

    @Test
    void deveSalvarUsuario() {
        Usuario u = new Usuario("Matheus", "m@email.com");
        when(repository.save(u)).thenReturn(u);
        assertEquals(u, service.salvar(u));
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente validação de DTO com Bean Validation (@Valid).",
    solucao: `public class UsuarioDTO {
    @NotBlank(message = "Nome é obrigatório")
    private String nome;

    @Email(message = "E-mail inválido")
    @NotBlank
    private String email;
}

@PostMapping
public ResponseEntity<Usuario> criar(@Valid @RequestBody UsuarioDTO dto) {
    return ResponseEntity.status(201).body(service.salvar(dto));
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use CompletableFuture para processar usuários de forma assíncrona.",
    solucao: `CompletableFuture<List<Usuario>> future = CompletableFuture.supplyAsync(() -> {
    return repository.findAll();
});

future.thenAccept(lista -> {
    lista.forEach(u -> System.out.println(u.getNome()));
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Builder para criar objetos Usuario.",
    solucao: `public class Usuario {
    private final String nome;
    private final String email;

    private Usuario(Builder builder) {
        this.nome = builder.nome;
        this.email = builder.email;
    }

    public static class Builder {
        private String nome;
        private String email;

        public Builder nome(String nome) { this.nome = nome; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Usuario build() { return new Usuario(this); }
    }
}

// Uso:
Usuario u = new Usuario.Builder().nome("Matheus").email("m@email.com").build();`,
  },
  {
    nivel: "avancado",
    enunciado: "Configure cache com @Cacheable do Spring para otimizar consultas.",
    solucao: `@Service
public class UsuarioService {
    @Cacheable(value = "usuarios", key = "#id")
    public Usuario buscarPorId(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Não encontrado"));
    }

    @CacheEvict(value = "usuarios", key = "#id")
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}`,
  },
];

export default java;
