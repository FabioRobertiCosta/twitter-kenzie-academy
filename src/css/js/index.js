// const nome = prompt("Por favor, informar o seu nome:")

// alert("Seja bem vindo(a)    " + nome + "!");

// function soma (numero1, numero2) {
// let total = numero1 + numero2;
// console.log(total);
// }

// soma(10, 49);
// // soma(16, 49);
// // // soma(11, 49);
// // // soma(14, 49);

// // const cabecalho = document.querySelector('header')
// // console.log(cabecalho);

// const tweetar = document.querySelector('button')

// function imprimirConsole() {
//     console.log('O botão foi clicado!');
// }

// tweetar.addEventListener('click', imprimirConsole);


const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets");

function pegarTweet(event) {
    event.preventDefault();
    const tweetTextArea = textarea.value;
    criarTweet(tweetTextArea);

}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {


let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()

const tweet = {
    nome: "Matt",
    foto: "./src/images/Matt-foto-perfil.png",
    usuario: "@MattWallace888",
    texto: tweetTexto,
    tempo: `${hora} : ${minutos}`
}

    listarTemplateTweet(tweet)

}

function listarTemplateTweet(tweet) {

    const {nome, foto, usuario, texto, horario, tempo} = tweet;
 
    let li   = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img  = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div  = document.createElement("div");
    div.classList.add("tweet__conteudo")

    let h2   = document.createElement("h2");
    h2.innerText = nome
    
    let span = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`
   
    let p    = document.createElement("p");
    p.innerText = texto
    
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)
    
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textarea.value = ""
 
}