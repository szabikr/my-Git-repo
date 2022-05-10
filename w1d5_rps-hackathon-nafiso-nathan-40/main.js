let player1 = ("you")
let player2 = ("computer")
var playerMove = prompt("rock, paper or scissors?")
var computerMoveList = ["rock", "paper","scissors"]

let randomMove = computerMoveList[Math.floor(Math.random() * computerMoveList.length)];
let computerMove = randomMove

function game (playerMove, computerMove) {
    if (playerMove === computerMove) {return 0}

    else if (playerMove === "rock" && computerMove === "scissors") {return +1}

    else if (playerMove === "paper" && computerMove === "rock") {return +1}

    else if (playerMove === "scissors" && computerMove === "paper") {return +1}

    else if (playerMove === "rock" && computerMove === "paper") {return -1}

    else if (playerMove === "paper" && computerMove === "scissors") {return -1}

    else if (playerMove === "scissors" && computerMove === "rock") {return -1}
} 
let result = game (playerMove, computerMove);
    
function getWinner (result) {
    if (result === +1) {return ("The computer chose " +computerMove +", you win.");}
    else if (result === 0) {return ("The computer chose " +computerMove +", it's a draw.");}
    else if (result === -1) {return ("The computer chose " +computerMove +", you lose.");}
  } 
let winner = getWinner (result);
// testing my git push 
alert(winner)