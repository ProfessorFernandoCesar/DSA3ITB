let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "Professor",
    anoAdmissao: 2010
}

let mensagem = "Meu nome é "+pessoa.nome+" "+pessoa.sobrenome+" sou "+pessoa.cargo+" desde "+pessoa.anoAdmissao ;
console.log(mensagem);

// usando template strings ... o delimitador é a "`" crase

let novaMensagem = `Meu nome é ${pessoa.nome} ${pessoa.sobrenome} sou ${pessoa.cargo} desde ${pessoa.anoAdmissao}` ;
console.log(novaMensagem); 


