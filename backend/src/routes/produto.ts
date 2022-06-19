import Produtos from 'controllers/produtos';
import express from 'express';

const router = express.Router()

router.post('/add-produto', Produtos.create)
router.post('/add-produto-cliente/:id', Produtos.relation)
router.get('/findMany', Produtos.findMany)
router.delete('/deleteRelation/:id/:produto', Produtos.deleteProdutoRelacao)

export default router;