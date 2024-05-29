function entrar(){

    let area=document.getElementById("area");
    let nome = prompt("Qual é o seu nome ? ");

    // Tratando entrada
    if ( nome === null || nome === "" ){
        alert("Ops , algo deu errado !!!");
        area.innerHTML = "Nome inválido";
    } else {
        area.innerHTML = "Bem vindo "+nome+" !!!";

        // Criar o botão SAIR

        let botaoSair = document.createElement("button");

        // Alterar as propriedades do Botão 
        botaoSair.innerText = "Sair";
        botaoSair.onclick = sair ;
        // Inserir no HTML
        area.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até logo");
}

function verificarAprovacao(nota1Tri,nota2Tri,nota3Tri){
    let notaFinal = ( nota1Tri*1 + nota2Tri*2 +nota3Tri*2)/5 ;
    let resultado ;
    if ( notaFinal >= 6){
        resultado = "aprovado";
    } else if ( notaFinal >= 4){
        resultado= "conselho de classe";
    } else {
        resultado="reprovado";
    }
    console.log(" o resultado foi "+resultado+" com nota "+notaFinal);
}

function calcularNotaFinal(_1Tri,_2Tri,_3Tri){
    let notaFinal = ( _1Tri + _2Tri*2 + _3Tri * 2)/5;
    return notaFinal ;
}

function obterResultadoAprovacao(notaFinal){
    let resultado ;
    if ( notaFinal >= 6){
        resultado = "aprovado";
    } else if ( notaFinal >= 4){
        resultado= "conselho de classe";
    } else {
        resultado="reprovado";
    }
    return resultado ;
}
