	var randomNumber = Math.floor(Math.random()*10)+1;
	var i = 0;
	while (guess != randomNumber){
	var guess = parseInt(prompt("Enter your guess - You only got 3 tries"));	
	i++;
	if (guess === randomNumber){
		alert("GOOD JOB!");
		var playAgain = prompt("Type 'Yes' to play again");
		if (playAgain === "Yes" || playAgain === "yes") {
			var randomNumber = Math.floor(Math.random()*10)+1;
			i = 0;
		}
	} else if (i === 3) {
		alert("GAME OVER - you've used up your 3 tries");
		var playAgain = prompt("Type 'Yes' to play again");
		if (playAgain === "Yes" || playAgain === "yes") {
			var randomNumber = Math.floor(Math.random()*10)+1;
			i = 0;
		} else {
		break;
	}
	} else {
		alert("WRONG! Try: " + i)
	}	
}