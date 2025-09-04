import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, text: "Finish Samadhan Day 12", done: false },
  { id: 2, text: "Prepare PPT", done: false }
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { text } = req.body;
  const newTask = { id: Date.now(), text, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
