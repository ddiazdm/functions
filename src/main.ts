import "./style.css";

console.log("Hello Typescript!");

function actualizarNumero(operacion: 'suma' | 'resta' | 'reset' | 'cambiar', nuevoValor?: number) {
    const numeroElement = document.querySelector(".numero-turno") as HTMLElement;
    if (numeroElement) {
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

['suma', 'resta', 'reset'].forEach(operacion => {
    document.querySelector(`.${operacion}`)?.addEventListener("click", () => actualizarNumero(operacion as 'suma' | 'resta' | 'reset'));
});

document.querySelector(".cambiar-turno")?.addEventListener("click", () => {
    const inputElement = document.querySelector(".input-turno") as HTMLInputElement;
    if (inputElement) {
        const nuevoValor = parseInt(inputElement.value);
        if (!isNaN(nuevoValor)) {
            actualizarNumero('cambiar', nuevoValor);
        }
    }
});
