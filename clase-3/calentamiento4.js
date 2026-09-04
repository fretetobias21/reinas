// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si es múltiplo de 3
// - "Buzz" si es múltiplo de 5
// - "fizzBuzz" si es múltiplo de 3 y de 5
// - El mismo número si no es múltiplo de ninguno
// ==============================================================================

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "fizzBuzz";
    }
    else if (num % 3 == 0) {
        return "fizz";
    }
    else if (num % 5 == 0) {
        return "Buzz";
    }
    else {
        return num;
    }

}

// Excelente la prioridad del primer condicional evaluando los múltiplos de 3 y 5 juntos. Te dejo la alternativa con variable auxiliar de retorno único:

function fizzBuzz(num) {
    let resultado = num;

    if (num % 3 === 0 && num % 5 === 0) {
        resultado = "fizzBuzz";
    } else if (num % 3 === 0) {
        resultado = "fizz";
    } else if (num % 5 === 0) {
        resultado = "Buzz";
    }

    return resultado;
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));