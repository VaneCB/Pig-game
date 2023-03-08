//Seleccionar los elementos del Dom y guardarlos en variables
const playerSection = document.querySelectorAll('.player')
const namePlayer = document.querySelectorAll('.name')
const scorePlayer = document.querySelectorAll('.score')
const currentLabel = document.querySelector('.current-label')
const currentScore = document.querySelectorAll('.current-score')
const dicePlaying = document.querySelector('.dice')
const buttonDice = document.querySelector('.btn-roll')
const buttonHold = document.querySelector('.btn-hold')
const buttonNew = document.querySelector('.btn-new')

// Creamos las variables que necesitamos
let scores 
let roundScore 
let activePlayer 

//creacion de un numero aleatorio en el dado
const MAX_NUMBER = 6
const MIN_NUMBER = 1
let diceNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

buttonDice.addEventListener('click', function () {
  //generamos un número aleatorio para el dado
  diceNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

  //mostramos la imagen correspondiente al número del dado
  dicePlaying.src = `dice-${diceNumber}.png`
  
  //si el número del dado es diferente de 1, añadimos la puntuación al acumulado del jugador actual
  if (diceNumber !== 1) {
    roundScore += diceNumber
    currentScore.textContent = roundScore
  } else {
    //si el número del dado es 1, cambiamos al siguiente jugador
    cambiarJugador()
  }
})

function cambiarJugador() {
  //reiniciamos la puntuacion acumulada del jugador actual
  roundScore = 0
  currentScore.textContent = roundScore
  
  //cambiamos el jugador activo
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  
  //cambiamos la clase active del jugador en el DOM
  playerSection[1].classList.toggle('player--active')
}