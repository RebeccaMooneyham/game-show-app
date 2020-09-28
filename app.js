const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn_reset');
let missed = 0;
const phrases = ['eat drink and be merry', 'buy one get one free', 'can you keep a secret', 'go jump in a lake', 'look on the bright side'];

const phraseArray = getRandomPhraseAsArray(phrases);


// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none'
});

// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
  const randomNumber = Math.floor(Math.random() * phrases.length + 1);
  const chosenPhrase = phrases[randomNumber].split('');
  return chosenPhrase;
}

// add the letters of a string to the display by doing the following: loop through each character in the array => create a li; put the character in the li; add class name 'letter' to li if it's an actual letter and class name 'space' if it's a space; append list item to ul
function addPhraseToDisplay(arr) {
  for (let i = 0; i < phraseArray.length; i++) {
    const li = document.createElement('li');
    li.textContent = phraseArray[i];
    if (phraseArray[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
    const ul = document.querySelector('ul');
    ul.appendChild(li);
  }
}

addPhraseToDisplay(phraseArray);

// check if a letter is in the phrase 
// const checkLetter = button => {

// }

// check if the game has been won or lost
// const checkWin = () => {

// }


// listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click' e => {

// });