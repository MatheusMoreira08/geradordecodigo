const typescript = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Declare variáveis tipadas com string, number e boolean.",
    solucao: `const nome: string = 'Matheus';
const idade: number = 25;
const ativo: boolean = true;
console.log(\`\${nome}, \${idade} anos, ativo: \${ativo}\`);`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um array tipado de strings para armazenar usuários.",
    solucao: `const usuarios: string[] = ['Matheus', 'João', 'Maria'];`,
  },
  {
    nivel: "basico",
    enunciado: "Defina um type alias para representar um Usuário simples.",
    solucao: `type Usuario = {
  nome: string;
  email: string;
};

const usuario: Usuario = { nome: 'Matheus', email: 'm@email.com' };`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma interface IUsuario com campos obrigatórios e opcionais.",
    solucao: `interface IUsuario {
  nome: string;
  email: string;
  idade?: number; // opcional
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função tipada que recebe um nome e retorna uma saudação.",
    solucao: `function saudar(nome: string): string {
  return \`Olá, \${nome}!\`;
}
console.log(saudar('Matheus'));`,
  },
  {
    nivel: "basico",
    enunciado: "Use union type para uma variável que pode ser string ou number.",
    solucao: `let idOuNome: string | number;
idOuNome = 1;         // válido
idOuNome = 'Matheus'; // também válido`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um enum para representar os níveis de acesso de um usuário.",
    solucao: `enum NivelAcesso {
  Admin = 'ADMIN',
  Usuario = 'USER',
  Visitante = 'GUEST',
}
const nivel: NivelAcesso = NivelAcesso.Admin;`,
  },
  {
    nivel: "basico",
    enunciado: "Use o operador as para fazer type assertion em uma variável.",
    solucao: `const valor: unknown = 'Matheus';
const nome = valor as string;
console.log(nome.toUpperCase());`,
  },
  {
    nivel: "basico",
    enunciado: "Tipar corretamente os parâmetros e retorno de uma função de soma.",
    solucao: `function somar(a: number, b: number): number {
  return a + b;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie um array tipado de objetos IUsuario.",
    solucao: `const usuarios: IUsuario[] = [
  { nome: 'Matheus', email: 'm@email.com' },
  { nome: 'João', email: 'j@email.com' },
];`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Crie uma função genérica que retorna o primeiro elemento de um array.",
    solucao: `function primeiro<T>(lista: T[]): T | undefined {
  return lista[0];
}
console.log(primeiro([1, 2, 3]));       // 1
console.log(primeiro(['a', 'b', 'c'])); // 'a'`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use o utility type Partial para atualizar parcialmente um usuário.",
    solucao: `function atualizarUsuario(usuario: IUsuario, dados: Partial<IUsuario>): IUsuario {
  return { ...usuario, ...dados };
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use o utility type Readonly para criar um objeto imutável.",
    solucao: `const CONFIG: Readonly<{ api: string; timeout: number }> = {
  api: 'https://api.exemplo.com',
  timeout: 5000,
};
// CONFIG.api = 'outra'; // Erro de compilação`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use o utility type Pick para criar um tipo com apenas nome e email.",
    solucao: `type UsuarioBasico = Pick<IUsuario, 'nome' | 'email'>;

const u: UsuarioBasico = { nome: 'Matheus', email: 'm@email.com' };`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie um tipo de retorno de função assíncrona com Promise.",
    solucao: `async function buscarUsuario(id: number): Promise<IUsuario | null> {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) return null;
  return res.json() as Promise<IUsuario>;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Implemente type guard para verificar se um objeto é do tipo IUsuario.",
    solucao: `function isUsuario(obj: unknown): obj is IUsuario {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'nome' in obj &&
    'email' in obj
  );
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use intersection type para combinar dois tipos em um.",
    solucao: `type ComTimestamp = {
  criadoEm: Date;
  atualizadoEm: Date;
};

type UsuarioCompleto = IUsuario & ComTimestamp;`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma classe genérica Repositorio<T> com operações CRUD.",
    solucao: `class Repositorio<T extends { id: number }> {
  protected itens: T[] = [];

  salvar(item: T): T { this.itens.push(item); return item; }
  buscarPorId(id: number): T | undefined { return this.itens.find(i => i.id === id); }
  deletar(id: number): void { this.itens = this.itens.filter(i => i.id !== id); }
  listar(): T[] { return this.itens; }
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use mapped types para criar uma versão com todos os campos opcionais.",
    solucao: `type Opcional<T> = {
  [K in keyof T]?: T[K];
};

const dadosOpcional: Opcional<IUsuario> = { nome: 'Matheus' }; // email omitido ok`,
  },
  {
    nivel: "intermediario",
    enunciado: "Defina um tipo de função callback com parâmetros tipados.",
    solucao: `type CallbackErro = (erro: Error | null, resultado?: IUsuario) => void;

function processarUsuario(id: number, callback: CallbackErro): void {
  try {
    const u = buscar(id);
    callback(null, u);
  } catch (e) {
    callback(e as Error);
  }
}`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Use conditional types para criar um tipo que extrai o tipo do array.",
    solucao: `type Desempacotar<T> = T extends Array<infer Item> ? Item : T;

type TipoItem = Desempacotar<string[]>; // string
type Mesmo = Desempacotar<number>;      // number`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um decorator de classe que registra instâncias criadas.",
    solucao: `function Rastreavel(target: Function) {
  const original = target;
  function modificado(...args: any[]) {
    console.log(\`Criando instância de \${original.name}\`);
    return new (original as any)(...args);
  }
  return modificado as any;
}

@Rastreavel
class Servico {}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use template literal types para criar tipos de rotas tipadas.",
    solucao: `type Rota = '/users' | '/posts' | '/comments';
type MetodoHTTP = 'GET' | 'POST' | 'PUT' | 'DELETE';
type EndpointTypado = \`\${MetodoHTTP} \${Rota}\`;

const endpoint: EndpointTypado = 'GET /users'; // válido
// const erro: EndpointTypado = 'PATCH /users'; // Erro!`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente o padrão Repository com injeção de dependência tipada.",
    solucao: `interface IUsuarioRepository {
  salvar(u: IUsuario): Promise<IUsuario>;
  listar(): Promise<IUsuario[]>;
}

class UsuarioService {
  constructor(private readonly repo: IUsuarioRepository) {}

  async criar(dados: Omit<IUsuario, 'id'>): Promise<IUsuario> {
    return this.repo.salvar({ ...dados, id: Date.now() } as IUsuario);
  }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um tipo Result<T, E> para tratamento funcional de erros.",
    solucao: `type Result<T, E = Error> =
  | { ok: true; valor: T }
  | { ok: false; erro: E };

async function buscarUsuario(id: number): Promise<Result<IUsuario>> {
  try {
    const u = await api.get(\`/users/\${id}\`);
    return { ok: true, valor: u };
  } catch (e) {
    return { ok: false, erro: e as Error };
  }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Use o utility type Parameters e ReturnType para refletir tipos de funções.",
    solucao: `function criarUsuario(nome: string, email: string, idade: number): IUsuario {
  return { nome, email, idade };
}

type Params = Parameters<typeof criarUsuario>;   // [string, string, number]
type Retorno = ReturnType<typeof criarUsuario>;  // IUsuario`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um pipeline de transformação de dados com generics encadeados.",
    solucao: `type Transformador<I, O> = (entrada: I) => O;

function pipeline<A, B, C>(
  fn1: Transformador<A, B>,
  fn2: Transformador<B, C>
): Transformador<A, C> {
  return (entrada) => fn2(fn1(entrada));
}

const normalizarEmail = pipeline(
  (u: IUsuario) => ({ ...u, email: u.email.toLowerCase() }),
  (u) => ({ ...u, email: u.email.trim() })
);`,
  },
  {
    nivel: "avancado",
    enunciado: "Use satisfies para validar um objeto sem alterar seu tipo inferido.",
    solucao: `type Config = {
  env: 'dev' | 'prod';
  porta: number;
  debug?: boolean;
};

const appConfig = {
  env: 'prod',
  porta: 3000,
  debug: false,
} satisfies Config;

// appConfig.env ainda é inferido como 'prod', não 'dev' | 'prod'`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um tipo DeepReadonly que torna todos os níveis de um objeto imutáveis.",
    solucao: `type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type ConfigImutavel = DeepReadonly<{
  db: { host: string; porta: number };
  api: { chave: string };
}>;`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente um Event Emitter genérico e tipado.",
    solucao: `type Eventos = {
  'usuario:criado': IUsuario;
  'usuario:deletado': { id: number };
};

class EventEmitter<E extends Record<string, unknown>> {
  private ouvintes = new Map<keyof E, Function[]>();

  on<K extends keyof E>(evento: K, fn: (dados: E[K]) => void): void {
    const lista = this.ouvintes.get(evento) ?? [];
    this.ouvintes.set(evento, [...lista, fn]);
  }

  emit<K extends keyof E>(evento: K, dados: E[K]): void {
    this.ouvintes.get(evento)?.forEach(fn => fn(dados));
  }
}

const emitter = new EventEmitter<Eventos>();
emitter.on('usuario:criado', (u) => console.log(u.nome));`,
  },
];

export default typescript;
