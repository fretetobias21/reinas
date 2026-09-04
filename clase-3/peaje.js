// ==============================================================================
// Desafío Semanal Obligatorio: Peaje Inteligente (Telepase)
// Consigna: Implementar la facturación automática de una cabina de peaje:
// 1. `calcularTarifa(tipoVehiculo, hora, esFeriado)`:
//    - Tarifas base: "moto": $150, "auto": $300, "camion": $600.
//    - Hora pico (8 a 10 y 17 a 19 inclusive): +30% recargo si NO es feriado.
//    - Aceptar mayúsculas/minúsculas. Si es inválido, advertir y retornar 0.
// 2. `simularFilaCabina(cantidadVehiculos)`:
//    - Simular aleatoriamente tipo, hora (0-23) y feriado (true/false).
//    - Mostrar detalle de cada intento en consola y retornar total recaudado.
// ==============================================================================

function calcularTarifa(tipoVehiculo, hora, esFeriado) {
    let precio = 0;
    let precioFinal = 0
    tipoVehiculo = tipoVehiculo.toUpperCase();
    if (tipoVehiculo == "MOTO") {
        precio = 150;
    }
    else if (tipoVehiculo == "AUTO") {
        precio = 300;
    }
    else if (tipoVehiculo == "CAMION") {
        precio = 600;
    }
    else {
        console.log("Alerta, se ha identificado un tipo de vehículo no reconocido")
    }
    if (((8 <= hora && hora <= 10) || (17 <= hora && hora <= 19)) && !esFeriado) {
        precioFinal = precio + (precio * 30 / 100);
    }
    else {
        precioFinal = precio;
    }
    return precioFinal;
}

function simularFilaCabina(cantidadVehiculos) {
    for (let i = 0; i < cantidadVehiculos; i++) {
        const vehiculos = ["moto", "auto", "camion"];
        let tipoVehiculo = vehiculos[Math.floor(Math.random() * vehiculos.length)];
        let hora = Math.floor(Math.random() * 24);
        let esFeriado = Math.random() < 0.5;
        console.log("Vehiculo: " + tipoVehiculo, "  | Hora: " + hora, " | Es feriado: " + esFeriado, " | Tarifa: " + calcularTarifa(tipoVehiculo, hora, esFeriado));
    }
}
simularFilaCabina(2);

// ¡Excelente trabajo en el ejercicio integrador! Muy bien el uso de .toUpperCase() para normalizar datos, el patrón de retorno único (return precioFinal;) y la simulación dinámica con Math.random().
//
// Desafío de Modularización (Responsabilidad Única):
// En desarrollo profesional buscamos dividir problemas complejos en funciones auxiliares más pequeñas donde cada una hace una sola cosa bien. Mirá cómo quedaría desacoplando la lógica:

function normalizarVehiculo(tipo) {
    let vehiculoLimpio = tipo.toUpperCase();
    let esValido = vehiculoLimpio === "MOTO" || vehiculoLimpio === "AUTO" || vehiculoLimpio === "CAMION";

    if (!esValido) {
        console.log("Alerta, se ha identificado un tipo de vehículo no reconocido: " + tipo);
        return null;
    }
    return vehiculoLimpio;
}

function obtenerTarifaBase(tipo) {
    let tarifa = 0;
    if (tipo === "MOTO") tarifa = 150;
    if (tipo === "AUTO") tarifa = 300;
    if (tipo === "CAMION") tarifa = 600;
    return tarifa;
}

function esHorarioPico(hora, esFeriado) {
    let enRango = (hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19);
    return enRango && !esFeriado;
}

function calcularTarifaModular(tipoVehiculo, hora, esFeriado) {
    let vehiculo = normalizarVehiculo(tipoVehiculo);
    if (!vehiculo) return 0;

    let tarifaFinal = obtenerTarifaBase(vehiculo);

    if (esHorarioPico(hora, esFeriado)) {
        tarifaFinal = tarifaFinal * 1.30;
    }

    return tarifaFinal;
}

console.log(calcularTarifa("moto", 9, false));
console.log(calcularTarifa("auto", 18, true));
console.log(calcularTarifa("camion", 12, false));