// src/components/Auth/Login.js
import React, { useState } from 'react';
import api from '../../services/api';
import './Auth.css'; // Import the CSS

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token); // Store the token
      alert('Login successful!'); // Notify user
      console.log('Login successful:', response.data); // Log success
    } catch (error) {
      console.error('Error during login:', error); // Log error
      setErrorMessage(error.response?.data?.message || error.message); // Set error message
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
