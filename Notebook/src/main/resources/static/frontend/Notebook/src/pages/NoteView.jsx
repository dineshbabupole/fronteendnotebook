import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getNote } from "./api";

export default function NoteView() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadNote();
  }, [id]);

  const loadNote = async () => {
    try {
      const res = await getNote(id);
      setNote(res.data);
    } catch (err) {
      console.error("Error loading note:", err);
    }
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/view/${id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!note) {
    return <p className="loading">Loading note...</p>;
  }

  return (
    <div className="view-container">
      <div className="view-header">
        <h1 className="view-title">{note.title}</h1>
        <div className="view-actions">
          <Link to="/" className="btn btn-home">🏠 Home</Link>
          <button onClick={handleShare} className="btn btn-share">
            📤 Share
          </button>
        </div>
      </div>
      <div className="view-content">
        <p>{note.content}</p>
      </div>
      {copied && <p className="copy-msg">✅ Link copied!</p>}
    </div>
  );
}
