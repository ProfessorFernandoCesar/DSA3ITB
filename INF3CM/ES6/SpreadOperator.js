// spread operator
// com array
let primeiros = [ 1 , 2, 3];
let proximos = [ 4,5,6];
let numeros = [ primeiros , proximos];
console.log(numeros); 
numeros = [ ...primeiros , ...proximos];
console.log(numeros); 
// com objetos 
let pessoa = {
    nome:"Pedro",
    sobrenome:"Pereira"
};
let dadosFuncionais = {
    cargo:"Contador",
    setor:"Financeiro"
}
let funcionario = {
    ...pessoa,
    ...dadosFuncionais,
    anoAdmissao: 2015
}
console.log(funcionario)

// com funções

function gerarUsuario(pessoa){
    let usuario = { 
        ...pessoa,
        senha:"132435",
        status:"ativo" };
    
        console.log(usuario);

}

gerarUsuario({nome:"Pedro",sobrenome:"Maia"});