var smallFarm = {
  sheep: 3,
  lamb: 2,
  chicken: 10,
  cow: 1,
};

var farmShop = {
  sheep: 150,
  lamb: 100,
  chicken: 50,
  cow: 2000

};

function totalCost(farm, shop){
  var sum = 0;
  for (var animal in farm) {
    sum += shop[animal]*farm[animal];
    console.log(animal + " has value " +farm[animal]);
  }
  return sum;
}
var smallFarmAtFarmShop = totalCost(smallFarm, farmShop);
console.log("Cost of smallfarm at farmShop: " + smallFarmAtFarmShop);
