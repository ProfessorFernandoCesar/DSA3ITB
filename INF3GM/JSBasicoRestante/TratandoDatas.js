// Criando objeto Data
let dataAtual = new Date();

// Obtendo os componentes da data

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1 ; // o mes começa de 0 até 11 
let dia = dataAtual.getDate();

dataAtual.getDay

// Formatando a data
let dataFormatada = dia+"/"+mes+"/"+ano ;
console.log("Data formatada : "+dataFormatada);

// + 1 formato de data usando template literal com (`) crase
dataFormatada = `${dia}/${mes}/${ano}` ;
console.log("Data formatada : "+dataFormatada);

// + outro formato de data usando template literal com (`) crase
dataFormatada = `${dia}/${String(mes).padStart(2,'0')}/${ano}` ;
console.log("Data formatada : "+dataFormatada);
