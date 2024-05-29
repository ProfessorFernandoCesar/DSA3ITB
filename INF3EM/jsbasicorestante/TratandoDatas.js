// Criando um objeto Data
let dataAtual = new Date();

// Obtendo os componetes da data
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth()+1; 
let dia = dataAtual.getDate();

// Formatando Datas

let dataAtualFormatada1 = dia+"/"+mes+"/"+ano ;
let dataAtualFormatada2 = `${dia}/${mes}/${ano}` ;
let dataAtualFormatada3 = `${String(dia).padStart(2,'0')}/${String(mes).padStart(2,'0')}/${ano}`;

console.log(dataAtualFormatada1);
console.log(dataAtualFormatada2);
console.log(dataAtualFormatada3);
