// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos argumentos
// numéricos: `numeroInicial` y `numeroFinal`. Debe retornar la suma de todos los
// números en ese rango (incluyéndolos a ambos).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma = suma + i;
    }
    return suma;
}

// Muy bien implementado el bucle acumulador (suma = suma + i). Estructura limpia y retorno único perfecto.

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));