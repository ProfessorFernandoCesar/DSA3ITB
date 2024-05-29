function exibirMensagem(){
    let dataAtual = new Date();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();
    console.log("Mensagem exibida em : ",minutos,segundos);
}

// executa a função de 2 em e segundos
// let intervalo = setInterval(exibirMensagem,2000);

// executa a função após 5 segundos
//let timeout = setTimeout(exibirMensagem,5000);

// executa a função de 3 em 3 segundos por 10 segundos 

// 1 - dispara o timer
let timer = setInterval(exibirMensagem,3000);

// 2 - Parar o timer
setTimeout(()=>{
    clearInterval(timer);
    console.log("Parei o timer de 10 segundos ");
},10000);



