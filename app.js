const express = require('express');
const cors = require('cors'); // Novo pacote
const pessoaRoutes = require('./routes/pessoa');

const app = express();

// --- MIDDLEWARES ---

app.use(express.json());
app.use(cors()); // Libera o acesso para qualquer origem

// Middleware de Log (Exemplo do que o professor ensina sobre fluxo)
app.use((req, res, next) => {
    const data = new Date().toLocaleString();
    console.log(`[${data}] ${req.method} na rota ${req.url}`);
    next(); // Passa para a próxima função (essencial!)
});

// --- ROTAS ---

app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>🚀 API Node.js + SQLite está ON!</h1>
            <p>Use o endpoint <a href="/pessoas">/pessoas</a> para acessar os dados.</p>
            <p>Status: <strong>Pronto para conexões externas (CORS Ativado)</strong></p>
        </div>
    `);
});

app.use(pessoaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`=========================================`);
});