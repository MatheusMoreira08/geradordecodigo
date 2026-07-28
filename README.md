# Gerador de Exercícios de Código

Aplicação web **zero-build** para praticar exercícios de programação organizados por linguagem e nível de dificuldade.

## 🚀 Como usar

Como o projeto usa **ES Modules**, é necessário um servidor HTTP local:

**Com Node.js:**
```bash
npx serve .
```

**Com Python:**
```bash
python -m http.server 5500
```

**Com VS Code:** instale a extensão *Live Server* → botão direito em `index.html` → *Open with Live Server*

Depois acesse **http://localhost:5500** no navegador.

---

## ✨ Funcionalidades

- 🎲 Geração aleatória de exercícios por linguagem e nível
- 👁️ Revelar / ocultar solução
- 📋 Copiar solução para o clipboard
- 🌙 Tema claro / escuro com persistência
- 🎯 Contador de exercícios gerados na sessão

---

## 📚 Linguagens e exercícios

| Linguagem | Básico | Intermediário | Avançado |
|-----------|--------|---------------|----------|
| JavaScript | 10 | 10 | 10 |
| Python | 10 | 10 | 10 |
| Java | 10 | 10 | 10 |
| TypeScript | 10 | 10 | 10 |
| C# | 10 | 10 | 10 |
| C++ | 10 | 10 | 10 |
| PHP | 10 | 10 | 10 |
| Go | 10 | 10 | 10 |
| Kotlin | 10 | 10 | 10 |
| Swift | 10 | 10 | 10 |

**Total: 300 exercícios**

---

## 🗂️ Estrutura do projeto

```
├── index.html          # Estrutura HTML5 semântica
├── style/
│   └── style.css       # Design system vanilla CSS (dark/light mode)
└── js/
    ├── main.js         # Lógica principal
    ├── dados.js        # Aggregator dos módulos
    └── dados/
        ├── javascript.js
        ├── python.js
        ├── java.js
        ├── typescript.js
        ├── csharp.js
        ├── cpp.js
        ├── php.js
        ├── go.js
        ├── kotlin.js
        └── swift.js
```

---

## 🔄 Refatorações aplicadas

- ❌ Removido Tailwind CSS (zero dependências de build)
- ✅ CSS vanilla com design system completo (variáveis, dark mode, animações)
- ✅ `dados.js` monolítico → módulos por linguagem
- ✅ `main.js` completamente reescrito e funcional
- ✅ HTML5 semântico com atributos ARIA
- ✅ Validação de formulário com feedback visual
