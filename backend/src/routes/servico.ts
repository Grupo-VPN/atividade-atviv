import Servico from 'controllers/servico';
import express from 'express';

const router = express.Router()

router.post('/add-servico', Servico.create)
router.get('/achar-servico', Servico.findMany)
router.post('/add-servico-cliente/:id', Servico.relation)
router.delete('/deletar-servico-cliente/:id/:servico', Servico.deleteServicoRelacao)
export default router;