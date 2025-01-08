let humanScore = 0;
let computerScore = 0;
let scores = `SCORES: YOU: ${humanScore}, CPU: ${computerScore}`

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
        div.textContent = "Woah, it's a tie!"
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        div.textContent = "you win duder, your paper suffocated the enemies rock";
        ++humanScore;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        div.textContent = "your valiant scissors defended your honor against the enemies most foul paper";
        ++humanScore;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        div.textContent = "your rock crushes their scissors' skull to dust";
        ++humanScore;
    } else {
        ++computerScore;
        div.textContent = "They won... wtf tho...";
    };
};

function playGame() {
    let computerChoice = getComputerChoice();
    console.log(`you chose ${humanChoice} and the cpu chose ${computerChoice}`);
    playRound(computerChoice, humanChoice);
    console.log(`SCORES: YOU: ${humanScore}, CPU: ${computerScore}`);
    
};

const choiceButtons = document.querySelectorAll(".choiceButton");
const div = document.querySelector("div");

choiceButtons.forEach((choiceButtons) => {
    choiceButtons.addEventListener("click", (event) => {
        playRound(getComputerChoice(), event.target.id); 

    });
});

/*
for (let i = 0; i <5; ++i) {
    playGame();
};
*/