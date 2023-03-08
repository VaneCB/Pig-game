//Seleccionar los elementos del Dom y guardarlos en variables
const playerSection = document.querySelectorAll('.player')
const namePlayer = document.querySelectorAll('.name')
const scorePlayer = document.querySelectorAll('.score')
const currentLabel = document.querySelector('.current-label')
const currentScore = document.querySelector('.current-score')
const dicePlaying = document.querySelector('.dice')

//creamos las variables que necesitamos
let scorePlayer1
let scorePlayer2
let currentScore1
let currentScore2
//creacion de un numero aleatorio en el dado
const MAX_NUMBER = 6
const MIN_NUMBER = 1
let dice = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

checkButton.addEventListener('click', function () {
  const number = Number(dicePlaying.value)
}