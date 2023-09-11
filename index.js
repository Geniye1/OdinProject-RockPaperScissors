// Generate random choice
// Get user prompt
// compare to computer choice
// decide whether the player wins or loses

'use strict'

const winMessage = "You seem to have bested me, it won't happen again though.";
const loseMessage = "You have failed, I clearly am the superior being.";

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(userChoiceIn, computerChoiceIn) {
    // Ensure the user isn't pulling a fast one on me
    if (isNaN(userChoiceIn)) {
        if (userChoiceIn == computerChoiceIn) {
            console.log("We seem to have chosen the same thing. So, how long have you be a follower and not a leader?");
        }
        else {
            if (userChoiceIn == "rock" && computerChoiceIn == "paper") {
                console.log(loseMessage);
            }
            else if (userChoiceIn == "paper" && computerChoiceIn == "rock") {
                console.log(winMessage);
            }
            else if (userChoiceIn == "rock" && computerChoiceIn == "scissors") {
                console.log(winMessage);
            }
            else if (userChoiceIn == "scissors" && computerChoiceIn == "rock") {
                console.log(loseMessage);
            }
            else if (userChoiceIn == "paper" && computerChoiceIn == "scissors") {
                console.log(loseMessage);
            }
            else if (userChoiceIn == "scissors" && computerChoiceIn == "paper") {
                console.log(winMessage);
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

console.log('Good evening fellow citizen, it seems you have challenged me to a game of rock, paper, scissors. ' + 
            'Whether it is friendly or not will be decided by the outcome of the game. I do not like losing.');

let computerChoice = getComputerChoice();
let userChoice = prompt('What will you decide? Rock? Maybe, paper? Dare I say... scissors? DECIDE NOW.');
playRound(userChoice.toLowerCase(), computerChoice.toLowerCase());  


