import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

function Login({ setCurrentUser, setToast }) {
  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setToast("Logging in...");

    setTimeout(() => {
      // Admin login
      if (houseNumber === "ADMIN" && password === "admin123") {
        setToast("Welcome Admin 👋");
        navigate("/admin-dashboard");
      } 
      // User login
      else {
        setCurrentUser({ houseNumber });
        setToast(`Welcome House ${houseNumber}`);
        navigate("/user-dashboard");
      }
    }, 1500);
  };

  return (
    <div className="auth-container">
      <h1>ApartmentCare Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="House Number (or ADMIN)"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p onClick={() => navigate("/signup")} className="link">
        Create Account
      </p>
    </div>
  );
}

export default Login;
