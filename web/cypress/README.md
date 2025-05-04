## ✅ Hope Web – Testes Automatizados com Cypress

Esta pasta contém os **testes end-to-end** da interface Web do projeto **Hope**, automatizados com **Cypress**. Os testes validam o funcionamento das principais rotas e interações da aplicação, como acesso ao mapa, visualização e cadastro de orfanatos.

---

### 🗂 Estrutura de Diretórios

```
web/cypress/
├── downloads/                           # Downloads feitos durante os testes (screenshots, etc.)
├── e2e/
│   ├── home.cy.js                       # Testes da página inicial
│   ├── map.cy.js                        # Testes do mapa de orfanatos
│   └── register.cy.js                   # Testes do fluxo de cadastro
├── fixture/
│   └── images/                          # Imagens utilizadas nos testes
├── orphanages.json                      # Dados mock de orfanatos
├── support/
│   ├── commands.js                      # Comandos customizados do Cypress
│   ├── e2e.js                           # Arquivo de bootstrap dos testes
│   ├── factory/
│   │   └── index.js                     # Fábricas de dados utilizadas nos testes
│   ├── hooks/
│   │   └── index.cy.js                  # Hooks de execução (before, after, etc.)
│   ├── elements/
│   │   ├── create.js
│   │   ├── map.js
│   │   └── popup.js                     # Elementos reutilizáveis
│   └── views/
│       ├── components.js
│       ├── create.js
│       └── map.js                       # Ações específicas para cada view
```

---

### ⚙️ Instalação

Não é necessário realizar instalação separada — as dependências do Cypress e do Allure já estão incluídas no `package.json` da aplicação Web.

Para garantir que tudo está instalado corretamente, execute na raiz da pasta `web/`:

```bash
npm install
```

---

### ▶️ Como executar os testes

#### Abrir interface interativa do Cypress:

```bash
npx cypress open
```

#### Executar todos os testes no terminal:

```bash
npx cypress run
```

---

### 📊 Visualizar o relatório com Allure

Os testes estão configurados para gerar relatórios no padrão **Allure**. Para visualizar o relatório:

1. **Certifique-se de que o Java está instalado**

   - Baixe em: [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)
   - Adicione a variável de ambiente `JAVA_HOME` corretamente, e inclua o `bin` do Java no `PATH`.

2. Execute:

```bash
npx allure-serve
```

Isso abrirá uma página no navegador com os resultados dos testes.

---

### 💡 Observações

- Os testes assumem que a aplicação Web e a API estão rodando localmente.
- Certifique-se de que a API está acessível em `http://localhost:3333` e o frontend em `http://localhost:3000`.

---

### 📫 Contato

Para relatar problemas ou contribuir com os testes, abra uma issue no [repositório principal](https://github.com/CristianoSFMothe/Hope/issues).
