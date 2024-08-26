let humnanScore = 0;
let computerScore = 0;

const tools = ["paper", "scissors"];

function getComputerChoice() {
  console.log(tools[Math.floor(Math.random() * tools.length)]);
}

function getHumanChoice() {
  const user = prompt("Rock, Paper or Scissors");
  const userAnswer = user.toLowerCase;
  console.log(user);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound() {
  computerChoice;
  humanChoice;

  if (computerChoice == "paper" && humanChoice == "paper") {
    console.log("draw");
    // humnanScore = humnanScore + 1;
    console.log(humnanScore);
  }

  console.log("Computer wins");
  computerScore = computerScore + 1;
  console.log(computerScore);
}

playRound();

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice == "Rock" && computerChoice == "Paper") {
//     console.log("You lose! Paper beats rock! Computer wins");
//     computerScore + 1;
//   }
// }

// playRound();
//   if (humanChoice == "Rock" && computerChoice == "Scissors") {
//     console.log("You Win! Rock beats Paper! Computer loses");
//     humnanScore + 1;
//   }

//   if (humanChoice == "Rock" && computerChoice == "Rock") {
//     console.log("Draw!");
//   }

//   if (humanChoice == "scissors" && computerChoice == "Paper") {
//     console.log("You Win! Paper beats Scissors! Computer loses");
//     humnanScore + 1;
//   }

//   if (humanChoice == "Scissors" && computerChoice == "Paper") {
//     console.log("You lose! Paper beats rock! Computer wins");
//     computerScore + 1;
//   }

//   if (humanChoice == "scissors" && computerChoice == "Scissors") {
//     console.log("Draw");
//   }

//   if (humanChoice == "Paper" && computerChoice == "Paper") {
//     console.log("Draw");
//   }
// }

// const humanChoice = getComputerChoice();
// const computerChoice = getComputerChoice();

// playRound(humanChoice, computerChoice);

// function playGame() {
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   const humnanScore = 0;
//   const computerScore = 0;
// }
