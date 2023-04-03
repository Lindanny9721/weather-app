import CurrentLocation from './CurrentLocation';
import WeatherSearch from './WeatherSearch';
import React, { useState } from 'react';
const Search = () => {
    const [currentLocation, setCurrentLocation] = useState('');
    const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
    const handleSearch = async (city, postal, startDate, endDate) => {
        if (postal && !(city) && !(startDate && endDate) ){
            const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=${ACCESS_KEY}&days=6&postal_code=${postal}&country=US`);
            const json = await response.json()
            return setCurrentLocation(json.data);
        }
        if (city && !(startDate && endDate) && !(postal)) {
            const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=${ACCESS_KEY}&days=6&city=${city}`);
            const json = await response.json()
            console.log(json);
            return setCurrentLocation(json);
        }
        if (city && startDate && endDate) {
            const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?&key=${ACCESS_KEY}&units=I&city=${city}&start_date=${startDate}&end_date=${endDate}`);
            const json = await response.json();
            setCurrentLocation(json.data);
        }
        else{
            alert("You're missing the city!");
        }
    };
return (
    <div className='top-container'>
        <WeatherSearch onSearch={handleSearch} />
        <CurrentLocation weatherData={currentLocation} />
    </div>
);
}
export default Search