// MAP - percorrer um array
let nomes = ["pedro","maria",1234,2033,"João","pedro"];

nomes.map((value,index) => {
    console.log(`Valor passado ${value} na posição ${index}`);
});


// FIND 
console.log("=== FIND ===");
let resultado = nomes.find((value)=>{
    return value === "pedro";
})
console.log(resultado);

resultado = nomes.find((value)=>{
    return value === "Pedro";
})

console.log(resultado);

// FILTER

resultado = nomes.filter((value)=>{
    return value === "pedro";
})

console.log(resultado);



