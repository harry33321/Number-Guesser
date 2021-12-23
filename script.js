let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
  
const compareGuesses = (humanGuesses, computerGuesses, targetNumber) => {
    const humanDiff = Math.abs(humanGuesses - targetNumber);
    const computerDiff = Math.abs(computerGuesses - targetNumber);
    if (humanDiff <= computerDiff) {
      return true;
    } else {
      return false;
    }
} 
  
const updateScore = (winner) => {
    if (winner == 'human') {
      humanScore++;
    } else if (winner == 'computer'){
      computerScore++;
    }
}
  
const advanceRound = () => {
    currentRoundNumber++;
}