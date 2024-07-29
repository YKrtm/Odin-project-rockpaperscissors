const inputBox = document.getElementById("input");
const result = document.getElementById("result");

function  getComputerChoice(){
   const choices = ["rock", "paper", "scissors"]
   const randomIdx = Math.floor(Math.random() *choices.length)
   return choices[randomIdx]
}

function playGame(){
    const userChoice = inputBox.value.toLowerCase();
    const computerChoice = getComputerChoice();

    inputBox.value = computerChoice;

    result.textContent = `You picked ${userChoice} and the computer picked ${computerChoice}`

    if(userChoice === computerChoice){
         result.textContent += " Its a tie";
    }else if(
        (userChoice === "rock" && computerChoice === "scissors")||
        (userChoice === "scissors" && computerChoice === "paper")||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result.textContent += " You Win";
    }else {
        result.textContent += " You Lose";
    }
}