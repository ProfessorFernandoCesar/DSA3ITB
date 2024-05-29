function pedir() {
    let escolha = prompt("Qual é sua escolha ?");
    
    // como escolha é string vou
    // transformar a string em number, para
    // compatibilizar com o switch 

    escolha = Number(escolha);
    switch (escolha) {
        case 1:
            alert("Você escolheu 1")
            break;
        case 2:
            alert("Você escolheu 2")
            break;
        case 3:
            alert("Você escolheu 3")
            break;
        case 4:
            alert("Você escolheu 4")
            break;
        default:
            alert("Opção inválida")
            break;
    }










}