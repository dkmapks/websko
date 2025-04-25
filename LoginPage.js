import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

const LoginPage = ({ onLogin }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login(name);
    onLogin();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Zaloguj się</h2>
      <input
        type="text"
        placeholder="Wpisz imię"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <button type="submit">Zaloguj</button>
    </form>
  );
};

export default LoginPage;
