function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if(esInvitado){
        return false;
    }
    else if(edad>=18){
        return true;
    }
    else if(tienePermisoDocente){
        return true;
    }
    else{
        return false;
    }
}
console.log(evaluarAccesoApp(16, true, false));
console.log(evaluarAccesoApp(20, false, true));