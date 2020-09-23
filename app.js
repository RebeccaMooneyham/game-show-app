const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn_reset');

let missed = 0;
const phrases = ['Eat Drink And Be Merry', 'Buy One Get One Free', 'Can You Keep A Secret', 'Go Jump In A Lake', 'Look On The Bright Side'];

// return a random phrase from an array
// const getRandomPhraseAsArray = arr => {

// }

// add the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }

// check if a letter is in the phrase 
// const checkLetter = button => {

// }

// check if the game has been won or lost
// const checkWin = () => {

// }

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none'
});

// listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click' e => {

// });