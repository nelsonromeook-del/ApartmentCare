import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./AdminDash.css";

function AdminDash({
  user,
  issues,
  setIssues,
  announcements,
  setAnnouncements,
  setToast,
  setCurrentUser,
}) {
  const [text, setText] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const postAnnouncement = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setAnnouncements((prev) => [...prev, text.trim()]);
    setText("");
    setToast("Announcement posted 📢");
  };

  const updateStatus = (id, status) => {
    setIssues((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    );
    setToast("Status updated ✅");
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
    <div className="dashboard admin">
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Reported Issues</h2>

        {issues.length === 0 ? (
          <p className="muted">No issues reported</p>
        ) : (
          <ul className="list">
            {issues.map((i) => (
              <li key={i.id} className="issue-item admin-issue">
                <div>
                  <strong>House {i.house}</strong>
                  <p>{i.description}</p>
                </div>

                <select
                  value={i.status}
                  onChange={(e) => updateStatus(i.id, e.target.value)}
                  disabled={loggingOut}
                >
                  <option>Pending</option>
                  <option>In-Progress</option>
                  <option>Resolved</option>
                </select>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Post Announcement</h2>
        <form onSubmit={postAnnouncement} className="issue-form">
          <input
            placeholder="Write announcement"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            disabled={loggingOut}
          />
          <button type="submit" disabled={loggingOut}>
            Post
          </button>
        </form>
      </section>

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

export default AdminDash;
