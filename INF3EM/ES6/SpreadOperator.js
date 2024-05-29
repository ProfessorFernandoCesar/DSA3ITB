// Spread Operator ...
// com array

let primeiros = [1,2,3];
let ultimos = [4,5,6];
let numeros = [ primeiros , ultimos , 7,8,9];
console.log(numeros);
numeros = [ ...primeiros , ...ultimos , 7,8,9,10,11];
console.log(numeros);

// com objetos 
let pessoa = {
    nome:"pedro",
    sobrenome:"Machado"
};
let dadosFuncionais = {
    cargo:"Contador",
    anoAdmissao: 2005
};
let funcionario = {
    ...pessoa ,
    ...dadosFuncionais,
    salario: 3000.00
}
console.log(funcionario);




