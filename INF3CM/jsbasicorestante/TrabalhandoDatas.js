// Criando um objeto data

let dataAtual = new Date();

// obtendo os componentes da data

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() +1 ;
let dia = dataAtual.getDate();


console.log(dia+"/"+mes+"/"+ano);

console.log(`${dia}/${mes}/${ano}`);

console.log(`${dia}/${String(mes).padStart(2,'0')}/${ano}`);

let umaData = new Date(2024,8-1,10);
console.log(umaData);