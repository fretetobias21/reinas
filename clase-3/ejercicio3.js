function simularReportePing(intentosMaximos) {
    for(let i=1;i<=intentosMaximos; i++){
        if(i%5==0){
            console.log("Error crítico de hardware en intento "+i);
            break;
        }
        if(i%2==0){
            console.log("Intento "+i+": Exitoso.");
        }
        else{
            console.log("Intento "+i+": Fallido.");
        }
    }
}
simularReportePing(6);