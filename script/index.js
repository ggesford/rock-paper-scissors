function getComputerChoice() {
    return Math.floor(Math.random()*3)+1;
} 
//^^random 1-3 number generator
 console.log(getComputerChoice());

getHumanChoice = prompt("Rock, Paper, or Scissors?", "");