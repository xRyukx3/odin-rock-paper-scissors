function getComputerChoice() {
  let randNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice = "";
  switch (randNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function printRunningScore(humanScore, computerScore) {
  const message =
    "Human score: " + humanScore + "\nComputer score: " + computerScore;
  return message;
}

function printRoundWinner(winner) {
  let message = "";
  switch (winner) {
    case "human":
      message = "You win this round!";
      break;
    case "computer":
      message = "Computer wins this round :c";
      break;
    case "nobody":
      message = "It's a tie!";
      break;
  }
  return message;
}

function printPlayersSelection(humanSelection, computerSelection) {
  return (
    "Your selection: " +
    humanSelection +
    "  Computer selection: " +
    computerSelection
  );
}

function playRound(humanChoice, computerChoice) {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      alert("You are the absolute Winner!");
    } else {
      alert("Computer wins this game :c");
    }
    humanScore = 0;
    computerScore = 0;
  } else {
    let winner = "";
    if (humanChoice === computerChoice) {
      winner = "nobody";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      winner = "human";
      humanScore += 1;
    } else {
      winner = "computer";
      computerScore += 1;
    }
    resultsPanel.appendChild(playersSelection);
    resultsPanel.appendChild(roundWinner);
    resultsPanel.appendChild(runningScore);
    playersSelection.textContent = printPlayersSelection(
      humanChoice,
      computerChoice
    );
    runningScore.textContent = printRunningScore(humanScore, computerScore);
    roundWinner.textContent = printRoundWinner(winner);
  }
}

let humanScore = 0;
let computerScore = 0;

//Query selections
const humanPlayerOptions = document.querySelectorAll("button#option");
const resultsPanel = document.querySelector("div.results");

//Create elements
const playersSelection = document.createElement("p");
const runningScore = document.createElement("p");
const roundWinner = document.createElement("h2");

humanPlayerOptions.forEach((button) => {
  button.addEventListener("click", () => {
    let humanSelection = button.classList.toString();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});
