/*
Criar programa ( HTML + JS ) que obtenha , via prompt , o nome do aluno 
e suas 3 notas dos trimestres  e verifique, via JS ,  se o 
mesmo está aprovado, reprovado ou de recuperação. 
A nota de aprovação é 7,0 e a nota de reprovação é 4,0 , caso o 
aluno fique com nota entre 4.0 e 7.0 ele estará em recuperação.
A nota final do é calculada por média ponderada com peso 1 para o 
1º Trimestre,peso 2 para o 2º Trimestre e peso 3 para o 3º Trimestre.
Caso estiver de recuperação, apresentar logo após o resultado um botão 
que quando acionado solicitará, via prompt , a nota de recuperação , 
esta nota for maior ou igual a 7 o resultado será : "Aprovado pela 
recuperação , ou menor "Reprovado na recuperação"
*/

function entradaDados(){
    let nomeAluno = prompt("Nome do aluno : ");
    let _1Tri = Number(prompt("Nota 1º trimestre "));
    let _2Tri = Number(prompt("Nota 2º trimestre "));
    let _3Tri = Number(prompt("Nota 3º trimestre "));

    mostrarResultado(nomeAluno , _1Tri , _2Tri , _3Tri);

}

function mostrarResultado( aluno ,tri1 , tri2 , tri3){
  let notaFinal = ( tri1*1 + tri2*2 + tri3*3)/6.00;    
  let resultado ;
  
  if ( notaFinal >= 7.0) {
    resultado = "Aprovado";
  } else if ( notaFinal >= 4.0){
    resultado = "Recuperação";
  } else {
    resultado = "Reprovado";
  }

  document.getElementById("Entrada").innerHTML=
  `<h2>Cálculo aprovação </h2>
  <p>Nome : ${aluno}</p>
  <p>Nota 1º trimestre : ${tri1} </p>
  <p>Nota 2º trimestre : ${tri2} </p>
  <p>Nota 3º trimestre : ${tri3} </p>
  <p>Nota Final  : ${notaFinal} </p>`;
  
  let localResultado = document.getElementById("Resultado");

  localResultado.innerHTML = 
  `<p>Resultado: ${resultado} </p>` ;

     if ( resultado ==="Recuperação"){
      // Criar o botão Obter Nota Recuperacao
      let botaoRecuperacao = document.createElement("button");
      // Alterar as propriedades do Botão 
      botaoRecuperacao.innerText = "Informar nota recuperação";
      botaoRecuperacao.onclick = obterResultadoRecuperacao ;
      // Inserir no HTML
      localResultado.appendChild(botaoRecuperacao);
     }
    
     

} 

function obterResultadoRecuperacao(){

  let notaRecuperacao = Number(prompt("Qual a nota de recuperação  "));
  if (notaRecuperacao >= 7.0){
    resultado = "Aprovado na Recuperação";
  } else {
    resultado = "Reprovado na Recuperação";
  }

  document.getElementById("Resultado").innerHTML = 
  `<p>Resultado: ${resultado} com a nota: ${notaRecuperacao}</p>`;
}
