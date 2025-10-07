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
  const humanChoice = prompt(message, 1);
  return humanChoice;
}
