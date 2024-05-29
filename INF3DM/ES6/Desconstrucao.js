let carro = {
    modelo: "Idea",
    fabricante: "Fiat",
    ano: 2018,
    potencia: "140cv"
};

let carro1 = {
    modelo: "Uno",
    fabricante: "Fiat",
    ano: 2018,
    potencia: "140cv"
};
console.log(carro.modelo);
console.log(carro.fabricante);

// Desconstruindo = obter as propriedades em variáveis 

let { modelo , ano , fabricante , potencia } = carro ;

console.log( modelo );
console.log( ano );
console.log( fabricante); 

let { modelo:novoModelo } = carro1 ;

// caso já existe a variável 

// let { modelo:novoModelo , ano:novoAno} = carro ;
// console.log(novoModelo);

