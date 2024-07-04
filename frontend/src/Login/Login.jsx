import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../context/Name";
import "./Login.css";

function Login() {
  const NameCt = useContext(NameContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [err, setErr] = useState(""); // State to hold error message
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const params = new URLSearchParams({
        userName: userName,
        password: password
      });
      const response = await fetch(`/api/Login?${params.toString()}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server response error data:", errorData);
        setErr(errorData.error || "Unknown error occurred"); // Set error message
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
      }

      const userData = await response.json();
      setData(userData);
      console.log("User fetched:", userData.user.userName);
      NameCt.setName(userName); // Assuming setName sets the user in context
      navigate('/User'); // Navigate to User page
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErr("Failed to login. Please try again."); // Update error state
    }
  }

  return (
    <div className="ring">
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input type="text" placeholder="Username" name="username" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="inputBx">
          <input type="submit" value="Login" onClick={handleLogin} />
        </div>
        {err && <p className="error">{err}</p>} {/* Display error message if any */}
      </div>
    </div>
  );
}

export default Login;
