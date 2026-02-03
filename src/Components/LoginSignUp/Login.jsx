import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ correct import
import './LoginSignUp.css';

function Login() {
  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Allows page navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("House Number:", houseNumber);
    console.log("Password:", password);

    // Example logic: redirect based on houseNumber
    if (houseNumber.toUpperCase() === "ADMIN") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="login-area">
      <h1>Resident Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>House Number:</label>
        <input
          type="text"
          list="house-numbers"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          placeholder="Select or type house number"
          required
        />
        <datalist id="house-numbers">
          <option value="A01" />
          <option value="A02" />
          <option value="A03" />
          <option value="B01" />
          <option value="B02" />
          <option value="C01" />
          <option value="C02" />
        </datalist>

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        New resident?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")} // Navigate to Signup page
          style={{ background: "none", color: "blue", border: "none", cursor: "pointer" }}
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

export default Login;
