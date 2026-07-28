const kotlin = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Escreva um programa Kotlin que exibe 'Olá, Mundo!' no console.",
    solucao: `fun main() {
    println("Olá, Mundo!")
}`,
  },
  {
    nivel: "basico",
    enunciado: "Declare variáveis mutáveis e imutáveis e exiba seus valores.",
    solucao: `fun main() {
    val nome = "Matheus"   // imutável
    var idade = 25         // mutável
    idade = 26

    println("$nome tem $idade anos")
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma lista de strings e percorra-a com forEach.",
    solucao: `fun main() {
    val nomes = listOf("Matheus", "João", "Maria")
    nomes.forEach { println(it) }
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma data class para representar um Usuário.",
    solucao: `data class Usuario(val nome: String, val email: String)

fun main() {
    val u = Usuario("Matheus", "m@email.com")
    println(u)
    println(u.nome)
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use when expression para classificar uma nota escolar.",
    solucao: `fun classificar(nota: Double): String = when {
    nota >= 9.0 -> "Excelente"
    nota >= 7.0 -> "Bom"
    nota >= 5.0 -> "Regular"
    else        -> "Insuficiente"
}

fun main() {
    println(classificar(8.5)) // Bom
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função com parâmetros padrão e parâmetros nomeados.",
    solucao: `fun saudar(nome: String, saudacao: String = "Olá"): String {
    return "$saudacao, $nome!"
}

fun main() {
    println(saudar("Matheus"))
    println(saudar(nome = "João", saudacao = "Bem-vindo"))
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use null safety com o operador ?. e ?: para tratar valores nulos.",
    solucao: `fun main() {
    val nome: String? = null
    val tamanho = nome?.length ?: 0
    println("Tamanho: $tamanho") // 0

    val nomeNaoNulo: String = nome ?: "Anônimo"
    println(nomeNaoNulo) // Anônimo
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use range e for para iterar sobre um intervalo de números.",
    solucao: `fun main() {
    for (i in 1..5) print("$i ")   // 1 2 3 4 5
    println()
    for (i in 5 downTo 1) print("$i ") // 5 4 3 2 1
    println()
    for (i in 0..10 step 2) print("$i ") // 0 2 4 6 8 10
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função de extensão para a classe String.",
    solucao: `fun String.isPalindromo(): Boolean {
    val limpo = this.lowercase().filter { it.isLetter() }
    return limpo == limpo.reversed()
}

fun main() {
    println("Arara".isPalindromo()) // true
    println("Kotlin".isPalindromo()) // false
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use a função let para executar um bloco somente se o valor não for nulo.",
    solucao: `fun buscarUsuario(id: Int): String? = if (id == 1) "Matheus" else null

fun main() {
    buscarUsuario(1)?.let { nome ->
        println("Usuário encontrado: $nome")
    } ?: println("Usuário não encontrado")

    buscarUsuario(99)?.let { println("Nunca executa") }
        ?: println("Usuário não encontrado")
}`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Use sealed class para modelar estados de uma operação.",
    solucao: `sealed class Resultado<out T> {
    data class Sucesso<T>(val dado: T) : Resultado<T>()
    data class Erro(val mensagem: String) : Resultado<Nothing>()
    object Carregando : Resultado<Nothing>()
}

fun processar(id: Int): Resultado<String> {
    return if (id > 0) Resultado.Sucesso("Usuário $id")
    else Resultado.Erro("ID inválido")
}

fun main() {
    when (val r = processar(1)) {
        is Resultado.Sucesso  -> println("OK: \${r.dado}")
        is Resultado.Erro     -> println("Erro: \${r.mensagem}")
        Resultado.Carregando  -> println("Carregando...")
    }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente uma interface funcional e use lambdas para chamá-la.",
    solucao: `fun interface Validador<T> {
    fun validar(valor: T): Boolean
}

fun <T> filtrar(lista: List<T>, validador: Validador<T>): List<T> =
    lista.filter { validador.validar(it) }

fun main() {
    val numeros = listOf(1, -2, 3, -4, 5)
    val positivos = filtrar(numeros) { it > 0 }
    println(positivos) // [1, 3, 5]
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use coroutines com suspend fun para operação assíncrona.",
    solucao: `import kotlinx.coroutines.*

suspend fun buscarDados(id: Int): String {
    delay(100) // Simula chamada de rede
    return "Dados do usuário $id"
}

fun main() = runBlocking {
    val resultado = async { buscarDados(1) }
    println(resultado.await())
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente o padrão Builder usando um bloco apply.",
    solucao: `data class Configuracao(
    var host: String = "localhost",
    var porta: Int = 8080,
    var debug: Boolean = false,
    var timeout: Int = 30
)

fun configurar(bloco: Configuracao.() -> Unit): Configuracao =
    Configuracao().apply(bloco)

fun main() {
    val config = configurar {
        host = "api.exemplo.com"
        porta = 443
        debug = true
    }
    println(config)
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use higher-order functions map, filter e reduce em uma coleção.",
    solucao: `fun main() {
    val notas = listOf(8.5, 3.0, 7.2, 9.1, 4.8, 6.5)

    val aprovados = notas.filter { it >= 5.0 }
    val dobradas   = aprovados.map { it * 2 }
    val soma       = aprovados.reduce { acc, n -> acc + n }
    val media      = aprovados.average()

    println("Aprovados: $aprovados")
    println("Média: \${"%.2f".format(media)}")
    println("Soma: $soma")
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma classe genérica Repositorio<T> com operações CRUD.",
    solucao: `data class Entidade(val id: Int, val nome: String)

class Repositorio<T : Any> {
    private val itens = mutableListOf<T>()

    fun adicionar(item: T) { itens.add(item) }
    fun remover(predicate: (T) -> Boolean) { itens.removeIf(predicate) }
    fun buscar(predicate: (T) -> Boolean): T? = itens.find(predicate)
    fun listar(): List<T> = itens.toList()
}

fun main() {
    val repo = Repositorio<Entidade>()
    repo.adicionar(Entidade(1, "Matheus"))
    repo.adicionar(Entidade(2, "João"))
    println(repo.buscar { it.id == 1 })
    println(repo.listar())
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use companion object para criar um factory method.",
    solucao: `class Conexao private constructor(val url: String) {
    companion object {
        fun criar(host: String, porta: Int, db: String): Conexao {
            return Conexao("jdbc:postgresql://$host:$porta/$db")
        }

        fun criarLocal(db: String): Conexao = criar("localhost", 5432, db)
    }
}

fun main() {
    val conn = Conexao.criarLocal("appdb")
    println(conn.url)
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente operadores delegados com by lazy e observable.",
    solucao: `import kotlin.properties.Delegates

class Perfil {
    val dadosPesados: List<String> by lazy {
        println("Carregando dados...")
        listOf("dado1", "dado2", "dado3")
    }

    var pontuacao: Int by Delegates.observable(0) { _, antigo, novo ->
        println("Pontuação: $antigo → $novo")
    }
}

fun main() {
    val p = Perfil()
    p.pontuacao = 100
    p.pontuacao = 200
    println(p.dadosPesados) // Carrega na primeira chamada
    println(p.dadosPesados) // Usa cache
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use Flow para criar streams de dados reativos com coroutines.",
    solucao: `import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun numerosFlow(): Flow<Int> = flow {
    for (i in 1..5) {
        delay(100)
        emit(i)
    }
}

fun main() = runBlocking {
    numerosFlow()
        .filter { it % 2 == 0 }
        .map { it * it }
        .collect { println(it) }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Escreva testes unitários com kotlin.test e asserções.",
    solucao: `import kotlin.test.*

fun somar(a: Int, b: Int): Int = a + b
fun dividir(a: Double, b: Double): Double {
    require(b != 0.0) { "Divisão por zero" }
    return a / b
}

class MatematicaTest {
    @Test fun testSoma()    = assertEquals(5, somar(2, 3))
    @Test fun testSomaNeg() = assertEquals(-1, somar(2, -3))

    @Test fun testDivisao() {
        assertFailsWith<IllegalArgumentException> { dividir(10.0, 0.0) }
    }
}`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Configure um servidor Ktor com rota REST e serialização JSON.",
    solucao: `import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.serialization.Serializable

@Serializable
data class Usuario(val id: Int, val nome: String)

fun main() {
    embeddedServer(Netty, port = 8080) {
        install(ContentNegotiation) { json() }
        routing {
            get("/users") {
                call.respond(listOf(Usuario(1, "Matheus")))
            }
        }
    }.start(wait = true)
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão MVVM com StateFlow para uma UI reativa.",
    solucao: `import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

data class UiState(
    val carregando: Boolean = false,
    val usuarios: List<String> = emptyList(),
    val erro: String? = null
)

class UsuarioViewModel(private val scope: CoroutineScope) {
    private val _estado = MutableStateFlow(UiState())
    val estado: StateFlow<UiState> = _estado.asStateFlow()

    fun carregarUsuarios() {
        scope.launch {
            _estado.update { it.copy(carregando = true) }
            delay(500) // Simula API
            _estado.update { it.copy(carregando = false, usuarios = listOf("Matheus", "João")) }
        }
    }
}

fun main() = runBlocking {
    val vm = UsuarioViewModel(this)
    launch { vm.estado.collect { println(it) } }
    vm.carregarUsuarios()
    delay(1000)
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use context receivers (Kotlin 1.6+) para injeção implícita de dependência.",
    solucao: `interface Logger {
    fun log(msg: String)
}

interface Database {
    fun query(sql: String): List<Map<String, Any>>
}

context(Logger, Database)
fun buscarUsuarios(): List<Map<String, Any>> {
    log("Buscando usuários...")
    return query("SELECT * FROM usuarios")
}

class ConsoleLogger : Logger {
    override fun log(msg: String) = println("[LOG] $msg")
}

fun main() {
    val logger = ConsoleLogger()
    // context(logger, db) { buscarUsuarios() }
    println("Context receivers habilitam DI implícita elegante")
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um DSL para construir queries SQL tipo-seguras.",
    solucao: `class SelectBuilder(private val tabela: String) {
    private val campos  = mutableListOf<String>()
    private val filtros = mutableListOf<String>()
    private var limite: Int? = null

    fun campos(vararg nomes: String) { campos.addAll(nomes) }
    fun where(condicao: String)  { filtros.add(condicao) }
    fun limit(n: Int) { limite = n }

    fun build(): String {
        val sel = if (campos.isEmpty()) "*" else campos.joinToString()
        val where = if (filtros.isEmpty()) "" else " WHERE \${filtros.joinToString(" AND ")}"
        val lim = if (limite != null) " LIMIT $limite" else ""
        return "SELECT $sel FROM $tabela$where$lim"
    }
}

fun select(tabela: String, bloco: SelectBuilder.() -> Unit) =
    SelectBuilder(tabela).apply(bloco).build()

fun main() {
    val query = select("usuarios") {
        campos("id", "nome", "email")
        where("ativo = true")
        where("idade > 18")
        limit(10)
    }
    println(query)
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um plugin Gradle personalizado em Kotlin.",
    solucao: `import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.tasks.Exec

class LinterPlugin : Plugin<Project> {
    override fun apply(project: Project) {
        project.extensions.create("linter", LinterExtension::class.java)

        project.tasks.register("lint", Exec::class.java) { task ->
            val ext = project.extensions.getByType(LinterExtension::class.java)
            task.group = "verificacao"
            task.commandLine("ktlint", ext.diretorio)
        }
    }
}

open class LinterExtension {
    var diretorio: String = "src"
}

// build.gradle.kts:
// plugins { id("meu.linter") }
// linter { diretorio = "src/main" }`,
  },
  {
    nivel: "avancado",
    enunciado: "Use coroutines Structured Concurrency com supervisorScope.",
    solucao: `import kotlinx.coroutines.*

suspend fun tarefaFalha(): String {
    delay(100)
    throw RuntimeException("Falha intencional")
}

suspend fun tarefaSucesso(): String {
    delay(200)
    return "Dado importante"
}

fun main() = runBlocking {
    supervisorScope {
        val t1 = async { runCatching { tarefaFalha() } }
        val t2 = async { tarefaSucesso() }

        val r1 = t1.await()
        val r2 = t2.await()

        r1.onFailure { println("T1 falhou: \${it.message}") }
        println("T2 OK: $r2")
    }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um Interceptor de Retrofit com retry automático.",
    solucao: `import okhttp3.*
import java.io.IOException

class RetryInterceptor(private val maxTentativas: Int = 3) : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        var tentativa = 0
        var ultimoErro: IOException? = null

        while (tentativa < maxTentativas) {
            try {
                val resposta = chain.proceed(chain.request())
                if (resposta.isSuccessful) return resposta
                resposta.close()
            } catch (e: IOException) {
                ultimoErro = e
            }
            tentativa++
            Thread.sleep(1000L * tentativa)
        }
        throw ultimoErro ?: IOException("Falha após $maxTentativas tentativas")
    }
}

// Uso:
// val client = OkHttpClient.Builder()
//     .addInterceptor(RetryInterceptor(3))
//     .build()`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um type-safe event bus com reified e inline functions.",
    solucao: `import kotlin.reflect.KClass

class EventBus {
    private val handlers = mutableMapOf<KClass<*>, MutableList<(Any) -> Unit>>()

    inline fun <reified T : Any> assinar(noinline handler: (T) -> Unit) {
        handlers.getOrPut(T::class) { mutableListOf() }
            .add { handler(it as T) }
    }

    inline fun <reified T : Any> publicar(evento: T) {
        handlers[T::class]?.forEach { it(evento) }
    }
}

data class UsuarioCriado(val nome: String, val email: String)
data class PedidoFeito(val total: Double)

fun main() {
    val bus = EventBus()
    bus.assinar<UsuarioCriado> { println("Bem-vindo, \${it.nome}!") }
    bus.assinar<PedidoFeito>   { println("Pedido: R$ \${it.total}") }

    bus.publicar(UsuarioCriado("Matheus", "m@email.com"))
    bus.publicar(PedidoFeito(299.90))
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente Arrow-kt Either para tratamento funcional de erros.",
    solucao: `// Com Arrow-kt:
import arrow.core.*

sealed class ErroApp {
    data class NaoEncontrado(val id: Int) : ErroApp()
    data class EmailInvalido(val email: String) : ErroApp()
}

fun validarEmail(email: String): Either<ErroApp, String> =
    if (email.contains("@")) email.right()
    else ErroApp.EmailInvalido(email).left()

fun buscarUsuario(id: Int): Either<ErroApp, String> =
    if (id == 1) "Matheus".right()
    else ErroApp.NaoEncontrado(id).left()

fun processarUsuario(id: Int, email: String): Either<ErroApp, String> =
    buscarUsuario(id).flatMap { nome ->
        validarEmail(email).map { "$nome <$it>" }
    }

fun main() {
    processarUsuario(1, "m@email.com").fold(
        { erro -> println("Erro: $erro") },
        { dados -> println("Sucesso: $dados") }
    )
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use KSP (Kotlin Symbol Processing) para geração de código em compile-time.",
    solucao: `// processor/src/main/kotlin/AutoRepositoryProcessor.kt
import com.google.devtools.ksp.processing.*
import com.google.devtools.ksp.symbol.*

class AutoRepositoryProcessor(private val env: SymbolProcessorEnvironment) : SymbolProcessor {
    override fun process(resolver: Resolver): List<KSAnnotated> {
        resolver.getSymbolsWithAnnotation("AutoRepository")
            .filterIsInstance<KSClassDeclaration>()
            .forEach { cls ->
                val nome = cls.simpleName.asString()
                val arquivo = env.codeGenerator.createNewFile(
                    Dependencies(false), cls.packageName.asString(), "\${nome}Repository"
                )
                arquivo.write("""
                    class \${nome}Repository {
                        fun listar(): List<$nome> = emptyList()
                    }
                """.trimIndent().toByteArray())
            }
        return emptyList()
    }
}

// Uso: @AutoRepository na data class gera o repositório automaticamente`,
  },
];

export default kotlin;
