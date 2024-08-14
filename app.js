import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import productsRouter from "./src/routes/productsRouter.js"
const __dirname = dirname(fileURLToPath(import.meta.url));

import {seeds} from "./src/database/seeds.js"

const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));

//routes
app.use("/api/products", productsRouter)
app.get("/", (req,res) => {
    res.send("<h1>App en Express para AWS<h1/>")
})

    //seeds();


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
})