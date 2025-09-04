import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { createNote, getNote, updateNote } from "./api"; // ✅ import API

export default function NoteEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      loadNote();
    }
  }, [id]);

  const loadNote = async () => {
    const res = await getNote(id);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateNote(id, { title, content });
    } else {
      await createNote({ title, content });
    }
    navigate("/");
  };

  return (
    <div>
      <h1 className="page-title">{id ? "✏ Edit Note" : "📝 Create a New Note"}</h1>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          className="form-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-textarea"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="form-actions">
          <button type="submit" className="btn btn-save">💾 Save</button>
          <Link to="/" className="btn btn-home">🏠 Home</Link>
        </div>
      </form>
    </div>
  );
}
