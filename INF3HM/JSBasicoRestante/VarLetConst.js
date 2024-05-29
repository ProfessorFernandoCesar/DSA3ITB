// Var : Escopo Global

var a = 10 ;
console.log(" Valor de inicial de a ",a);
if (true){
    a = 20 ;
    console.log("Valor de a , após a atribuição no bloco ",a);
}
console.log("valor de a após a execução do bloco ",a);
console.log("------------------");
var b = 10 ;
console.log(" Valor de inicial de b ",b);
if (true){
    let b = 20 ;
    console.log("Valor de b , após a atribuição no bloco ",b);
    console.log("Valor de b global  , após a atribuição no bloco ",window.b);
}
console.log("valor de b após a execução do bloco ",b);
console.log("------------------");


const PI = 3.14 ;
console.log(PI);
// PI = 20; gera erro 