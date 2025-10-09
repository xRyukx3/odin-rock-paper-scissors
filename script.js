function getComputerChoice() {
  let randNumber = Math.floor(Math.random() * 3 + 1);
  switch (randNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice + " " + computerChoice);
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

let humanScore = 0;
let computerScore = 0;
let roundWinner = "";
let score = "";

const humanPlayerOptions = document.querySelectorAll("button#option");

humanPlayerOptions.forEach((button) => {
  button.addEventListener("click", () => {
    let humanSelection = button.classList;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});
