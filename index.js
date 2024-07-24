function PlayerRoll (roll) {
    const statement = 
document.getElementById("statement");
    const playerChoice =
document.getElementById("playerChoice");
    const computerChoice =
document.getElementById("computerChoice");
    const randomNumber =
Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice.innerHTML = "Rock";
  } else if (randomNumber === 1) {
    computerChoice.innerHTML = "Paper";
  } else if (randomNumber === 2) {
    computerChoice.innerHTML = "Scissors";  
  }
  if (roll === "Rock") {
    playerChoice.innerHTML = "Rock";
  } else if (roll === "Paper") {
    playerChoice.innerHTML = "Paper";
  } else if (roll === "Scissors") {
    playerChoice.innerHTML = "Scissors";
  }

  if (playerChoice.innerHTML === computerChoice.innerHTML) {
    statement.innerHTML = "Tie"
  } else if (
    (playerChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Paper") ||
    (playerChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Scissors") ||
    (playerChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Rock")
  ) {
    statement.innerHTML = "Winner";
  } else {
    statement.innerHTML = "Loser";
  }
  }



}