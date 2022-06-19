/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function Produtos() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Produtos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shampoo ant-calvice</td>
                                <td>R$15</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info" href='/produtos/1'>Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Shampoo ant-bacterias</td>
                                <td>R$20</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info">Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Shampoo CR7 Clear-Man</td>
                                <td>R$1500</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info">Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Produtos;