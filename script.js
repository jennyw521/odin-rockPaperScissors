const btns = document.querySelectorAll("button");
const computerScoreText = document.querySelector(".computerScore");
const humanScoreText = document.querySelector(".humanScore");
const resultText = document.querySelector(".result");
const finalResultText = document.querySelector(".finalResult");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(e) {
    humanChoice = e.target.value.toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            resultText.textContent = "You lose! Paper beats Rock";
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else if (computerChoice == "scissors") {
            resultText.textContent = "You win! Rock beats Scissors";
            humanScore++;
            humanScoreText.textContent = humanScore;
        } else {
            resultText.textContent = "Tie";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            resultText.textContent = "You win! Paper beats Rock";
            humanScore++;
            humanScoreText.textContent = humanScore;
        } else if (computerChoice == "scissors") {
            resultText.textContent = "You lose! Scissors beat Paper";
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else {
            resultText.textContent = "Tie";
        }
    } else {
        if (computerChoice == "paper") {
            resultText.textContent = "You win! Scissors beat Paper";
            humanScore++;
            humanScoreText.textContent = humanScore;
        } else if (computerChoice == "rock") {
            resultText.textContent = "You lose! Rock beats Scissors";
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else {
            resultText.textContent = "Tie";
        }
    }

    if (humanScore == 5) {
        finalResultText.textContent = "You win the game!";
        btns.forEach(btn => btn.removeEventListener("click", playGame));
    } else if (computerScore == 5) {
        finalResultText.textContent = "You lose the game!";
        btns.forEach(btn => btn.removeEventListener("click", playGame));
    }
}

btns.forEach(btn => btn.addEventListener("click", playGame));
