import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  
  const [weatherData, setWeatherData] = useState (false);

  

  const inputRef = useRef ()
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5a52644ab96635db12940c09eebb5231
`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name, 
      })
     

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    search("new york");
  }, []);

 

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Search' />
        <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
      </div>
      <img src={clear_icon} alt='' className='weather-icon'/>
      <p className='temperature'>{weatherData.temperature}c</p>
      <p className='location'>{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;


// VITE_APP_ID="5a52644ab96635db12940c09eebb5231"
// const url = `https://api.openweathermap.org/data/2.5/weather?q=$Karachi&appid=5a52644ab96635db12940c09eebb5231`;

// https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5a52644ab96635db12940c09eebb5231


// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}