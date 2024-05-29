// while = enquanto

let x = 0;
while ( x <= 10){
    console.log(" O valor de x é "+x);
    x++;  // x = x + 1
}

// for 

for ( a=0 ; a<=10 ; a++){
    console.log(" O valor de a é "+a);
}

// while true

while (1 === 1) {
    let numero = prompt("Informe um numero , para terminar digite 0 ");
    if ( numero == 0){
        console.log("acabou ... ");
        break; // sai do loop
    } else {
        console.log("O numero digitado foi "+numero);
    }
}