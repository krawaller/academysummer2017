
var name = prompt("What's your name?");
var play = prompt(name + ", do you want to play a game?");
while(play === "Yes" || play === "yes"){
    var randomNumber = Math.floor(Math.random()*10)+1;
    for(var i=0;i<3;i++){
      var guess = parseInt(prompt("Guess a number between 1-10"));
      if(isNaN(guess)){
        break;
      }
      if(guess === randomNumber){
        alert("Yeeeeaaay. You have chosen wisely");
        i=8;
        break;
      }
      if(guess > randomNumber){
        alert("You guessed to high");
      }
      else{
        alert("You guessed to low");
      }
      alert("You have used " + (i+1) + " of your 3 guesses");
    }
    if(isNaN(guess)){
      break;
    }
    if(i === 2){
      alert("You have used up all your guesses!")
    }
    play = prompt("Do you want to play again?");
  }
  alert("Why don't you wanna play with me!");
