function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    cantArchivos = Number(cantArchivos);
    tamanoPromedioMB= Number(tamanoPromedioMB);
    let total= cantArchivos*tamanoPromedioMB;
    let totalkilobytes=total*1024;
    return "Se descargarán " +cantArchivos+" archivos con un peso total de "+totalkilobytes+" KB.";
    
}
console.log(calcularEstadisticasDescarga("10", "1.5"));