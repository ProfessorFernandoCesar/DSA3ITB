function exibirMensagem() {
    let agora = new Date();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();
    console.log("Mensagem exibida as ", minuto, " ", segundo);
}


// Executa a função exibirMensagem a cada 2 segundos
// setInterval(exibirMensagem,2000);

// Executa a função exibirMensagem  após 5 segundos
//exibirMensagem();
// setTimeout(exibirMensagem,5000);

// Executa a função exibirMensagem a cada 3 segundos por 15 segundos

let meuTimer = setInterval(exibirMensagem,3000);

setTimeout(()=>{ 
    clearInterval(meuTimer);
    console.log("Terminou ... ")
   }      ,15000);


