let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "professor",
    anoAdmissao: 2010
}

console.log(pessoa.nome);

// desconstruindo = criar variaveis a partir da propriedades do objeto

let { nome , sobrenome , anoAdmissao , cargo } = pessoa ;
console.log(nome);
console.log(cargo);

let pessoa2 = {
    nome: "Alfredo",
    sobrenome: "Aguiar",
    cargo: "professor",
    anoAdmissao: 2010
}

let { nome:novoNome , sobrenome:NovoSobrenome ,  } = pessoa2 ;
console.log(novoNome);
console.log(NovoSobrenome);

// Descontruindo Array

let nomes = ["Pedro","Maria","José"];
let { [0]:nome1 , [2]:nome2 } = nomes ;
console.log(nome1);
console.log(nome2);

let [nome11 , nome21 ] = nomes ;
console.log(nome11);
console.log(nome21);




