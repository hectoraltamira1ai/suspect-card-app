import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ item }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 600); // Remove spin class after animation
  };

  return (
    <div className={`card ${isSpinning ? 'spin' : ''}`}>
      <h2>{item.title}</h2>
      <p>{item.body.substring(0, 250)}...</p>
      <Link to={`/details/${item.id}`} onClick={handleClick}>View Details</Link>
    </div>
  );
};

export default Card;