// Exercise 6
// ----------

const staffMembers = [
  {
    name: 'Jane Smith',
    title: 'Web Developer II',
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: 'Frank Castle',
    title: 'Web Developer I',
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: 'Steve Rogers',
    title: 'Database Admin',
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: 'Chuck Taylor',
    title: 'Web Developer III',
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: 'Thor Odinson',
    title: 'Web Intern',
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

const getData = (arr, key) => arr.map(employee => employee[key])

let allEmployeeNames = getData(staffMembers, 'name')
let allEmployeeTitles = getData(staffMembers, 'title')

console.log(allEmployeeNames)
console.log(allEmployeeTitles)