import React, { useState, useEffect } from 'react';
import CurrentLocation from './CurrentLocation';

const Dashboard = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=${ACCESS_KEY}&days=6&lat=${latitude}&lon=${longitude}`);
        const json = await response.json();
        setCurrentLocation(json);
      });
    }
  }, []);
  

  return (
    <div className='top-container'>
      <CurrentLocation weatherData={currentLocation} />
    </div>
  );
}

export default Dashboard;
