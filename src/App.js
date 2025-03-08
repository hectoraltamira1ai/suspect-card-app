import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import image1 from './assets/01.png';
import image2 from './assets/02.png';
import image3 from './assets/03.png';
import image4 from './assets/04.png';
import image5 from './assets/05.png';
import image6 from './assets/06.png';
import image7 from './assets/07.png';
import image8 from './assets/08.png';
import image9 from './assets/09.png';
import image10 from './assets/10.png';

const App = () => {
  const [data, setData] = useState([]); // State to store API data
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        // Map images to the data
        const mappedData = result.slice(0, 10).map((item, index) => ({
          ...item,
          image: images[index % images.length], // Assign an image to each item
        }));
        setData(mappedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    const card = e.currentTarget.closest('.card');
    card.classList.add('spin');
    setTimeout(() => card.classList.remove('spin'), 1000); // Remove spin class after animation
  };

  return (
    <Router>
      <div className="App">
        <h1>Wanted Suspects</h1>
        <div className="card-container">
          {data.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt="Card" className="card-image" />
              <h2>{item.title}</h2>
              <p>{item.body.substring(0, 250)}...</p>
              <Link to={`/details/${item.id}`} onClick={handleClick}>View Details</Link>
            </div>
          ))}
        </div>

        <Routes>
          <Route path="/details/:id" element={<Details data={data} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
