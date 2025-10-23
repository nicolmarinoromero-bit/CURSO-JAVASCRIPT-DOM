const ingresos = Number(prompt("Ingrese el monto de sus ingresos mensuales:"));
const gastosStr = prompt("Gastos separados por comas (por ejemplo: 200,150.50,300): ") || ""; // "200,150.50,300" o cadena vacía


// Normalizar  dividir  recortar  y convertir a números


const gastos  = gastosStr.split(",") // Dividir la cadena en un array
    .map(gasto => gasto.trim()) // Recortar espacios en blanco
    .filter(gasto => gasto !== "") // Eliminar entradas vacías
    .map(gasto => Number(gasto)); // Convertir a números

// validar que todos los gastos sean números válidos

const invalidoIngresos = Number.isNaN(ingresos) || ingresos < 0;
const gastosInvalidos = gastos.some(gasto => Number.isNaN(gasto) || gasto < 0); // Verificar si algún gasto es inválido


if (invalidoIngresos || gastosInvalidos) {
    alert("Por favor, ingrese valores válidos.");
} else {
    const totalGastos = gastos.reduce((total, gasto) => total + gasto, 0); // Sumar todos los gastos
    const ahorroMensual = ingresos - totalGastos; // Calcular el ahorro mensual
    alert(`Su ahorro mensual es: ${ahorroMensual.toFixed(2)}`); // Mostrar el ahorro mensual con dos decimales


    if (ahorroMensual > 0) {
        alert("¡Felicidades! Está ahorrando dinero cada mes.");
    } else if (ahorroMensual < 0) {
        alert("Está gastando más de lo que gana. Considere reducir sus gastos.");
    } else {
        alert("Sus ingresos y gastos están equilibrados.");
    }
}