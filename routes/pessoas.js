const express = require('express');
const router = express.Router();
const setupDb = require('../db'); // Voltando uma pasta para achar o db.js

// Listar todos
router.get('/pessoas', async (req, res) => {
    const db = await setupDb();
    const pessoas = await db.all('SELECT * FROM pessoas');
    res.json(pessoas);
});

// Criar novo
router.post('/pessoas', async (req, res) => {
    const db = await setupDb();
    const { nome, idade } = req.body;
    const resultado = await db.run(
        'INSERT INTO pessoas (nome, idade) VALUES (?, ?)',
        [nome, idade]
    );
    res.status(201).json({ id: resultado.lastID, nome, idade });
});

// Buscar por ID
router.get('/pessoas/:id', async (req, res) => {
    const db = await setupDb();
    const { id } = req.params;
    const pessoa = await db.get('SELECT * FROM pessoas WHERE id = ?', [id]);
    pessoa ? res.json(pessoa) : res.status(404).json({ erro: "Não encontrado" });
});

// Deletar
router.delete('/pessoas/:id', async (req, res) => {
    const db = await setupDb();
    const { id } = req.params;
    const resultado = await db.run('DELETE FROM pessoas WHERE id = ?', [id]);
    resultado.changes > 0 ? res.json({ msg: "Removido" }) : res.status(404).json({ erro: "Não encontrado" });
});

module.exports = router;