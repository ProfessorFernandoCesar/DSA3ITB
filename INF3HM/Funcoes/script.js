function entrar(){
    let area = document.getElementById("area");
    let nome = prompt("Digite seu nome ");
    // Tratando entrada inválida 
    if (nome === null || nome === ''){
        alert("Ops !!! , nome deve ser informado ");
        area.innerHTML = "Nome inválido";
    } else  {
        area.innerHTML = "Seu nome é "+nome ;
        // Criar um botão sair que vai apresentar uma mensagem de até logo
        let botaoSair = document.createElement("button");
        // alterar as propriedades do objeto
        botaoSair.innerText = "Sair";
        botaoSair.onclick = sair ;
        // Inserir o Botão na DIV
        area.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até logo !!!");
}

function verificarAprovacao(notaTri1,notaTri2,notaTri3){

    let notaFinal = ( notaTri1*1 + notaTri2*2 +notaTri3*2)/5;
    let resultado ;

    if ( notaFinal >= 6 ){
        resultado = "Aprovado";
    } else if ( notaFinal >= 4 ){
        resultado = "Conselho de Classe";
    } else {
        resultado = "Reprovado";
    }

    // console.log(resultado+" com  nota final "+notaFinal);

    return resultado;
}