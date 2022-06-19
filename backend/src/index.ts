import { AppDataSource } from "database/database";
import express from "express";
import cors from 'cors'
import clienteRoute from 'routes/cliente'
import produtoRoute from 'routes/produto'
import ServicoRoute from 'routes/servico'

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccesStatus: 200
};

const app = express();
try {
    AppDataSource.initialize().then(async () => {
        console.log('Banco conectado com sucesso');
    })
} catch (error) {
    console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use('/cliente', clienteRoute)
app.use('/produto', produtoRoute)
app.use('/servico', ServicoRoute)
app.listen(5000, () => console.log('Serve conectado'))