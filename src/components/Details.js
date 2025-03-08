import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Details.css';

const Details = ({ data }) => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // For navigation

  // Find the selected item based on the ID
  const item = data.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <img src={item.image} alt="Details" className="details-image" />
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <button className="return-button" onClick={() => navigate('/')}>
        Return to Main Page
      </button>
    </div>
  );
};

export default Details;