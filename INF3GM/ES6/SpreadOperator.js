// Spread Operator
// com array

let primeiros = [ 1,2,3,4,5];
let ultimos = [6,7,8,9,10];

console.log("Sem o spread operator");
let numeros = [ primeiros , ultimos , 11,12,13];
console.log(numeros);

console.log("com o spread operator ...");
numeros = [ ...primeiros , ...ultimos , 11,12,13];
console.log(numeros);

// com objetos
let pessoa = {
    nome:"Pedro",
    idade:48
}
let dadosFuncionais = {
    cargo:"Contador",
    anoAdmissao: 2005
}
let funcionario = {
    ...pessoa ,
    ...dadosFuncionais ,
    salario:3500.00
}

console.log(funcionario)



