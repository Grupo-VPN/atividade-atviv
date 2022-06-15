import { RG } from 'models/rg'
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { IRg } from 'interface'

const rgRepository = AppDataSource.getRepository(RG)

class RGs {
    async create(req: Request, res:Response, next: NextFunction ){
        try {
            const { rg_valor, rg_dataEmissao }: IRg = req.body
            await rgRepository
            .createQueryBuilder()
            .insert()
            .into(RG)
            .values({
                rg_valor: rg_valor,
                rg_dataEmissao: rg_dataEmissao,
                cliente: req.body.cliente_id
            })
            .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }
}

export default new RGs