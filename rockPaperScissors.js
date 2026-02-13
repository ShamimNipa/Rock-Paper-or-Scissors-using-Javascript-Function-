const getUserChoice = userInput =>{
userInput = userInput.toLowerCase();
if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors') {
  return userInput ;
} else {
  console.log("Error!");
}

}
console.log(getUserChoice('rock'));


let getComputerChoice=()=> {
let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber  === 0 ) {
return 'rock' ;
} else if (randomNumber === 1) {
 return 'paper' ;
} else {
  return 'scissors' ;
}

}
console.log(getComputerChoice(2));
const determineWinner=(userChoice,computerChoice)=>{
    if (userChoice === 'bomb') {
    return ' Secret bomb activated! You win!';
  }

  // Tie case
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
if(userChoice === 'rock') {

  if(computerChoice === 'paper'){
     console.log('Computer wins!')

 }
else {
    console.log('User wins!');
  }
}

if(userChoice === 'paper'){
  if( computerChoice ==='scissors' || computerChoice == 'rock')
  console.log("Computer Wins");
}
else{
  console.log("User Wins!");
}
if(userChoice === 'scissors'){
  if( computerChoice === 'rock' || computerChoice === 'paper')
  console.log("Computer Wins");
}
else{
  console.log("User Wins!");
}
}
determineWinner();
determineWinner();

const playGame=()=>{
let userChoice = getUserChoice('rock');

let computerChoice = getComputerChoice();
 console.log('User choice:', userChoice);
  console.log('Computer choice:', computerChoice);
 
  console.log(determineWinner(userChoice,computerChoice));

}

playGame();







