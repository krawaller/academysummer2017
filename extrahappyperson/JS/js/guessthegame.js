
console.log(answer);

var randomNumber = Math.floor(Math.random()*10) + 1; 

var numberofTries = 3;
var tries=0;
var y = "Yes"; 
var n = "No"; 
        
    while(true){
     
    var answer = parseInt(prompt("Guess the number")); 
        
            
    if(answer===randomNumber) {
        alert("you guess it right"); 
        break; 
    }
    
    else{
        tries++;
        alert("try again" + " try number: " + tries); 
       
        if(answer>randomNumber){
            alert("go lower")
        }
        else {
            alert("go higher")
        }
        
        if (tries===3) {
            var playAgain = prompt("Will you play again?"); 
            if(playAgain===y){
                tries=0;
                continue; 
            }
                
            else {
                break;
            }
                
        }
        
    }
        
}

    

// Davids exercise 

var david = {
    age:32, 
    firstname: "David", 
    lastname: "Krawwler"
}

david.occupation = "Teacher"; 


for(var key: david) {
    console.log("key is " + key + " and value is " + david[key]);
}
