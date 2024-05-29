function exibirMensagem() {
    let agora = new Date();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();
    console.log(" Esta mensagem foi exibida em ", minuto, " - ", segundo);
}

// setInterval : Executar a função exibirMensagem a cada 2 segundos
// setInterval(exibirMensagem,2000);

// setTimeout : Executar a função exibirMensagem apos 3 segundos
//exibirMensagem();
//setTimeout(exibirMensagem,3000);

// Combinando setInterval e setTimeout : Executar a exibirMensagem a cada 3 segundos por 
// 15 segundos

let timer = setInterval(exibirMensagem, 3000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Parei de o timer .. ");
}, 15000);

