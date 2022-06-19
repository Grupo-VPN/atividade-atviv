/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function Servicos() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Serviços</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Serviço</th>
                            <th>Preço</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cortar unhas</td>
                                <td>R$20</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info" href='/servicos/1'>Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Chapinha</td>
                                <td>R$50</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info">Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Escova</td>
                                <td>R$60</td>
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

export default Servicos;