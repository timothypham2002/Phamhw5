//Declare studentList Array
const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)

const getMinScore = scores => Math.min(...scores);
const getMaxScore = scores => Math.max(...scores);
const getAvgScore = scores => scores.reduce((acc, score) => acc + score, 0) / scores.length;
const cLastNameResults = studentList.filter(student => student.lastName.charAt(0) === 'C').map(({firstName, lastName, scores}) =>
({
  firstName,
  lastName,
  minScore: getMinScore(scores),
  maxScore: getMaxScore(scores),
  avgScore: getAvgScore(scores),
}));

//Output
console.log(cLastNameResults);
