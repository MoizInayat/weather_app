import React, { useEffect, useRef } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  
  const inputRef = useRef ()
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Log the API key to the console
    console.log(import.meta.env.VITE_APP_ID);
    
    search("London");
  }, []);

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Search' />
        <img src={search_icon} alt="" onClick={()=>(inputRef.current.value)}/>
      </div>
      <img src={clear_icon} alt='' className='weather-icon'/>
      <p className='temperature'>16 c</p>
      <p className='location'>London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
