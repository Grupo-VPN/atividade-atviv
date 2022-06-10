import { AppDataSource } from "database/database";
import express from "express";

const app = express();
try {
    AppDataSource.initialize().then(async () => {
        console.log('Banco conectado com sucesso');
    })
} catch (error) {
    console.log(`Connection error ${error}`);
}
app.listen(5000, () => console.log('Serve conectado'))