import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';

function VisualizarServico() {
    return(
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Visualizar Serviço: "Cortar unhas"</h1>
                <Button variant="outline-dark" href='/servicos'>Voltar</Button>
                <Card
                bg="white"
                text="dark"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Cortar unhas</Card.Title>
                        <Card.Text>
                            Preço: R$20
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
};

export default VisualizarServico;