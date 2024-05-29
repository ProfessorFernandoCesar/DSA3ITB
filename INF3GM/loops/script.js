// while - enquanto

let x = 0 ;
while (x <= 10){
    console.log("O valor de x é "+x);
    x++; // x=x+1
}
console.log("Final do while ");

// for
for ( a = 0 ; a <=10 ; a++){
    console.log(" a = "+a);
}
console.log("Final do for");

// while true + break 

while ( true ){
    let numero = prompt("informe o nº , para encerrar use 0");
    // a entrada no prompt é sempre uma string , assim não devo usar o === no if 
    console.log("O número informado foi "+numero);
    if ( numero == 0){
        break;
    } 
}
console.log(" Fim do loop ");


