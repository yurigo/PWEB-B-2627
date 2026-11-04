let i = 0;

// HTMLElement
// const bola = document.querySelector(".bola");

function mouseMoveHandler(event) {
    // i++;
    // console.log("el raton se ha movido " + i + " veces");

    // bola.style.top = event.clientY - 50 + "px";
    // bola.style.left = event.clientX - 50 + "px";

}

function ejecutateEnUnRato() {
    // console.log("me he ejecutado!!")
    bola.classList.remove("pulse");
}

function clickHandler(event) {
    // console.log(bola.classList)
    bola.classList.add("pulse");

    setTimeout(ejecutateEnUnRato, 1000);

}







document.addEventListener("mousemove", mouseMoveHandler);

// bola.addEventListener("click", clickHandler);


// const botoncito = document.getElementById("addElementButton"); <-- old style
const botoncito = document.querySelector("#addElementButton");

function botoncitoClickHandler(event) {
    // botoncito = // cambia la 🌙 por ☀️;

    // ojo con la inyeccion maliciosa de scripts
    // botoncito.innerHTML = "<script>(() => {alert('te he robado la identidad');})()</script>"
    // botoncito.innerText = "<span>que esto solo es el texto</span>";
    // botoncito.innerHTML = "<span>que esto solo es el texto</span>";


    botoncito.textContent = botoncito.textContent === '☀️' ? '🌙' : '☀️';

    // esto de arriba es lo mismo que esto de abajo: 

    // if (botoncito.textContent === '☀️'){
    //     botoncito.textContent = '🌙'
    // }else {
    //     botoncito.textContent = '☀️'
    // }





    const body = document.querySelector("body");
    // body.style["background-color"] = "pink";
    // body.style.backgroundColor = "pink";
    body.classList.toggle("background-dark");
}

botoncito.addEventListener("click", botoncitoClickHandler);


const formulario = document.querySelector(".toolbar > form");

function submitHandler(event) {
    event.preventDefault();

    // const titulo = document.querySelector("#nameInput").value
    // const contenido = document.querySelector("#contentInput").value

    const datosDelFormulario = new FormData(formulario);

    const titulo = datosDelFormulario.get("esteEsElNameDeNameInput")
    const contenido = datosDelFormulario.get("esteEsElNameDeContentInput")

    console.log("has puesto", titulo, contenido);

    const contenedor = document.querySelector("section.cards");

    const newCard = document.createElement('article')
    newCard.classList.add("card");

    const newImage = document.createElement('img')
    newImage.src = "https://cataas.com/cat/gif?" + new Date().getTime()
    newImage.alt = "gatete"

    newCard.appendChild(newImage)

    const newDiv = document.createElement('div')
    newDiv.classList.add("content")

    const newP = document.createElement('p')
    newP.textContent = contenido

    newDiv.appendChild(newP)

    newCard.appendChild(newDiv)

    const botonera = document.createElement("div")
    botonera.className = "botones"

    const likeButton = document.createElement("button");
    // likeButton.className = "likeButton" // la he liado parda
    likeButton.dataset.fantastic = true;
    likeButton.textContent = "<3";

    // likeButton.addEventListener("click", () => {
    //     likeButton.classList.toggle("clicked");
    //     // tengo que hacer muchas cosas mas...
    //     // ...
    // })

    botonera.appendChild(likeButton);
    newCard.appendChild(botonera);

    contenedor.appendChild(newCard)

    formulario.reset();

    // ojo con añadir event listeners en algun sitio que no toca...
    // que la puede liar parda...

    // buttons.forEach(b => {

    //     b.addEventListener("click", () => {
    //         console.log("AAAAAAAAAAAAAAAAAhhh!!");
    //     })

    // })

}

formulario.addEventListener("submit", submitHandler);



const buttons = document.querySelectorAll(".buttons>button")
// let arrayDeButtons = Array.from(buttons)
buttons.forEach(b => {
    console.log(b.dataset.fulanito);
    // console.log(b.dataset['identificador-super-importante']);
    console.log(b.dataset['identificadorSuperImportante']);  // camel case SI O SI
    console.log(b.dataset.identificadorSuperImportante);

    b.ariaPressed = true;

    b.addEventListener("click", () => {
        console.log("se ha clicado");
    })

})

// event delegation
const cards = document.querySelector(".cards");

cards.addEventListener("click", (event) => {
    // console.log("hola");
    console.log(event.target);

    // if (event.target.className === 'likeButton' || event.target.className === 'likeButton clicked') {
    //     event.target.classList.toggle('clicked')
    // }

    if (event.target.dataset.fantastic) {
        event.target.classList.toggle('clicked')
    }
})




