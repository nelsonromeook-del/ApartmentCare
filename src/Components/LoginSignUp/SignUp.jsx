import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";
function Signup({ setToast, setCurrentUser }) {
  const [name, setName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the new user for the dashboard
    setCurrentUser({
      name,
      houseNumber,
      email,
    });

    // Show welcome toast
    setToast(`Welcome ${name}! Your account has been created 🎉`);

    // Redirect to user dashboard
    navigate("/user-dashboard");
  };

  return (
    <div className="auth-container">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="House Number"
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

        <button type="submit">Create Account</button>
      </form>

      <p onClick={() => navigate("/")} className="link">
        Back to Login
      </p>
    </div>
  );
}

export default Signup;
