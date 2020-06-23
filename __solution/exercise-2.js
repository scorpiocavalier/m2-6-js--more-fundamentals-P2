// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
  const fullList = [...early, ...late];
  for (let i = 0; i < fullList.length; i++) {
    console.log(`${i + 1}. ${fullList[i]}`);
  }
};

printGuestOrder(earlyBirds, lateComers);
