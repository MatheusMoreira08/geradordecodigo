const cpp = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Escreva um programa que exibe 'Olá, Mundo!' no console.",
    solucao: `#include <iostream>
using namespace std;

int main() {
    cout << "Olá, Mundo!" << endl;
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Declare variáveis dos tipos int, double e string e exiba seus valores.",
    solucao: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int idade = 25;
    double altura = 1.75;
    string nome = "Matheus";
    cout << nome << ", " << idade << " anos, " << altura << "m" << endl;
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Leia o nome do usuário com cin e exiba uma saudação.",
    solucao: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string nome;
    cout << "Digite seu nome: ";
    cin >> nome;
    cout << "Bem-vindo, " << nome << "!" << endl;
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use um loop for para imprimir os números de 1 a 10.",
    solucao: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função que recebe dois inteiros e retorna a soma.",
    solucao: `#include <iostream>
using namespace std;

int somar(int a, int b) {
    return a + b;
}

int main() {
    cout << somar(3, 7) << endl; // 10
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um array de inteiros e imprima todos os elementos.",
    solucao: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {10, 20, 30, 40, 50};
    int tamanho = sizeof(nums) / sizeof(nums[0]);
    for (int i = 0; i < tamanho; i++) {
        cout << nums[i] << " ";
    }
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use estrutura if/else para verificar se um número é par ou ímpar.",
    solucao: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n % 2 == 0)
        cout << "Par" << endl;
    else
        cout << "Ímpar" << endl;
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma struct para representar um Ponto com coordenadas x e y.",
    solucao: `#include <iostream>
using namespace std;

struct Ponto {
    double x;
    double y;
};

int main() {
    Ponto p = {3.0, 4.0};
    cout << "(" << p.x << ", " << p.y << ")" << endl;
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Use um vetor (std::vector) para armazenar e iterar sobre nomes.",
    solucao: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> nomes = {"Matheus", "João", "Maria"};
    for (const string& n : nomes) {
        cout << n << endl;
    }
    return 0;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função recursiva que calcula o fatorial de um número.",
    solucao: `#include <iostream>
using namespace std;

long long fatorial(int n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

int main() {
    cout << fatorial(6) << endl; // 720
    return 0;
}`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Crie uma classe Retangulo com atributos largura e altura, e método calcularArea().",
    solucao: `#include <iostream>
using namespace std;

class Retangulo {
private:
    double largura, altura;
public:
    Retangulo(double l, double a) : largura(l), altura(a) {}
    double calcularArea() const { return largura * altura; }
};

int main() {
    Retangulo r(5.0, 3.0);
    cout << "Área: " << r.calcularArea() << endl;
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente herança: crie uma classe Animal e uma subclasse Cachorro com método falar().",
    solucao: `#include <iostream>
#include <string>
using namespace std;

class Animal {
public:
    string nome;
    Animal(string n) : nome(n) {}
    virtual void falar() { cout << nome << " faz algum som" << endl; }
};

class Cachorro : public Animal {
public:
    Cachorro(string n) : Animal(n) {}
    void falar() override { cout << nome << " diz: Au Au!" << endl; }
};

int main() {
    Cachorro c("Rex");
    c.falar();
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use ponteiros para trocar os valores de duas variáveis.",
    solucao: `#include <iostream>
using namespace std;

void trocar(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    trocar(&x, &y);
    cout << "x=" << x << " y=" << y << endl; // x=20 y=10
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente uma função template genérica que retorna o maior de dois valores.",
    solucao: `#include <iostream>
using namespace std;

template<typename T>
T maiorValor(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maiorValor(3, 7) << endl;       // 7
    cout << maiorValor(3.14, 2.71) << endl; // 3.14
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Leia um arquivo de texto linha por linha e exiba o conteúdo.",
    solucao: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream arquivo("dados.txt");
    string linha;
    if (!arquivo.is_open()) {
        cerr << "Erro ao abrir arquivo" << endl;
        return 1;
    }
    while (getline(arquivo, linha)) {
        cout << linha << endl;
    }
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use std::map para contar a frequência de palavras em um texto.",
    solucao: `#include <iostream>
#include <map>
#include <sstream>
#include <string>
using namespace std;

int main() {
    string texto = "ola mundo ola cpp mundo ola";
    istringstream ss(texto);
    string palavra;
    map<string, int> freq;
    while (ss >> palavra) freq[palavra]++;
    for (auto& [p, c] : freq)
        cout << p << ": " << c << endl;
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Capture e trate exceções com try/catch usando std::exception.",
    solucao: `#include <iostream>
#include <stdexcept>
using namespace std;

double dividir(double a, double b) {
    if (b == 0) throw invalid_argument("Divisão por zero!");
    return a / b;
}

int main() {
    try {
        cout << dividir(10, 0) << endl;
    } catch (const invalid_argument& e) {
        cerr << "Erro: " << e.what() << endl;
    }
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente uma pilha (stack) simples com vector.",
    solucao: `#include <iostream>
#include <vector>
using namespace std;

class Pilha {
    vector<int> dados;
public:
    void push(int v) { dados.push_back(v); }
    void pop()       { if (!dados.empty()) dados.pop_back(); }
    int  top()       { return dados.back(); }
    bool vazia()     { return dados.empty(); }
};

int main() {
    Pilha p;
    p.push(1); p.push(2); p.push(3);
    cout << p.top() << endl; // 3
    p.pop();
    cout << p.top() << endl; // 2
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use lambdas com std::sort para ordenar um vetor de strings pelo tamanho.",
    solucao: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    vector<string> v = {"banana", "uva", "maçã", "abacaxi"};
    sort(v.begin(), v.end(), [](const string& a, const string& b){
        return a.size() < b.size();
    });
    for (auto& s : v) cout << s << endl;
    return 0;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use smart pointers (unique_ptr) para gerenciar memória dinamicamente.",
    solucao: `#include <iostream>
#include <memory>
#include <string>
using namespace std;

struct Usuario {
    string nome;
    Usuario(string n) : nome(n) { cout << "Criado: " << nome << endl; }
    ~Usuario() { cout << "Destruído: " << nome << endl; }
};

int main() {
    auto u = make_unique<Usuario>("Matheus");
    cout << u->nome << endl;
    // destruído automaticamente ao sair do escopo
    return 0;
}`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Implemente um servidor TCP simples usando sockets POSIX.",
    solucao: `#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
using namespace std;

int main() {
    int fd = socket(AF_INET, SOCK_STREAM, 0);
    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(8080);
    bind(fd, (sockaddr*)&addr, sizeof(addr));
    listen(fd, 5);
    cout << "Aguardando conexões em :8080" << endl;
    int cliente = accept(fd, nullptr, nullptr);
    const char* msg = "HTTP/1.1 200 OK\\r\\n\\r\\nOlá!";
    send(cliente, msg, strlen(msg), 0);
    close(cliente); close(fd);
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use std::thread para executar tarefas em paralelo com mutex.",
    solucao: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

mutex mtx;
int contador = 0;

void incrementar(int vezes) {
    for (int i = 0; i < vezes; i++) {
        lock_guard<mutex> lock(mtx);
        contador++;
    }
}

int main() {
    vector<thread> threads;
    for (int i = 0; i < 4; i++)
        threads.emplace_back(incrementar, 1000);
    for (auto& t : threads) t.join();
    cout << "Contador: " << contador << endl; // 4000
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Singleton thread-safe em C++11.",
    solucao: `#include <iostream>
#include <mutex>
using namespace std;

class Singleton {
    static Singleton* instancia;
    static mutex mtx;
    Singleton() {}
public:
    static Singleton* getInstance() {
        lock_guard<mutex> lock(mtx);
        if (!instancia) instancia = new Singleton();
        return instancia;
    }
    void falar() { cout << "Sou o Singleton!" << endl; }
};

Singleton* Singleton::instancia = nullptr;
mutex Singleton::mtx;

int main() {
    Singleton::getInstance()->falar();
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente uma lista encadeada simples com inserção e remoção.",
    solucao: `#include <iostream>
using namespace std;

struct No { int valor; No* prox; };

class ListaEncadeada {
    No* cabeca = nullptr;
public:
    void inserir(int v) { cabeca = new No{v, cabeca}; }
    void remover(int v) {
        No** p = &cabeca;
        while (*p && (*p)->valor != v) p = &(*p)->prox;
        if (*p) { No* tmp = *p; *p = (*p)->prox; delete tmp; }
    }
    void imprimir() {
        for (No* n = cabeca; n; n = n->prox)
            cout << n->valor << " ";
        cout << endl;
    }
};

int main() {
    ListaEncadeada l;
    l.inserir(3); l.inserir(2); l.inserir(1);
    l.imprimir(); // 1 2 3
    l.remover(2);
    l.imprimir(); // 1 3
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use variadic templates para criar uma função printf genérica.",
    solucao: `#include <iostream>
using namespace std;

void log() { cout << endl; }

template<typename T, typename... Args>
void log(T primeiro, Args... resto) {
    cout << primeiro << " ";
    log(resto...);
}

int main() {
    log("Usuário:", "Matheus", "| Idade:", 25, "| Ativo:", true);
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um pool de objetos para reutilizar alocações de memória.",
    solucao: `#include <iostream>
#include <vector>
#include <memory>
using namespace std;

template<typename T>
class Pool {
    vector<unique_ptr<T>> livre;
public:
    T* adquirir() {
        if (livre.empty()) return new T();
        T* obj = livre.back().release();
        livre.pop_back();
        return obj;
    }
    void liberar(T* obj) { livre.emplace_back(obj); }
    size_t tamanho() const { return livre.size(); }
};

struct Conexao { int id = 0; };

int main() {
    Pool<Conexao> pool;
    Conexao* c = pool.adquirir();
    c->id = 42;
    cout << "ID: " << c->id << endl;
    pool.liberar(c);
    cout << "Pool size: " << pool.tamanho() << endl;
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use std::async e std::future para processar tarefas assíncronas.",
    solucao: `#include <iostream>
#include <future>
#include <vector>
using namespace std;

long long somarRange(int inicio, int fim) {
    long long soma = 0;
    for (int i = inicio; i <= fim; i++) soma += i;
    return soma;
}

int main() {
    auto f1 = async(launch::async, somarRange, 1,    500000);
    auto f2 = async(launch::async, somarRange, 500001, 1000000);
    long long resultado = f1.get() + f2.get();
    cout << "Soma: " << resultado << endl;
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Observer com templates.",
    solucao: `#include <iostream>
#include <vector>
#include <functional>
#include <string>
using namespace std;

template<typename T>
class Evento {
    vector<function<void(T)>> ouvintes;
public:
    void assinar(function<void(T)> fn) { ouvintes.push_back(fn); }
    void emitir(T dado) { for (auto& fn : ouvintes) fn(dado); }
};

int main() {
    Evento<string> evLogin;
    evLogin.assinar([](string u){ cout << "Log: " << u << " entrou" << endl; });
    evLogin.assinar([](string u){ cout << "Email enviado para " << u << endl; });
    evLogin.emitir("matheus@email.com");
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente busca binária com iterators genéricos.",
    solucao: `#include <iostream>
#include <vector>
#include <iterator>
using namespace std;

template<typename It, typename T>
It buscaBinaria(It inicio, It fim, const T& alvo) {
    It resultado = fim;
    while (inicio < fim) {
        It meio = inicio + (fim - inicio) / 2;
        if (*meio == alvo) return meio;
        if (*meio < alvo) inicio = meio + 1;
        else fim = meio;
    }
    return resultado;
}

int main() {
    vector<int> v = {1, 3, 5, 7, 9, 11};
    auto it = buscaBinaria(v.begin(), v.end(), 7);
    if (it != v.end())
        cout << "Encontrado na posição " << distance(v.begin(), it) << endl;
    return 0;
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use CRTP (Curiously Recurring Template Pattern) para polimorfismo estático.",
    solucao: `#include <iostream>
using namespace std;

template<typename Derivado>
class Forma {
public:
    double area() { return static_cast<Derivado*>(this)->calcularArea(); }
    void exibir() { cout << "Área: " << area() << endl; }
};

class Circulo : public Forma<Circulo> {
    double raio;
public:
    Circulo(double r) : raio(r) {}
    double calcularArea() { return 3.14159 * raio * raio; }
};

class Quadrado : public Forma<Quadrado> {
    double lado;
public:
    Quadrado(double l) : lado(l) {}
    double calcularArea() { return lado * lado; }
};

int main() {
    Circulo c(5); c.exibir();
    Quadrado q(4); q.exibir();
    return 0;
}`,
  },
];

export default cpp;
