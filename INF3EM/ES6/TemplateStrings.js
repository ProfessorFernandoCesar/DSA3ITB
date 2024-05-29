let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "Professor",
    AnoAdmissao: 2010
};


let mensagem = "Meu nome é "+pessoa.nome+" "+pessoa.sobrenome+" e sou "+pessoa.cargo+" desde o ano de "+pessoa.AnoAdmissao ;
console.log(mensagem);

// Utilizando o template Strings ... usar "`" crase como delimitador 

let novaMensagem = `Meu nome é ${pessoa.nome}  ${pessoa.sobrenome} e sou ${pessoa.cargo} desde o ano de ${pessoa.AnoAdmissao}`;
console.log(novaMensagem); 

