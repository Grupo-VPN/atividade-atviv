import { cliente } from 'models/cliente'
import { AppDataSource } from 'database/database'
import { Request, Response } from 'express'

const clienteRepository = AppDataSource.getRepository(cliente)

class Cliente {
    async create(req: Request, res: Response) {
        try {
            const { cliente_nome, cliente_nomeSocial, cliente_genero } = req.body
            await clienteRepository.
                createQueryBuilder()
                .insert()
                .into(cliente)
                .values(req.body)
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await clienteRepository
                .createQueryBuilder()
                .update(cliente)
                .set({
                    "cliente_nome": req.body.cliente_nome,
                    "cliente_nomeSocial": req.body.cliente_nomeSocial,
                    "cliente_genero": req.body.cliente_genero
                })
                .where("cliente_id = :cliente_id", {
                    cliente_id: id
                })
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            await clienteRepository
                .createQueryBuilder()
                .delete()
                .where("cliente_id = :cliente_id", {
                    cliente_id: id
                })
                .execute()
            res.json({ message: "Cliente adicionado com sucesso" })
        } catch (error) {
            res.json(error)
        }
    }
    async findOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            const find = await clienteRepository
                .findOne({
                    where: {
                        cliente_id: id
                    }
                })
            res.json(find)
        } catch (error) {
            res.json(error)
        }
    }
    async findMany(res: Response){
        try {
            const find = await clienteRepository
            .find()
            res.json(find)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new Cliente;