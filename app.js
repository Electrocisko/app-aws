import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req,res) => {
    res.send("<h1>App en Express para AWS<h1/>")
})


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
})