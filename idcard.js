import React from 'react';
import { getUser } from '../utils/auth';

const IDCard = () => {
  const user = getUser();

  return (
    <div className="card">
      <h3>Dowód osobisty</h3>
      <p>Imię: {user.name}</p>
      <p>Nr: ABC123456</p>
      <p>Ważny do: 12.12.2030</p>
    </div>
  );
};

export default IDCard;
