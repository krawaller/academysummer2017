var supersoup = {
  potato: 3,
  onion: 1,
  broccoli: 3,
  tomato: 4,
  shallot: 3,
  chickenfillet: 3
};
var stew ={
  beeffillet: 3,
  leek: 1,
  redonion: 2,
  garlic: 1,
  timjan: 1,
  vin: 1,
  carrot: 2
};
var ica = {
  potato: 1,
  onion: 2,
  broccoli: 4,
  tomato: 3,
  shallot: 7,
  chickenfillet: 15,
  beeffillet: 30,
  leek: 8,
  redonion: 2,
  garlic: 1,
  timjan: 14,
  vin: 90,
  carrot: 5
};
var coop = {
  potato: 2,
  onion: 1,
  broccoli: 5,
  tomato: 7,
  shallot: 3,
  chickenfillet: 19,
  beeffillet: 35,
  leek: 6,
  redonion: 2,
  garlic: 1,
  timjan: 17,
  vin: 60,
  carrot: 5
};
var willys = {
  potato: 3,
  onion: 2,
  broccoli: 8,
  tomato: 2,
  shallot: 1,
  chickenfillet: 14,
  beeffillet: 22,
  leek: 4,
  redonion: 2,
  garlic: 1,
  timjan: 13,
  vin: 85,
  carrot: 3
};
var shops = {
  ica,
  coop,
  willys
};
function costOfRecipe(dish, store){
  var price = 0;
  for(var key in dish){
    price += (store[key]*dish[key])
  }
  return price;
};

function findCheapestStore(dish, store){
  var price = 0;
  var tempPrice = 20000;
  var cheapestStore;
  for(var key in store){
      price = costOfRecipe(dish, store[key]);
      console.log(key + " " + price);
    if(price<tempPrice){
      tempPrice=price;
      cheapestStore = key;
    }
  }
  return cheapestStore;
}
//console.log("Supersoup costs "+costOfRecipe(supersoup,ica));
console.log("The cheapest store for the supersoup is: " +findCheapestStore(supersoup, shops));
console.log("The cheapest store for the Stew is: " +findCheapestStore(stew, shops));
