// Definindo um array / lista
let lista = [];   // Lista vazia
console.log(lista);
lista = ["Pedro","Maria","José",300];
console.log(lista);
console.log(lista[2]);

// Pequisar um elemento na lista
console.log(
    lista.indexOf("Pedro")+"\n"+
    lista.indexOf("Lucas")+"\n"+
    lista[lista.indexOf("José")]
);

// Alterar um elemento
lista[1] = "Madalena";
console.log(lista);

// Adicionar elemento
lista.push("Maria");
console.log(lista);

// Removendo o primeiro Elemento
lista.shift()
console.log(lista);

// Removendo o Ultimo elemento
lista.pop();
console.log(lista);



