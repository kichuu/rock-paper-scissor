const options = ["rock" , "paper" , "scissor"];
let computerpoints = 0;
let playerpoints = 0;
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
 for(i=0;i<5;i++){
let playerSelection = "rock";
playerSelection = prompt("what will you choose" , "rock")
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log("computer chose" + " "+ computerSelection);
console.log("player chose" + " " + playerSelection);


function playRound(playerSelection , computerSelection){
    if (playerSelection === "rock" || playerSelection == "paper" || playerSelection == "scissor"){
        if (playerSelection == computerSelection)
     return "Tie" ;

        else if ( (playerSelection == "rock" && computerSelection == "scissor") ||
            (playerSelection == "paper" && computerSelection == "rock")  ||
            (playerSelection == "scissor" && computerSelection == "paper") )
           { console.log("player wins");
             playerpoints ++ ;
            }
        else 
        { console.log("computer wins");
            computerpoints ++ ;
       }
}
else return "invalid";
}

console.log(playRound(playerSelection , computerSelection));
}

if (computerpoints>playerpoints) {
    console.log("computer won the round by" + " " +computerpoints + " " +"points")
}
else if(computerpoints==playerpoints) {
    console.log("this round is a tie")
}
else {
    console.log("player won the round by" + " " +playerpoints + " " +"points")
}