## 🌍 Hope Web

Esta é a interface web do projeto **Hope**, responsável por exibir e gerenciar orfanatos cadastrados via API. A aplicação permite visualizar orfanatos no mapa, acessar detalhes e realizar cadastros de novos orfanatos.

Desenvolvida com **React.js**, esta aplicação consome dados da [API Hope](../api/README.md).

---

### 🗂 Estrutura de Diretórios

```
web/
├── allure-results/                     # (relatórios de testes - não abordado neste README)
├── cypress/                            # (testes automatizados - ver README específico)
├── public/                             # Arquivos estáticos
├── src/
│   ├── asserts/                        # Arquivos estáticos (imagens, ícones, etc.)
│   ├── components/
│   │   └── Sidebar.jsx                # Componente de barra lateral reutilizável
│   ├── pages/
│   │   ├── CreateOrphanage.jsx
│   │   ├── Landing.jsx
│   │   ├── NotFound.jsx
│   │   ├── Orphanage.jsx
│   │   └── OrphanageMap.jsx
│   ├── services/
│   │   └── api.js                      # Configuração da API (axios)
│   ├── styles/
│   │   ├── global.css
│   │   └── components/
│   │       └── sidebar.css
│   │   └── pages/
│   │       ├── create-orphanage.css
│   │       ├── landing.css
│   │       ├── notfound.css
│   │       ├── orphanage.css
│   │       └── orphanage-map.css
│   ├── utils/
│   │   └── mapIcon.js                  # Configuração de ícone do mapa (Leaflet)
│   ├── App.jsx                         # Componente raiz
│   ├── index.jsx                       # Ponto de entrada
│   └── routes.jsx                      # Configuração de rotas
├── package-lock.json                   # Gerenciamento de versões exatas das dependências
└── package.json                        # Arquivo de configuração e dependências do projeto
└── README.md                           # Documentação da aplicação web
```

---

### ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de que possui:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/)
- A [API do projeto Hope](../api/README.md) rodando localmente

---

### ▶️ Como executar o projeto

1. Acesse a pasta da aplicação:

```bash
cd web
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação será iniciada por padrão em:
[http://localhost:5173](http://localhost:5173)

> 💡 Certifique-se de que a API está disponível em `http://localhost:3333`. Caso utilize outra porta ou URL, atualize o valor no arquivo `src/services/api.js`.

---

### 📫 Contato

Dúvidas ou sugestões? Abra uma [issue no repositório](https://github.com/CristianoSFMothe/Hope/issues).
