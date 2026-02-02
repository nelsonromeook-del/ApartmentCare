import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

function Signup() {
  const [name, setName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="House Number" onChange={(e) => setHouseNumber(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button>Create Account</button>
      </form>

      <p onClick={() => navigate("/")} className="link">
        Back to Login
      </p>
    </div>
  );
}

export default Signup;
