var randomNumber = Math.floor(Math.random()*10)+1;
var tries = 0;

while(true) {

  var answer = parseInt(prompt("Guess the number"));

  if(answer===randomNumber) {
    alert("You guessed right!");
    break;
  }


  else {
    tries++;
    alert("Try again" + "try number" + tries);

    if(tries===3) {

      var playAgain = prompt("Will you play again?")
      if(playAgain ==="Yes") {
        tries = 0;
        continue;
      }
      else {
        break;
      }
    }



  }
}
