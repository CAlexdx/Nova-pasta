const express = require('express');
const pessoaRoutes = require('./routes/pessoa'); // Importando as rotas

const app = express();
app.use(express.json());

// Usando as rotas importadas
app.use(pessoaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`=========================================`);
});