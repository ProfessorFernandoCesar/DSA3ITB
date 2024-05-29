let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "professor",
    anoAdmissao: 2010
}

let mensagem = " Meu nome é "+pessoa.nome+" "+pessoa.sobrenome+" e sou "
            +pessoa.cargo+ " desde "+pessoa.anoAdmissao ;
console.log(mensagem);      

let novaMensagem = `Meu nome é ${pessoa.nome} ${pessoa.sobrenome} e sou ${pessoa.cargo }`
