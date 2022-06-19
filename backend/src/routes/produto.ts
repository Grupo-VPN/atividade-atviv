import Produtos from 'controllers/produtos';
import express from 'express';

const router = express.Router()

router.post('/add-produto', Produtos.create)
router.post('/add-produto-cliente/id', Produtos.relation)

export default router;