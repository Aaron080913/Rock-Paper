const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
// main game functions
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']
// start of game function
        playerOptions.forEach(option => {
          option.addEventListener('click', function () {

            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${10 - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
// this is the function to check who is the winner of the game
            winner(this.innerText, computerChoice)
//when 10 turns are over the gameover function starts
            if (moves == 10) {
                gameOver(playerOptions, movesLeft);
            }
          })
        })
    }
//scores added up to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreDisplay = document.querySelector('.p-count');
        const computerScoreDisplay = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
          result.textContent = 'Tie'
        }
        else if (player == 'rock') {
          if (computer == 'paper') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
          } else {
            result.textContent = 'player Won'
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
          }
        }
        else if (player == 'scissor') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissor') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreDisplay.textContent = computerScore;
            } else {
              result.textContent = 'Player Won';
              playerScore++;
              playerScoreDisplay.textContent = playerScore;
            }
        }
    }
// Game over function
    const gameOver = (playerOptions, movesLeft) => {
      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.reload');

      playerOptions.forEach(option => {
        option.style.display = 'none';
      })
      chooseMove.innerText = 'Reset to play again'
      movesLeft.style.display = 'none';

      if (playerScore > computerScore) {
          result.innerText = 'You Win!!'
          result.style.color = 'green';
      }
      else if (playerScore < computerScore) {
          result.innerText = 'You Lose, better luck next time!'
          result.style.color = 'red';
      }
      else {
          result.innerText = 'Tie, Ready for another game??'
          result.style.color = 'grey'
      }
      
      reloadBtn.innerText = 'Reset';
      reloadBtn.style.display = 'fixed'
      reloadBtn.addEventListener('click', () => {
        window.location.reload();
      })
    }


    playGame();
}

game();