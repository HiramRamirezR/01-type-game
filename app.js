const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
let letras = abecedario.sort(() => Math.random() - Math.random()).slice(0, 5)
const mensaje = document.querySelector('.mensaje')
let puntosTexto = document.querySelector('.puntos-texto')
let puntos = 0

const teclasDiv = document.querySelector('.teclas-div')
for (let i = 0; i < letras.length; i++) {
  let newSpan = document.createElement('span')
  teclasDiv.appendChild(newSpan)
  newSpan.innerText = letras[i]
  newSpan.classList.add(`${letras[i]}`)
}

window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`span[class="${e.key}"]`)
  if (!key) {
    mensaje.innerText = 'Ups! Sigue practicando'
    return
  }
  puntos++
  puntosTexto.innerText = puntos
  key.remove()
})
