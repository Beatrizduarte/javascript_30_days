function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // pega a tecla que está sendo pressionada e passa para a variavel.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return // evita que outras teclas seja tocada

    audio.currentTime = 0 // Reinicia o som
    
    audio.play()
    
    key.classList.add('playing') // pega style do css, criando uma borda quando a tecla é pressionada.
}


function removeTransition(e){ //vai remover a transição ao clicar em cada tecla
    if(e.propertyName !== 'transform') return // tudo o que não for 'transform' será ignorado
    
    console.log(e.propertyName)
    
    this.classList.remove('playing') // vai remover a class 'playing'
}

const keys = document.querySelectorAll('.key') // passa a class key para a variavel keys

keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // para cada vez que a tecla for pressionada, será removido a transição criada pelo css.

window.addEventListener('keydown', playSound);

