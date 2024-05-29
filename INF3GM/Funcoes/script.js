function entrar(){

    let area = document.getElementById('area');
    let nome = prompt("Qual é seu nome ? ");
    // consiste entrada inválida
    if ( nome === null || nome === ''){
        alert("Ops , deu ruim !!!");
        area.innerHTML = "Nome inválido ";
    }else{
        area.innerHTML = "Bem vindo "+nome+" !!! ";
        // Incluir botão sair 
        // 1 - Adicionar o elemento ( criar )
        let botaoSair = document.createElement("button");
        // 2 - Alterar as propriedades
        botaoSair.innerText = "Sair";
        botaoSair.onclick = sair ;
        // 3 - Localizar noHTML
        area.appendChild(botaoSair);

    }


}

function sair(){
    alert("Até logo !!!")
}


function verificarAprovacao(nota1Tri,nota2Tri,nota3Tri){
    let notaFinal = ( nota1Tri*1 + nota2Tri*2 + nota3Tri*2)/5;
    if ( notaFinal >= 6){
        console.log(" Aprovado com nota final "+notaFinal);
    } else if ( notaFinal >= 4){
        console.log(" Está em conselho de classe com nota final "+notaFinal);
    } else {
        console.log(" Reprovado com nota final "+notaFinal);
    }
}

function calcularNotaFinal(notaTri1,notaTri2,notaTri3){
    let notaFinal = ( notaTri1 + notaTri2*2 + notaTri3*2 )/5;
    return notaFinal;
}

function obterResultadoAprovacao( notaFinal ){
    let resultado ;
    if ( notaFinal >= 6 ){
        resultado = "aprovado";
    } else if ( notaFinal >= 4 ){
        resultado = "conselho de classe";
    } else {
        resultado = "aprovado";
    }
    return resultado;
}