import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css"

function Login({ users, setCurrentUser, setToast }) {
  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!houseNumber || !password) return;

    setLoading(true);
    setToast("Logging in...");

    await new Promise(r => setTimeout(r, 1200));

    const user = users.find(u => u.houseNumber === houseNumber && u.password === password);
    if (!user) {
      setToast("Invalid credentials ❌");
      setLoading(false);
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    setToast(user.role === "admin" ? "Welcome Back Admin 👑" : "Logged In ✅");

    navigate(user.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
    setLoading(false);
  };

  if (loading) return <div className="loader">Logging in...</div>;

  return (
    <div className="auth-container">
      <h1>ApartmentCare Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="House Number" value={houseNumber} onChange={e => setHouseNumber(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button>Login</button>
      </form>
      <p onClick={() => navigate("/signup")} className="link">Create Account</p>
    </div>
  );
}

export default Login;
