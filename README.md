# API CRUD - Node.js + Express + SQLite 🚀

Este projeto é uma API REST funcional desenvolvida para fins de estudo, seguindo os conceitos de arquitetura modular e persistência de dados em banco de dados relacional.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework web para criação de rotas.
* **SQLite**: Banco de dados relacional leve (armazenado em arquivo local).
* **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## 📁 Estrutura do Projeto

* `app.js`: Ponto de entrada da aplicação.
* `db.js`: Configuração e inicialização do banco de dados SQLite.
* `routes/`: Pasta contendo as definições de rotas por módulo.
* `.gitignore`: Arquivo para ignorar arquivos desnecessários no Git (como `node_modules` e `.db`).

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/CAlexdx/Nova-pasta.git
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

## 🔌 Endpoints da API

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/pessoas` | Lista todas as pessoas cadastradas. |
| **GET** | `/pessoas/:id` | Busca uma pessoa específica pelo ID. |
| **POST** | `/pessoas` | Cadastra uma nova pessoa. |
| **PUT** | `/pessoas/:id` | Atualiza os dados de uma pessoa existente. |
| **DELETE** | `/pessoas/:id` | Remove uma pessoa do sistema. |

---
Desenvolvido por **Calebe Alves Câmara** durante o aprendizado de Backend com Node.js.