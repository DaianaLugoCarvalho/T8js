
//blob vai printar a imagem na tela, deixa a forma mais leve
fetch("rainbow.jpg").then(response => {
    console.log(response)
    return response.blob()    
}).then (blob => {
    console.log(blob)
    document.getElementById("rainbow").src =
    URL.createObjectURL(blob)
})


async function pegaArco(){
    const response = await fetch('raibow.jpg')
    const blob = await response.blob()
    console.log(response)
    
    
}