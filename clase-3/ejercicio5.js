function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for(let i=1; i<=pasos;i++){
        for(let b=1; b<=i;b++){
            grafico=grafico +"█";
        }
    grafico=grafico + "\n";    
    }
    return grafico;
}
console.log(dibujarGraficoConsumo(20));