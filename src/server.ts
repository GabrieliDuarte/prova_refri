import express from "express";

import { RefriRouter } from "./routes/

refri.route.js";


const app = express();

const port = 3000;

app.use(express.json());

app.use("/refri", RefriRouter);

app.listen(port, () => console.log(

`Api rodando em http://localhost${port}`));