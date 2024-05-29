function pedir() {
    let opcao = prompt("Qual sua opção ? ");
    // No prompt a opcao é uma String , como 
    // vou comparar com o numero vou transformar
    // em numerico
    opcao = Number(opcao);

    switch (opcao) {
        case 1:
            alert("Vc selecionou a opção 1");
            break;
        case 2:
            alert("Vc selecionou a opção 2");
            break;
        case 3:
            alert("Vc selecionou a opção 3");
            break;
        case 4:
            alert("Vc selecionou a opção 4");
            break;
        default:
            alert(" digite de 1 a 4 ");
            break;
    }







}