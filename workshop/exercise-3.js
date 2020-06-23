// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

const printFoodList = foodList => {
  foodList.sort().forEach((food, index) => console.log(`${food} (${index + 1})`))
}

printFoodList(mostPopularFood);