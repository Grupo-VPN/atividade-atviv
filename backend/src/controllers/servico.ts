import { servicos } from "models/servico";
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { IServicos } from 'interface'

const servicosRepository = AppDataSource.getRepository(servicos)

class Servico {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { servico_id, servico_nome, servico_valor }: IServicos = req.body
            await servicosRepository
                .createQueryBuilder()
                .insert()
                .into(servicos)
                .values(req.body)
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    async findMany(req: Request, res: Response) {
        try {
            const find = await servicosRepository
                .createQueryBuilder()
                .select(['s'])
                .from(servicos, 's')
                .getMany()
            res.json(find)
        } catch (error) {
            res.json(error)
        }
    }
    async relation(req: Request, res: Response) {
        try {
            const { servicosServicoId } = req.body
            const { id } = req.params
            await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(`servico_cliente`)
                .values({
                    clienteClienteId: id,
                    servicosServicoId: servicosServicoId
                })
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    async deleteRelations(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await AppDataSource
                .createQueryBuilder()
                .delete()
                .from(`servico_cliente`)
                .where("clienteClienteId = :clienteClienteId", {
                    clienteClienteId: id
                })
                .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }
}

export default new Servico