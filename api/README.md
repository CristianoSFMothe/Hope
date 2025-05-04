## 📦 Hope API

Esta é a API do projeto **Hope**, responsável por gerenciar o cadastro de orfanatos. Desenvolvida em **Node.js** com **MongoDB** como banco de dados, a API fornece endpoints para criar e listar orfanatos.

---

### 🗂 Estrutura de Diretórios

```
api/
├── src/
│   ├── config/
│   │   └── upload.ts               # Configuração de upload de arquivos
│   ├── controllers/
│   │   └── OrphanagesController.js # Controller principal da entidade Orphanage
│   ├── errors/
│   │   └── handler.ts              # Middleware de tratamento de erros
│   ├── models/
│   │   └── Orphanage.ts            # Modelo da entidade Orphanage
│   ├── router.ts                   # Definição das rotas da API
│   └── server.ts                   # Arquivo principal do servidor Express
├── uploads/                        # Diretório para armazenar arquivos enviados
├── .example.env                    # Exemplo de variáveis de ambiente (.env)
├── .gitignore                      # Arquivos e pastas ignorados pelo Git
├── package-lock.json               # Gerenciamento de versões exatas das dependências
├── package.json                    # Arquivo de configuração e dependências do projeto
├── README.md                       # Documentação da API
└── tsconfig.json                   # Configurações do TypeScript
```

---

### ⚙️ Pré-requisitos

Antes de iniciar o projeto, certifique-se de que você tem instalado:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/)
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou MongoDB local

---

### 🌐 Configuração do MongoDB

Se você **ainda não tem uma conta** no MongoDB Atlas:

1. Acesse: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie uma conta gratuita.
3. Crie um novo projeto e em seguida um **cluster gratuito**.
4. Após criado, vá em **Database Access** e adicione um novo usuário com senha.
5. Em seguida, vá em **Network Access** e adicione o IP `0.0.0.0/0` para permitir conexões de qualquer lugar.
6. Volte ao cluster e clique em **Connect > Connect your application**.
7. Copie a **connection string**, algo como:

```
mongodb+srv://<USUARIO>:<SENHA>@cluster0.mongodb.net/<NOME_DO_BANCO>?retryWrites=true&w=majority
```

8. Crie um arquivo `.env` na raiz da pasta `api/` com o seguinte conteúdo:

```
MONGO_URL=mongodb+srv://<USUARIO>:<SENHA>@cluster0.mongodb.net/<NOME_DO_BANCO>?retryWrites=true&w=majority
```

Substitua `<USUARIO>`, `<SENHA>` e `<NOME_DO_BANCO>` pelos dados do seu cluster.

---

### ▶️ Como executar o projeto

Siga os passos abaixo para iniciar o servidor localmente:

```bash
# Acesse a pasta da API
cd api

# Instale as dependências
npm install

# Crie o arquivo .env com sua string de conexão do MongoDB (conforme instruções acima)

# Inicie o servidor em modo desenvolvimento
npm run dev
```

O servidor será iniciado por padrão em `http://localhost:3333`.

---

### 📫 Contato

Em caso de dúvidas ou sugestões, entre em contato através do [GitHub Issues](https://github.com/CristianoSFMothe/Hope/issues).
