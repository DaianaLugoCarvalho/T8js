const comidas = ['lasanha', 'batata', 'bacon']
console.log(comidas[2]);

comidas.forEach((item, posicao) => {
    console.log(`na posicao ${posicao} temos a comida : ${item}`)    
})




// concat faz copia do array e adiciona o elemento que a gente passa como
let outrasComidas = comidas.concat ("jilo")
console.log(`comidas`, comidas);
console.log("outras comidas", outrasComidas);



//join- cria uma string do array e ele utiliza o argumento como separador
let stringDoArray = comidas.join('...')
console.log(stringDoArray);


//ele arranca o primeiro valor do array, e retorna o primeiro valor arrancado
console.log(comidas.shift());
console.log(comidas);


//ele arranca o ultimo valor do array, e retorna o ultimo valor arrancado 
console.log(comidas.pop());
console.log(comidas);


//adiciona no começo do array um item
comidas.unshift("macarrao")
console.log(comidas);


//adiciona no final do array um item 
comidas.push("alface")
console.log(comidas);

//muda a posição dos arrays, inverte
comidas.reverse()
console.log(comidas);


//faz uma copia simples, delimitando o começo e final de acordo com o parametro ()
let cortarAlimentos = comidas.slice(2)
console.log(cortarAlimentos);


//remover e substituir ou adicionar de acordo com os argumentos. (posicao, 0 não substitui,)
comidas.splice(1,1, 'pudim')
console.log(comidas);


//ordenar os itens do array
comidas.sort()
console.log(comidas);


// ele vai dar a posicao que esta o item 
console.log(comidas.indexOf("alface"));


//ele vai percorre do final para o começo e retornar a posicao
console.log(comidas.lastIndexOf("pudim"));


//ele consegue modificar os valores dentro do array
let mapArray = comidas.map((comida)=>  `${comida} gostosa`)
console.log(mapArray)


//ele procura  o item do paramentro e retorna
let arrayProcura = comidas.filter((comida)=> comida === "alface")
console.log(arrayProcura);


//
let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} EEE ${dir}`
})
console.log(juntaComida);


let numeros = [1,2,3,4]
console.log(numeros);
console.log(numeros.find(numero => numero === 4));
console.log(numeros.findIndex(numero => numero === 3))


