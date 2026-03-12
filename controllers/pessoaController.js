const setupDb = require('../db');

// Aqui ficam apenas as FUNÇÕES que processam os dados
async function listarPessoas(req, res) {
    try {
        const db = await setupDb();
        const pessoas = await db.all('SELECT * FROM pessoas');
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao listar" });
    }
}

async function criarPessoa(req, res) {
    try {
        const db = await setupDb();
        const { nome, idade } = req.body;
        const resultado = await db.run('INSERT INTO pessoas (nome, idade) VALUES (?, ?)', [nome, idade]);
        res.status(201).json({ id: resultado.lastID, nome, idade });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar" });
    }
}

// Exportamos as funções separadamente
module.exports = { listarPessoas, criarPessoa };