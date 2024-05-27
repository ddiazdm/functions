import "./style.css";

console.log("Hello Typescript!");

function actualizarNumero(operacion: 'suma' | 'resta' | 'reset' | 'cambiar', nuevoValor?: number) {
    let numeroElement = document.querySelector(".numero-turno");
    if (numeroElement  instanceof HTMLHeadingElement) {
        let numero = numeroElement.textContent;
        if (numero) {
            let valorActual = parseInt(numero);
            let nuevoNumero: number;
            switch (operacion) {
                case 'suma':
                    nuevoNumero = valorActual + 1;
                    break;
                case 'resta':
                    nuevoNumero = valorActual - 1;
                    break;
                case 'reset':
                    nuevoNumero = 0;
                    break;
                case 'cambiar':
                    nuevoNumero = nuevoValor !== undefined ? nuevoValor : valorActual;
                    break;
            }
            numeroElement.textContent = nuevoNumero.toString().padStart(2, '0');
            console.log(nuevoNumero);
        }
    } else {
        console.error("No se encontró el elemento con la clase 'numero-turno'.");
    }
}


let sumaButton = document.querySelector(".suma");
let restaButton = document.querySelector(".resta");
let resetButton = document.querySelector(".reset");

if (sumaButton instanceof HTMLButtonElement) {
    sumaButton.addEventListener("click", () => actualizarNumero('suma'));
} else {
    console.error("No se encontró el botón con la clase 'suma'.");
}

if (restaButton instanceof HTMLButtonElement) {
    restaButton.addEventListener("click", () => actualizarNumero('resta'));
} else {
    console.error("No se encontró el botón con la clase 'resta'.");
}

if (resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", () => actualizarNumero('reset'));
} else {
    console.error("No se encontró el botón con la clase 'reset'.");
}

document.querySelector(".cambiar-turno")?.addEventListener("click", () => {
    let inputElement = document.querySelector(".input-turno");
    if (inputElement instanceof HTMLInputElement) {
        let nuevoValor = parseInt(inputElement.value);
        if (!isNaN(nuevoValor)) {
            actualizarNumero('cambiar', nuevoValor);
        } else {
            console.error("El valor ingresado no es un número válido.");
        }
    } else {
        console.error("No se encontró el input con la clase 'input-turno'.");
    }
});
