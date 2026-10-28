import { alumnos } from "./alumnos.js";

var a = 45; // esto está prohibido.

const b = 33;
let c = 44;

// b = 1;
c = 123478;
c = "hola";
c = true;
c = false;
c = 1234.345;
c = 123434587234582234573485739457823592375923875923478375782349578;
c = null;
// c = function () { }
c = undefined;
c = `hola`

console.log(typeof c);
console.log(c)

const arr = [1, 2, 3, 4, true, undefined, 3.3];
console.log(arr);


const obj = {
    id: 54,
    name: "Yuri",
    age: 9001,
    hobbies: ["hobby1", "hobby2", "pokemon"]
};

console.log(obj);

console.log("esto es el 4:", arr[3])

console.log("Esto es Yuri:", obj.name)

console.log("Esto es pokemon:", obj.hobbies[2])

console.log("hola".toUpperCase());


// int a = 10;
// long b = 20;
// short c = 30;

// single 
// double
// float



const boton = document.querySelector("#clickame");

// console.log(boton.classList)

// boton.classList.remove("adios")
// boton.classList.remove("hola")

// boton.classList.add("rojo")

// console.log(boton.classList)ç

function cambioDeColor() {
    boton.classList.toggle("rojo")
}

boton.addEventListener("click", cambioDeColor)


const miObj = {
    name: "Yuri"
}

console.log(miObj)

miObj.name = "Menganito"

console.log(miObj)


// miObj = "salchipapa"

let i = 0;

i++;

console.log(i)

console.log(5 == "5")
console.log(5 === "5")

if (5 == "5") {
    console.log("Esto lo hago");
}
else {
    console.log("Esto NO lo hago");
}

if (5 === "5") {
    console.log("Esto lo hago");
}
else {
    console.log("Esto NO lo hago");
}

const nota = 4;

if (nota >= 5) {
    console.log("He aprobado")
} else {
    console.log("He suspendido")
}

for (let i = 0; i < 10; i++) {
    console.log("la i vale:", i)
}

let x = 0
while (x < 10) {
    x++;
    console.log("la x vale:", x)
}

let y = 0
do {
    y++;
    console.log("la y vale:", y)
} while (y < 10)


const notas = [4, 5.6, 3, 3, 3.8, 1, 10];
console.log(notas);

for (let i = 0; i < notas.length; i++) {
    console.log("la nota es", notas[i]);
}

for (const nota of notas) {
    console.log("(for of) la nota es", nota)
}

const qwer = 0

switch (qwer) {
    case 0:
        console.log("qwer es 0")
        break;
    case 1:
        console.log("qwer es 1")
        break;
    case 2:
        console.log("qwer es 2");
        break;
    default:
        console.log("oh my");
        break;
}

if (qwer === 0) {
    console.log("qwer es 0");
}
else if (qwer === 1) {
    console.log("qwer es 1");
}
else if (qwer === 2) {
    console.log("qwer es 2");
}
else if (qwer === 3) {
    console.log("qwer es 3");
}
else {
    console.log("oh my");
}


if (a && b) {

}

if (a || b) {

}

console.log(!true)
console.log(!!true)

console.log("5", !!5)
console.log("-5", !!-5)
console.log("0", !!0)
console.log("-0", !!-0)

console.log("[]", !![])
console.log("{}", !!{})

console.log(!!"hola")
console.log(!!"")


const texto = "";

if (texto) {
    console.log("hay texto")
}

const seats = 0;
console.log(seats || 20); // 20: zero is treated as false
console.log(seats ?? 20); // 0: only null/undefined fall back


console.clear();


console.log(alumnos)


function filtradoDeAprobados(elemento) {
    return elemento.nota >= 5;
}

const nombresQueEmpiezanPorJ = function (elemento) {
    return elemento.nombre.startsWith("J");
}


const aprobados = alumnos.filter(filtradoDeAprobados);

console.log("aprobados!!!")
console.log(aprobados)

console.log(alumnos.filter(nombresQueEmpiezanPorJ))

console.log(alumnos.filter((elemento) => elemento.id > 2))


const filomena = alumnos.find((elem) => elem.nombre === "Filomena")
console.log(filomena)


const indexJavier = alumnos.findIndex((elem) => elem.nombre === 'Javier');
console.log(indexJavier)
console.log(alumnos[indexJavier])

// map: recorre el array y cambia el valor por otro.

const valores = [1, 2, 3, 4, 5];

const dobles = valores.map((elem) => 2 * elem)
console.log(dobles);

// --------

const alumnosConNotaMenosUno =
    alumnos.map(a => {
        const x = { ...a }
        x.nota--;
        return x
    })

console.log(alumnos);
console.log(alumnosConNotaMenosUno);


const frutas = [];

frutas.push('manzana');
frutas.push('pera');
frutas.push('platano');

console.log(frutas);

const elementoQuitado = frutas.pop();

console.log(frutas);


const [_, __, ___, ...rest] = [1, 2, 3, 4, 5, 6, 7];
const { id, apellido, a: fff } = { id: 1, a: 5, nombre: 2, apellido: 3 };
console.log(rest, id, apellido, fff);

try {
    console.log(obj.salchicha?.perro)

} catch (ex) {
    console.error("eres un perro salchicha");

}




