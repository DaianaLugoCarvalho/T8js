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


 






 
 
 
const crianca = new Object
console.log(typeof crianca)
crianca.nome = "Elaine"
crianca.idade = 5
crianca['brinquedo favorito'] = 'Homem aranha'
console.log(crianca['idade'])
console.log(crianca['brinquedo favorito'])
delete crianca.idade

const crianca2 = {
    nome: "Paulo",
    idade: 6,
    endereco: {
        logradouro: "Rua dos bobos",
        numero: 0,
        referencia: [
            {
                endereco: {
                    logradouro: "Rua dos bobos",
                    numero: 2,
                    descricao: "Mercado"
                }
            }
        ]
    },
    responsaveis: [{
        nome: "Tereza",
        telefone: "1199999999",
        parentesco: "tia"
    },{
        nome: "João",
        telefone: "1199999992",
        parentesco: "pai"
    }],
    podeBrincar: false
}
console.log(crianca2)
delete crianca2.idade
console.log(crianca2)
delete crianca2.endereco
//console.log(crianca2.endereco.logradouro)

function Crianca(nome, idade, altura){
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura > 1)
    }
}

const c1 = new Crianca("Bete", 6, 1.1)
console.log(`${c1.nome} tem ${c1.altura} e ${c1.podeBrincar() ? 'pode brincar' : 'não pode brincar'}`)
c1.especifico = true
const c2 = new Crianca("Carlos", 4, 0.8)
console.log(`${c2.nome} tem ${c2.altura} e ${c2.podeBrincar() ? 'pode brincar' : 'não pode brincar'}`)

const fromJSON = JSON.parse('{"info": "Vim do JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)

// os valores da constante pessoa tão no endereço A
const pessoa = {nome: "Gustavo"}
console.log(pessoa)
pessoa.nome = "Geraldo"
console.log(pessoa)
// os valores da constante pessoa2 tão no endereço A
const pessoa2 = pessoa
pessoa2.nome = "Tereza"
console.log(pessoa)
console.log(pessoa2)

const a = 1
const b = 2
const c = 3
const obj1 = { a:a, b:b, c:c }
const obj2 = { a, b, c }
console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 8
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const crianca4 = {
    nome: "Jani",
    idade: 6,
    altura: 1.2
}

console.log(Object.keys(crianca4))
console.log(Object.values(crianca4))
console.log(Object.entries(crianca4))

Object.entries(crianca4).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(crianca4, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '29/08/2013'
})

console.log(crianca4)
crianca4.dataNascimento = 'batata'
console.log(crianca4.dataNascimento)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj5 = Object.assign(dest, o1, o2)
console.log(obj5)

const produto = Object.preventExtensions({
    nome: "Notebook",
    preco: 2,
    tag: 'promocao'

})
produto.desconto = 100
console.log(produto)
produto.nome = "banana"
console.log(produto)
console.log(Object.isExtensible(produto))
console.log(Object.isExtensible(obj5))
delete produto.tag
console.log(produto)

const pessoa7 = {
    nome: "Claudia",
    idade: 32
} 
console.log(pessoa7)
Object.seal(pessoa7)
pessoa7.sobrenome = "Rodrigues"
console.log(pessoa7)
delete pessoa7.nome
console.log(pessoa7)
pessoa7.nome = "Fernanda"
console.log(pessoa7)

const pessoa8 = {
    nome: "Claudia",
    idade: 32
}
Object.freeze(pessoa8)
pessoa8.sobrenome = "Rodrigues"
console.log(pessoa8)
delete pessoa8.nome
console.log(pessoa8)
pessoa8.nome = "Fernanda"
console.log(pessoa8)

function Pessoa(nome, idade, corFavorita){
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}

let mae = new Pessoa("Ana", 35, "vermelho")
let tio = new Pessoa("Cleber", 49, "rosa")

Pessoa.prototype.apresentacao = function() {
    return `O nome da pessoa é: ${this.nome}`
}
console.dir(Pessoa)

console.log(mae.apresentacao())
console.log(tio.apresentacao())
mae.apresentacao = function(){
    return `apresentação especial da mãe: ${this.nome} e tenho ${this.idade}`
}
console.log(mae.apresentacao())


function Pessoa(nome, idade, corFavorita){
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}
//nome, sobrenome, materia
function Professor(nome, sobrenome, materia){
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia
}

Professor.prototype.dizMateria = function(){
    return `A materia é: ${this.materia}`
}

const js3 = new Professor("Cintia", "Fumi", "Javascript 3")
console.log(js3.dizMateria())
const js4 = new Professor("Lydia", "Rodrigues", "Javascript 4")
console.log(js4.dizMateria())

js4.dizMateria = function(){
    return `A professora é: ${this.nome} e a materia é ${this.materia}`
}
console.log(js4.dizMateria())

console.dir(Professor.prototype)
console.dir(js4.__proto__)


const avo = { attrl: 'A'}
const mae = {__proto__:avo, attr2:'B', attr3:'E'}
const filha = { __proto__:mae, attr3:'C'}
console.log(filha.attrl, filha.attr2, filha.attr3)

class avo {
    constructor (sobrenome){
        this.sobrenome=sobrenome
    }
}


class mae extends avo {
    constructor (sobrenome, profissao="cineasta"){
        super(sobrenome)
        this.profissao= profissao
    }
}


class filha extends mae {
    constructor (){
        super("silva")
    }
}


const novaFilha = new filha
novaFilha.profissao = "atriz"
console.log(novaFilha)
const novaMae = new mae
console.log(novaMae)

