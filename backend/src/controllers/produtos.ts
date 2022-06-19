import { produtos } from "models/produto";
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { IProdutos } from 'interface'

const produtsoRepository = AppDataSource.getRepository(produtos)

class Produtos {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { produto_id, produto_valor, produto_nome }: IProdutos = req.body
            await produtsoRepository
                .createQueryBuilder()
                .insert()
                .into(produtos)
                .values(req.body)
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    async relation(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { produtosProdutoId } = req.body
            await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(`produto_cliente`)
                .values({
                    clienteClienteId: id,
                    produtosProdutoId: produtosProdutoId
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
                .from(`produto_cliente`)
                .where("clienteClienteId = :clienteClienteId", {
                    clienteClienteId: id
                })
                .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }
    async findMany(req: Request, res: Response){
        try {
            const find = await produtsoRepository
            .createQueryBuilder()
            .select(['p'])
            .from(produtos, 'p')
            .getMany()
            res.json(find)
        } catch (error) {
            res.json(error)
        }
    }
    async deleteProdutoRelacao(req: Request, res:Response,){
        try {
            const { id, produto } = req.params
            await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(`produto_cliente`)
            .where("clienteClienteId = :clienteClienteId", {
                clienteClienteId: id
            })
            .andWhere("produtosProdutoId = :produtosProdutoId",{
                produtosProdutoId: produto
            })
            .execute()
            res.json({message: "oi"})
        } catch (error) {
            res.json(error)
        }
    }
}

export default new Produtos