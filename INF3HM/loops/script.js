// while - enquanto

let x = 0 ;
while ( x  <= 10 ){
    document.write("<br> o valor de x é "+x);
    x++;
}

// for

for (a=0;a<=10;a++){
    document.write("<br> o valor de a é "+a);
}


// outro exemplo de while 
while ( 1 === 1){
  let numero = prompt("Informe um numero , para terminar digite 0 ");
  document.write("O numero digitado foi "+numero);
  if ( numero == 0 ){
    document.write(" acabou ... ");
    break ;
  }  
}
