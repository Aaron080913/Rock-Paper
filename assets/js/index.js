function PlayerRoll(roll) {
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
    (computerChoice.innerHTML === "Rock" && playerChoice.innerHTML === "Paper") ||
    (computerChoice.innerHTML === "Paper" && playerChoice.innerHTML === "Scissors") ||
    (computerChoice.innerHTML === "Scissors" && playerChoice.innerHTML === "Rock")
  ) {
    statement.innerHTML = "Winner";
  } else {
    statement.innerHTML = "Loser";
  }
}
//Reset Button Javascript
function reset() {
  const statement =
    document.getElementById("statement");
  const playerChoice =
    document.getElementById("playerChoice");
  const computerChoice =
    document.getElementById("computerChoice");
  const playerScoreDisplay =
    document.getElementById("playerScoreDisplay");
  const computerScoreDisplay =
    document.getElementById("computerScoreDisplay");
//Starting view of the game
  statement.innerHTML = "Make A choice to start the Game!";
  playerChoice.innerHTML = "?";
  computerChoice.innerHTML = "?";

}