// // *Variables*
// // Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question


// const str = 'Am I a string?';
// alert(str.endsWith('?'))





// //Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console


// let string = 'I am looking for jr. dev positions'

// console.log(string.replaceAll('jr. dev', 'software engineering'))




// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let random = Math.random()

function rockPaperScissors(){
  let random = Math.random()
    if(random < .33){
      return 'Rock'
    }else if(random <.66){
      return 'Paper'
    }else{ 
      return 'Scissors'
    }
  }


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playersChoice){
  let botChoice = rockPaperScissors()
  if(playerChoice === 'Rock' && botChoice === 'Scissors' ||
  playerChoice === 'Paper' && botChoice === 'Rock' ||
  playerChoice === 'Scissors' && botChoice === 'Paper'){
    console.log('You win!')
  }else if (playerChoice === computerChoice){
    console.log ('Its a draw!')
  }else{
    console.log ('You lose!')
  }
}

checkWin('Paper')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
