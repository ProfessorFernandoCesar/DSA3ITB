// Criando um objeto data
let dataAtual = new Date();

// Obtendo os componentes da data
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth()+1;
let dia = dataAtual.getDate();

// Obtendo a data formatada 
let dataFormatada = dia+"/"+mes+"/"+ano ;
console.log("Data formatada "+dataFormatada);

// Outra formatação com "template literals"
dataFormatada = `${dia}/${mes}/${ano}` ;
console.log("Data formatada "+dataFormatada);

// + uma 
dataFormatada = `${dia}/${String(mes).padStart(2,'0')}/${ano}` ;
console.log("Data formatada "+dataFormatada);