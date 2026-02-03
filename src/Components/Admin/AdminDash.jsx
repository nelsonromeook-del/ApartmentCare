import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./AdminDash.css"

function AdminDash({ user, issues, setIssues, setAnnouncements, setToast, setCurrentUser }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  if (!user || user.role !== "admin") return <Navigate to="/" />;

  const postAnnouncement = (e) => {
    e.preventDefault();
    if (!text) return;
    setAnnouncements(prev => [...prev, text]);
    setText("");
    setToast("Announcement Posted 📢");
  };

  const updateStatus = (id, status) => {
    setIssues(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    setToast("Status Updated ✅");
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setToast("Logged Out 👋");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <h2>Issues</h2>
      {issues.map(i => (
        <div key={i.id} className="issue">
          <p>House {i.houseNumber}: {i.description}</p>
          <select value={i.status} onChange={e => updateStatus(i.id, e.target.value)}>
            <option>Pending</option>
            <option>In-Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      ))}

      <form onSubmit={postAnnouncement}>
        <input placeholder="Write announcement" value={text} onChange={e => setText(e.target.value)} required />
        <button>Post Announcement</button>
      </form>

      <button className="logout" onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDash;
