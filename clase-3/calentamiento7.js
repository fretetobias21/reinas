// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter, y retorne el número de veces que aparece el carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let suma = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            suma = suma + 1;
        }
    }
    return suma;

}

// Muy bien resuelto el contador dentro del bucle. Estructura limpia y retorno único perfecto.

console.log(numeroDeCaracteres("Hola Mundo", "o"));
console.log(numeroDeCaracteres("MMMMM", "m"));
console.log(numeroDeCaracteres("eeee", "e")); 