import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios";

const Auth = () => {
  const [userType, setUserType] = useState("new"); // new | existing | admin
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (userType === "new") {
      setNewUser({ ...newUser, [name]: value });
    } else {
      setLoginUser({ ...loginUser, [name]: value });
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Signup clicked"); 
    if (!newUser.name || !newUser.email || !newUser.password || !newUser.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (newUser.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (newUser.password !== newUser.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      });
      alert("Registration successful! Please login.");
      setNewUser({ name: "", email: "", password: "", confirmPassword: "" });
      setUserType("existing"); // Switch to login form
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginUser.email || !loginUser.password) {
      setError("Please fill in all fields.");
      return;
    }
  
    const url = userType === "admin"
      ? "http://localhost:5000/api/admin/login"
      : "http://localhost:5000/api/auth/login";
  
    try {
      const res = await axios.post(url, loginUser);
      const { token, user } = res.data;
  
      localStorage.setItem("token", token);
      alert(`${userType === "admin" ? "Admin" : "User"} login successful!`);
      setLoginUser({ email: "", password: "" });
      setError("");
  
      if (userType === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/products");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Login failed.";
      setError(errorMsg);
  
      // Handle unregistered user trying to login
      if (errorMsg.toLowerCase().includes("not registered") || errorMsg.toLowerCase().includes("user not found")) {
        alert("You are not registered. Please register here.");
        setUserType("new");
        setLoginUser({ email: "", password: "" });
      }
    }
  };
  

  return (
    
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-3">Authentication</h2>

      {/* User type radio buttons */}
      <div className="mb-4">
        <label className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            value="new"
            checked={userType === "new"}
            onChange={handleUserTypeChange}
          />
          New Customer
        </label>
        <label className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            value="existing"
            checked={userType === "existing"}
            onChange={handleUserTypeChange}
          />
          Existing Customer
        </label>
        <label className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            value="admin"
            checked={userType === "admin"}
            onChange={handleUserTypeChange}
          />
          Admin
        </label>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* New User Registration Form */}
      {userType === "new" && (
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" value={newUser.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" value={newUser.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={newUser.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control" value={newUser.confirmPassword} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      )}

      {/* Existing User or Admin Login Form */}
      {(userType === "existing" || userType === "admin") && (
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" value={loginUser.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={loginUser.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
