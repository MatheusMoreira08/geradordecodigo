const python = [
  // ─── BÁSICO ────────────────────────────────────────────────────────────────
  {
    nivel: "basico",
    enunciado: "Solicite o nome do usuário e exiba uma mensagem de boas-vindas com f-string.",
    solucao: `nome = input('Digite seu nome: ')
print(f'Bem-vindo, {nome}!')`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma calculadora simples que multiplica dois números informados pelo usuário.",
    solucao: `a = float(input('Primeiro número: '))
b = float(input('Segundo número: '))
print(f'Resultado: {a * b}')`,
  },
  {
    nivel: "basico",
    enunciado: "Verifique se um número digitado é positivo, negativo ou zero.",
    solucao: `n = int(input('Digite um número: '))
if n > 0:
    print('Positivo')
elif n < 0:
    print('Negativo')
else:
    print('Zero')`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma lista de usuários (strings) com três nomes iniciais.",
    solucao: `usuarios = ['Matheus', 'João', 'Maria']`,
  },
  {
    nivel: "basico",
    enunciado: "Adicione um novo usuário ao final da lista.",
    solucao: `usuarios.append('Ana')`,
  },
  {
    nivel: "basico",
    enunciado: "Liste todos os usuários com um loop for.",
    solucao: `for usuario in usuarios:
    print(usuario)`,
  },
  {
    nivel: "basico",
    enunciado: "Verifique se um nome existe na lista de usuários.",
    solucao: `if 'Matheus' in usuarios:
    print('Usuário encontrado')
else:
    print('Usuário não encontrado')`,
  },
  {
    nivel: "basico",
    enunciado: "Remova um usuário específico da lista pelo nome.",
    solucao: `usuarios.remove('João')`,
  },
  {
    nivel: "basico",
    enunciado: "Crie uma função que adiciona um usuário à lista.",
    solucao: `def adicionar_usuario(nome):
    usuarios.append(nome)`,
  },
  {
    nivel: "basico",
    enunciado: "Transforme a lista de strings em lista de dicionários com chave 'nome'.",
    solucao: `usuarios = [{'nome': nome} for nome in usuarios]`,
  },

  // ─── INTERMEDIÁRIO ─────────────────────────────────────────────────────────
  {
    nivel: "intermediario",
    enunciado: "Adicione um ID único usando uuid ao criar um novo usuário.",
    solucao: `import uuid

def criar_usuario(nome, email):
    return {'id': str(uuid.uuid4()), 'nome': nome, 'email': email}`,
  },
  {
    nivel: "intermediario",
    enunciado: "Atualize o nome de um usuário buscando pelo ID na lista.",
    solucao: `def atualizar_nome(usuarios, id_alvo, novo_nome):
    for u in usuarios:
        if u['id'] == id_alvo:
            u['nome'] = novo_nome
            return True
    return False`,
  },
  {
    nivel: "intermediario",
    enunciado: "Remova um usuário da lista filtrando pelo ID.",
    solucao: `def deletar_usuario(usuarios, id_alvo):
    return [u for u in usuarios if u['id'] != id_alvo]`,
  },
  {
    nivel: "intermediario",
    enunciado: "Valide um e-mail verificando se contém '@' e '.'.",
    solucao: `def validar_email(email):
    if '@' not in email or '.' not in email:
        raise ValueError('E-mail inválido')
    return True`,
  },
  {
    nivel: "intermediario",
    enunciado: "Salve a lista de usuários em um arquivo JSON.",
    solucao: `import json

def salvar_usuarios(usuarios, arquivo='usuarios.json'):
    with open(arquivo, 'w', encoding='utf-8') as f:
        json.dump(usuarios, f, ensure_ascii=False, indent=2)`,
  },
  {
    nivel: "intermediario",
    enunciado: "Carregue os usuários de um arquivo JSON, retornando lista vazia se não existir.",
    solucao: `import json, os

def carregar_usuarios(arquivo='usuarios.json'):
    if not os.path.exists(arquivo):
        return []
    with open(arquivo, 'r', encoding='utf-8') as f:
        return json.load(f)`,
  },
  {
    nivel: "intermediario",
    enunciado: "Ordene a lista de usuários em ordem alfabética pelo nome.",
    solucao: `usuarios.sort(key=lambda u: u['nome'])`,
  },
  {
    nivel: "intermediario",
    enunciado: "Filtre usuários que possuem e-mail do domínio @gmail.com.",
    solucao: `gmail_users = [u for u in usuarios if u['email'].endswith('@gmail.com')]`,
  },
  {
    nivel: "intermediario",
    enunciado: "Use try/except para tratar erros ao processar usuários.",
    solucao: `try:
    validar_email(email)
    usuarios.append(criar_usuario(nome, email))
except ValueError as e:
    print(f'Erro: {e}')`,
  },
  {
    nivel: "intermediario",
    enunciado: "Crie uma classe Usuario com atributos nome, email e método para exibir info.",
    solucao: `class Usuario:
    def __init__(self, nome, email):
        self.nome = nome
        self.email = email

    def exibir(self):
        print(f'{self.nome} — {self.email}')`,
  },

  // ─── AVANÇADO ──────────────────────────────────────────────────────────────
  {
    nivel: "avancado",
    enunciado: "Crie uma API REST básica com Flask e retorne usuários em JSON.",
    solucao: `from flask import Flask, jsonify
app = Flask(__name__)

@app.get('/users')
def listar():
    return jsonify(usuarios)

if __name__ == '__main__':
    app.run(debug=True)`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente a rota POST /users para criar um usuário via requisição.",
    solucao: `from flask import request

@app.post('/users')
def criar():
    dados = request.get_json()
    novo = criar_usuario(dados['nome'], dados['email'])
    usuarios.append(novo)
    return jsonify(novo), 201`,
  },
  {
    nivel: "avancado",
    enunciado: "Conecte o Flask a um banco SQLite usando SQLAlchemy.",
    solucao: `from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True)`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente autenticação com JWT usando PyJWT.",
    solucao: `import jwt, datetime

def gerar_token(usuario_id, secret):
    payload = {
        'sub': usuario_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7)
    }
    return jwt.encode(payload, secret, algorithm='HS256')`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um decorator para proteger rotas Flask exigindo token JWT.",
    solucao: `from functools import wraps
from flask import request, jsonify
import jwt

def requer_auth(f):
    @wraps(f)
    def decorado(*args, **kwargs):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        try:
            payload = jwt.decode(token, SECRET, algorithms=['HS256'])
            request.usuario_id = payload['sub']
        except jwt.PyJWTError:
            return jsonify({'erro': 'Token inválido'}), 401
        return f(*args, **kwargs)
    return decorado`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente paginação em uma consulta SQLAlchemy.",
    solucao: `@app.get('/users')
def listar():
    pagina = request.args.get('pagina', 1, type=int)
    limite = request.args.get('limite', 10, type=int)
    resultado = Usuario.query.paginate(page=pagina, per_page=limite)
    return jsonify([u.to_dict() for u in resultado.items])`,
  },
  {
    nivel: "avancado",
    enunciado: "Escreva testes unitários para a função validar_email com pytest.",
    solucao: `import pytest

def test_email_valido():
    assert validar_email('user@email.com') is True

def test_email_sem_arroba():
    with pytest.raises(ValueError):
        validar_email('emailsemarroba.com')

def test_email_sem_ponto():
    with pytest.raises(ValueError):
        validar_email('user@emailsemponto')`,
  },
  {
    nivel: "avancado",
    enunciado: "Use dataclasses para criar um modelo de dados tipado para Usuario.",
    solucao: `from dataclasses import dataclass, field
from uuid import uuid4

@dataclass
class Usuario:
    nome: str
    email: str
    id: str = field(default_factory=lambda: str(uuid4()))

    def to_dict(self):
        return {'id': self.id, 'nome': self.nome, 'email': self.email}`,
  },
  {
    nivel: "avancado",
    enunciado: "Implemente cache simples com functools.lru_cache para otimizar buscas.",
    solucao: `from functools import lru_cache

@lru_cache(maxsize=128)
def buscar_usuario_por_id(id_alvo):
    return next((u for u in tuple(usuarios) if u['id'] == id_alvo), None)`,
  },
  {
    nivel: "avancado",
    enunciado: "Crie um context manager para gerenciar conexão com arquivo JSON.",
    solucao: `from contextlib import contextmanager
import json

@contextmanager
def abrir_dados(arquivo='usuarios.json'):
    try:
        with open(arquivo, 'r') as f:
            dados = json.load(f)
        yield dados
    finally:
        with open(arquivo, 'w') as f:
            json.dump(dados, f, indent=2)`,
  },
];

export default python;
