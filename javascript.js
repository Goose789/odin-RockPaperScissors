// getComputerChoice = randomly return rock paper or scissors
// getHumanChoice = use prompt to get the user input (no reprompting for invalid input)
// check who won with if else

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const list = ["rock", "paper", "scissors"]
    const computerChoice = list[getRandomInt(3)]
    return computerChoice
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, Scissors ? ").toLowerCase()
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerSelection,humanSelection) {
    // Rock < Paper < Scissor
    let result = "";

    const beats = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (computerSelection === humanSelection) {
        result = "Draw!";
    } else if (beats[computerSelection] === humanSelection) {
        result = "Computer won!";
        computerScore += 1;
    } else if (beats[humanSelection] === computerSelection) {
        result = "Human won!";
        humanScore += 1;
    } else {
        result = "Something went wrong..., probably you ? It's ROCK, PAPER OR SCISSORS, nothing else!\nI guess the computer win then!";
        computerScore += 1;
    }
return result + "\nHuman score: " + humanScore + "\nComputer score: " + computerScore
}

/*
for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

    console.log(playRound(computerChoice, humanChoice));
}

if (humanScore > computerScore) {
    console.log("Human won the game!")
} else if (humanScore < computerScore) {
    console.log("Computer won the game!")
} else {
    console.log("Draw! Boooooooooooooooooooooooooooring.")
}
        */

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(computerChoice,humanChoice);
    });
});
