const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

let puntos = 0
let letras = []
let letrasCorrectas = [];
let nivel = 1
let index = 0

let timeLeft = 60;
let timeInitial = 0

let puntosTexto = document.querySelector('.puntos-texto')
let nivelTexto = document.querySelector('.nivel-texto')
nivelTexto.innerText = nivel

juego()

function crearTeclas() {
  letras = abecedario.sort(() => Math.random() - Math.random()).slice(0, nivel)
  const teclasDiv = document.querySelector('.teclas-div')
  for (let i = 0; i < letras.length; i++) {
    let newSpan = document.createElement('span')
    teclasDiv.appendChild(newSpan)
    newSpan.innerText = letras[i]
    newSpan.classList.add(`${letras[i]}`)
  }
  console.log(`Letras: ${letras}`);
  index = 0
}


function detectarTeclas() {
  window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`span[class="${e.key}"]`)

    if (!key) {
      document.querySelector('.container').classList.add('hide')
      return
    }

    letrasCorrectas.push(e.key);
    console.log(`Letras correctas: ${letrasCorrectas}`);

    if (letrasCorrectas !== letras) {
      console.log('no son iguales');
    }


    if (letrasCorrectas.length === nivel) {

      nivel++;
      nivelTexto.innerText = nivel;

      letrasCorrectas = []; // Reiniciar el array de letras correctas para el nuevo nivel
      crearTeclas();
    }

    puntos++
    puntosTexto.innerText = puntos
    key.remove()
  })


  const downloadTimer = setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(downloadTimer);
      // document.querySelector('.container').classList.add('hide')
    }
    document.querySelector('.tiempo-texto').innerText = 60 - timeInitial;
    document.getElementById("progressBar").value = 60 - timeInitial;
    timeInitial++;
    timeLeft--
  }, 1000);
  return nivel
}

function juego() {
  if (nivel === 1) {
    crearTeclas()
    detectarTeclas()
  }
}
