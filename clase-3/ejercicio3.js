// ==============================================================================
// Ejercicio 11: Simulación de Test de Red (Reporte Ping)
// Consigna: Escribir una función llamada `simularReportePing` que reciba `intentosMaximos`.
// Recorrer desde 1 hasta `intentosMaximos`:
// - Si el intento es múltiplo de 5, mostrar "Error crítico de hardware en intento X" y detener (break).
// - Si es par, mostrar "Intento X: Exitoso".
// - Si es impar, mostrar "Intento X: Fallido".
// ==============================================================================

function simularReportePing(intentosMaximos) {
    for (let i = 1; i <= intentosMaximos; i++) {
        if (i % 5 == 0) {
            console.log("Error crítico de hardware en intento " + i);
            break;
        }
        if (i % 2 == 0) {
            console.log("Intento " + i + ": Exitoso.");
        }
        else {
            console.log("Intento " + i + ": Fallido.");
        }
    }
}

// Impecable bucle for con la interrupción break al llegar al múltiplo de 5. Te dejo una alternativa usando operador ternario y Template Literals:

function simularReportePing(intentosMaximos) {
    for (let i = 1; i <= intentosMaximos; i++) {
        if (i % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${i}`);
            break;
        }
        const estado = (i % 2 === 0) ? "Exitoso." : "Fallido.";
        console.log(`Intento ${i}: ${estado}`);
    }
}

simularReportePing(6);