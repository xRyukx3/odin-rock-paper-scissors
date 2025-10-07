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
