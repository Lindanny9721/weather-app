import React from 'react';
const CurrentLocation = ({ weatherData }) => {
  if (!weatherData) {
    return <div className='loading'>Loading weather data...</div>;
  }

  return (
    <div className='day-container'>
      {weatherData.map((day) => (
        <div className='days'>
          <p>{day.datetime}</p>
          <p>Max temperature: {day.max_temp}</p>
          <p>Min temperature: {day.min_temp}</p>
        </div>
      ))}
    </div>
  );
}
export default CurrentLocation;