const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resultElement = document.querySelector(".result");
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
  pickComputerMove();
  playGame("rock");
});

paperButton.addEventListener("click", () => {
  pickComputerMove();
  playGame("paper");
});

scissorsButton.addEventListener("click", () => {
  pickComputerMove();
  playGame("scissors");
});

function pickComputerMove() {
  let computerMove;
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  document.querySelector(
    ".js-computer-display"
  ).innerHTML = `<img src="./Assets/images/${computerMove}-emoji.png" alt="${computerMove}-emoji">`;

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  document.querySelector(
    ".js-player-display"
  ).innerHTML = `<img src="./Assets/images/${playerMove}-emoji.png" alt="${playerMove}-emoji">`;

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      resultElement.textContent = "draw";
    } else if (computerMove === "paper") {
      resultElement.textContent = "computer wins";
    } else if (computerMove === "scissors") {
      resultElement.textContent = "player wins";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      resultElement.textContent = "player wins";
    } else if (computerMove === "paper") {
      resultElement.textContent = "draw";
    } else if (computerMove === "scissors") {
      resultElement.textContent = "computer wins";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      resultElement.textContent = "computer wins";
    } else if (computerMove === "paper") {
      resultElement.textContent = "player wins";
    } else if (computerMove === "scissors") {
      resultElement.textContent = "draw";
    }
  }

  if (resultElement.textContent === "player wins") {
    playerScore++;
    document.querySelector(".player-score").textContent = `${playerScore}`;
  } else if (resultElement.textContent === "computer wins") {
    computerScore++;
    document.querySelector(".computer-score").textContent = `${computerScore}`;
  }
};
