"use strict"


playRockPaperScissors();

function playRockPaperScissors(){
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = getPlayerChoice().toLowerCase();

    if(validatePlayerChoice(playerChoice)){
        prompt(evaluateChoices(computerChoice, playerChoice));
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
        return "tie";
    }
    if(computerChoice === "paper"){
        if(playerChoice ==="rock"){
            return "Computer wins with " + computerChoice + ". " + "Player chose " + playerChoice;
        }
    }
    if(computerChoice === "rock"){
        if(playerChoice === "scissors"){
            return "Computer wins with " + computerChoice + ". " + "Player chose " + playerChoice;
        }
    }
    if(computerChoice === "scissors"){
        if(playerChoice === "paper"){
            return "Computer wins with " + computerChoice + ". " + "Player chose " + playerChoice;
        }
    }
    return "Player wins with " + playerChoice + ". " + "Computer chose " + computerChoice;
}




