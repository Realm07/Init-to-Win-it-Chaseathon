import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

let students = [
  { id: 1, name: "Shees Abdullah", course: "CS" },
  { id: 2, name: "Monis Ahmed", course: "IT" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.get("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

app.post("/api/students", (req, res) => {
  const { name, course } = req.body;
  const newStudent = { id: Date.now(), name, course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});


app.put("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { name, course } = req.body;
  if (name) student.name = name;
  if (course) student.course = course;

  res.json(student);
});

app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const exists = students.some(s => s.id === id);
  if (!exists) return res.status(404).json({ message: "Student not found" });

  students = students.filter(s => s.id !== id);
  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});