/*

function exibirMensagem(){
    console.log("Mensagem exibida a cada 2 segundos");
}

// Executa a função exibir mensagem a cada 2 segundos 
let intervalo = setInterval(exibirMensagem,2000);

*/

/*
function exibirMensagem(){
    console.log("Mensagem exibida após 3 segundos");
}

// executa a função exibir mensagem após 3segundos
let timeout = setTimeout(exibirMensagem,3000);
*/

function exibirMensagem(){
    console.log("Mensagem exibida a cada 2 segundos por 10 segundos");
}

let intervalo = setInterval(exibirMensagem,2000);

setTimeout(()=> {
    clearInterval(intervalo);
    console.log("Intervalo parado após 10 segundos"); 
},10000);




