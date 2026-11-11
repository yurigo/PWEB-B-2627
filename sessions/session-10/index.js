// import { data } from "./data.js";

// url: https://pokeapi.co/api/v2/pokemon

// const data = fetch("https://pokeapi.co/api/v2/pokemon");

// function promiseFullfilledHandler2(result) {
//     console.log("fullfilled", result);

//     const results = result.results;

//     const pokemones = document.querySelector(".pokemones")

//     results.forEach(element => {
//         const card = document.createElement("article");
//         const title = document.createElement("h2");
//         const link = document.createElement("a");

//         title.textContent = element.name;

//         link.textContent = "ver más";
//         link.href = "https://pokeapi.co/api/v2/pokemon/1/";

//         card.classList.add("card")
//         card.appendChild(title);
//         card.appendChild(link);

//         pokemones.appendChild(card);
//     });

// }

// function promiseFullfilledHandler(result) {
//     // console.log("fullfilled", result.json());

//     const infoPokemon = result.json();

//     infoPokemon.then(promiseFullfilledHandler2);

// }

// function promiseRejectedHandler(error) {

// }

// data.then(promiseFullfilledHandler);
// data.catch(promiseRejectedHandler);



// for (let i = 0; i < 10_000; i++) {
//     console.log(i);
// }



/*


const results = data.results;

const pokemones = document.querySelector(".pokemones")

results.forEach(element => {
    const card = document.createElement("article");
    const title = document.createElement("h2");
    const link = document.createElement("a");

    title.textContent = element.name;

    link.textContent = "ver más";
    link.href = "https://pokeapi.co/api/v2/pokemon/1/";

    card.classList.add("card")
    card.appendChild(title);
    card.appendChild(link);

    pokemones.appendChild(card);
});

*/


const response = fetch("https://pokeapi.co/api/v2/pokemon");

response.then((result) => {
    if (!result.ok) throw "Error!!"

    return result.json();
}).then((data) => {
    const results = data.results;

    const pokemones = document.querySelector(".pokemones")

    results.forEach(element => {
        const card = document.createElement("article");
        const title = document.createElement("h2");
        const link = document.createElement("a");

        title.textContent = element.name;

        link.textContent = "ver más";
        // link.href = "https://pokeapi.co/api/v2/pokemon/1/";

        card.classList.add("card")
        card.appendChild(title);
        card.appendChild(link);

        pokemones.appendChild(card);
    });
}).catch((error) => {
    console.log("ha habido un error al hacer la peticion");
})

// async / await // syntax sugar.


// 





