// gives random number 1-10
var randomNumber = Math.floor(Math.random()*10)+1;
for (var i = 0; i < 5; i++) {
  var answer = prompt("For how long have I've been swimming?");
  if (answer == randomNumber) {
      alert("You win " + randomNumber + " is correct.");
    }  else if (answer > randomNumber) {
    alert("Too high!");
    } else {
    alert("Too low!");
  }
}
