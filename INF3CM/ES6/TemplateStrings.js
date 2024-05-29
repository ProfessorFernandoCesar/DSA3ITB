let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    cargo: "Professor",
    anoAdmissao: 2010
}


let mensagem = " Meu nome é "+pessoa.nome+" "+pessoa.sobrenome+" e sou "+pessoa.cargo+" desde "+pessoa.anoAdmissao
console.log(mensagem); 

// usando Template Strings , usando o delimitador "`" crase

let novaMensagem = `Meu nome é ${pessoa.nome} ${pessoa.sobrenome} e sou ${pessoa.cargo} desde ${pessoa.anoAdmissao} `;
console.log(novaMensagem); 