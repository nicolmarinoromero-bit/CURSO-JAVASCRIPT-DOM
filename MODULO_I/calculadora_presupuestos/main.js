//1.)  declaracion de variables

const nombre = "Juan";
let edad = 30;
let edad1 = 31;
let edad2 = 32;

console.log("Hola, " + nombre + "!");
console.log("Tienes " + edad + " años.");
console.log("Tienes " + edad1 + " años.");
console.log("Tienes " + edad2 + " años.");


const ciudad = "Madrid"; // string
let temperatura = 25; // number
let altura = 1.75; // number (float)
let esSoleado = true; // boolean
const nada = null; // null
let indefinido; // undefined

// 2.) operadores y coerción segura de tipos

const monto = Number("450.50");
Number.isNaN(monto); // false

//  comparacion estricta

if (monto === 450.50) {
    console.log("El monto es igual a 450.50");
} else {
    console.log("El monto no es igual a 450.50");
}

//  === !==  >  <  >=  <= operadores de comparacion
if (temperatura > 20 && esSoleado) {
    console.log("Hace buen tiempo en " + ciudad);
} else {
    console.log("El clima no es ideal en " + ciudad);
}

// 3.) estructuras de control

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número: " + i);
}

switch ( new Date().getDay() ) {
    case 0:
        console.log("Hoy es domingo");
        break;
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sábado");
        break;
    default:
        console.log("Día desconocido");
}


// 4.) Template  strings  y literales
const Nombre = "Ana";
const Edad = 28;
const Ciudad = "Barcelona";

const mensaje = `Hola, mi nombre es ${Nombre}, tengo ${Edad} años y vivo en ${Ciudad}.`;

console.log(mensaje);

const nombreCompleto = "Carlos Pérez";

const saludo = `¡Hola, ${nombreCompleto}!  hoy es ${new Date().toLocaleDateString()}.`;

console.log(saludo);


// 5.) buenas practicas

// Uso de const y let en lugar de var
const PI = 3.14159;
let radio = 5;

// Nombres de variables descriptivos
let numeroDeEstudiantes = 25;
// Comentarios claros y concisos
// Esta función calcula el área de un círculo
function calcularAreaCirculo(radio) {
    return PI * radio * radio;
}

// Evitar el uso de valores mágicos
const MAX_ESTUDIANTES = 30;

// VALIDAR ENTRADAS Y TIPOS DE DATOS Y MANEJO DE ERRORES
function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
