// Criar um array
let lista = ["Pedro","Gabriel","João","Maria",33];
console.log(lista);
console.log(lista[3]);
// Pesquisar elemento
console.log( 
    lista.indexOf("Pedro")
);
console.log( 
    lista.indexOf("pedro")
);
// alterar elemento
lista[2]="Paulo";
console.log(lista);
// adicionando elemento no final 
lista.push("Pedro");
console.log(lista);
// removendo o ultimo elemento
lista.pop()
console.log(lista);
// removendo o 1º elemento 
lista.shift()
console.log(lista);


