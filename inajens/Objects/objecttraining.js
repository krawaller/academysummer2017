

//Recipes
var supersoup = {
  potato: 3,
  onion: 1,
  corn: 1,
  leek: 1,
  superdrugs: 3
};

var tomatosoup = {
  tomato: 3
}

var wienerbreads = {
  oatmeal: 2,
  cacao: 2,
  sugar: 4,
  butter: 16,
  salt: 1,
  coffee: 1
}

//Shops
var ica = {
  potato: 2,
  onion: 6,
  corn: 4,
  leek: 2,
  superdrugs: 120,
  tomato: 2,
  oatmeal: 15,
  cacao: 10,
  sugar: 7,
  butter: 7,
  salt: 3,
  coffee: 7
}

var coop = {
  potato: 4,
  onion: 5,
  corn: 5,
  leek: 1,
  superdrugs: 121,
  tomato: 2,
  oatmeal: 13,
  cacao: 11,
  sugar: 7,
  butter: 8,
  salt: 3,
  coffee: 10
}

var allstores = {
  coop: coop,
  ica: ica
}


function costOfRecipe (recipe,shop) {
var totalCost = 0;
  for (var product1 in recipe) {
    for (var product2 in shop) {
      var units = recipe[product1]
      var price = shop[product2]
      if(product1===product2) {
        totalCost = totalCost + (units * price)
      }
    }
  }
  return totalCost;
}

//console.log("The total price is " + costOfRecipe(wienerbreads,ica))

function fincCheapestStore (recipe,allstores) {
  if(costOfRecipe(recipe,allstores.coop) > costOfRecipe(recipe,allstores.ica)) {
    console.log("Ica is the cheaper option");
  }
  else if (costOfRecipe(recipe,allstores.coop) < costOfRecipe(recipe,allstores.ica)) {
    console.log("Coop is the cheaper option");
  }
  else {
    console.log("The price is the same, shop wherever you want!");
  }
}

fincCheapestStore(supersoup,allstores)
