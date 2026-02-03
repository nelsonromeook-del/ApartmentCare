import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function UserDash({ user, issues, setIssues, announcements, setToast }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // Submit a new issue
  const submitIssue = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newIssue = {
      id: Date.now(),
      house: user.houseNumber,
      description: text,
      status: "Pending",
    };

    setIssues([...issues, newIssue]);
    setToast("Issue submitted successfully! ✅");
    setText("");
  };

  // Logout with 4-second delay
  const logout = () => {
    setToast("Logging out... ⏳");
    setTimeout(() => navigate("/"), 4000);
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p className="house-info">House: {user.houseNumber}</p>

      <div className="notification">🔔 {announcements.length}</div>

      <div className="issue-form">
        <h2>Report an Issue</h2>
        <form onSubmit={submitIssue}>
          <input
            type="text"
            placeholder="Describe your issue"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Submit Issue</button>
        </form>
      </div>

      <div className="announcements">
        <h2>Announcements</h2>
        {announcements.length === 0 ? (
          <p>No announcements yet.</p>
        ) : (
          <ul>
            {announcements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default UserDash;
