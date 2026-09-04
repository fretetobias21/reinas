// ==============================================================================
// Ejercicio 9: Cálculo de Espacio de Almacenamiento
// Consigna: Escribí una función llamada `calcularEstadisticasDescarga` que reciba
// dos parámetros: `cantArchivos` (String) y `tamanoPromedioMB` (String).
// 1. Convertir ambos parámetros a valores numéricos (Number).
// 2. Calcular el tamaño total (cantArchivos * tamanoPromedioMB).
// 3. Convertir peso total a KB (1 MB = 1024 KB).
// 4. Retornar: "Se descargarán [cantArchivos] archivos con un peso total de [pesoTotalKB] KB."
// ==============================================================================

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    cantArchivos = Number(cantArchivos);
    tamanoPromedioMB = Number(tamanoPromedioMB);
    let total = cantArchivos * tamanoPromedioMB;
    let totalkilobytes = total * 1024;
    return "Se descargarán " + cantArchivos + " archivos con un peso total de " + totalkilobytes + " KB.";

}

// Impecable el casteo explícito con Number() y el cálculo. Como buena práctica de inmutabilidad y legibilidad, evitamos reasignar los parámetros declarando nuevas constantes con const:


function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const archivos = Number(cantArchivos);
    const tamanoMB = Number(tamanoPromedioMB);
    const pesoTotalKB = archivos * tamanoMB * 1024;

    return `Se descargarán ${archivos} archivos con un peso total de ${pesoTotalKB} KB.`;
}

console.log(calcularEstadisticasDescarga("10", "1.5"));