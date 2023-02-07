"use strict"


/*startGame();*/
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
const evalMessage = document.querySelector('.evalMessage');
const winnerMessage = document.querySelector('.winner');
winnerMessage.textContent = '';

const rockSquare = document.querySelector(".rock");
rockSquare.addEventListener('click', function(e){
    startGame('rock');

});

const paperSquare = document.querySelector('.paper');
paperSquare.addEventListener('click', function(e){
    startGame('paper');

});

const scissorsSquare = document.querySelector('.scissors');
scissorsSquare.addEventListener('click', function(e){
    startGame('scissors');

});

function startGame(playerChoice){
    let computerChoice = getComputerChoice();
    let result = evaluateChoices(computerChoice, playerChoice);
    playerScoreText.textContent = 'Player Score: ' + playerScore;
    computerScoreText.textContent = 'Computer Score: ' + computerScore;
    if(playerScore === 3){
        winnerMessage.textContent = 'Player Wins!';
        roundNumber = 1;
        playerScore = 0;
        computerScore = 0;
        return;
    }
    if(computerScore === 3){
        winnerMessage.textContent = 'Computer Wins';
        roundNumber = 1;
        playerScore = 0;
        computerScore = 0;
        return;
    }
    roundNumber++;
    // evalMessage.textContent = 'Round: ' + roundNumber;

}


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);

}



function evaluateChoices(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        // console.log("Tie - Next Round")
        evalMessage.textContent = 'Round ' + roundNumber + ' - Tie - Choose Again';
        return "tie";
    }
    if(computerChoice === "paper"){
        if(playerChoice ==="rock"){
            evalMessage.textContent = 'Round: '+ roundNumber + ' - You lose, ' + computerChoice + ' beats ' + playerChoice;
            // console.log("You lose, " + computerChoice + " beats " + playerChoice);

            computerScore++;
            return "computer";
        }
    }
    if(computerChoice === "rock"){
        if(playerChoice === "scissors"){
            computerScore++;
            evalMessage.textContent = 'Round: '+ roundNumber + ' - You lose, ' + computerChoice + ' beats ' + playerChoice;
            // console.log("You lose, " + computerChoice + " beats " + playerChoice);
            return "computer";
        }
    }
    if(computerChoice === "scissors"){
        if(playerChoice === "paper"){
            evalMessage.textContent = 'Round: '+ roundNumber + ' - You lose, ' + computerChoice + ' beats ' + playerChoice;
            // console.log("You lose, " + computerChoice + " beats " + playerChoice);
            computerScore++;
            return "computer";
        }
    }
    // console.log("You win, " + playerChoice + " beats " + computerChoice);
            evalMessage.textContent = 'Round: '+ roundNumber + ' - You win, ' + playerChoice + ' beats ' + computerChoice;
            playerScore++;
            return "player";
}




