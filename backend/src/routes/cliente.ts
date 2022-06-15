import express from 'express'
import Cliente from 'controllers/cliente'
import CPFs from 'controllers/cpf'
import RGs from 'controllers/rg'
import Produtos from 'controllers/produtos'
const router = express.Router()

router.post('/criar-cliente', Cliente.create, RGs.create, Produtos.create, CPFs.create,)
router.put('/atualizar-cliente/:id', Cliente.update)
router.delete('/deletar-cliente/:id', Cliente.delete)
router.get('/achar-cliente/:id', Cliente.findOne)
router.get('/achar-cliente', Cliente.findMany)

export default router;