
var supersoup = {
  potato: 3,
  onion: 1,
  corn: 1
};

var ICA = {
  potato: 12,
  tomato: 7,
  cucumber: 3,
  corn: 5,
  onion: 80
  // ...
};

var wallaStore = {
  potato: 1,
  tomato: 2,
  cucumber: 3,
  corn: 5,
  onion: 1
  // ...
};

var lindhl = {
  potato: 120,
  tomato: 17,
  cucumber: 3,
  corn: 550,
  onion: 800
  // ...
};

var shops = {
  lindhl: lindhl,
  wallaStore: wallaStore,
  ICA: ICA
}


function costOfRecipie(recipe, store) {

var totalCost = 0;

  for (var key in recipe) {

    var amount = recipe[key];
    var price = store[key];
    var cost = amount * price;
    totalCost = totalCost + cost;
    }
    return totalCost;
  }

  function findCheapestStore(recipe, shops) {
    var cheapest = Number.MAX_VALUE;
    var name;
    for (var key in shops){
      if (costOfRecipie(recipe ,shops[key])<cheapest) {
          cheapest = costOfRecipie(recipe ,shops[key]);
          name = key;
      }

    }
  return name;
  }

  var totalCost = costOfRecipie(supersoup, ICA);
  console.log(totalCost);

  var cheapestName = findCheapestStore(supersoup, shops);
  console.log(cheapestName);
