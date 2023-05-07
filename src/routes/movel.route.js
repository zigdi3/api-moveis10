import express from 'express';
import MovelController from '../controllers/movel.controller.js';

const router = express.Router()
router
  .get('/moveis', MovelController.listarMovel)
  .get('/moveis/:id', MovelController.ListarMovelPorId)
  .put('/moveis/:id', MovelController.AtualizarMovel)
  .post('/moveis', MovelController.CadastrarMovel)
  .delete('/moveis/:id', MovelController.ExcluirMovel)

export default router