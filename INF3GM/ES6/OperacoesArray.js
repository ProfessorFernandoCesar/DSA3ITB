// Map 
let lista = ["Pedro","Maria",33,2001,"Pedro"];
lista.map((value,index)=>{
   console.log(`o valor passado foi ${value} na posição ${index}`) ;
})

// find
let resposta = lista.find((value)=>{
    return value === "Pedro";
    });
console.log(resposta);     

resposta = lista.find((value)=>{
    return value === "pedro";
    });
console.log(resposta);  

// filter
resposta = lista.filter((value)=>{
    return value === "Pedro";
    });
console.log(resposta);  

// includes 
resposta = lista.includes("Pedro");
console.log(resposta); 





