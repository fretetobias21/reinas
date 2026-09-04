// ==============================================================================
// Ejercicio 13: Gráfico de Consumo de Memoria
// Consigna: Escribir una función llamada `dibujarGraficoConsumo` que reciba `pasos` (Number)
// y retorne una cadena formando una pirámide de caracteres "█" finalizada en salto de línea.
// ==============================================================================

function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for (let i = 1; i <= pasos; i++) {
        for (let b = 1; b <= i; b++) {
            grafico = grafico + "█";
        }
        grafico = grafico + "\n";
    }
    return grafico;
}

// Muy bien resuelta la lógica de bucles anidados. Como sugerencia moderna, podés usar el método nativo de string `.repeat()` para simplificar el bucle interno:

function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for (let i = 1; i <= pasos; i++) {
        grafico += "█".repeat(i) + "\n";
    }
    return grafico;
}

console.log(dibujarGraficoConsumo(20));