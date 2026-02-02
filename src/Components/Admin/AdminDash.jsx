import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDash.css";

function AdminDash({ announcements, setAnnouncements, issues, setIssues }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const postAnnouncement = () => {
    if (!text) return;
    setAnnouncements([text, ...announcements]);
    setText("");
  };

  const updateStatus = (id, status) => {
    setIssues(
      issues.map((i) => (i.id === id ? { ...i, status } : i))
    );
  };

  const logout = () => {
    setTimeout(() => navigate("/"), 4000);
  };

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <input
        placeholder="Post announcement"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={postAnnouncement}>Post</button>

      <h2>Tenant Issues</h2>
      <ul>
        {issues.map((i) => (
          <li key={i.id}>
            {i.description} — <strong>{i.status}</strong>
            <br />
            <button onClick={() => updateStatus(i.id, "In Progress")}>
              In Progress
            </button>
            <button onClick={() => updateStatus(i.id, "Resolved")}>
              Resolved
            </button>
          </li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDash;
