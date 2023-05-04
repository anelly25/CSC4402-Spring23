import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components/login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('carrier'); // Default user type is carrier

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual authentication logic
    if (username && password) {
      if (userType === 'carrier') {
        navigate('/home');
      } else if (userType === 'shipper') {
        navigate('/shipper');
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">TigerTrucks Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="user-type">
            Select User Type:
          </label>
          <select
            className="select"
            id="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="carrier">Carrier</option>
            <option value="shipper">Shipper</option>
          </select>
        </div>
        <button className="submit-button" type="submit">
          Login
        </button>
      </form>

      <img
        src="https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png"
        alt="Tiger"
        className="tiger-image"
      />
    </div>
  );
};

export default LoginForm;
