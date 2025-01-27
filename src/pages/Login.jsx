import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy credentials for testing
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true); // Update login state
      navigate('/patient-dashboard'); // Redirect to the Patient Dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
        Login
      </button>
    </div>
  );
};

export default Login;
