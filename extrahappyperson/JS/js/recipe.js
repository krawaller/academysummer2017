var superSoup = {
    potato: 3, 
    onion: 1, 
    corn: 1

};

var ICA = {
    potato: 12, 
    tomato: 7, 
    cucumber: 3, 
    corn:5,
    onion:2
};

var Coop = {
    potato: 8, 
    tomato: 11, 
    cucumber: 4, 
    corn:1,
    onion:3
};

var Lidl = {
    potato: 4, 
    tomato: 2, 
    cucumber: 2, 
    corn:1,
    onion:1
};

  

function costOfRecipe(recipe, shop) {
    
    var cost=0; 
    
    for(var productName in recipe){
    
        cost = cost + recipe[productName] * shop[productName];    

    }
    
    return cost; 
}

var shops = [ICA, Coop, Lidl]; 


function cheapestStore(superSoup, stores) {
        
    for(var i=0; i<stores.length; i++) {
        
        var cheapest = costOfRecipe(superSoup, stores[0]); 
            
         
        
        if(cheapest>costOfRecipe(superSoup, stores[i])); 
        cheapest = costOfRecipe(superSoup, stores[i]));
        
    }
    return cheapest;
}










