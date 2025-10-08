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

function getHumanChoice(roundWinner, score) {
  const message =
    "Choose one of the following: \n 1. Rock \n 2. Paper \n 3. Scissors\n" +
    roundWinner +
    "\n" +
    score;
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
  let message = "";
  let selections =
    "Human selection: " +
    humanChoice +
    "    Computer selection: " +
    computerChoice +
    "\n";
  if (humanChoice === computerChoice) {
    message = "It's a tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    message = "You win";
    humanScore += 1;
  } else {
    message = "Computer wins";
    computerScore += 1;
  }
  return selections + message;
}

function getWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    message = "Both are awesome! It's a tie!";
  } else if (humanScore > computerScore) {
    message = "You're the absolute winner!";
  } else {
    message = "Computer won the game :c";
  }
  return message;
}

function printScore(humanScore, computerScore) {
  const message =
    "Human score: " + humanScore + "\nComputer score: " + computerScore;
  return message;
}

function playGame() {
  for (i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice(roundWinner, score);
    roundWinner = playRound(computerSelection, humanSelection);
    score = printScore(humanScore, computerScore);
  }
  alert(getWinner(humanScore, computerScore));
}

let humanScore = 0;
let computerScore = 0;
let roundWinner = "";
let score = "";
playGame();
