/*
Player is given 3 choices (r/p/s). They enter their choice, and the comp
enters a random choice. The two choices are compared, and a winner for
that round is chosen. This process is done 5 times, and the side with the
most rounds won, wins overall.

*/
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let showPlayerChoice = document.getElementById('showPlayerChoice');
let showCompChoice = document.getElementById('showCompChoice');
let showPlayerScore = document.getElementById('showPlayerScore');
let showCompScore = document.getElementById('showCompScore');
let gameOver = document.getElementById('game-over');

let playerChoice = '';
let playerWinCount = 0;
let compWinCount = 0;
let compChoice;

/*
Player selects choice
Computer generates choice
Win count is updated (update count function?)
If one of the counts reaches five, the game is over and scores are reset
*/
function getPlayerChoice(buttonChoice) {
    playerChoice = buttonChoice;
    game();
    getCompChoice();
}

let getCompChoice = function() {
    let things = ['Rock', 'Paper', 'Scissors'];
    compChoice = things[Math.floor(Math.random()*things.length)];
    return compChoice;
}

function updateWinCount(count) {
    count += 1;
    return count;
}

function compareChoices(pc, cc) {
    if(pc == 'Rock') {

        if(cc == 'Paper') {
            compWinCount++;
            showPlayerChoice.innerHTML = 'Rock';
            showCompChoice.innerHTML = 'Paper';

        } else if(cc == 'Rock') {
            showPlayerChoice.innerHTML = 'Rock';
            showCompChoice.innerHTML = 'Rock';

        } else if(cc == 'Scissors') {
            playerWinCount++;
            showPlayerChoice.innerHTML = 'Rock';
            showCompChoice.innerHTML = 'Scissors';
        }
    } else if(pc == 'Paper') {

        if(cc == 'Paper') {
            showPlayerChoice.innerHTML = 'Paper';
            showCompChoice.innerHTML = 'Paper';

        } else if(cc == 'Rock') {     
            playerWinCount++;
            showPlayerChoice.innerHTML = 'Paper';
            showCompChoice.innerHTML = 'Rock';

        } else if(cc == 'Scissors') {
            compWinCount++;
            showPlayerChoice.innerHTML = 'Paper';
            showCompChoice.innerHTML = 'Scissors';
        }
    } else if(pc == 'Scissors') {

        if(cc == 'Paper') {
            playerWinCount++;
            showPlayerChoice.innerHTML = 'Scissors';
            showCompChoice.innerHTML = 'Paper';

        } else if(cc == 'Rock') {
            compWinCount++;
            showPlayerChoice.innerHTML = 'Scissors';
            showCompChoice.innerHTML = 'Rock';

        } else if(cc == 'Scissors') {
            showPlayerChoice.innerHTML = 'Scissors';
            showCompChoice.innerHTML = 'Scissors';
        }
    } //eventually update this so score on screen is updated.
}

function game() {
    compareChoices(playerChoice,compChoice);
    showPlayerScore.innerHTML = `${playerWinCount}`;
    showCompScore.innerHTML = `${compWinCount}`;
    
    if(playerWinCount == 5) {
        gameOver.innerHTML = 'You won!'
        playerWinCount = 0;
        compWinCount = 0;
    } else if(compWinCount == 5) {
        gameOver.innerHTML = 'You lost lol'
        playerWinCount = 0;
        compWinCount = 0;
    }
    
}

getPlayerChoice();
