const express = require('express');
const pessoaRoutes = require('./routes/pessoa');

const app = express();
app.use(express.json());

// Rota para a raiz (Evita o erro "Cannot GET /")
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>🚀 API Node.js + SQLite está ON!</h1>
            <p>Use o endpoint <a href="/pessoas">/pessoas</a> para acessar os dados.</p>
            <p>Desenvolvido por Calebe Alves Câmara</p>
        </div>
    `);
});

// Registrar as rotas do módulo de pessoas
app.use(pessoaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`=========================================`);
});
