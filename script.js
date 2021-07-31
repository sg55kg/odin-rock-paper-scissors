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

let playerChoice = '';
let compChoice = '';
let playerWinCount = 0;
let compWinCount = 0;
let roundNumber = 0;

function game() {
    round();
    return;

}

function getPlayerChoice() {
    rock.addEventListener('click', function() {
        playerChoice = 'Rock'
        console.log(playerChoice);
        getCompChoice();
        compareChoices(playerChoice, compChoice);
        roundNumber++
        return roundNumber
    })
    paper.addEventListener('click', function() {
        playerChoice = 'Paper'
        console.log(playerChoice);
        getCompChoice();
        compareChoices(playerChoice, compChoice);
        roundNumber++
        return roundNumber
    })
    scissors.addEventListener('click', function() {
        playerChoice = 'Scissors'
        console.log(playerChoice);
        getCompChoice();
        compareChoices(playerChoice, compChoice);
        roundNumber++
        return roundNumber
    })

}

function getCompChoice() {
    let things = ['Rock', 'Paper', 'Scissors'];
    compChoice = things[Math.floor(Math.random()*things.length)];
    console.log('c'+ compChoice) //just for debugging
    return compChoice;
}

function compareChoices(pChoice, cChoice) {
    if(pChoice == 'Rock') {
        if(cChoice == 'Paper') {
            console.log('You lose')
            compWinCount++;
            return compWinCount
        } else if(cChoice == 'Rock') {
            console.log('Tie')
        } else if(cChoice == 'Scissors') {
            console.log('You win')
            playerWinCount++;
            return playerWinCount
        }
    } else if(pChoice == 'Paper') {
        if(cChoice == 'Paper') {
            console.log('Tie')
        } else if(cChoice == 'Rock') {
            console.log('You win')
            playerWinCount++
            return playerWinCount
        } else if(cChoice == 'Scissors') {
            console.log('You lose')
            compWinCount++
            return compWinCount
        }
    } else if(pChoice == 'Scissors') {
        if(cChoice == 'Paper') {
            console.log('You win')
            playerWinCount++
            return playerWinCount
        } else if(cChoice == 'Rock') {
            console.log('You lose')
            compWinCount++
            return compWinCount
        } else if(cChoice == 'Scissors') {
            console.log('Tie')
        }
    } //eventually update this so score on screen is updated.
}

function endGame() {
    console.log('Game Over')
    
}

function round() {
    while(roundNumber < 5) {
        getPlayerChoice()
    }
    endGame()
}

game();