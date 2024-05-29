// função padrão
function somar(a,b){
    return a+b ;
}
console.log(somar(20,10));

// função anônima
let _somar = (a,b)=>{
    return a+b ;
}
console.log(_somar(15,12)); 

// Utilização em arrays  
// MAP 
console.log("==== MAP ====");
let nomes = ["fernando","pedro","maria"];

nomes.map((value,index)=>{
    console.log(`passando o valor ${value} no indice ${index}`);
})









