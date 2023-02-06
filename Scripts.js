"use strict"


/*startGame();*/

function startGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <= 5; i++){
        if (playerScore === 3){
            console.log("Player wins the game!")
            break;
        }
        if(computerScore === 3){
            console.log("Computer wins the game!")
            break;
        }
        let result = playRockPaperScissors();
        if(result === "player"){
            playerScore++;
        }else if(result === "computer"){
            computerScore++;
        }else {
            i--;
        }
    }
}


function playRockPaperScissors(){
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = getPlayerChoice().toLowerCase();

    if(validatePlayerChoice(playerChoice)){
        return evaluateChoices(computerChoice, playerChoice);
    }else{
        prompt("Invalid Player Choice");
    }

}

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(3)];
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);

}

function getPlayerChoice(){
    return prompt("Choose Rock, Paper, or Scissors: ");
}


function validatePlayerChoice(input){
    let formattedInput = input.toLowerCase();

    if(formattedInput !== "rock" && formattedInput !== "paper" && formattedInput !== "scissors"){
        return false;
    }
    return true;
}

function evaluateChoices(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        console.log("Tie - Next Round")
        return "tie";
    }
    if(computerChoice === "paper"){
        if(playerChoice ==="rock"){
            console.log("You lose, " + computerChoice + " beats " + playerChoice);
            return "computer";
        }
    }
    if(computerChoice === "rock"){
        if(playerChoice === "scissors"){
            console.log("You lose, " + computerChoice + " beats " + playerChoice);
            return "computer";
        }
    }
    if(computerChoice === "scissors"){
        if(playerChoice === "paper"){
            console.log("You lose, " + computerChoice + " beats " + playerChoice);
            return "computer";
        }
    }
    console.log("You win, " + playerChoice + " beats " + computerChoice);
            return "player";
}




