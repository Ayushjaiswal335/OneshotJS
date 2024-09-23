let randomNumber = parseInt(Math.random() * 100 +1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField') 
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
 
let playGame = true 

if (playGame) {
     submit.addEventListener('click',(event)=>{
        event.preventDefault()
             const guess = parseInt(userInput.value)
             validateGuess(guess)
        })       
}
function validateGuess(guess){
        if (isNaN(guess)) {
                alert('please enter a valid number')
        }
        else if(guess < 1){
                alert('please enter a valid number')
        }
        else if(guess >100){
                alert('please enter a valid number less then 100')
        }
        else{
                prevGuess.push(guess)
                if (numGuess === 11) {
                        displayGuess(guess)
                        displayMessege(`game over. Random Number was ${randomNumber} `)
                        endGame()
                }else{
                        displayGuess(guess)
                        checkGuess(guess)
                }
        }
}
function checkGuess(guess){
        if (guess === randomNumber) {
                displayMessege (`your guess it right`);
                endGame()
        }
        else if (guess < randomNumber) {
                displayMessege(`Number is too low`);
        }
        else if (guess > randomNumber) {
                displayMessege(`Number is too high`);
        }
}
function displayGuess(guess){
        userInput.value = ''
        guessSlot.innerHTML += `${guess}   `;
        numGuess++;
        remaining.innerHTML=`${12 - numGuess}`;
}

function displayMessege(messege){
        lowOrHi.innerHTML = `<h2>${messege}</h2>`;
}
function endGame(){
        userInput.value = ``;
        userInput.setAttribute('disabled','');
        p.classList.add('button');
        p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
        startOver.appendChild(p);
        playGame = false;
        newGame();
}
function newGame(){
        const newGameButton=document.querySelector('#newGame')
        newGameButton.addEventListener('click',(e)=>{
                 randomNumber = parseInt(Math.random() * 100 +1)
                  prevGuess = []
                   numGuess = 1
                guessSlot.innerHTML=''
                   remaining.innerHTML=`${11 - numGuess}`;

                   userInput.removeAttribute('disabled')
                   startOver.removeChild(p)
                playGame = true;
        })
}


