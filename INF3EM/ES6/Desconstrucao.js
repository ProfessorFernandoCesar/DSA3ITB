// Desconstrução de Objetos e Array = transformar seus elementos em variáveis 

let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "Professor",
    anoAdmissao: 2010
};

let { nome , sobrenome ,anoAdmissao } = pessoa ;

console.log(nome);
console.log(sobrenome);
console.log(anoAdmissao); 

let funcionario = {
    nome: "Pedro",
    sobrenome: "Aguiar",
    cargo: "Carpinteiro",
    anoAdmissao: 2005
};


let { nome:nomeFuncionario , sobrenome:sobrenomeFuncionario }  = funcionario 
console.log(nomeFuncionario);
console.log(sobrenomeFuncionario);


// Desconstruindo Arrays

let nomes = ["Pedro","Maria","José","Paulo"];
let { 0:nome1 , 3:nome2 , [2]:nome3 } = nomes ;

console.log(nome1);
console.log(nome2);
console.log(nome3);

let [ nome01 , nome02 , nome03 ] = nomes ;

console.log(nome01);
console.log(nome02);
console.log(nome03);



