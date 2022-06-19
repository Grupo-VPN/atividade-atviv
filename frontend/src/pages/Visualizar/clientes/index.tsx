import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavBar_ from '../../../component/NavBar';
import ICliente from '../../../interface/';
import { service } from '../../../service/serve'

function VisualizarCliente() {
    const [cliente, setCliente] = useState<ICliente>()
    const { id } = useParams()
    useEffect(() => {
        getOne()
    })
    async function getOne() {
        const response = await service.get<ICliente>(`/cliente/achar-cliente/${id}`)
        setCliente(response.data)
    }
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1>Visualizar cliente: "{cliente && cliente?.cliente_nome}"</h1>
                <Button variant="outline-dark" href='/clientes'>Voltar</Button>
                <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>ID: {cliente && cliente?.cliente_id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{cliente && cliente?.cliente_nome}</Card.Title>
                        <Card.Text>
                            Nome Social: {cliente && cliente?.cliente_nomeSocial}
                        </Card.Text>
                        <Card.Text>
                            Gênero: {cliente && cliente?.cliente_genero}
                        </Card.Text>
                        <Card.Text>
                            CPF: {cliente && cliente?.cpf.cpf_valor}
                        </Card.Text>
                        <Card.Text>
                            RG:  {cliente && cliente?.rg.map(rg => { return (rg.rg_valor) })}
                        </Card.Text>
                        <Card.Text>
                            {cliente && cliente?.telefones.map(tell => { return (<> Telefone: {tell.telefone_ddd}{' '}{tell.telefone_numero}</>) })}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
};

export default VisualizarCliente;