// ==============================================================================
// Ejercicio 6: Imprimir Arreglo
// Consigna: Escribir una función llamada `imprimirArreglo` que reciba un arreglo
// de elementos e imprima cada uno en la consola en una línea separada.
// ==============================================================================

function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// Impecable recorrido tradicional con for e i < arreglo.length. Como alternativa moderna (ES6), podés usar for...of para recorrer elementos directamente:

function imprimirArregloAlternativo(arreglo) {
    for (const elemento of arreglo) {
        console.log(elemento);
    }
}

imprimirArreglo([1, "Hola", 2, "Mundo"]);
