import { produtos } from "models/produto";
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { IProdutos } from 'interface'

const produtsoRepository = AppDataSource.getRepository(produtos)

class Produtos {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { produto } = req.body
            const { produto_nome }: IProdutos = req.body
            const filter = produto.filter((p: any) =>  (p.produto_nome) ).map((i: any) => i.produto_nome)
            const findProduto = await produtsoRepository
                .createQueryBuilder()
                .select(['p.produto_nome'])
                .from(produtos,'p')
                .where('p.produto_nome = :produto_nome',{
                    produto_nome: String(filter)
                })
                .getOne()
            const adicionarProdutos = produto.map((produtos: any) => {
                return {
                    ...produtos
                }
            })
            console.log(!findProduto);
            if (1 + 1 == 3) {
                await produtsoRepository
                    .createQueryBuilder()
                    .insert()
                    .into(produtos)
                    .values(adicionarProdutos)
                    .execute()
                next()
            } else {
                next()
            }

        } catch (error) {
            res.json(error)
        }
    }
}

export default new Produtos