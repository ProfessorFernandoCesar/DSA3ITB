function entrar(){
    let area = document.getElementById("area");
    let nome = prompt("Qual é seu nome ?");

    // Consistência de entrada 
    if ( nome === null || nome ===""){
        alert("Ops , algo de errado ocorreu !!!!");
        area.innerHTML = "Nome inválido";
    } else {
        // Inserir botão sair ao lado do bem vindo
        area.innerHTML = "Bem vindo "+nome+" !!! ";
        // Criar botão 
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair";
        botaoSair.onclick = sair;
        // inserir no HTML
        area.appendChild(botaoSair);
        
    }

    

}

function sair(){
    alert("Até logo !!!");
}

function verificarAprovacao(notaTri1,notaTri2,notaTri3){
    let notaFinal = ( notaTri1*1 + notaTri2*2 + notaTri3*2)/5 ;
    /*
    if( notaFinal >= 6){
        console.log("Aluno aprovado");
    } else {
        console.log("Conselho de Classe");
    }
    */
    if ( notaFinal >= 6 ){
        console.log("Aprovado");
    } else if ( notaFinal >= 4){
        console.log("Conselho de Classe");
    } else {
        console.log("Reprovado");
    }
}

function calcularNotaFinal(n1Tri,n2Tri,n3Tri){
    let notafinal = ( n1Tri + n2Tri*2 + n3Tri*2)/5;
    return notafinal ;
}

function obterResultadoAprovacao(notaFinal){
    let resultado ;
    if ( notaFinal >= 6 ){
        resultado="Aprovado";
    } else if ( notaFinal >= 4){
        resultado="Conselho de Classe";
    } else {
        resultado="Reprovado";
    }
    return resultado ;
}