import React from 'react'
import Clear from '../images/clear.png'

export default function display() {
  const API_KEY = '7199c791f5656a6336d69d42f8eab69b';
  const API = `https://api.openweathermap.org/data/2.5/weather?q=`;
  const CITY = document.getElementById('input');
  const searchBtn = document.getElementById("button");
  const weatherIcon = document.getElementById("icon");
  
 async function checkWeather(city){
      const response = await fetch(API + city + `&appid=${API_KEY}`);
  
      if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
      } else {
          var data = await response.json();
  
          
  const location = data.name
  const windSpeed = data.wind.speed + "km/h";
  const humidity = data.main.humidity + "%";
  const temperature = Math.round(data.main.temp) + '°C';
  

  
  
  if (data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png";
  };
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
      }
      
  }
  
  


  return (
    <div className='flex flex-col justify-center items-center'>
        <img id='icon' src={Clear} className='h-20 w-20'></img>
        <h1>{temperature}</h1>
        <h2>Seoul</h2>
    </div>
  )
}
