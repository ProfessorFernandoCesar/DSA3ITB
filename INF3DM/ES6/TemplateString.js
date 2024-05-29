let carro = {
    modelo: "Idea",
    fabricante: "Fiat",
    ano: 2018,
    potencia: "140cv"
};

// sem usar o template strings

let mensagem = "Meu carro é um "+carro.fabricante+" "+carro.modelo+" e ano de fabricação "+carro.ano ;
console.log(mensagem); 

// usando o template strings que facilita a montagem de strings. O delimitador é "`" crase

let novaMensagem = `Meu carro é um ${carro.fabricante} ${carro.modelo} e ano de fabricação ${carro.ano}` ;
console.log(novaMensagem); 

