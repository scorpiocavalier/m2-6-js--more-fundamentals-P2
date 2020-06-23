// Exercise 1
// -------------------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

// STEP 1
const fixList = (arr, first, last) => {
  const completeList = [...arr];

  completeList.unshift(first); // add #1
  completeList.pop(); // remove the undefined
  completeList.push(last); // add #10

  return completeList;
};

// STEP 2
const printList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
  }
};

// Call the functions
printList(
  fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower')
);
