// Generate random choice
// Get user prompt
// compare to computer choice
// decide whether the player wins or loses

'use strict'



function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice]);
    return choices[randomChoice];
}

function playRound(userChoiceIn, computerChoiceIn) {
    // Ensure the user isn't pulling a fast one on me
    if (isNaN(userChoiceIn)) {
        if (userChoiceIn == computerChoiceIn) {
            resultText.textContent = "We seem to have chosen the same thing. So, how long have you be a follower and not a leader?";
        }
        else {
            if (userChoiceIn == "rock" && computerChoiceIn == "paper") {
                resultText.textContent = loseMessage;
            }
            else if (userChoiceIn == "paper" && computerChoiceIn == "rock") {
                resultText.textContent = winMessage;
            }
            else if (userChoiceIn == "rock" && computerChoiceIn == "scissors") {
                resultText.textContent = winMessage;
            }
            else if (userChoiceIn == "scissors" && computerChoiceIn == "rock") {
                resultText.textContent = loseMessage;
            }
            else if (userChoiceIn == "paper" && computerChoiceIn == "scissors") {
                resultText.textContent = loseMessage;
            }
            else if (userChoiceIn == "scissors" && computerChoiceIn == "paper") {
                resultText.textContent = winMessage;
            }
            else {
                console.log("uuhhh....");
            }
        }

        console.log("User Choice: " + userChoiceIn + "\nComputer Choice: " + computerChoiceIn);
    }
    else {
        console.log("I see you have attempted to trick me, you have failed. Get the hell out of here.");
    }
}

function playGame(userChoiceIn, computerChoiceIn) {
    if (totalRounds <= numberOfRounds) {
        let outcome = playRound(userChoiceIn, computerChoiceIn);
        if (outcome == "COMPUTER_WINS") {
            roundsLost++;
        }
        else if (outcome == "PLAYER_WINS") {
            roundsWon++;
        }
        else if (outcome == "TIE") {
            // do nothing
        }

        totalRounds++;
        // reset game
    }
    else {
        // End game
    }
}

const winMessage = "You seem to have bested me, it won't happen again though.";
const loseMessage = "You have failed, I clearly am the superior being.";

let computerChoice = getComputerChoice();

const buttons = document.querySelectorAll(".choice-button");
const resultText = document.querySelector("#result-text");

const numberOfRounds = 5;
let totalRounds = 0;
let roundsWon = 0;
let roundsLost = 0;

buttons.forEach(button => {
    button.addEventListener("click", function() {
        playRound(button.dataset.choice.toLowerCase(), computerChoice.toLowerCase());
    })
});

// when you lose i want it to go like FUCK FUCK FUCK NO NO SHIT NOOOOOO FUCK YOU!!!!! FUCK YOU!!!!!!!!!🤬🤬🤬🤬

// make an array of possible win and loss responses, choose random one



