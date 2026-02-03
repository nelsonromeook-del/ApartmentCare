import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css"

function Signup({ users, setUsers, setCurrentUser, setToast }) {
  const [form, setForm] = useState({ name: "", email: "", houseNumber: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (users.some(u => u.houseNumber === form.houseNumber)) {
      setToast("House number already exists ❌");
      return;
    }

    const newUser = { ...form, id: Date.now(), role: "user" };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setToast(`Welcome ${form.name}! Your account has been created 🎉`);
    navigate("/user-dashboard");
  };

  return (
    <div className="auth-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input type="text" placeholder="House Number" value={form.houseNumber} onChange={e => setForm({ ...form, houseNumber: e.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
        <button>Create Account</button>
      </form>
      <p onClick={() => navigate("/")} className="link">Back to Login</p>
    </div>
  );
}

export default Signup;
