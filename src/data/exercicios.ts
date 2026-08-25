import { Exercicio } from '../types';

const exercicios: Exercicio[] = [
    // --- BÁSICO ---
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Crie um array para armazenar usuários (strings).",
        solucao: "let usuarios = ['Matheus', 'João'];"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Adicione um novo usuário no array.",
        solucao: "usuarios.push('Maria');"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Liste todos os usuários com loop.",
        solucao: "usuarios.forEach(u => console.log(u));"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Busque um usuário pelo nome.",
        solucao: "usuarios.find(u => u === 'Matheus');"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Remova um usuário.",
        solucao: "usuarios = usuarios.filter(u => u !== 'João');"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Crie função para adicionar usuário.",
        solucao: "function addUser(nome){ usuarios.push(nome); }"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Crie função para listar usuários.",
        solucao: "function list(){ return usuarios; }"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Simule menu com switch.",
        solucao: "switch(op){ case 1: addUser('A'); break; }"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Transforme usuário em objeto.",
        solucao: "usuarios = [{nome:'Matheus'}];"
    },
    {
        linguagem: "javascript",
        nivel: "basico",
        enunciado: "Adicione campo email.",
        solucao: "{nome:'Matheus', email:'a@a.com'}"
    },

    // --- INTERMEDIÁRIO ---
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Adicione ID único aos usuários.",
        solucao: "usuarios.push({id:Date.now(),nome:'A'});"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Atualize usuário pelo ID.",
        solucao: "usuarios = usuarios.map(u => u.id===id ? {...u,nome:'Novo'} : u);"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Crie função delete por ID.",
        solucao: "function del(id){ usuarios = usuarios.filter(u=>u.id!==id); }"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Valide email antes de salvar.",
        solucao: "if(!email.includes('@')) throw Error('inválido');"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Salve dados em JSON.",
        solucao: "localStorage.setItem('users', JSON.stringify(usuarios));"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Carregue dados do JSON.",
        solucao: "usuarios = JSON.parse(localStorage.getItem('users')) || [];"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Ordene usuários por nome.",
        solucao: "usuarios.sort((a,b)=>a.nome.localeCompare(b.nome));"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Filtre usuários por domínio de email.",
        solucao: "usuarios.filter(u=>u.email.endsWith('@gmail.com'));"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Separe lógica em módulos.",
        solucao: "export function addUser(){}"
    },
    {
        linguagem: "javascript",
        nivel: "intermediario",
        enunciado: "Trate erros com try/catch.",
        solucao: "try{ addUser() }catch(e){ console.log(e); }"
    },

    // --- AVANÇADO ---
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie API com Express.",
        solucao: "const express=require('express'); const app=express();"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie rota GET /users.",
        solucao: "app.get('/users',(req,res)=>res.json(usuarios));"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie rota POST.",
        solucao: "app.post('/users',(req,res)=>{ usuarios.push(req.body); });"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie rota PUT.",
        solucao: "app.put('/users/:id',()=>{});"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie rota DELETE.",
        solucao: "app.delete('/users/:id',()=>{});"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Conecte com banco (MongoDB).",
        solucao: "mongoose.connect('mongodb://localhost/db');"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Crie model User.",
        solucao: "const User = mongoose.model('User', {nome:String});"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Implemente middleware.",
        solucao: "app.use(express.json());"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Adicione autenticação JWT.",
        solucao: "jwt.sign({id:user.id}, 'secret');"
    },
    {
        linguagem: "javascript",
        nivel: "avancado",
        enunciado: "Implemente paginação.",
        solucao: "User.find().skip(10).limit(10);"
    },

    // --- BÁSICO (8) ---
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Escreva um programa que solicite o nome do usuário e exiba uma mensagem de boas-vindas formatada (f-string).",
        solucao: "nome = input('Nome: ')\nprint(f'Bem-vindo {nome}!')"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Desenvolva uma calculadora simples que receba dois números e mostre o resultado da multiplicação entre eles.",
        solucao: "a = float(input())\nb = float(input())\nprint(a * b)"
    },
    {
        linguagem: "python",
        nivel: "basico",
        enunciado: "Crie uma estrutura condicional que verifique se um número digitado é positivo, negativo ou zero.",
        solucao: "n = int(input())\nif n > 0: print('Positivo')\nelif n < 0: print('Negativo')\nelse: print('Zero')"
    },

    //# --- BÁSICO(10)-- -
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Crie uma lista de usuários (strings).",
        "solucao": "usuarios = ['Matheus', 'João']"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Adicione um usuário na lista.",
        "solucao": "usuarios.append('Maria')"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Liste usuários com loop.",
        "solucao": "for u in usuarios:\n  print(u)"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Busque um usuário.",
        "solucao": "'Matheus' in usuarios"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Remova um usuário.",
        "solucao": "usuarios.remove('João')"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Crie função para adicionar usuário.",
        "solucao": "def add(nome):\n  usuarios.append(nome)"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Crie função de listagem.",
        "solucao": "def listar():\n  return usuarios"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Simule menu com if.",
        "solucao": "if op == 1:\n  add('A')"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Transforme usuário em dicionário.",
        "solucao": "usuarios = [{'nome':'Matheus'}]"
    },
    {
        "linguagem": "python",
        "nivel": "basico",
        "enunciado": "Adicione email ao usuário.",
        "solucao": "{'nome':'Matheus','email':'a@a.com'}"
    },

    //# -- - INTERMEDIÁRIO(10)-- -
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Adicione ID único.",
        "solucao": "import time\nusuarios.append({'id':int(time.time()),'nome':'A'})"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Atualize usuário por ID.",
        "solucao": "for u in usuarios:\n  if u['id']==id:\n    u['nome']='Novo'"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Delete por ID.",
        "solucao": "usuarios = [u for u in usuarios if u['id']!=id]"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Valide email.",
        "solucao": "if '@' not in email:\n  raise Exception('inválido')"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Salvar em JSON.",
        "solucao": "import json\njson.dump(usuarios, open('db.json','w'))"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Ler JSON.",
        "solucao": "usuarios = json.load(open('db.json'))"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Ordenar por nome.",
        "solucao": "usuarios.sort(key=lambda x: x['nome'])"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Filtrar gmail.",
        "solucao": "[u for u in usuarios if u['email'].endswith('@gmail.com')]"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Separar em funções.",
        "solucao": "def salvar(): pass"
    },
    {
        "linguagem": "python",
        "nivel": "intermediario",
        "enunciado": "Tratar erro.",
        "solucao": "try:\n  salvar()\nexcept:\n  pass"
    },

    //# -- - AVANÇADO(10)-- -
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "Crie API com Flask.",
        "solucao": "from flask import Flask\napp = Flask(__name__)"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "GET /users.",
        "solucao": "@app.route('/users')\ndef get(): return usuarios"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "POST user.",
        "solucao": "@app.route('/users', methods=['POST'])"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "PUT user.",
        "solucao": "@app.route('/users/<id>', methods=['PUT'])"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "DELETE user.",
        "solucao": "@app.route('/users/<id>', methods=['DELETE'])"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "Banco com SQLite.",
        "solucao": "import sqlite3"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "Criar tabela.",
        "solucao": "CREATE TABLE users (id INT, nome TEXT);"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "Middleware simples.",
        "solucao": "@app.before_request"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "Autenticação.",
        "solucao": "import jwt"
    },
    {
        "linguagem": "python",
        "nivel": "avancado",
        "enunciado": "Paginação.",
        "solucao": "limit = request.args.get('limit')"
    },

    // --- BÁSICO (10) ---
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Crie uma classe User com atributo nome.",
        solucao: "class User { String nome; }"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Crie um objeto User.",
        solucao: "User u = new User();"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Atribua valor ao nome.",
        solucao: "u.nome = \"Matheus\";"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Crie uma lista de usuários.",
        solucao: "List<User> usuarios = new ArrayList<>();"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Adicione usuário na lista.",
        solucao: "usuarios.add(u);"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Liste usuários com loop.",
        solucao: "for(User u : usuarios){ System.out.println(u.nome); }"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Crie método para adicionar usuário.",
        solucao: "void add(User u){ usuarios.add(u); }"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Busque usuário pelo nome.",
        solucao: "usuarios.stream().filter(u -> u.nome.equals(\"Matheus\"));"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Remova usuário.",
        solucao: "usuarios.remove(u);"
    },
    {
        linguagem: "java",
        nivel: "basico",
        enunciado: "Adicione atributo email.",
        solucao: "String email;"
    },

    // --- INTERMEDIÁRIO (10) ---
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Adicione ID ao usuário.",
        solucao: "Long id;"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Crie construtor.",
        solucao: "public User(String nome){ this.nome = nome; }"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Crie getters/setters.",
        solucao: "public String getNome(){ return nome; }"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Crie classe Repository simulando banco.",
        solucao: "class UserRepo { List<User> db = new ArrayList<>(); }"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Implemente update por ID.",
        solucao: "u.setNome(\"Novo\");"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Implemente delete por ID.",
        solucao: "db.removeIf(u -> u.getId().equals(id));"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Valide email.",
        solucao: "if(!email.contains(\"@\")) throw new RuntimeException();"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Ordene lista.",
        solucao: "usuarios.sort(Comparator.comparing(User::getNome));"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Filtre usuários.",
        solucao: "usuarios.stream().filter(u -> u.getEmail().contains(\"gmail\"));"
    },
    {
        linguagem: "java",
        nivel: "intermediario",
        enunciado: "Separe service layer.",
        solucao: "class UserService {}"
    },

    // --- AVANÇADO (10) ---
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Crie projeto Spring Boot.",
        solucao: "@SpringBootApplication"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Crie Controller REST.",
        solucao: "@RestController"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "GET /users.",
        solucao: "@GetMapping(\"/users\")"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "POST /users.",
        solucao: "@PostMapping(\"/users\")"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "PUT /users/{id}.",
        solucao: "@PutMapping(\"/users/{id}\")"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "DELETE /users/{id}.",
        solucao: "@DeleteMapping(\"/users/{id}\")"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Use JPA.",
        solucao: "@Entity"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Crie Repository interface.",
        solucao: "interface UserRepo extends JpaRepository<User, Long> {}"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Validação com Bean Validation.",
        solucao: "@NotNull"
    },
    {
        linguagem: "java",
        nivel: "avancado",
        enunciado: "Paginação.",
        solucao: "Page<User> findAll(Pageable pageable);"
    },

    // --- BÁSICO ---
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Crie tipo User.",
        solucao: "type User = { nome: string }"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Crie array tipado.",
        solucao: "let users: User[] = [];"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Adicione usuário.",
        solucao: "users.push({nome:'Matheus'});"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Liste usuários.",
        solucao: "users.forEach(u => console.log(u.nome));"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Adicione email.",
        solucao: "type User = { nome:string, email:string }"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Crie função tipada.",
        solucao: "function add(u:User):void{}"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Busque usuário.",
        solucao: "users.find(u=>u.nome==='Matheus');"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Remova usuário.",
        solucao: "users = users.filter(u=>u.nome!=='A');"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Crie interface.",
        solucao: "interface User { nome:string }"
    },
    {
        linguagem: "typescript",
        nivel: "basico",
        enunciado: "Use readonly.",
        solucao: "readonly id:number;"
    },

    // --- INTERMEDIÁRIO ---
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Adicione ID.",
        solucao: "id:number"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Atualize usuário.",
        solucao: "users.map(u=>u.id===id?{...u,nome:'Novo'}:u)"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Valide email.",
        solucao: "if(!email.includes('@')) throw Error();"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Use generics.",
        solucao: "function repo<T>(){}"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Modularize código.",
        solucao: "export class UserService {}"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Use enums.",
        solucao: "enum Role { ADMIN }"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Use partial.",
        solucao: "Partial<User>"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Tratamento erro.",
        solucao: "try{}catch(e){}"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Ordenação.",
        solucao: "users.sort((a,b)=>a.nome.localeCompare(b.nome));"
    },
    {
        linguagem: "typescript",
        nivel: "intermediario",
        enunciado: "Filtro.",
        solucao: "users.filter(u=>u.email.includes('gmail'))"
    },

    // --- AVANÇADO ---
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Crie API com Express.",
        solucao: "import express from 'express';"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Tipagem Request.",
        solucao: "Request, Response"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "POST route.",
        solucao: "app.post('/users', (req,res)=>{})"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "DTO.",
        solucao: "type CreateUserDTO = {}"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Validação com Zod.",
        solucao: "z.object({})"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "ORM Prisma.",
        solucao: "prisma.user.findMany()"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Middleware.",
        solucao: "app.use()"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Auth JWT.",
        solucao: "jwt.sign({id}, 'secret')"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Paginação.",
        solucao: "skip/take"
    },
    {
        linguagem: "typescript",
        nivel: "avancado",
        enunciado: "Service pattern.",
        solucao: "class UserService {}"
    },

    // --- GO BÁSICO (10) ---
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "1. Crie um programa Go com função main que imprime 'API de Produtos iniciada'.",
        solucao: "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"API de Produtos iniciada\")\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "2. Use := para criar uma variável nomeProduto e imprima.",
        solucao: "nomeProduto := \"Camisa\"\nfmt.Println(nomeProduto)"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "3. Crie uma função que retorna o preço de um produto.",
        solucao: "func getPreco() float64 {\n  return 99.9\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "4. Crie um array fixo com 3 preços.",
        solucao: "var precos [3]float64 = [3]float64{10,20,30}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "5. Use if para verificar se preço > 100.",
        solucao: "if preco > 100 {\n  fmt.Println(\"Caro\")\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "6. Use for para iterar produtos.",
        solucao: "for i := 0; i < 3; i++ {\n  fmt.Println(i)\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "7. Crie um ponteiro para um produto.",
        solucao: "p := 10\nptr := &p\nfmt.Println(ptr)"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "8. Use switch para categoria de produto.",
        solucao: "switch categoria {\ncase \"roupa\": fmt.Println(\"Moda\")\ndefault: fmt.Println(\"Outro\")\n}"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "9. Importe fmt e math.",
        solucao: "import (\n \"fmt\"\n \"math\"\n)"
    },
    {
        linguagem: "go",
        nivel: "basico",
        enunciado: "10. Crie uma struct Produto.",
        solucao: "type Produto struct {\n Nome string\n Preco float64\n}"
    },

    // --- GO INTERMEDIÁRIO (10) ---
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "11. Crie slice de produtos.",
        solucao: "produtos := []Produto{}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "12. Adicione produto com append.",
        solucao: "produtos = append(produtos, Produto{\"Camisa\", 99})"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "13. Crie map ID -> Produto.",
        solucao: "m := make(map[int]Produto)"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "14. Função criarProduto.",
        solucao: "func criar(p Produto) {\n produtos = append(produtos, p)\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "15. Função listar produtos.",
        solucao: "for _, p := range produtos {\n fmt.Println(p)\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "16. Atualizar produto.",
        solucao: "produtos[0].Preco = 120"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "17. Remover produto.",
        solucao: "produtos = append(produtos[:i], produtos[i+1:]...)"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "18. Método Area (exemplo método struct).",
        solucao: "func (p Produto) Info() string {\n return p.Nome\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "19. Função retornando erro.",
        solucao: "func buscar(id int) (Produto, error) {\n return Produto{}, nil\n}"
    },
    {
        linguagem: "go",
        nivel: "intermediario",
        enunciado: "20. Use defer para fechar arquivo.",
        solucao: "f, _ := os.Open(\"file\")\ndefer f.Close()"
    },

    // --- GO AVANÇADO (10) ---
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "21. Goroutine para salvar produto.",
        solucao: "go salvarProduto()"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "22. Channel para comunicação.",
        solucao: "ch := make(chan Produto)"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "23. Buffered channel.",
        solucao: "ch := make(chan string, 2)"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "24. Select para múltiplos canais.",
        solucao: "select {\ncase m := <-c1: fmt.Println(m)\n}"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "25. WaitGroup.",
        solucao: "var wg sync.WaitGroup"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "26. Mutex.",
        solucao: "var mu sync.Mutex\nmu.Lock()\nmu.Unlock()"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "27. Erro custom.",
        solucao: "type Err struct{}\nfunc (e Err) Error() string { return \"erro\" }"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "28. JSON Marshal.",
        solucao: "b,_ := json.Marshal(produto)"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "29. Tags JSON.",
        solucao: "type Produto struct { Nome string `json:\"nome\"` }"
    },
    {
        linguagem: "go",
        nivel: "avancado",
        enunciado: "30. HTTP handler.",
        solucao: "http.HandleFunc(\"/produtos\", handler)"
    },

    // --- RUST BÁSICO (10) ---
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "1. Imprima 'Sistema iniciado'.",
        solucao: "fn main() { println!(\"Sistema iniciado\"); }"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "2. Variável imutável usuário.",
        solucao: "let nome = \"Matheus\";"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "3. Variável mutável.",
        solucao: "let mut idade = 20; idade = 21;"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "4. Shadowing.",
        solucao: "let x = 5; let x = x + 1;"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "5. Tupla usuário.",
        solucao: "let user = (\"Matheus\", 20);"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "6. Função retorno implícito.",
        solucao: "fn idade() -> i32 { 20 }"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "7. Array usuários.",
        solucao: "let users = [1,2,3];"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "8. If expressão.",
        solucao: "let status = if true { \"ok\" } else { \"erro\" };"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "9. Loop.",
        solucao: "for i in 1..5 { println!(\"{}\", i); }"
    },
    {
        linguagem: "rust",
        nivel: "basico",
        enunciado: "10. Struct User.",
        solucao: "struct User { nome: String }"
    },

    // --- RUST INTERMEDIÁRIO (10) ---
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "11. Ownership.",
        solucao: "let s1 = String::from(\"a\"); let s2 = s1;"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "12. Borrow.",
        solucao: "fn len(s: &String) -> usize { s.len() }"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "13. Slice.",
        solucao: "let s = \"hello\"; let h = &s[0..2];"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "14. Impl struct.",
        solucao: "impl User { fn new(n:String)->Self{Self{nome:n}}}"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "15. Option.",
        solucao: "let x: Option<i32> = Some(5);"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "16. Match.",
        solucao: "match x { Some(v)=>println!(\"{}\",v), _=>() }"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "17. Vec.",
        solucao: "let mut v = Vec::new(); v.push(1);"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "18. Result.",
        solucao: "File::open(\"a.txt\").expect(\"erro\");"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "19. CRUD vetor.",
        solucao: "let mut users: Vec<User> = Vec::new();"
    },
    {
        linguagem: "rust",
        nivel: "intermediario",
        enunciado: "20. Iteração.",
        solucao: "for u in users { println!(\"{}\", u.nome); }"
    },

    // --- RUST AVANÇADO (10) ---
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "21. Trait.",
        solucao: "trait Repo { fn save(&self); }"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "22. Generics.",
        solucao: "fn get<T>(v:T)->T{v}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "23. Lifetimes.",
        solucao: "fn f<'a>(x:&'a str)->&'a str{x}"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "24. Closure.",
        solucao: "let c = |x| x+1;"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "25. Iterator.",
        solucao: "v.iter().map(|x| x+1);"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "26. Box.",
        solucao: "Box::new(5);"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "27. ? operador.",
        solucao: "File::open(\"a.txt\")?;"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "28. Thread.",
        solucao: "thread::spawn(|| println!(\"hi\"));"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "29. Channel.",
        solucao: "let (tx,rx)=mpsc::channel();"
    },
    {
        linguagem: "rust",
        nivel: "avancado",
        enunciado: "30. Sistema concorrente.",
        solucao: "tx.send(\"ok\").unwrap();"
    },

    // --- SQL BÁSICO (10) ---
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "1. Criar tabela produtos.",
        solucao: "CREATE TABLE produtos (id INT, nome VARCHAR(100));"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "2. SELECT todos.",
        solucao: "SELECT * FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "3. SELECT colunas.",
        solucao: "SELECT nome FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "4. WHERE.",
        solucao: "SELECT * FROM produtos WHERE id=1;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "5. ORDER BY.",
        solucao: "SELECT * FROM produtos ORDER BY nome;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "6. LIMIT.",
        solucao: "SELECT * FROM produtos LIMIT 10;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "7. DISTINCT.",
        solucao: "SELECT DISTINCT nome FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "8. COUNT.",
        solucao: "SELECT COUNT(*) FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "9. AND.",
        solucao: "SELECT * FROM produtos WHERE id=1 AND nome='A';"
    },
    {
        linguagem: "sql",
        nivel: "basico",
        enunciado: "10. OR.",
        solucao: "SELECT * FROM produtos WHERE id=1 OR id=2;"
    },

    // --- SQL INTERMEDIÁRIO (10) ---
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "11. INSERT.",
        solucao: "INSERT INTO produtos VALUES (1,'Camisa');"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "12. UPDATE.",
        solucao: "UPDATE produtos SET nome='Nova' WHERE id=1;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "13. DELETE.",
        solucao: "DELETE FROM produtos WHERE id=1;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "14. LIKE.",
        solucao: "SELECT * FROM produtos WHERE nome LIKE '%camisa%';"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "15. GROUP BY.",
        solucao: "SELECT nome, COUNT(*) FROM produtos GROUP BY nome;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "16. HAVING.",
        solucao: "SELECT nome FROM produtos GROUP BY nome HAVING COUNT(*) > 1;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "17. ALIAS.",
        solucao: "SELECT nome AS produto FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "18. INNER JOIN.",
        solucao: "SELECT * FROM pedidos p INNER JOIN clientes c ON p.cliente_id=c.id;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "19. FK relacionamento.",
        solucao: "ALTER TABLE pedidos ADD cliente_id INT;"
    },
    {
        linguagem: "sql",
        nivel: "intermediario",
        enunciado: "20. CRUD completo.",
        solucao: "INSERT, UPDATE, DELETE combinados."
    },

    // --- SQL AVANÇADO (10) ---
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "21. LEFT JOIN.",
        solucao: "SELECT * FROM clientes c LEFT JOIN pedidos p ON c.id=p.cliente_id;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "22. Subquery.",
        solucao: "SELECT * FROM produtos WHERE id IN (SELECT id FROM pedidos);"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "23. CTE.",
        solucao: "WITH x AS (SELECT * FROM produtos) SELECT * FROM x;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "24. Window.",
        solucao: "SELECT nome, ROW_NUMBER() OVER() FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "25. Procedure.",
        solucao: "CREATE PROCEDURE teste() BEGIN SELECT 1; END;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "26. Index.",
        solucao: "CREATE INDEX idx_nome ON produtos(nome);"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "27. Transaction.",
        solucao: "BEGIN; COMMIT;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "28. View.",
        solucao: "CREATE VIEW v AS SELECT * FROM produtos;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "29. Trigger.",
        solucao: "CREATE TRIGGER t AFTER INSERT ON produtos BEGIN SELECT 1; END;"
    },
    {
        linguagem: "sql",
        nivel: "avancado",
        enunciado: "30. Modelagem completa.",
        solucao: "Relacionamento completo entre tabelas."
    },

    // --- C# BÁSICO (10) ---
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "1. Crie um programa que imprime 'API Clientes iniciada'.",
        solucao: "Console.WriteLine(\"API Clientes iniciada\");"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "2. Declare variável string nome.",
        solucao: "string nome = \"Matheus\";"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "3. Método que retorna idade.",
        solucao: "int GetIdade() { return 20; }"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "4. Array de clientes.",
        solucao: "string[] clientes = {\"A\",\"B\"};"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "5. If para maior de idade.",
        solucao: "if (idade >= 18) Console.WriteLine(\"Maior\");"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "6. Loop for.",
        solucao: "for(int i=0;i<5;i++) Console.WriteLine(i);"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "7. Classe Cliente.",
        solucao: "class Cliente { public string Nome; }"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "8. Switch.",
        solucao: "switch(tipo){ case 1: break; }"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "9. Lista genérica.",
        solucao: "var lista = new List<string>();"
    },
    {
        linguagem: "csharp",
        nivel: "basico",
        enunciado: "10. Instanciar objeto.",
        solucao: "var c = new Cliente();"
    },

    // --- C# INTERMEDIÁRIO (10) ---
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "11. Lista de clientes.",
        solucao: "var clientes = new List<Cliente>();"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "12. Adicionar cliente.",
        solucao: "clientes.Add(new Cliente());"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "13. Listar clientes.",
        solucao: "foreach(var c in clientes) Console.WriteLine(c.Nome);"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "14. Atualizar cliente.",
        solucao: "clientes[0].Nome = \"Novo\";"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "15. Remover cliente.",
        solucao: "clientes.RemoveAt(0);"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "16. LINQ filtro.",
        solucao: "clientes.Where(c => c.Nome == \"A\");"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "17. Método async.",
        solucao: "async Task<string> Get() { return \"ok\"; }"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "18. Try/catch.",
        solucao: "try{} catch(Exception e){}"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "19. JSON serialize.",
        solucao: "JsonSerializer.Serialize(clientes);"
    },
    {
        linguagem: "csharp",
        nivel: "intermediario",
        enunciado: "20. Controller básico.",
        solucao: "[HttpGet] public IActionResult Get(){ return Ok(); }"
    },

    // --- C# AVANÇADO (10) ---
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "21. API CRUD completa.",
        solucao: "GET, POST, PUT, DELETE"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "22. Dependency Injection.",
        solucao: "builder.Services.AddScoped<IRepo, Repo>();"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "23. Entity Framework DbContext.",
        solucao: "class AppDb : DbContext {}"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "24. Migration.",
        solucao: "Add-Migration Init"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "25. Async DB.",
        solucao: "await context.SaveChangesAsync();"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "26. Middleware.",
        solucao: "app.Use(async (ctx,next)=>{});"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "27. Autenticação JWT.",
        solucao: "AddAuthentication().AddJwtBearer();"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "28. AutoMapper.",
        solucao: "CreateMap<Cliente,Dto>();"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "29. Logging.",
        solucao: "logger.LogInformation(\"msg\");"
    },
    {
        linguagem: "csharp",
        nivel: "avancado",
        enunciado: "30. API pronta.",
        solucao: "CRUD completo com banco"
    },

    // --- C++ BÁSICO (10) ---
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "1. Imprimir mensagem.",
        solucao: "cout << \"Sistema iniciado\";"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "2. Variável.",
        solucao: "string nome = \"Produto\";"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "3. Função.",
        solucao: "int soma(int a,int b){return a+b;}"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "4. Array.",
        solucao: "int v[3]={1,2,3};"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "5. If.",
        solucao: "if(x>0) cout<<\"ok\";"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "6. For.",
        solucao: "for(int i=0;i<5;i++) cout<<i;"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "7. Struct.",
        solucao: "struct Produto { string nome; };"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "8. Ponteiro.",
        solucao: "int x=10; int* p=&x;"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "9. Switch.",
        solucao: "switch(x){case 1:break;}"
    },
    {
        linguagem: "cpp",
        nivel: "basico",
        enunciado: "10. Vector.",
        solucao: "vector<int> v;"
    },

    // --- C++ INTERMEDIÁRIO (10) ---
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "11. Vector produtos.",
        solucao: "vector<Produto> produtos;"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "12. Adicionar.",
        solucao: "produtos.push_back(p);"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "13. Listar.",
        solucao: "for(auto p:produtos) cout<<p.nome;"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "14. Atualizar.",
        solucao: "produtos[0].nome=\"Novo\";"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "15. Remover.",
        solucao: "produtos.erase(produtos.begin());"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "16. Função busca.",
        solucao: "Produto buscar(int id);"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "17. Referência.",
        solucao: "void f(Produto &p){}"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "18. Arquivo.",
        solucao: "ofstream f(\"a.txt\");"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "19. Leitura.",
        solucao: "ifstream f(\"a.txt\");"
    },
    {
        linguagem: "cpp",
        nivel: "intermediario",
        enunciado: "20. CRUD completo.",
        solucao: "vetor manipulando dados"
    },

    // --- C++ AVANÇADO (10) ---
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "21. Classe.",
        solucao: "class Produto{};"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "22. Construtor.",
        solucao: "Produto(string n){nome=n;}"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "23. Herança.",
        solucao: "class A: public B{};"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "24. Polimorfismo.",
        solucao: "virtual void f();"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "25. Smart pointer.",
        solucao: "unique_ptr<int> p;"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "26. Thread.",
        solucao: "thread t(f);"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "27. Mutex.",
        solucao: "mutex m;"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "28. Lambda.",
        solucao: "auto f=[](int x){return x;};"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "29. Template.",
        solucao: "template<typename T>"
    },
    {
        linguagem: "cpp",
        nivel: "avancado",
        enunciado: "30. Sistema completo.",
        solucao: "CRUD com arquivos + classes"
    },

    // --- PHP BÁSICO (10) ---
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "1. Echo mensagem.",
        solucao: "echo 'API iniciada';"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "2. Variável.",
        solucao: "$nome = 'Pedido';"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "3. Função.",
        solucao: "function soma($a,$b){return $a+$b;}"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "4. Array.",
        solucao: "$arr = [1,2,3];"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "5. If.",
        solucao: "if($x>0) echo 'ok';"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "6. Loop.",
        solucao: "for($i=0;$i<5;$i++) echo $i;"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "7. Classe.",
        solucao: "class Pedido { public $nome; }"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "8. Switch.",
        solucao: "switch($x){case 1:break;}"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "9. Instanciar.",
        solucao: "$p = new Pedido();"
    },
    {
        linguagem: "php",
        nivel: "basico",
        enunciado: "10. JSON encode.",
        solucao: "json_encode($arr);"
    },

    // --- PHP INTERMEDIÁRIO (10) ---
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "11. Array pedidos.",
        solucao: "$pedidos = [];"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "12. Adicionar.",
        solucao: "$pedidos[] = $p;"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "13. Listar.",
        solucao: "foreach($pedidos as $p) echo $p->nome;"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "14. Atualizar.",
        solucao: "$pedidos[0]->nome = 'Novo';"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "15. Remover.",
        solucao: "unset($pedidos[0]);"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "16. PDO conexão.",
        solucao: "$pdo = new PDO('mysql:host=localhost;dbname=db','root','');"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "17. SELECT.",
        solucao: "$pdo->query('SELECT * FROM pedidos');"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "18. INSERT.",
        solucao: "$pdo->exec('INSERT INTO pedidos VALUES(...)');"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "19. UPDATE.",
        solucao: "$pdo->exec('UPDATE pedidos SET nome=\"A\"');"
    },
    {
        linguagem: "php",
        nivel: "intermediario",
        enunciado: "20. DELETE.",
        solucao: "$pdo->exec('DELETE FROM pedidos');"
    },

    // --- PHP AVANÇADO (10) ---
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "21. API REST.",
        solucao: "switch($_SERVER['REQUEST_METHOD']){}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "22. Roteamento.",
        solucao: "$uri = $_SERVER['REQUEST_URI'];"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "23. Middleware simples.",
        solucao: "function auth(){}"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "24. JWT.",
        solucao: "jwt_encode($data);"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "25. Upload.",
        solucao: "move_uploaded_file();"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "26. Validação.",
        solucao: "filter_input();"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "27. Composer.",
        solucao: "require 'vendor/autoload.php';"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "28. MVC.",
        solucao: "Controller -> Model -> View"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "29. ORM.",
        solucao: "Eloquent/Doctrine"
    },
    {
        linguagem: "php",
        nivel: "avancado",
        enunciado: "30. API completa.",
        solucao: "CRUD + Auth + DB"
    },



];

export default exercicios;