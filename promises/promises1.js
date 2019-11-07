function falarDepoisDe(segundos, frase){
    return new Promisse ((resolve, reject) => {
        if (segundos >10) {
            reject ("muito tempo")
        }
        setTimeout (() => {
            resolve(frase)
        }, segundos*1000)

    })
}

falarDepoisDe(3, "falar").then(frase => console.log(`${frase} - vim do promisse`).catch(e => console.log(e)
)
