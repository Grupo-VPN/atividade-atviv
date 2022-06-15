import { CPF } from 'models/cpf'
import { AppDataSource } from 'database/database'
import { Request, Response } from 'express'
import { ICpf } from 'interface'

const cpfRepository = AppDataSource.getRepository(CPF)

class CPFs {
    async create(req: Request, res:Response, ){
        try {
            const { cpf_valor, cpf_dataEmissao }: ICpf = req.body
            await cpfRepository
            .createQueryBuilder()
            .insert()
            .into(CPF)
            .values({
                cpf_valor: cpf_valor,
                cpf_dataEmissao: cpf_dataEmissao,
                cliente: req.body.cliente_id
            })
            .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new CPFs