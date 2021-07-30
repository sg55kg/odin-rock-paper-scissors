/*
Player is given 3 choices (r/p/s). They enter their choice, and the comp
enters a random choice. The two choices are compared, and a winner for
that round is chosen. This process is done 5 times, and the side with the
most rounds won, wins overall.

step 1 - player selects choice, game loop begins (total 5)
step 2 - comp generates random choice
step 3 - the two choices are compared
step 4 - round winner decided, next round begins
step 5 - after fifth round, side with most round wins becomes overall winner
step 6 - prompt restart or exit?
*/
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


function game() {
    for(let i = 0; i <= 5; i++) {
        round();
        //this makes round play out 6 times. Needs to stop after 1 click.
    }
}

function getPlayerChoice(playerChoice) {
    rock.addEventListener('click', function() {
        playerChoice = 'Rock'
        console.log(playerChoice);
        return playerChoice;
    })
    paper.addEventListener('click', function() {
        playerChoice = 'Paper'
        console.log(playerChoice);
        return playerChoice;
    })
    scissors.addEventListener('click', function() {
        playerChoice = 'Scissors'
        console.log(playerChoice);
        return playerChoice;
    })

}

function getCompChoice(compChoice) {

    return compChoice;
}

function round() {
    //get the two choices, display and compare them and reveal the winner
    //of the round. Return to next part of the game loop.
    getPlayerChoice();
    getCompChoice();

    //if playerChoice beats compChoice, player wins and round is over.
    //else comp wins and round is over.
    //next round (return?)
}

game();