// Variavel tipo objeto 
let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "professor",
    anoAdmissao: 2010
}

let carro = {
    modelo: "Idea",
    fabricante: "Fiat",
    ano: 2013
}

console.log(pessoa);
console.log(carro);

console.log(pessoa.nome);
console.log(carro.ano);

// Lista de objetos

let  lista = [ pessoa , carro ];
console.log(lista);
console.log(lista[0].nome);
console.log(lista[1].ano);

let usuarios = [
    {nome:"Fernando",senha:"1234"},
    {nome:"Pedro",senha:"1324"}
]

console.log(usuarios);
console.log(usuarios[0].nome);







