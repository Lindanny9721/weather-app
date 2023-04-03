import React from 'react';
import { Link } from 'react-router-dom';
import {  BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const CurrentLocation = ({ weatherData }) => {
  console.log(weatherData.data);
  const TemperatureData = (weatherData) => {
    const data = weatherData[0].map((day) => ({
      date: day.datetime,
      temperature: day.temp,
    }));
    return data;
  }
  const WindData = (weatherData) => {
    const data = weatherData[0].map((day) => ({
      date: day.datetime,
      wind: day.wind_spd,
    }));
    return data;
  }
  if (!weatherData) {
    return <div className='loading'>Loading weather data...</div>;
  }
  const data = weatherData.data ? TemperatureData([weatherData.data]) : [];
  const winddata = weatherData ? WindData([weatherData.data]) : [];
  return (
    <div className='day-container'>
      {weatherData.data.map((day) => (
        <Link to={`/day/${weatherData.city_name}/${day.datetime}`}>
          <div className='days'>
            <img src= {`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} width = "50px" height = "50px" alt ="image"/>
            <p>{day.datetime}</p>
            <p>Max temperature: {day.max_temp}</p>
            <p>Min temperature: {day.min_temp}</p>
          </div>
        </Link>
      ))}
      <div className='graph-container'>
        <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="temperature" stroke="black" />
          <CartesianGrid stroke="white" strokeDasharray="5 5" />
          <XAxis dataKey="date" stroke='white'/>
          <YAxis stroke='white'/>
          <Tooltip />
        </LineChart>
        <BarChart width={400} height={200} data={winddata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Bar dataKey="wind" fill="black" />
            <CartesianGrid stroke="white" strokeDasharray="5 5" />
            <XAxis dataKey="date" stroke='white' />
            <YAxis stroke='white'/>
            <Tooltip />
          </BarChart>
        </div>
    </div>
  );
}
export default CurrentLocation;