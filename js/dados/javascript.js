const javascript = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Crie um array para armazenar nomes de usuários (strings).",
    solucao: `let usuarios = ['Matheus', 'João', 'Maria'];`,
  },
  {
    nivel: "basico",
    enunciado: "Adicione um novo usuário no final do array.",
    solucao: `usuarios.push('Ana');`,
  },
  {
    nivel: "basico",
    enunciado: "Liste todos os usuários usando um loop forEach.",
    solucao: `usuarios.forEach(u => console.log(u));`,
  },
  {
    nivel: "basico",
    enunciado: "Busque um usuário pelo nome no array.",
    solucao: `const encontrado = usuarios.find(u => u === 'Matheus');
console.log(encontrado);`,
  },
  {
    nivel: "basico",
    enunciado: "Remova um usuário do array pelo nome.",
    solucao: `usuarios = usuarios.filter(u => u !== 'João');`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função que adiciona um usuário ao array.",
    solucao: `function adicionarUsuario(nome) {
  usuarios.push(nome);
}`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função que retorna todos os usuários.",
    solucao: `function listarUsuarios() {
  return usuarios;
}`,
  },
  {
    nivel: "basico",
    enunciado: "Simule um menu de opções usando switch/case.",
    solucao: `switch (opcao) {
  case 1:
    adicionarUsuario('Novo');
    break;
  case 2:
    listarUsuarios();
    break;
  default:
    console.log('Opção inválida');
}`,
  },
  {
    nivel: "basico",
    enunciado: "Transforme o array de strings em array de objetos com campo 'nome'.",
    solucao: `const usuariosObj = usuarios.map(nome => ({ nome }));`,
  },
  {
    nivel: "basico",
    enunciado: "Adicione o campo 'email' a cada objeto do array.",
    solucao: `const comEmail = usuariosObj.map(u => ({
  ...u,
  email: u.nome.toLowerCase() + '@email.com',
}));`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Adicione um ID único baseado em timestamp ao criar um usuário.",
    solucao: `function criarUsuario(nome) {
  return { id: Date.now(), nome };
}
usuarios.push(criarUsuario('Pedro'));`,
  },
  {
    nivel: "intermediario",
    enunciado: "Atualize o nome de um usuário buscando pelo ID.",
    solucao: `function atualizarNome(id, novoNome) {
  usuarios = usuarios.map(u =>
    u.id === id ? { ...u, nome: novoNome } : u
  );
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma função que deleta um usuário pelo ID.",
    solucao: `function deletarUsuario(id) {
  usuarios = usuarios.filter(u => u.id !== id);
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Valide se um e-mail é válido antes de salvar.",
    solucao: `function validarEmail(email) {
  if (!email.includes('@') || !email.includes('.')) {
    throw new Error('E-mail inválido');
  }
  return true;
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Salve o array de usuários no localStorage como JSON.",
    solucao: `function salvarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Carregue os usuários do localStorage ao iniciar a aplicação.",
    solucao: `function carregarUsuarios() {
  const dados = localStorage.getItem('usuarios');
  return dados ? JSON.parse(dados) : [];
}
let usuarios = carregarUsuarios();`,
  },
  {
    nivel: "intermediario",
    enunciado: "Ordene os usuários em ordem alfabética pelo nome.",
    solucao: `usuarios.sort((a, b) => a.nome.localeCompare(b.nome));`,
  },
  {
    nivel: "intermediario",
    enunciado: "Filtre usuários que têm e-mail do domínio @gmail.com.",
    solucao: `const gmailUsers = usuarios.filter(u =>
  u.email.endsWith('@gmail.com')
);`,
  },
  {
    nivel: "intermediario",
    enunciado: "Separe a lógica de usuários em um módulo ES6 com export.",
    solucao: `// usuarios.js
export function adicionarUsuario(nome) { /* ... */ }
export function listarUsuarios() { /* ... */ }
export default usuarios;`,
  },
  {
    nivel: "intermediario",
    enunciado: "Trate erros de operação com try/catch e exiba mensagem amigável.",
    solucao: `try {
  validarEmail(email);
  adicionarUsuario({ nome, email });
} catch (erro) {
  console.error('Erro:', erro.message);
}`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Configure um servidor Express básico com suporte a JSON.",
    solucao: `const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => console.log('Servidor rodando'));`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente a rota GET /users que retorna todos os usuários.",
    solucao: `app.get('/users', (req, res) => {
  res.status(200).json(usuarios);
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente a rota POST /users para criar um novo usuário.",
    solucao: `app.post('/users', (req, res) => {
  const { nome, email } = req.body;
  const novo = { id: Date.now(), nome, email };
  usuarios.push(novo);
  res.status(201).json(novo);
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente a rota PUT /users/:id para atualizar um usuário.",
    solucao: `app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  usuarios = usuarios.map(u =>
    u.id === id ? { ...u, ...req.body } : u
  );
  res.json({ ok: true });
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente a rota DELETE /users/:id para remover um usuário.",
    solucao: `app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.status(204).send();
});`,
  },
  {
    nivel: "avancado",
    enunciado: "Conecte a aplicação ao MongoDB usando Mongoose.",
    solucao: `const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/appdb')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um schema e model de User com Mongoose.",
    solucao: `const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  criadoEm: { type: Date, default: Date.now },
});
const User = mongoose.model('User', userSchema);`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente autenticação JWT gerando um token ao fazer login.",
    solucao: `const jwt = require('jsonwebtoken');
function gerarToken(usuario) {
  return jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um middleware para verificar o token JWT nas rotas protegidas.",
    solucao: `function autenticar(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ erro: 'Não autorizado' });
  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido' });
  }
}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente paginação na rota GET /users com query params.",
    solucao: `app.get('/users', async (req, res) => {
  const pagina = Number(req.query.pagina) || 1;
  const limite = Number(req.query.limite) || 10;
  const users = await User.find()
    .skip((pagina - 1) * limite)
    .limit(limite);
  res.json(users);
});`,
  },
];

export default javascript;
