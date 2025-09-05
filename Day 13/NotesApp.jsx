import React, { useState, useEffect } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = () => {
    if (input.trim() === "") return;
    fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    })
      .then(res => res.json())
      .then(note => {
        setNotes([...notes, note]);
        setInput("");
      });
  };

  const updateNote = (id, newText) => {
    fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newText })
    }).then(() =>
      setNotes(notes.map(n => (n.id === id ? { ...n, text: newText } : n)))
    );
  };

  const deleteNote = (id) => {
    fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" }).then(
      () => setNotes(notes.filter(n => n.id !== id))
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Notes App</h2>

        {/* Inp */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a note..."
            className="flex-1 px-3 py-2 border rounded-lg"
          />
          <button
            onClick={addNote}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Add
          </button>
        </div>

        {/* Notes List */}
        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg border"
            >
              <input
                type="text"
                value={note.text}
                onChange={(e) => updateNote(note.id, e.target.value)}
                className="flex-1 mr-2 px-2 py-1 border rounded"
              />
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
