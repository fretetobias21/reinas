// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC) se calcula dividiendo el peso por la altura al cuadrado.
// Escribir una función llamada `bmi` que reciba peso y altura y retorne:
// - "Bajo de peso" si es menor a 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es mayor o igual a 30
// ==============================================================================

function bmi(peso, altura) {
    let imc = peso / (altura ** 2);

    if (imc < 18.5) {
        return "Bajo de peso";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// Impecable resolución usando la fórmula peso / (altura ** 2) y la escala de rangos con if/else if. Te dejo la alternativa usando variable auxiliar de retorno único:

function bmi(peso, altura) {
    let imc = peso / (altura ** 2);
    let diagnostico = "Obeso";

    if (imc < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (imc < 25) {
        diagnostico = "Normal";
    } else if (imc < 30) {
        diagnostico = "Sobrepeso";
    }
    
    return diagnostico;
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7)); 