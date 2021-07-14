

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generating the target number range
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};

//Comparing the player's number to the computer's value
const compareGuesses = (humanGuess, computerGuess,generatedTarget) => {
  let generatedTarget = generateTarget;
  const humanValue = Math.abs(humanGuess - generatedTarget);
  const computerValue = Math.abs(computerGuess - generatedTarget);
  return humanValue <= computerValue;
};

//Updating the score when either computer or player wins
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}


//Called after every round to move to the next round
const advanceRound = () => currentRoundNumber++;



