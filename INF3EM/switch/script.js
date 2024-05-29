function Pedir() {
    let opcao = prompt("Qual a opção ?");

    console.log(typeof (opcao));

    opcao = Number(opcao);

    console.log(typeof (opcao));

    switch (opcao) {
        case 1:
            alert("Você selecionou 1");
            break;
        case 2:
            alert("Você selecionou 2");
            break;
        case 3:
            alert("Você selecionou 3");
            break;
        case 4:
            alert("Você selecionou 4");
            break;
        default:
            alert("Opção inválida , 1 a 4");
            break;
    }



}