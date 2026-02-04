import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./dashboard.css";

function UserDash({ user, issues, setIssues, announcements, setToast, setCurrentUser }) {
  const [text, setText] = useState("");
  const [newAnnouncementIds, setNewAnnouncementIds] = useState([]);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  if (!user) return <Navigate to="/" replace />;

  useEffect(() => {
    if (!announcements.length) return;

    const lastIndex = announcements.length - 1;
    setNewAnnouncementIds([lastIndex]);

    const timer = setTimeout(() => setNewAnnouncementIds([]), 3000);
    return () => clearTimeout(timer);
  }, [announcements]);

  const submitIssue = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newIssue = {
      id: Date.now(),
      house: user.houseNumber,
      description: text.trim(),
      status: "Pending",
    };

    setIssues((prev) => [...prev, newIssue]);
    setToast("Issue submitted ✅");
    setText("");
  };

  const logout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);
    setToast("Logging out... ⏳");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p className="house">House: {user.houseNumber}</p>

      <section>
        <h2>Announcements</h2>
        {announcements.length === 0 ? (
          <p className="muted">No announcements yet</p>
        ) : (
          <ul className="list">
            {announcements.map((a, i) => (
              <li
                key={i}
                className={`announcement ${
                  newAnnouncementIds.includes(i) ? "new" : ""
                }`}
              >
                {a}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Your Issues</h2>
        <ul className="list">
          {issues
            .filter((i) => i.house === user.houseNumber)
            .map((i) => (
              <li key={i.id} className="issue-item">
                <span>{i.description}</span>
                <span
                  className={`issue-status status-${i.status.replace(" ", "-")}`}
                >
                  {i.status}
                </span>
              </li>
            ))}
        </ul>
      </section>

      <form onSubmit={submitIssue} className="issue-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your issue"
          required
          disabled={loggingOut}
        />
        <button type="submit" disabled={loggingOut}>
          Submit Issue
        </button>
      </form>

      <button
        className="logout"
        onClick={logout}
        disabled={loggingOut}
      >
        {loggingOut ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}

export default UserDash;
