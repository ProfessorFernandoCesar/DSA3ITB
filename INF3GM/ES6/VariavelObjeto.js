// Variaveis tipo objeto

let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "Professor",
    anoAdmissao: 2010
}
let carro = {
    modelo: "Idea",
    fabricante: "Fiat",
    ano: 2013,
    potencia: "140cv"
}
console.log(pessoa);
console.log(carro);
console.log(pessoa.nome);
console.log(carro.fabricante);
// Listas com objetos
let lista = [pessoa, carro];
console.log(lista);
console.log(lista[0].nome, " -  ", lista[1].fabricante);
let usuarios = [
    { nome: "Fernando", senha: "1234" },
    { nome: "Pedro", senha: "1324" }
]
console.log(usuarios);
console.log(usuarios[0].nome);










