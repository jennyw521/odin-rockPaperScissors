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

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            } else {
                console.log("Tie");
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beat Paper");
                computerScore++;
            } else {
                console.log("Tie");
            }
        } else {
            if (computerChoice == "paper") {
                console.log("You win! Scissors beat Paper");
                humanScore++;
            } else if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else {
                console.log("Tie");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.group("result");

    console.log(`Your score: ${humanScore}\nComputer's score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("You lose the game!")
    } else {
        console.log("It's a tie!")
    }

    console.groupEnd("result");
}

playGame();
