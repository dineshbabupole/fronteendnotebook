import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">🏠 Home</Link>
      <Link to="/create">✍️ Create Note</Link>
    </aside>
  );
}
