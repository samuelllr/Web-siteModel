const form = document.getElementById("form");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confipassword = document.getElementById("confipassword");

//Instalação do axios
console.log(axios);


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const registroName = nome.value;
    const registroEmai = email.value;
    const registroPassword = password.value;
    const registroConfipassword = confipassword.value;

    if(registroName && registroEmai && registroPassword && registroConfipassword){
        envioBack(registroName, registroEmai, registroPassword, registroConfipassword);
    }

    console.log(registroName, registroEmai, registroPassword, registroConfipassword);
});

//Fazendo o envio para o backend
const envioBack = (name, email, password, confipassword) => {

    const dados = {
        name,
        email,
        password,
        confipassword,
    }

    axios.post("http://localhost:3000/contato", dados).then((res) => console.log(res)).catch((err) => {
        console.log(err);
    });


    console.log(name, email);
}

