let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "Professor",
    anoAdmissao: 2010
}

// desconstruindo 

let { nome , sobrenome } = pessoa ;

console.log(nome);
console.log(sobrenome);


let outraPessoa = {
    nome: "Pedro",
    sobrenome: "Silva",
    cargo: "Carpinteiro",
    anoAdmissao: 2010
}
let { nome:outroNome , sobrenome:outroSobrenome , cargo  } = outraPessoa ;
console.log(outroNome);
console.log(outroSobrenome);
console.log(cargo);
// Desconstrução de array
console.log("---Desconstruindo arrays");
let nomes = ["João","Pedro","Maria"];
let { [0]:nome1 , [2]:nome2} = nomes ;

console.log(nome1);
console.log(nome2); 

console.log("---Desconstruindo arrays outra forma");
let [nome01,nome02] = nomes ;
console.log(nome01);
console.log(nome02); 




