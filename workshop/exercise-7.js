// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
// return an array of food pairings in a string
const createRecommendations = foodPairings => {
  let foodSentences = []
  for(const food_item in foodPairings) {
    let sentence = `- With ${food_item}, it is best to have ${foodPairings[food_item]}.`
    foodSentences.push(sentence)
  }
  return foodSentences
}

// printRecommendations function
const printRecommendations = foodSentences => {
  foodSentences.forEach(sentence => console.log(sentence))
}

// function call (done)
printRecommendations(createRecommendations(foodPairings));