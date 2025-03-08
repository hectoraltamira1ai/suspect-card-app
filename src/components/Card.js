import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.body.substring(0, 250)}...</p>
      <Link to={`/details/${item.id}`}>View Details</Link>
    </div>
  );
};

export default Card;