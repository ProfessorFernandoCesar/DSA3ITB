// Spread Operator 
// com array
let primeiros = [ 1,2,3];
let ultimos = [ 4,5,6 ];
let numeros = [ primeiros , ultimos];
console.log("sem o spread operator");
console.log(numeros);
console.log("com o spread operator");
numeros = [ ...primeiros , ...ultimos];
console.log(numeros);
let outros = [...numeros , 7,8,9,10];
console.log(outros);
// com objetos
console.log("objetos o spread operator");
let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva"
}
let dadosProfissionais = {
    cargo:"Professor",
    localTrabalho:"Barueri"
}
let pessoaCompleta = {
    ...pessoa,
    ...dadosProfissionais,
    anoRegistro: 2010
}
console.log(pessoaCompleta);
// com funções
console.log("funções com o spread operator");
function gerarUsuario(pessoa){
    let usuario = {
        ...pessoa ,
        senha: 132435
    }
    console.log(usuario);
}
gerarUsuario({nome:"João",sobrenome:"Pereira"});






