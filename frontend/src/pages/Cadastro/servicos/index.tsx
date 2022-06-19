/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function CadastrarServico() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarServico;