let humanScore = 0

let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors"
    }
} 
//^^random 1-3 number generator

function getHumanChoice() {
   let getHumanChoice = prompt("rock, paper, or scissors?", "").toLowerCase();
   return getHumanChoice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice ) {
        console.log("It's a tie");
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("you win duder, your paper suffocated the enemies rock");
        ++humanScore;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("your scissors were crushed by their rock, you lose");
        ++computerScore;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("your rock destroyed their scissors");
        ++humanScore;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("Their scissors sliced your paper up into tiny pieces");
        ++computerScore;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("your valiant scissors defended your honor against the enemies most foul paper");
        ++humanScore;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("the enemies paper strangled your rock to death... wtf");
        ++computerScore;
    }
       
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerchoice = getComputerChoice();
    console.log(`you chose ${humanChoice} and the cpu chose ${computerchoice}`);
    playRound(computerchoice, humanChoice);
    console.log(`SCORES: YOU: ${humanScore}, CPU: ${computerScore}`)
    
}

for (let i = 0; i <5; ++i) {
    playGame();
}