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

const sortAlphabetically = (list) => {
  const alphaList = [...list].sort();
  for (let i = 0; i < list.length; i++) {
    console.log(`${alphaList[i]} (${list.indexOf(alphaList[i]) + 1})`);
  }
};

finalCountdown(sortAlphabetically);
