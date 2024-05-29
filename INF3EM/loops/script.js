// while = enquanto
let  x = 0 ;
while ( x <= 10 ){
    console.log("O valor de x é "+x);
    x++;  // x = x+1 
}
console.log("fim do while ... ");

// for 
for ( a = 0;a <= 10 ; a++){
    console.log("O valor de a é "+a);
}
console.log("fim do for ... ");

// While true

while ( true ){
    let numero = prompt("Informe um nº "); // numero é uma string 
    console.log(typeof(numero));
    numero = Number(numero); // transformo a string em um number , aí comparo com ===
    console.log(typeof(numero));
    if ( numero === 0){
        break;
    } else {
        console.log("O numero digitado foi " + numero )
    }
}
console.log("fim do while true  ... ");
