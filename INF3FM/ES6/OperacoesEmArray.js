
let nomes = ["Pedro","Maria","João","José","Pedro"] ;

// Map - percorre os itens do array e executa uma função

nomes.map((value,index)=>{
    console.log(`Valor passado ${value} no índice ${index}`);
});

// FIND

let busca = nomes.find((value)=>{
    return value === "João"
})
console.log(busca);

busca = nomes.find((value)=>{
    return value === "Joao"
})
console.log(busca);

// Filter

busca = nomes.filter((value)=>{
    return value === "Pedro"
})
console.log(busca);

// include

let resultado = nomes.includes("Pedro");
console.log(resultado);

resultado = nomes.includes("joão");
console.log(resultado);











