function pedir() {
    let opcao = prompt("Qual o nº da opção ");
    console.log(typeof (opcao));
    opcao = Number(opcao);
    console.log(typeof (opcao));
    switch (opcao) {
        case 1:
            alert("Você escolheu a opção 1");
            break;
        case 2:
            alert("Você escolheu a opção 2");
            break;
        case 3:
            alert("Você escolheu a opção 3");
            break;
        case 4:
            alert("Você escolheu a opção 4");
            break;
        default:
            alert("Escolha de 1 a 4");
            break;
    }
}
