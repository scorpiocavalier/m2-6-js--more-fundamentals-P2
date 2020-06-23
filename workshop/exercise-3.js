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
  
  let rankedFoodList = foodList.map((food, index) => {
    return `${food} (${index+1})`
  })

  rankedFoodList.sort().forEach(food => console.log(food))
}

printFoodList(mostPopularFood);