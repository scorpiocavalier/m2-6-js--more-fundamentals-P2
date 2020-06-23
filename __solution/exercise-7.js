// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

const createRecommendations = (pairings) => {
  return Object.keys(pairings).map((food) => {
    return `With ${food}, it is best to have ${pairings[food]}.`;
  });
};

const printRecommendations = (recommendations) => {
  recommendations.forEach((recommendation) => {
    console.log(`- ${recommendation}`);
  });
};

printRecommendations(createRecommendations(foodPairings));
