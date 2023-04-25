const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");

//Configurando o recebimento de dados
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Configurando a renderização do html
const baseRule = path.join(__dirname, "template");

app.get("/", (req, res) => {
    res.sendFile(`${baseRule}/index.html`);
});

//Criando exemplo post para dados de login de usuario
app.post("/user/dados", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
});

//Método de conexão com o banco de dados


app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");
})