import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDash.css";

function AdminDash({ announcements, setAnnouncements, issues, setIssues, setToast }) {
  const [announcementText, setAnnouncementText] = useState("");
  const navigate = useNavigate();

  // Post a new announcement
  const postAnnouncement = () => {
    if (!announcementText.trim()) return;

    setAnnouncements([{ text: announcementText, timestamp: Date.now() }, ...announcements]);
    setToast("New announcement posted!");
    setAnnouncementText("");
  };

  // Update issue status
  const updateStatus = (id, status) => {
    setIssues(
      issues.map((issue) =>
        issue.id === id ? { ...issue, status } : issue
      )
    );
    setToast(`Issue #${id} marked as "${status}" ✅`);
  };

  // Logout with 4-second delay
  const logout = () => {
    setToast("Logging out");
    setTimeout(() => navigate("/"), 4000);
  };

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      {/* Post Announcement */}
      <div className="announcement-form">
        <input
          type="text"
          placeholder="Post announcement..."
          value={announcementText}
          onChange={(e) => setAnnouncementText(e.target.value)}
        />
        <button onClick={postAnnouncement}>Post Announcement</button>
      </div>

      {/* Tenant Issues */}
      <div className="tenant-issues">
        <h2>Tenant Issues</h2>
        {issues.length === 0 ? (
          <p>No issues reported yet.</p>
        ) : (
          <ul>
            {issues.map((issue) => (
              <li key={issue.id}>
                <strong>{issue.house}</strong> — {issue.description} <br />
                Status: <em>{issue.status}</em>
                <div className="issue-actions">
                  <button onClick={() => updateStatus(issue.id, "In Progress")}>
                    In Progress
                  </button>
                  <button onClick={() => updateStatus(issue.id, "Resolved")}>
                    Resolved
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDash;
