import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./cliente";
import { empresa } from "./empresa";

@Entity()
export class produtos {
    @PrimaryGeneratedColumn({ type: "int"})
    produto_id!: Number
    @Column({
        type:"varchar"
    })
    produto_nome!: String
    @Column({
        type:"float"
    })
    produto_valor!: Number

    @ManyToMany(() => cliente, (cliente) => cliente.produtos)
    cliente!: cliente[]
    @ManyToMany(() => empresa, (empresa) => empresa.produtos)
    empresa!: empresa[]

}