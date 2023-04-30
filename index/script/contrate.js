const form = document.getElementById("form");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const contato = document.getElementById("contato");
const menssagem = document.getElementById("menssagem");

//Instalação do axios
console.log(axios);


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const registroName = nome.value;
    const registroEmai = email.value;
    const registroContato= contato.value;
    const registroMenssagem = menssagem.value;

    if(registroName && registroEmai && registroContato && registroMenssagem){
        envioBack(registroName, registroEmai, registroContato, registroMenssagem);
    }

    console.log(registroName, registroEmai, registroContato, registroMenssagem);
});

//Fazendo o envio para o backend
const envioBack = (name, email, contato, menssagem) => {

    const dados = {
        name,
        email,
        contato,
        menssagem,
    }

    axios.post("http://localhost:3000/contato", dados).then((res) => console.log(res)).catch((err) => {
        console.log(err);
    });


    console.log(name, email);
}

