// Criando uma lista 
let lista = ["Pedro",'João','José','Maria',33];
console.log(lista);
console.log(lista[3]);

// Pesquisar um elemento na lista
console.log(
    lista.indexOf("Maria")
)

console.log(
    lista.indexOf("MARIA")
)

// alterar um elemento
lista[0]="Paulo";
console.log(lista);

// adicionar elemento no final da lista
lista.push("Alfredo");
console.log(lista);

// Remover 1º elemento 
lista.shift()
console.log(lista);
// Incluir um elemento na posição 2
lista.splice(2,0,"Tarso");
console.log(lista);


