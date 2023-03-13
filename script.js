//Seleccionar los elementos del Dom y guardarlos en variables
const playerSection0 = document.querySelector('.player--0')
const playerSection1 = document.querySelector('.player--1')
const namePlayer0 = document.querySelector('#name--0')
const namePlayer1 = document.querySelector('#name--1')
const scorePlayer0 = document.querySelector('#score--0')
const scorePlayer1 = document.querySelector('#score--1')
const currentLabel = document.querySelector('.current-label')
const currentScore0 = document.querySelector('#current--0')
const currentScore1 = document.querySelector('#current--1')
const dicePlaying = document.querySelector('.dice')
const buttonDice = document.querySelector('.btn--roll')
const buttonHold = document.querySelector('.btn--hold')
const buttonNew = document.querySelector('.btn--new')

// Creamos las variables que necesitamos
let score
let roundScore
let currentScore
let activePlayer 
let gamePlaying

init()

buttonDice.addEventListener('click', function () {
  
  if(gamePlaying){
  //generamos un número aleatorio para el dado
  const MAX_NUMBER = 6
  const MIN_NUMBER = 1
  diceNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

  //mostramos la imagen correspondiente al número del dado
  dicePlaying.src = `dice-${diceNumber}.png`
  //si el número del dado es diferente de 1, añadimos la puntuación al acumulado del jugador actual
  if (diceNumber !== 1) {
    roundScore += diceNumber
    activePlayer===0 ? currentScore0.textContent = roundScore : currentScore1.textContent = roundScore
  } else {
    //si el número del dado es 1, cambiamos al siguiente jugador
    switchPlayer()
  }
  }
})

function switchPlayer() {
  [playerSection0, playerSection1].forEach(elem => elem.classList.toggle('player--active'))
  activePlayer = activePlayer===0 ? 1 : 0
 
//  if (activePlayer === 0) {
//   playerSection1.classList.add('player--active')
//   playerSection0.classList.remove('player--active')
 
//   } else {
//   playerSection0.classList.add('player--active')
//   playerSection1.classList.remove('player--active')
    
//   }
 
  //reiniciamos la puntuacion acumulada del jugador actual
  roundScore = 0
  if (activePlayer === 0) {
    currentScore0.textContent = roundScore;
  } else {
    currentScore1.textContent = roundScore;
  }
}


buttonNew.addEventListener('click', init);

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    currentScore0.textContent = 0
    currentScore1.textContent = 0
    scorePlayer0.textContent = 0
    scorePlayer1.textContent = 0

    playerSection0.classList.add('player--active')
    playerSection1.classList.remove('player--active')


}

function hold () {
  actualizarContador()
  switchPlayer()
}

function actualizarContador(){
  score[activePlayer] += roundScore;
  if (activePlayer === 0) {
    scorePlayer0.textContent = score[activePlayer];
  } else {
    scorePlayer1.textContent = score[activePlayer];
  }

  //Condicion de victoria
  if (score[activePlayer] >= 100) {
   gamePlaying = false;
   activePlayer = activePlayer===0 ? namePlayer0.textContent = 'Ganador' : namePlayer1.textContent = 'Ganador'
   
  }
}

buttonHold.addEventListener('click', hold)