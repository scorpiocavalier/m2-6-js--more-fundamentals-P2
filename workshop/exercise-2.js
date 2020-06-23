// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
    [...early, ...late].forEach(person => console.log(person))
}

printGuestOrder(earlyBirds, lateComers)