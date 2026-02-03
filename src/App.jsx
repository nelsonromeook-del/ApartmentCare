import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/LoginSignUp/Login";
import Signup from "./Components/LoginSignUp/SignUp";
import UserDash from "./Components/Dashboard/index";
import AdminDash from "./Components/Admin/AdminDash";

function App() {
  // Shared announcements
  const [announcements, setAnnouncements] = useState([]);

  // Shared issues
  const [issues, setIssues] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/user-dashboard"
          element={
            <UserDash
              announcements={announcements}
              issues={issues}
              setIssues={setIssues}
            />
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <AdminDash
              announcements={announcements}
              setAnnouncements={setAnnouncements}
              issues={issues}
              setIssues={setIssues}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
