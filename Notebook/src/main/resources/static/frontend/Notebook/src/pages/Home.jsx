// src/components/NotesList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "./api";

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await deleteNote(id);
      fetchNotes();
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">📒 My Notes</h1>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-preview">
              {note.content.length > 100
                ? note.content.substring(0, 100) + "..."
                : note.content}
            </p>
            <div className="note-actions">
              <Link to={`/view/${note.id}`} className="btn btn-view">View</Link>
              <Link to={`/edit/${note.id}`} className="btn btn-edit">Edit</Link>
              <button
                className="btn btn-delete"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
