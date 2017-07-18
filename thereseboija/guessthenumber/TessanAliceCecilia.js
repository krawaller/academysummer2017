var randomNumber = Math.floor(Math.random()*10)+1;
var counter = 0;
while (counter < 3) {
var answer = prompt("Guess a number between 1 and 10:");
counter = counter + 1;
if(parseInt(answer) === randomNumber) {
	alert("CORRECT, you win all the glory in the universe for 10 seconds!");
	break;
	} else if(counter === 3) {
	alert("GAME OVER"); 
	} else {
	alert("Try again");
	}
}
