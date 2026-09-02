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
procesarCompraMovil(100, 10);