function numeroDeCaracteres(str, caracter) {
    let suma=0;
    for(let i=0; i<str.length;i++){
        if(str[i]===caracter){
            suma = suma + 1;
        }
    }
    return suma;
    
}
console.log(numeroDeCaracteres("Hola Mundo", "o"));
console.log(numeroDeCaracteres("MMMMM", "m"));
console.log(numeroDeCaracteres("eeee", "e")); 