
// document.getElementById("input").addEventListener("click", function(){
//     let frutas = ["banana", "morango", "bacurí", "laranja"]

//     let procura = frutas.filter((frutas) => frutas === "")

// })


let frutas = ["banana", "morango", "bacurí", "laranja"]
let input = document.getElementById('input')
let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let novaArray = frutas.filter(fruta => fruta === input.value)
    console.log(novaArray)

    if (novaArray.lenght > 0) {
        alert (`achou ${input.value}`)
    }else{
        alert(`nao achou o ${input.value}`)
    }
})



