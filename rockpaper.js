
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');


console.log('This is a rock paper game');

let tie = 0;
let win = 0;
let loss = 0;


  
const playerSelection = "rock";
  

function computerplay() {

    let playseed = 0
    playseed = Math.random();

    if (playseed < 0.3333) {
 play = 'rock';
}     else if ( playseed < 0.6666) {
    play = 'paper';
}    else {
    play = 'scissors';
}

return play;
};

const computerSelection = computerplay();

function playRound(playerSelection, computerSelection) {
   
    console.log('Você jogou ' + playerSelection);
    console.log('O PC jogou ' + computerSelection);

    if (playerSelection == 'rock' && computerSelection == 'rock') {
            tie++;
            return 'You both played rock. Tie!'
            }
        else if (playerSelection == 'rock' && computerSelection == 'paper') {
            loss++;
            return 'You played rock and the PC played paper. You lose'

        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return 'You played rock and the PC played scissors. You WON'
            
        } else {
            return 'Something else happened.'
        }
  }

  console.log(playRound(playerSelection, computerSelection));