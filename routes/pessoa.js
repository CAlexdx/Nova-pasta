const express = require('express');
const router = express.Router();
const { listarPessoas, criarPessoa } = require('../controllers/pessoaController');

router.get('/pessoas', listarPessoas);
router.post('/pessoas', criarPessoa);

module.exports = router;