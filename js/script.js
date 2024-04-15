/******
console.log("hola mundo");
let valorDelDolar = 15.5;
let valorDelPesoMexicano = 16.89;

function conversorDolaresAPesos(dolares, pesosMexicanos) {
    let conversion = dolares * pesosMexicanos;
    return conversion.toFixed(2);
}

conversion = conversorDolaresAPesos(valorDelDolar, valorDelPesoMexicano);
console.log(`El valor de la conversion de pesos a dolares es: ${conversion}`);
********* */

let inputEnDolares;
let valorDelDolar = 15.5;
const convertir = document.querySelector("[data-input-boton]");
convertir.addEventListener("click", convertirDolaresAPesos);

function convertirDolaresAPesos() {
    inputEnDolares = document.querySelector("[data-input-pesos]");
    valorEnPesos = Number(inputEnDolares.value);
    let valorDeLaConversion = valorDelDolar * valorEnPesos;
    let caja = document.querySelector(".caja");
    caja.classList.add("caja");
    caja.innerHTML = `La conversión de ${valorEnPesos} dolares equivale a $ pesos ${valorDeLaConversion}`;
    //borrando el valor que ingresa el usuario
    inputEnDolares.value = "";
}


