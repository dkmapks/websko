import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { isLoggedIn } from './utils/auth';

function App() {
  const [auth, setAuth] = useState(isLoggedIn());

  useEffect(() => {
    setAuth(isLoggedIn());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={auth ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={() => setAuth(true)} />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
