// Spread Operator
// com Arrays

let primeiros = [1,2,3,4];
let ultimos = [5,6,7,8];
let numeros = [ primeiros , ultimos];
console.log(numeros);

numeros = [ ...primeiros , ...ultimos];
console.log(numeros);

// com objetos
let pessoa = { 
    nome: "Fernando",
    sobrenome: "Silva"
}

let pessoaCompleta = {
    ...pessoa,
    cargo:"Professor",
    anoAdmissao : 2010
}

console.log(pessoaCompleta);