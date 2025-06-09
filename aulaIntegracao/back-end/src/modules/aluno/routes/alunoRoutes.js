const express = require('express');
const AlunoController = require('../controllers/alunoController');
const router = express.Router();

router.get('/', AlunoController.listar);
router.post('/', AlunoController.criar);
router.put('/:matricula', AlunoController.atualizar);
router.delete('/:matricula', AlunoController.deletar);

module.exports = router;