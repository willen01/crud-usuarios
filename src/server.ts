import express from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();

app.use(router);
app.use(express.json());

app.listen(3000, async () => {
    await db.sync(); //sincronizando db.
    console.log(`Servidor rodando na porta 3000`);
})