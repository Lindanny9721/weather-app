import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city, postal, startDate, endDate );
    setCity('');
    setPostal('')
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='search-city'>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Search for a city"
        />
        <input
          type="text"
          value={postal}
          onChange={(event) => setPostal(event.target.value)}
          placeholder="Search for a postal code"
        />
      </div>
      <div className='search-date'>
        <label>Start date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <label>End date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
export default WeatherSearch