import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginSignUp/Login"; // Your login page
import Signup from "./Components/LoginSignUp/SignUp"; // Signup page
import UserDash from "./Components/Dashboard/index"; // User dashboard
import AdminDash from "./Components/Admin/Index"; // Admin dashboard

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        <Route path="/user-dashboard" element={<UserDash />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
