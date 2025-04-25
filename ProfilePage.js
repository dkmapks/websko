import React from 'react';
import { getUser } from '../utils/auth';

const ProfilePage = () => {
  const user = getUser();

  return (
    <div className="container">
      <h2>Profil Użytkownika</h2>
      <p><strong>Imię:</strong> {user.name}</p>
      <p><strong>PESEL:</strong> 12345678901</p>
      <p><strong>Adres:</strong> ul. Przykładowa 1, Warszawa</p>
    </div>
  );
};

export default ProfilePage;
