import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">ThunderBold</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        <p className="forgot-password">Forgot password?</p>
        <div className="signup-container">
          <p className="signup-text">Don't have an account?</p>
          <button className="signup-button">Sign up</button>
        </div>
        <div className="social-login">
          <button className="social-button f-button">f</button>
          <button className="social-button g-button">G</button>
        </div>
      </div>
    </div>
  );
};

export default Login;