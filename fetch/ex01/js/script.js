const cardSection = document.getElementById('card-section')



fetch('tarot.jason').then(response =>{
    return response.json()
} ).then(json =>{
    console.log(json);
    renderizarCard(json[0])
})


renderizarCard = carta => {
    const novaCarta = new Card (carta).render()
    cardSection.innerHTML=novaCarta
}

