// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        return true;
    }
    else {
        return false;
    }
}

// Esto está bien, anda, pero no quiero ver nunca el uso de multiples return. Prefiero que usen una variable auxiliar donde guarden uno de los dos estados, y al final de la funcion se haga un ultimo return.
// Te dejo otra manera de hacerla evaluando directamente la condición:

function contrasenaValida(str) {
    return (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9")
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));
console.log(contrasenaValida(""));