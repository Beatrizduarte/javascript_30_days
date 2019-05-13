// cria uma variavel que vai receber da dom a class .second-hand, que se refere ao ponteiro dos segundos.
const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){ // é uma função do proprio JS para passar informações de data e hora

    // atribui a variavel o objeto data, partindo das informações do proprio pc
    const now = new Date();  

    // cria uma variavel seconds, que está sendo passada os segundos com base na variavel Now que possui esses dados.
    const seconds = now.getSeconds()

    // cria uma variavel secondsDegrees, que está dividido os segundos, e depois multiplicando para 360.
    const secondsDegrees = ((seconds / 60) * 360)+ 90

    // pega a variavel do ponteiro dos segundos, criar uma rotação no css, pegando os dados da variavel concatenada secondsDegrees.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360)+ 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getMinutes()
    const hourDegrees = ((mins / 12) * 360)+ 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    
}


setInterval(setDate,1000) // determina em quanto tempo será executado a função. assim mudando a hora.