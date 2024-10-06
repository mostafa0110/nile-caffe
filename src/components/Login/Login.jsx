"use client"; // Add this to ensure it's a client component
import { useState } from 'react';
import './Login.css'; // Importing the custom CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h2 className="form-title">Welcome</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">GET STARTED</button>
        </form>
        <div className="login-options">

          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        <div className="footer">
          <a href="/register">Create Account</a>
          <a href="/help">Need Help?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
