import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/LoginSignUp/Login";
import Signup from "./Components/LoginSignUp/SignUp";
import UserDash from "./Components/Dashboard/index";
import AdminDash from "./Components/Admin/AdminDash";
import Toast from "./Components/Toast/Toast";

// Preloaded demo accounts
const demoUsers = [
  { id: 1, name: "Demo Tenant", email: "demo@apartment.com", houseNumber: "D101", password: "demo123", role: "user" },
  { id: 2, name: "Demo Admin", email: "admin@apartment.com", houseNumber: "ADMIN", password: "admin123", role: "admin" },
];

function App() {
  const [users, setUsers] = useState(demoUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [issues, setIssues] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [toast, setToast] = useState("");

  // restore session
  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);

  return (
    <BrowserRouter>
      {toast && <Toast message={toast} setToast={setToast} />}

      <Routes>
        <Route path="/" element={<Login users={users} setCurrentUser={setCurrentUser} setToast={setToast} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} setToast={setToast} />} />
        <Route path="/user-dashboard" element={<UserDash user={currentUser} issues={issues} setIssues={setIssues} announcements={announcements} setToast={setToast} setCurrentUser={setCurrentUser} />} />
        <Route path="/admin-dashboard" element={<AdminDash user={currentUser} issues={issues} setIssues={setIssues} announcements={announcements} setAnnouncements={setAnnouncements} setToast={setToast} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
