import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function UserDash({ announcements, issues, setIssues }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const postIssue = () => {
    if (!text) return;
    setIssues([...issues, { id: Date.now(), description: text, status: "Pending" }]);
    setText("");
  };

  const logout = () => {
    setTimeout(() => navigate("/"), 4000);
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>

      <div className="notification">🔔 {announcements.length}</div>

      <h2>Report Issue</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={postIssue}>Submit</button>

      <h2>Your Issues</h2>
      <ul>
        {issues.map((i) => (
          <li key={i.id}>
            {i.description} — <strong>{i.status}</strong>
          </li>
        ))}
      </ul>

      <h2>Announcements</h2>
      <ul>
        {announcements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserDash;
