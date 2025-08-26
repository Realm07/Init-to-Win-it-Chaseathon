const students = [
  {
    name: "Monis",
    grades: [
      { subject: "Math", score: 50 },
      { subject: "Science", score: 32 },
      { subject: "History", score: 46 },
      { subject: "English", score: 20 },
    ],
  },
  {
    name: "Shees",
    grades: [
      { subject: "Math", score: 60 },
      { subject: "Science", score: 44 },
      { subject: "History", score: 91 },
      { subject: "English", score: 80 },
    ],
  },
  {
    name: "Kunal",
    grades: [
      { subject: "Math", score: 80 },
      { subject: "Science", score: 90 },
      { subject: "History", score: 97 },
      { subject: "English", score: 70 },
    ],
  },
];
//Map
const studentReports = students.map((student) => {
  const totalMarks = student.grades.reduce(
    (sum, grade) => sum + grade.score,
    0
  );
  const averageMarks = totalMarks / student.grades.length;

  return {
    id: student.id,
    name: student.name,
    originalGrades: student.grades,
    totalMarks: totalMarks,
    averageMarks: averageMarks,
  };
});

console.log("Student details: ");
studentReports.forEach((report) => {
  console.log(
    `Name: ${report.name}, Total Marks: ${report.totalMarks}, Average: ${report.averageMarks}`
  );
});


const passingStudents = studentReports.filter(
  (report) => parseFloat(report.averageMarks) >= 50
);

console.log("--- Passing Students (Average >= 50) ---");
passingStudents.forEach((student) => {
  console.log(`Name: ${student.name}, Average: ${student.averageMarks}`);
});

console.log("--- Average ---");
const allAverages = studentReports.map((report) =>
  parseFloat(report.averageMarks)
);
const overallTotalAverage = allAverages.reduce((sum, avg) => sum + avg, 0);
const overallAverage = overallTotalAverage / allAverages.length;

console.log(
  `Overall Average Mark of all students: ${overallAverage.toFixed(2)}`
);

console.log("--- Highest Marks ---");
const highestMarkInClass = students.reduce((maxOverall, student) => {
  const studentHighest = student.grades.reduce(
    (maxStudent, grade) => Math.max(maxStudent, grade.score),
    0
  );
  return Math.max(maxOverall, studentHighest);
}, 0);

console.log(
  `The highest mark achieved by any student in any subject is: ${highestMarkInClass}`
);
