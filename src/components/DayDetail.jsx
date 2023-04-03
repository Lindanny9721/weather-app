import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const DayDetail = () => {
  const { city, date } = useParams();
  const end_date = new Date(date);
  end_date.setDate(end_date.getDate() + 1);
  const formattedEndDate = end_date.toISOString().slice(0, 10);
  const [fullDetails, setFullDetails] = useState('');
  useEffect(() => {
    const getDayDetails = async () => {
      const response = await fetch(`https://api.weatherbit.io/v2.0/history/hourly?city=${city}&country=US&start_date=${date}&end_date=${formattedEndDate}&tz=local&key=${ACCESS_KEY}`)
      const json = await response.json();
      setFullDetails(json);
    }
    getDayDetails().catch(console.error);
  }, []);
  return (
    <div>
      {fullDetails && (
        <div className='top-container'>
            <h2>{fullDetails.city_name}</h2>
            <p>Elevation Angle: {fullDetails.data[0].elev_angle}</p>
            <p>Azimuth: {fullDetails.data[0].azimuth}</p>
            <p>Solar Radiation: {fullDetails.data[0].solar_rad}</p>
            <p>Description: {fullDetails.data[0].weather.description}</p>
            <p>Date: {fullDetails.data[0].datetime}</p>
        </div>
      )}
    </div>
  );
}

export default DayDetail;