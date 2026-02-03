import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/LoginSignUp/Login";
import Signup from "./Components/LoginSignUp/SignUp";
import UserDash from "./Components/Dashboard/index";
import AdminDash from "./Components/Admin/AdminDash";
import Toast from "./Components/Toast/Toast"; 

function App() {
  // Shared state
  const [currentUser, setCurrentUser] = useState(null); // Stores logged-in user info
  const [issues, setIssues] = useState([]); // List of tenant issues
  const [announcements, setAnnouncements] = useState([]); // Admin announcements
  const [toast, setToast] = useState(""); // Toast messages

  return (
    <Router>
      {/* Toast Notification */}
      {toast && <Toast message={toast} setToast={setToast} />}

      <Routes>
        {/* Login page */}
        <Route
          path="/"
          element={
            <Login
              setCurrentUser={setCurrentUser}
              setToast={setToast}
            />
          }
        />

        {/* Signup page */}
        <Route
          path="/signup"
          element={
            <Signup
              setCurrentUser={setCurrentUser}
              setToast={setToast}
            />
          }
        />

        {/* User Dashboard */}
        <Route
          path="/user-dashboard"
          element={
            <UserDash
              user={currentUser}
              issues={issues}
              setIssues={setIssues}
              announcements={announcements}
              setToast={setToast}
            />
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminDash
              issues={issues}
              setIssues={setIssues}
              announcements={announcements}
              setAnnouncements={setAnnouncements}
              setToast={setToast}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
