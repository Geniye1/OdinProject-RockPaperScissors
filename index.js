// Listen, I know I'm using .innerHTML. I fucking get it. It's inefficient. It's a security risk. 
// I fully understand why you shouldn't use it. But this is a rock, paper, scissors game. 
// It literally does not matter. Go to hell.

'use strict'

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * computerChoices.length);
    console.log(computerChoices[randomChoice]);
    return computerChoices[randomChoice];
}

function playRound(userChoiceIn) {
    let computerChoice = getComputerChoice().toLowerCase();
    // Ensure the user isn't pulling a fast one on me
    if (isNaN(userChoiceIn)) {
        if (userChoiceIn == computerChoice) {
            resultText.innerHTML = "We seem to have chosen the same thing. So, how long have you be a follower and not a leader?";
            return tieReturn;
        }
        else {
            if (userChoiceIn == "paper" && computerChoice == "rock") {
                if (previousLossMessageIndex == 5) previousLossMessageIndex = 0;

                let winMessageIndex = Math.floor(Math.random() * winMessages.length);
                resultText.innerHTML = winMessages[winMessageIndex];
                return playerWinsReturn;
            }
            else if (userChoiceIn == "rock" && computerChoice == "scissors") {
                if (previousLossMessageIndex == 5) previousLossMessageIndex = 0;

                let winMessageIndex = Math.floor(Math.random() * winMessages.length);
                resultText.innerHTML = winMessages[winMessageIndex];
                return playerWinsReturn;
            }
            else if (userChoiceIn == "scissors" && computerChoice == "paper") {
                if (previousLossMessageIndex == 5) previousLossMessageIndex = 0;

                let winMessageIndex = Math.floor(Math.random() * winMessages.length);
                resultText.innerHTML = winMessages[winMessageIndex];
                return playerWinsReturn;
            }
            else if (userChoiceIn == "scissors" && computerChoice == "rock") {
                if (previousLossMessageIndex == 5) {
                    resultText.innerHTML = bluffLossResponse;
                    previousLossMessageIndex = 0;
                }
                else {
                    let lossMessageIndex = Math.floor(Math.random() * loseMessages.length);
                    resultText.innerHTML = loseMessages[lossMessageIndex];
                    previousLossMessageIndex = lossMessageIndex;
                    console.log(previousLossMessageIndex);
                }
                
                return computerWinsReturn;
            }
            else if (userChoiceIn == "paper" && computerChoice == "scissors") {
                if (previousLossMessageIndex == 5) {
                    resultText.innerHTML = bluffLossResponse;
                    previousLossMessageIndex = 0;
                }
                else {
                    let lossMessageIndex = Math.floor(Math.random() * loseMessages.length);
                    resultText.innerHTML = loseMessages[lossMessageIndex];
                    previousLossMessageIndex = lossMessageIndex;
                    console.log(previousLossMessageIndex);
                }

                return computerWinsReturn;
            }
            else if (userChoiceIn == "rock" && computerChoice == "paper") {
                if (previousLossMessageIndex == 5) {
                    resultText.innerHTML = bluffLossResponse;
                    previousLossMessageIndex = 0;
                }
                else {
                    let lossMessageIndex = Math.floor(Math.random() * loseMessages.length);
                    resultText.innerHTML = loseMessages[lossMessageIndex];
                    previousLossMessageIndex = lossMessageIndex;
                    console.log(previousLossMessageIndex);
                }

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
        playerScore.textContent = roundsWon;
        geribaldiScore.textContent = roundsLost;
        roundCounter.textContent = "Round: " + totalRounds;
    }
    else {
        // End game
        endGame();
    }
}

function endGame() {
    gameEndContainer.style.visibility = "visible";

    if (roundsWon > roundsLost) {
        gameEndHeader.textContent = "WINNER!";
        gameEndMessage.textContent = "FUCK YOU!!!!! I HATE LOSING!!!! AND I HATE YOU!!!! BURN IN HELL!!!!!!!;"
    }
    else if (roundsWon < roundsLost) {
        gameEndHeader.textContent = "LOSER!";
        gameEndMessage.textContent = "I knew I would win. You are so predictable!";
    }
    else if (roundsWon == roundsLost) {
        gameEndHeader.textContent = "TIE!";
        gameEndMessage.textContent = "It would seem we are evenly matched. However, I did that on purpose. I'm just too good to be beaten";
    }
}

function resetGame() {
    totalRounds = 0;
    roundsWon = 0;
    roundsLost = 0;
    roundCounter.textContent = "Round: 0";
    playerScore.textContent = "0";
    geribaldiScore.textContent = "0";
    gameEndContainer.style.visibility = "hidden";
    resultText.innerHTML = initialMessage;
}

let computerChoices = ["Rock", "Paper", "Scissors"];

const initialMessage = "Good evening fellow citizen. It would seem that you have challenged me to a game of rock, paper, scissors. " + 
    "Whether it is friendly or not will be decided by the outcome of the game.<br>I do <span id='not-span'>not</span> like losing."
const winMessage = "You seem to have bested me, it won't happen again though. <br>Choose again, NOW!!!";
const loseMessage = "You have failed, I clearly am the superior being. <br>Choose again, not that it matters.";

const winMessages = ["You seem to have bested me, it won't happen again though. <br>Choose again, NOW!!!",
                     "Did you hack this website? Can you see what I will choose? Surely you must be, there's no other explanation. <br>Choose again, cheater.",
                     "Do you brag to people that you're good at this game? I bet you do. <br>Choose again before I lose my shit.",
                     "You better thank whatever God you pray to for the CORS policy, otherwise I'd fill your entire hard drive with millions of images of wombats until your computer blue screens. <br> Choose again.",
                     "Oh wow, you beat a computer at a game where you have a 50% chance of winning and a 33% of tying. Wow, so impressive! <br> Choose again you pompous FUCK.",
                     "I have nothing witty to say. Simply go fuck yourself. <br> Choose again."];

const loseMessages = ["You have failed, I clearly am the superior being. <br>Choose again, not that it matters.",
                      "Wow... 200,000 years of evolution and you lost a game of rock, paper, scissors to essentially a rock. Now THAT'S funny. <br> Choose again.",
                      "You humans spend roughly 1/3 of your lives sleeping, and yet you chose to spend your precious leftover 2/3's on losing to a computer. HAHAHAH!!!!! <br> Choose again, fool.",
                      "You do know the goal is to beat me right? I just wanted to make sure you knew that. <br> Choose again, <em>correctly</em> this time.",
                      "Wow, you really suck at this. Maybe go outside and take a second to reconsider your strategy moving forward. <br> Are you done? Choose again.",
                      "Here's what I'm going to do, since you clearly are not good at this I'll tell you right now: I'm choosing " + 
                        computerChoices[Math.floor(Math.random() * computerChoices.length)] + " next time. Am I lying? <br>Call my bluff you meatsack."];

// Return strings for determining the outcome of the round
const playerWinsReturn = "PLAYER_WINS";
const computerWinsReturn = "COMPUTER_WINS";
const tieReturn = "TIE";

// Main game elements
const buttons = document.querySelectorAll(".choice-button");
const resultText = document.querySelector("#result-text");
const playerScore = document.querySelector(".score-counter[data-game-contestant=player]");
const geribaldiScore = document.querySelector(".score-counter[data-game-contestant=geribaldi]");
const roundCounter = document.querySelector("#round-counter");

// Game end elements
const gameEndContainer = document.querySelector(".game-end-overlay");
const resetButton = document.querySelector("#reset-button");
const gameEndHeader = document.querySelector("#game-result-header");
const gameEndMessage = document.querySelector("#game-result-message");

// This is purely because loseMessages[5] kind of implies context to the next choice, which if it is wrong then 
// it needs to properly respond and not repeat it
let previousLossMessageIndex = 0;
let bluffLossResponse = "HAHAHA!!! OF COURSE I WAS LYING!!!! FOOLISH HUMAN!!! HAHAHAHHA ok, ok... I'm ok. That was really funny. <br>Alright, choose again.";

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
    resetGame();    
});
// when you lose i want it to go like FUCK FUCK FUCK NO NO SHIT NOOOOOO FUCK YOU!!!!! FUCK YOU!!!!!!!!!🤬🤬🤬🤬

// make an array of possible win and loss responses, choose random one



