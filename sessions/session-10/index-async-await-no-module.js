
async function main() {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon");

    if (!result.ok) throw "Error!!"

    const data = await result.json();

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

}
main();