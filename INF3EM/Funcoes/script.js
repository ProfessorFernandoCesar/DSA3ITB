function entrar(){

    let area = document.getElementById('area');
    let nome = prompt("Qual seu nome ");

   
    // Tratando entrada null ( Cancel ) e não informada
    if ( nome === null || nome === ""){
        alert("Ops !!! , algo deu errado ..");
        area.innerHTML = "Nome inválido";
    } else {
        area.innerHTML = "Bem vindo "+nome ;
        // Cria botão sair ao lado do nome que deve mandar uma mensagem até logo
        let botaoSair = document.createElement("button");
        // Altera o texto 
        botaoSair.innerText = "Sair";
        // Chama função sair no onclik do botão
        botaoSair.onclick = sair;
        // Insere no HTML na DIV area
        area.appendChild(botaoSair);
    }
}

function sair(){
   alert("Até logo !!") 
}

function verificaAprovacao(notaTri1,notaTri2,notaTri3){
    let resultado ;
    let notaFinal = ( notaTri1 + notaTri2*2 + notaTri3*2)/5;
    if ( notaFinal >= 6){
        resultado = 'aprovado';
    } else if ( notaFinal >= 4){
        resultado="conselho de classe";
    } else {
        resultado = 'reprovado';
    }
   // console.log(" o resultado foi "+resultado);
   return resultado ;
}


