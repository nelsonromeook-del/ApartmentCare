import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function UserDash({ user, issues, setIssues, announcements, setToast, setCurrentUser }) {
  const [text, setText] = useState("");
  const [newAnnouncementIds, setNewAnnouncementIds] = useState([]);
  const navigate = useNavigate();

  if (!user) return <Navigate to="/" replace />;

  useEffect(() => {
    if (!announcements.length) return;
    const lastId = announcements.length - 1;
    setNewAnnouncementIds([lastId]);
    const timer = setTimeout(() => setNewAnnouncementIds([]), 3000);
    return () => clearTimeout(timer);
  }, [announcements]);

  const submitIssue = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newIssue = {
      id: Date.now(),
      house: user.houseNumber,
      description: text,
      status: "Pending",
    };
    setIssues((prev) => [...prev, newIssue]);
    setToast("Issue submitted ✅");
    setText("");
  };

  const logout = async () => {
    setToast("Logging out... ⏳");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p>House: {user.houseNumber}</p>

      <h2>Announcements</h2>
      {announcements.length === 0 ? (
        <p>No announcements yet</p>
      ) : (
        <ul>
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

      <h2>Your Issues</h2>
      <ul>
        {issues
          .filter((i) => i.house === user.houseNumber)
          .map((i) => (
            <li key={i.id}>
              {i.description} -{" "}
              <span className={`issue-status status-${i.status.replace(" ", "-")}`}>
                {i.status}
              </span>
            </li>
          ))}
      </ul>

      <form onSubmit={submitIssue}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your issue"
          required
        />
        <button type="submit">Submit Issue</button>
      </form>

      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default UserDash;
