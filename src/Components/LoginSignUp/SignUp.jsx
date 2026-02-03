import { useState } from "react"; // useState allows us to store and update form values dynamically

function Signup({ switchToLogin }) { 
  // switchToLogin is a function passed from parent to go back to Login

  // Stores resident full name
  const [name, setName] = useState("");

  // Stores house/apartment number
  const [houseNumber, setHouseNumber] = useState("");

  // Stores password
  const [password, setPassword] = useState("");

  // Stores password confirmation
  const [confirmPassword, setConfirmPassword] = useState("");

  // Runs when the signup form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Temporary logic (later connect to backend / database)
    console.log("New Resident Signup:", {
      name,
      houseNumber,
      password,
    });

    alert(`Account created for ${name} in House ${houseNumber}`);

    // Optionally switch to login after successful signup
    switchToLogin?.();
  };

  return (
    <div className="signup-area">
      <h1>ApartmentCare Signup</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Resident Name */}
        <label>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
              />
              
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
          placeholder="Create a password"
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter password"
          required
        />

        <button type="submit">Create Account</button>

        {/* Switch to Login */}
        <p className="switch-text">
          Already have an account?{" "}
          <button
            type="button"
            onClick={switchToLogin}
            style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer" }}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
