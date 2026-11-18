import express from "express";
import { RefriRoutes } from "./routes/refri.routes.js";

const app = express();

const port = 3000;

app.use(express.json());

app.use("/refri", RefriRoutes);
app.listen(port, () => console.log(`Api rodando em http://localhost${port}`));
