// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <div>
        <h1>Course Management App</h1>
        <Routes>
        <Route path="/" element={<Register />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
