function duplicar(arreglo) {
    let arreglo2=[];
    for(let i=0 ; i<arreglo.length ;i++){
        arreglo2[i]=arreglo[i]*2;
    }
    return arreglo2;
}
console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));