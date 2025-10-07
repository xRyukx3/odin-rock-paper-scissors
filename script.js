function getComputerChoice() {
  let randN = Math.random();
  randN *= 100;
  if (randN >= 0 && randN < 33) {
    return "rock";
  } else if (randN >= 33 && randN < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const message =
    "Choose one of the following: \n 1. Rock \n 2. Paper \n 3. Scissors";
  let humanChoice = prompt(message);
  switch (parseInt(humanChoice)) {
    case 1:
      humanChoice = "rock";
      break;
    case 2:
      humanChoice = "paper";
      break;
    case 3:
      humanChoice = "scissors";
      break;
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
    console.log("Draw");
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins");
    computerScore += 1;
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win");
    humanScore += 1;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win");
    humanScore += 1;
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins");
    computerScore += 1;
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins");
    computerScore += 1;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win");
    humanScore += 1;
  }
}

function getWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log("Both are awesome! It's a DRAW!");
  } else if (humanScore > computerScore) {
    console.log("You're the absolute winner!");
  } else {
    console.log("Computer won the game :/");
  }
}

function printScore(humanScore, computerScore) {
  const message =
    "Human score: " + humanScore + "\n Computer score: " + computerScore;
  console.log(message);
}

function playGame() {
  for (i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }
  getWinner(humanScore, computerScore);
  printScore(humanScore, computerScore);
}

let humanScore = 0;
let computerScore = 0;
playGame();
