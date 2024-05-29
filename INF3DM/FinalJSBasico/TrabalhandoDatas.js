// Criando um novo objeto Date 
let dataAtual = new Date();

// Obtendo os componentes da data

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth();
let dia = dataAtual.getDate();

// formatando a data usar 
let dataFormatada = `${dia}/${mes}/${ano}`;

console.log("Data atual formatada",dataFormatada);

// Adicionando um dia à data atual
dataAtual.setDate(dataAtual.getDate()+1);

let novoAno = dataAtual.getFullYear();
let novoMes = dataAtual.getMonth();
let novoDia = dataAtual.getDate();

// Nova data formatada 

let novaDataFormatada = `${novoDia}/${novoMes}/${novoAno}`;

console.log("Nova data formatada",novaDataFormatada);

