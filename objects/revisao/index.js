// const crianca = new Object
// console.log(typeof crianca)
// crianca.nome= "Carmen"
// crianca.idade="2"
// console.log(crianca)
// console.log(crianca['idade']);
// delete crianca.idade
// console.log(crianca);

// const crianca2= {
//     nome: "Paulo",
//     idade: "6",
//     endereco: {
//         logradouro: "rua das ruas",
//         numero:"02",        
    
//     responsaveis:[{
//         nome:"tania",
//         telefone:"12348939"
//     },{
//         nome:"val",
//         telefone:"0865059645"
//     }]
// }}
// console.log(crianca2);
// delete crianca2.endereco
// console.log(crianca2);



// //funcao constutora que vai gerar um modelo, maiuscula
// function Crianca (nome, idade, altura){
//     this.nome = nome
//     this.idade = idade
//     this.altura = altura
//     this.podeBrincar = () => {
//         return (altura >1)
//     }
// }

// const c1 = new Crianca ("beto", 6, 2,1)
// console.log(`${c1.nome} tem ${c1.altura} e ${c1.podeBrincar() ? `pode brincar`:
//  `nao pode brincar`}`)




//  const a= 1
//  const b= 2
//  const c= 3
//  const obj1 = {a:a, b:b, c:c}
//  const obj2 = {a,b,c}
//  console.log (obj1)
//  console.log (obj2)
 
 
//  const nomeAttr = "nota"
//  const valorAttr = 8
//  const obj3 = {}
//  obj3[nomeAttr] = valorAttr
//  console.log(obj3)
//  const obj4 = {[nomeAttr]:valorAttr}
//  console.log(obj4)


//  const crianca4 = {
//      nome : "jani",
//      idade : 12,
//      altura : 1.2     
//  }

// //  keys = atributos do objeto 
// //  values =
// //  entries = retorna um array, ele traz separado os valores chave e valor 
 

// //  console.log(Object.keys(crianca4))
// //  console.log(Object.values(crianca4))
// //  console.log(Object.entries(crianca4))


// //  crianca4.defineProperty(crianca4, 'dataNascimento', {
// //     enumerable: false,
// //     writable : false, 
// //     value : '29/10/2013'
// //  })
 
// //  console.log(crianca4)
// //  crianca4.dataNascimento = 'batata'
// //  console.log(crianca4.dataNascimento);



 
// // const produto = Object.preventExtensions({
// //     nome : "notebook",
// //     preco: 2,
// //     tag : "promocao"
// // }) 

// // produto.desconto = 100
// // console.log(produto )
// // produto.nome = "banana"
// // console.log(produto)
// // console.log(Object.isExtensible(produto))
// // // delete.produto.tag
// // console.log(produto)



// // const pessoa7 = {
// //     nome: "claudia"
// //     idade : 22
// // }

// // console.log(pessoa7)
// // Object.seal(pessoa7)
// // pessoa7.sobrenome = "Rodrigues"
// // console.log(pessoa7)

// // function pessoa (nome, idade, corFavorita){
// //     this.nome =nome
// //     this.idade = idade
// //     this.corFavorita= corFavorita
// // }


// function professor (nome, leciona, escola){
//     this.nome= nome
//     this.leciona = leciona
//     this.escola = escola
// }

// professor.prototype.dizLeciona = function (){
//     return `a materia é: ${this.leciona} `
// }

// const js3= new professor ( "cintia", "Fumi", "javas3")
// console.log(js3.dizLeciona())
// const js4= new professor ("Lidya", "rodrigues",  "javas3")
// console.log(js4);


 






 
 
 