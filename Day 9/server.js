import express from "express";

const app = express();
const PORT = 5000;

const students = [
  { id: 1, name: "Mohammad Shees Abdullah", age: 20, course: "CS" },
  { id: 2, name: "Mohammad Monis Ahmed", age: 21, course: "CS" },
  { id: 3, name: "Sample SISTec Student", age: 22, course: "ECE" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
