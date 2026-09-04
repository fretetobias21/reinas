// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de números
// y retorne un nuevo arreglo con cada número multiplicado por 2.
// ==============================================================================

function duplicar(arreglo) {
    let arreglo2 = [];
    for (let i = 0; i < arreglo.length; i++) {
        arreglo2[i] = arreglo[i] * 2;
    }
    return arreglo2;
}

// Muy bien la creación del nuevo arreglo auxiliar sin mutar el original. Te dejo la versión con el método moderno .map()(este método lo vamos a ver mejor hoy en clases):

function duplicarMap(arreglo) {
    return arreglo.map(num => num * 2);
}

console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));