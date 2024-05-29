function    exibirMensagem(){
    let dataAtual = new Date();
    let segundo = dataAtual.getSeconds();
    let minuto = dataAtual.getMinutes();
    console.log("Mensagem exibida em  ",minuto,"-",segundo);
}

// Executar função exibirMensagem a cada 2 segundos 
// setInterval(exibirMensagem,2000);

// Executar a função exibirMensagem após 5 segundos
//exibirMensagem();
//setTimeout(exibirMensagem,5000);

// Executar a função exibirMensagem a cada 3 segundos por 15 segundos

let meuTimer = setInterval(exibirMensagem,3000);


setTimeout(()=>{ 
    clearInterval(meuTimer);
    console.log("Terminou ...");
   }         , 15000);

