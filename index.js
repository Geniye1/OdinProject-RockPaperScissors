'use strict'

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice]);
    return choices[randomChoice];
}

function playRound(userChoiceIn) {
    let computerChoice = getComputerChoice().toLowerCase();
    // Ensure the user isn't pulling a fast one on me
    if (isNaN(userChoiceIn)) {
        if (userChoiceIn == computerChoice) {
            resultText.textContent = "We seem to have chosen the same thing. So, how long have you be a follower and not a leader?";
            return tieReturn;
        }
        else {
            if (userChoiceIn == "paper" && computerChoice == "rock") {
                resultText.textContent = winMessage;
                return playerWinsReturn;
            }
            else if (userChoiceIn == "rock" && computerChoice == "scissors") {
                resultText.textContent = winMessage;
                return playerWinsReturn;
            }
            else if (userChoiceIn == "scissors" && computerChoice == "paper") {
                resultText.textContent = winMessage;
                return playerWinsReturn;
            }
            else if (userChoiceIn == "scissors" && computerChoice == "rock") {
                resultText.textContent = loseMessage;
                return computerWinsReturn;
            }
            else if (userChoiceIn == "paper" && computerChoice == "scissors") {
                resultText.textContent = loseMessage;
                return computerWinsReturn;
            }
            else if (userChoiceIn == "rock" && computerChoice == "paper") {
                resultText.textContent = loseMessage;
                return computerWinsReturn;
            }
            else {
                console.log("uuhhh....");
            }
        }
    }
    else {
        console.log("I see you have attempted to trick me, you have failed. Get the hell out of here.");
    }
}

function playGame(userChoiceIn) {
    if (totalRounds < numberOfRounds) {
        let outcome = playRound(userChoiceIn);
        if (outcome == computerWinsReturn) {
            roundsLost++;
        }
        else if (outcome == playerWinsReturn) {
            roundsWon++;
        }
        else if (outcome == tieReturn) {
            // do nothing
        }
        totalRounds++;
    }
    else {
        // End game
        gameEndContainer.style.visibility = "visible";
    }
}

const winMessage = "You seem to have bested me, it won't happen again though.";
const loseMessage = "You have failed, I clearly am the superior being.";

const playerWinsReturn = "PLAYER_WINS";
const computerWinsReturn = "COMPUTER_WINS";
const tieReturn = "TIE";

const buttons = document.querySelectorAll(".choice-button");
const resultText = document.querySelector("#result-text");
const gameEndContainer = document.querySelector(".game-end-overlay");
const resetButton = document.querySelector("#result-button");

const numberOfRounds = 5;
let totalRounds = 1;
let roundsWon = 0;
let roundsLost = 0;

buttons.forEach(button => {
    button.addEventListener("click", function() {
        playGame(button.dataset.choice.toLowerCase());
    })
});

resetButton.addEventListener("click", function() {
    totalRounds = 0;
    roundsWon = 0;
    roundsLost = 0;
    gameEndContainer.style.visibility = "hidden";
});
// when you lose i want it to go like FUCK FUCK FUCK NO NO SHIT NOOOOOO FUCK YOU!!!!! FUCK YOU!!!!!!!!!🤬🤬🤬🤬

// make an array of possible win and loss responses, choose random one



