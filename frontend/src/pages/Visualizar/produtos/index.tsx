import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';

function VisualizarProduto() {
    return(
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Visualizar Produto: "Shampoo ant-calvice"</h1>
                <Button variant="outline-dark" href='/produtos'>Voltar</Button>
                <Card
                bg="white"
                text="dark"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Shampoo ant-calvice</Card.Title>
                        <Card.Text>
                            Preço: R$15
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
};

export default VisualizarProduto