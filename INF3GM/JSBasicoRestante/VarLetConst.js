// Exemplo com var : tem escopo de função ou escopo global se declarado fora da função
/*
var a = 10;
console.log("Valor inicial de a :",a);
if (true){
    var a = 20 ;
    console.log("Valor de a após alteração no bloco :",a);
}
console.log("Valor de a após execução do bloco :",a);
*/
// Let : Escopo de Bloco
var a = 10;
console.log("Valor inicial de a :",a);
if (true){
    let a = 20 ;
    console.log("Valor de a após alteração no bloco :",a);
    console.log("Valor Global de a após alteração no bloco :",window.a);
}
console.log("Valor de a após execução do bloco :",a);

// Uso de Constante : tem escopo de bloco 
const PI = 3.1415 ;
console.log(PI)





