// ==============================================================================
// Ejercicio 12: Procesamiento de Pago
// Consigna: Escribir una función principal `procesarCompraMovil` que contenga 3 funciones internas:
// 1. `aplicarDescuento(precio, descuento)`
// 2. `sumarIva(precioInicial)` (aplica 21% de IVA)
// 3. `redondear(numeroDecimal)` (a 2 decimales usando toFixed)
// Retornar el precio final procesado en cadena.
// ==============================================================================

function procesarCompraMovil(precioBase, descuentoPct) {
    function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }
    function sumarIva(precioInicial) {
        return precioInicial + (precioInicial * 21 / 100);
    }
    function redondear(numeroDecimal) {
        return Number(numeroDecimal.toFixed(2));
    }
    let resultadoFinal = redondear(sumarIva(aplicarDescuento(precioBase, descuentoPct)));
    console.log(resultadoFinal);
    return resultadoFinal;
}

// ¡Excelente composición de funciones! Definiste limpiamente cada función helper e hiciste la composición en cadena. Te dejo la alternativa usando funciones flecha, no por que sea mejor hacerlo así, si no como una variante, en este caso elegís vos que tipo de función preferís crear, pero como recomendación acostumbrensé mucho al uso de funciones flecha:

function procesarCompraMovil(precioBase, descuentoPct) {
    const aplicarDescuento = (p, d) => p * (1 - d / 100);
    const sumarIva = p => p * 1.21;
    const redondear = val => Number(val.toFixed(2));

    return redondear(sumarIva(aplicarDescuento(precioBase, descuentoPct)));
}

procesarCompraMovil(100, 10);