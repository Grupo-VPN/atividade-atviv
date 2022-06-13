import express from 'express'
import Cliente from 'controllers/cliente' 

const router = express.Router()

router.post('/criar-cliente', Cliente.create )
router.put('/atualizar-cliente/:id', Cliente.update )
router.delete('/deletar-cliente/:id', Cliente.delete )
router.get('/achar-cliente/:id', Cliente.findOne )
router.get('/achar-cliente', Cliente.findMany )

export default router;