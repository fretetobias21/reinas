function calcularTarifa(tipoVehiculo, hora, esFeriado){
    let precio=0;
    let precioFinal=0
    tipoVehiculo=tipoVehiculo.toUpperCase();
    if(tipoVehiculo=="MOTO"){
        precio=150;
    }
    else if(tipoVehiculo=="AUTO"){
        precio=300;
    }
    else if(tipoVehiculo=="CAMION"){
        precio=600;
    }
    else{
        console.log("Alerta, se ha identificado un tipo de vehículo no reconocido")
    }
    if(((8<=hora && hora<=10)||(17<=hora && hora<=19)) && !esFeriado){
        precioFinal=precio+(precio*30/100);
    }
    else{
        precioFinal=precio;
    }
    return precioFinal;
}

function simularFilaCabina(cantidadVehiculos){
    for(let i=0;i<cantidadVehiculos;i++){
    const vehiculos = ["moto", "auto", "camion"];
    let tipoVehiculo = vehiculos[Math.floor(Math.random() * vehiculos.length)];
    let hora = Math.floor(Math.random() * 24);
    let esFeriado = Math.random() < 0.5;
    console.log("Vehiculo: "+tipoVehiculo, "  | Hora: "+hora, " | Es feriado: "+esFeriado, " | Tarifa: "+calcularTarifa(tipoVehiculo,hora,esFeriado));
    }
}
simularFilaCabina(2);