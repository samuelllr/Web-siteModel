const express = require("express");
const app = express();
const path = require("path");

//Configurando o recebimento de dados
app.use()
app.use(express.json());

// Configurando a renderização do html
const baseRule = path.join(__dirname, "template");

app.get("/", (req, res) => {
    res.sendFile(`${baseRule}/index.html`);
});

app.listen(3000, () => {

    
})