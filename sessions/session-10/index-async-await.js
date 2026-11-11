const previousButton = document.querySelector("button.previous")
const postButton = document.querySelector("button.post")
const nextButton = document.querySelector("button.next")
const button1 = document.querySelector("button.b1")
const button2 = document.querySelector("button.b2")


const result = await fetch("https://pokeapi.co/api/v2/pokemon");

if (!result.ok) throw "Error!!"

let data = await result.json();

console.log(data);


let results = data.results;

const pokemones = document.querySelector(".pokemones > .content")


function pintaLosPokemon(pokemon) {

    if (!pokemon.previous) {
        previousButton.setAttribute("disabled", '');
    } else {
        previousButton.removeAttribute("disabled");
    }

    if (!pokemon.next) {
        nextButton.setAttribute("disabled", '');
    } else {
        nextButton.removeAttribute("disabled");
    }

    pokemones.innerHTML = "";

    pokemon.results.forEach(element => {
        const card = document.createElement("article");
        const title = document.createElement("h2");
        const link = document.createElement("a");

        title.textContent = element.name;

        link.textContent = "ver más";
        // esto es una tonteria
        // link.href = "https://pokeapi.co/api/v2/pokemon/1/";
        link.href = "/pokemon.html?name=" + element.name;


        card.classList.add("card")
        card.appendChild(title);
        card.appendChild(link);

        pokemones.appendChild(card);
    });

}

pintaLosPokemon(data)


// async function suma(a ,b){
//     await fetch("https://suma/a/b");
//     return a + b
// }


previousButton.classList.add("disabled")




previousButton.addEventListener("click", async (event) => {

    if (!data.previous) return;

    const response = await fetch(data.previous);
    const nextData = await response.json();

    data = nextData;

    pintaLosPokemon(nextData)

})
nextButton.addEventListener("click", async (event) => {
    if (!data.next) return;

    const response = await fetch(data.next);
    const nextData = await response.json();

    data = nextData;

    pintaLosPokemon(nextData)

})


postButton.addEventListener("click", async (event) => {

    const response = await fetch("https://dummyjson.com/posts/add",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "hola",
                body: "hola",
                userId: 1
            })
        }
    )

    if (!response.ok) return console.log("ha fallao con " + response.status)

    const data = await response.json();
    console.log(data)

})


function loadIds() {
    try {
        const raw = localStorage.getItem("favs");
        const ids = JSON.parse(raw ?? "[]");
        return Array.isArray(ids) ? ids : [];
    } catch {
        return [];
    }
}

const favIDS = loadIds();



button1.addEventListener("click", (event) => {
    favIDS.push(1)
    localStorage.setItem("favs", JSON.stringify(favIDS))
})
button2.addEventListener("click", (event) => {
    favIDS.push(2)
    localStorage.setItem("favs", JSON.stringify(favIDS))

})