const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");

//Configurando o recebimento de dados
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Configurando a conexão com o javascript
app.use(cors());

// Configurando a renderização do html
const baseRule = path.join(__dirname, "pags");

app.get("/", (req, res) => {
    res.sendFile(`${baseRule}/contrate.html`);
});

//Criando exemplo post para dados de login de usuario
app.post("/contato", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const contato = req.body.contato;
    const menssagem = req.body.menssagem;

    console.log(name, email, contato, menssagem);
});

//Método de conexão com o banco de dados


app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");
})