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

studentList.forEach(student => {
  student.scores = student.scores.map(score => score + 5);
});

studentList.forEach(student => {
  const averageScore = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
  student.scores.push(averageScore);
});

studentList.forEach(student => {
  const {firstName, lastName, scores} = student;
  const averageScore = scores[scores.length - 1]; 
  console.log(`Full name (last, first): ${lastName}, ${firstName}`);
  console.log(`Updated scores are: ${scores.slice(0, -1)},${averageScore}`);
});