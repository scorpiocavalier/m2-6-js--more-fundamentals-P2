// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  arr.unshift(first);
  arr.push(last);
  return arr;
};

const printList = (arr) => {
  let index = 1;
  arr.forEach((food) => {
    if (food != undefined)
      console.log(`${index++}. ${food}`);
  });
};

printList(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower")
);
