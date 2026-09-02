function contrasenaValida(str) {
    if (str==="2Fj(jjbFsuj" || str==="eoZiugBf&g9"){
        return true;
    }
    else{
        return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));
console.log(contrasenaValida(""));