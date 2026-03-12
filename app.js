const express = require('express');
const setupDb = require('./db'); // Importa a função que criamos acima

const app = express();
app.use(express.json());

// Rota para Listar
app.get('/pessoas', async (req, res) => {
    const db = await setupDb();
    const pessoas = await db.all('SELECT * FROM pessoas');
    res.json(pessoas);
});

// Rota para Criar
app.post('/pessoas', async (req, res) => {
    const db = await setupDb();
    const { nome, idade } = req.body;
    const resultado = await db.run(
        'INSERT INTO pessoas (nome, idade) VALUES (?, ?)',
        [nome, idade]
    );
    res.status(201).json({ id: resultado.lastID, nome, idade });
});

// Rota para Buscar por ID
app.get('/pessoas/:id', async (req, res) => {
    const db = await setupDb();
    const { id } = req.params;
    const pessoa = await db.get('SELECT * FROM pessoas WHERE id = ?', [id]);
    pessoa ? res.json(pessoa) : res.status(404).json({ erro: "Não encontrado" });
});

// Rota para Deletar
app.delete('/pessoas/:id', async (req, res) => {
    const db = await setupDb();
    const { id } = req.params;
    const resultado = await db.run('DELETE FROM pessoas WHERE id = ?', [id]);
    resultado.changes > 0 ? res.json({ msg: "Removido" }) : res.status(404).json({ erro: "Não encontrado" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});