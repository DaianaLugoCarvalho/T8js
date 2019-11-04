const nomesNoRole =['Adriana','Adrielly', 'Aline', 'Ana', 'Angelica',
'Ba', 'Babs', 'Carolzinha', 'Carolzona', 'Cecilia', 'Daiana', 'Emanuelle',
'Jackeline', 'Jennifer', 'Josiane', 'Lia', 'Marcela', 'Monique', 'Priscilla Roiz Garcia','Priscilla Soares Alves', 'Raissa', 'Raquel', 'Romênia', 'Rosana', 'Simara',
'Simone', 'Talita', 'Telma', 'Thaís','Valdeniza']

// let input = document.getElementById('input')
// let btn = document.getElementById('btn') 
const validacao = (nome) => {
    if(nome.trim()) throw "campo vazio"
}

document.getElementById('form-do-role').addEventListener('submit', function(event){
    event.preventDefault()
    let valorDoCampo = document.getElementById('nome').value

    try {
        validacao(valorDoCampo)
        
    } catch (error) {
        console.log('ruim');
        
    }


})






