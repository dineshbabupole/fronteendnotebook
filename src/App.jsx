import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NoteView from "./pages/NoteView";
import NoteEdit from "./pages/NoteEdit";
import NoteCreate from "./pages/NoteCreate";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view/:id" element={<NoteView />} />
              <Route path="/edit/:id" element={<NoteEdit />} />
              <Route path="/create" element={<NoteCreate />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
