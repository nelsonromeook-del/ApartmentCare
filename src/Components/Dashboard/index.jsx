import { useState } from "react";
import "./dashboard.css"
 // Make sure to create this CSS file

 function UserDash() {
  // Dummy initial issues for demonstration
  const [issues, setIssues] = useState([
    { id: 1, title: "Leaky faucet", status: "Pending" },
    { id: 2, title: "Broken light", status: "Resolved" },
  ]);

  // State to store new issue input
  const [newIssue, setNewIssue] = useState("");

  // Handle posting a new issue
  const handlePostIssue = (e) => {
    e.preventDefault();
    if (!newIssue) return;

    const issue = {
      id: Date.now(),
      title: newIssue,
      status: "Pending",
    };

    setIssues((prev) => [...prev, issue]); // Add to the issues list
    setNewIssue(""); // Clear input
    alert("Issue posted successfully!");
  };

  return (
    <div className="user-dashboard">
      <h1> ApartmentCare Dashboard</h1>
      {/* Section: Post a new issue */}
      <div className="post-issue">
        <h2>Report a New Issue</h2>
        <form onSubmit={handlePostIssue}>
          <input
            type="text"
            placeholder="Describe your issue"
            value={newIssue}
            onChange={(e) => setNewIssue(e.target.value)}
            required
          />
          <button type="submit">Post Issue</button>
        </form>
      </div>

      {/* Section: View current issues */}
      <div className="issue-list">
        <h2>Your Reported Issues</h2>
        {issues.length === 0 ? (
          <p>No issues reported yet.</p>
        ) : (
          <ul>
            {issues.map((issue) => (
              <li key={issue.id} className={`status-${issue.status.toLowerCase()}`}>
                <strong>{issue.title}</strong> - <em>{issue.status}</em>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Section: Alerts / Announcements */}
      <div className="alerts">
        <h2>Announcements</h2>
        <ul>
          <li>Water maintenance on 5th Feb.</li>
          <li>Elevator inspection on 7th Feb.</li>
          <li>Community meeting on 10th Feb.</li>
        </ul>
      </div>
    </div>
  );
}
export default UserDash;