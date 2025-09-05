import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let db;
(async () => {
  db = await open({
    filename: "./notes.db",
    driver: sqlite3.Database
  });
  await db.exec("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)");
})();

app.get("/api/notes", async (req, res) => {
  const rows = await db.all("SELECT * FROM notes");
  res.json(rows);
});

app.post("/api/notes", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Text required" });
  const result = await db.run("INSERT INTO notes (text) VALUES (?)", [text]);
  res.status(201).json({ id: result.lastID, text });
});

app.put("/api/notes/:id", async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  await db.run("UPDATE notes SET text = ? WHERE id = ?", [text, id]);
  res.json({ id, text });
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  await db.run("DELETE FROM notes WHERE id = ?", [id]);
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
