

// voy a intentar pillar del
// querystring el name

/*

q=asdf
&sca_esv=c70b30f9636752de
&sxsrf=AKL5yDgxpAslAFkRkZ50CAr3OGUEU7HZJw%3A1794421189123&source=hp
&ei=xbH0aum0BrnyyckPl4aWwQE&iflsig=AHSINFcAAAAAavS_1d9lUv_QEYED_240EJwbugTld9oW&ved=2ahUKEwipq7fsw4CYAxU5eTIDHReDJRgQ4dUDegQIABAh&uact=5&oq=asdf&gs_lp=Egdnd3Mtd2l6IgRhc2RmMgsQABiABBixAxiDATILEC4YgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEC4YgAQyBRAAGIAEMgUQABiABEjeBFDHAVj1AnABeACQAQCYATqgAcwBqgEBNLgBA8gBAPgBAZgCBaAC2gGoAgrCAgoQABgDGI8BGOoCwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiABBiKBRixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgIUEC4YgAQYigUYsQMYgwEYxwEY0QPCAggQLhiABBixA8ICCBAAGIAEGLEDwgILEC4YgAQYxwEYrwGYAwTxBfGFv9JVFit-kgcBNaAHpjKyBwE0uAfWAcIHBTAuNC4xyAcJgAgB
&sclient=gws-wiz

*/


// // 1. Obtener la parte de la query (?nombre=juan&edad=30)
// const queryString = window.location.search;

// // 2. Crear el objeto URLSearchParams
// const parametros = new URLSearchParams(queryString);

// // 3. Obtener el valor de un parámetro específico usando .get()
// const nombre = parametros.get('nombre'); // "juan"
// const edad = parametros.get('edad');     // "30"

const queryString = window.location.search;
const parametros = new URLSearchParams(queryString);

const name = parametros.get("name");

// console.log(name)

const result = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

if (!result.ok) throw "Error!!"

const data = await result.json();

const id = data.id;
// const name = data.name;
const baseExperience = data.base_experience;

const attackIndex = data.stats.findIndex((stat) => {
    // console.log(stat.stat.name);
    return stat.stat.name === "attack"
});

// console.log(attackIndex)

const ataque = data.stats[attackIndex].base_stat

console.log(ataque)


const titleH1 = document.querySelector("header > h1");
titleH1.textContent = name;


const spanNombre = document.querySelector("#nombre");
const spanAtaque = document.querySelector("#ataque");

spanNombre.textContent = name;
spanAtaque.textContent = ataque;


const htmlElementsWithData = document.querySelectorAll(".no-data");

htmlElementsWithData.forEach((e) => {
    e.classList.remove("no-data")
})

const sprite = data.sprites.front_default;

console.log(sprite);

const pokemonImage = document.querySelector("main > img:first-child")
pokemonImage.classList.add("yuhu");

pokemonImage.src = sprite;
