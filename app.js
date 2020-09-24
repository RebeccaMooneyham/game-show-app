const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn_reset');
let missed = 0;
const phrases = ['Eat Drink And Be Merry', 'Buy One Get One Free', 'Can You Keep A Secret', 'Go Jump In A Lake', 'Look On The Bright Side'];

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none'
});

// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
  //create a variable to store a random number based on the length of the array
  const randomNumber = Math.floor(Math.random() * phrases.length + 1);

  //use the variable to select an index inside of the array and split into individual words
  const chosenPhrase = phrases[randomNumber].split(" ");

  // return the array element at that index
  return chosenPhrase;
}

getRandomPhraseAsArray(phrases);

// add the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }

// check if a letter is in the phrase 
// const checkLetter = button => {

// }

// check if the game has been won or lost
// const checkWin = () => {

// }


// listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click' e => {

// });