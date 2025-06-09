const express = require('express');
const CursoController = require('../controllers/cursoController');
const router = express.Router();

router.get('/', CursoController.listar);
router.post('/', CursoController.criar);
router.put('/:matricula', CursoController.atualizar);
router.delete('/:matricula', CursoController.deletar);

module.exports = router;