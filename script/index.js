let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    };
} ;

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice ) {
        comment.textContent = "woah, it's a tie!"
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        comment.textContent = "you win duder, your paper suffocated the enemies rock";
        ++humanScore;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        comment.textContent = "your valiant scissors defended your honor against the enemies most foul paper";
        ++humanScore;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        comment.textContent = "your rock crushes their scissors' skull to dust";
        ++humanScore;
    } else {
        comment.textContent = "they won... wtf tho...";
        ++computerScore;
    };
    score.textContent = `SCORES: YOU: ${humanScore}, CPU: ${computerScore}`;
    if (humanScore === 5) {
        score.textContent = "CONGRATS YOU WIN!";
        comment.textContent = "make your next choice to start a new game";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        score.textContent = "YOU LOSE...";
        comment.textContent = "make your next choice to start a new game";
        humanScore = 0;
        computerScore = 0;
    };
};

const choiceButtons = document.querySelectorAll(".choiceButton");
const comment = document.querySelector("#comment");
const score = document.querySelector("#score")

choiceButtons.forEach((choiceButtons) => {
    choiceButtons.addEventListener("click", (event) => {
        playRound(getComputerChoice(), event.target.id); 

    });
});