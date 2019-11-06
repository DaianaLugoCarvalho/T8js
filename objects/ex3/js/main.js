let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];



class Navbar {
    render(){
    const nav = ` 
    <img class="navbar__logo" src="./imgs/logo.png" alt="Logo"/>
        <div class="group__input">
            <input class="input__search" onKeyUp="limpar(this.value)" type="search" placeholder="Search" aria-label="Search">
            <button class="button__search" onclick="search()"> Search </button>
        </div>`

    document.querySelector('.navbar').innerHTML = nav
    }
}



const rendernavBar = new Navbar
rendernavBar.render()





class Card{
    constructor(objeto){
        this.objeto = objeto
    }

    render(){
       const card = 
       ` <div class="card">
            <img class="imagem" src=${this.objeto.imagem} />
            <h3>${this.objeto.titulo}</h3>
            <p class = "ingredientes"> ${this.objeto.ingredientes}</p>
        </div>`     

        document.querySelector('.cards').insertAdjacentHTML('beforeend', card)

    }
}

resultados.map(objeto => {
    new Card(objeto).render()
})

document.querySelector('.button__search').addEventListener('click', function(){
    let inputValue = document.querySelector('.input__search').value.toUpperCase()
    let achados = resultados.filter(objeto => {
    new Card(objeto).render()
        return objeto.titulo.toUpperCase().includes(inputValue) || objeto.ingredientes.toUpperCase().includes(inputValue)
    })

    document.querySelector('.cards').innerHTML = ""
    achados.map(encontrado => {
        new Card(encontrado).render()
    })
})