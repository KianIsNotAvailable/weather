import React from 'react'
import { useState } from 'react';
import Wind from '../images/wind.png'
import Humidity from '../images/humidity.png'
import Clear from '../images/clear.png'
import Search from '../images/search.png'
export default function Weather() {
    const API_KEY = '7199c791f5656a6336d69d42f8eab69b';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=`;
    const [inputValue, setInputValue] = useState('');
    const [assignedValue, setAssignedValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [temperatureValue, setTemperatureValue] = useState('');
    const [windValue, setWindValue] = useState('');
    const [humidityValue, setHumidityValue] = useState('');
    const [style, setStyle] = useState(true);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleAssignValue = () => {
        setAssignedValue(inputValue);
        checkWeather(inputValue);
    };

    
    


   async function checkWeather(city){
        const response = await fetch(API + city + `&appid=${API_KEY}`);
    
        
        if(response.status === 404){
            setStyle(false)
        } else if (response.status === 400){
            setStyle(false)
        } else {
            var data = await response.json();
            console.log(data);
            setStyle(true);
            
    
            const handleNameValue = () => {
                setNameValue(data.name)
            }
            const handleTemperatureValue = () => {
                setTemperatureValue(Math.round(data.main.temp - 273.15) + '°C')
            }
            const handleWindValue = () => {
                setWindValue(data.wind.speed + "km/h")
            }
            const handleHumidityValue = () => {
                setHumidityValue(data.main.humidity + "%")
            }
            handleNameValue();
            handleTemperatureValue();
            handleWindValue();
            handleHumidityValue();

    
    
        }  
   }
    

  return (
    <div>
        { style ?
        <div>
        <div className='search m-auto flex flex-row  space-x-4'>
        <input id='input' type='text' value={inputValue} onChange={handleInputChange}  placeholder='Enter a City' className='text-black rounded-lg backdrop-blur-sm bg-none border-none focus:border-none'></input>
        <button onClick={handleAssignValue}><img  id='button' src={Search} className='h-10 cursor-pointer bg-white rounded-full w-auto p-2'></img></button>
    </div>
    <div id='display' className='flex flex-col justify-center items-center'>
        <img id='icon' src={Clear} className='h-20 w-20'></img>
        <h1>{temperatureValue}</h1>
        <h2>{nameValue}</h2>
    </div>
    <div id='bottom' className='flex flex-row items-center justify-center space-x-10 py-20'>
        <div className='flex flex-row space-x-3'>
            <img src={Wind} className='h-10 w-10'></img>
            <div className='flex flex-col'>
            <h3>{windValue}</h3>
            <p>Wind Speed</p>
            </div>
        </div>
        <div className='flex flex-row space-x-3'>
            <img src={Humidity} className='h-10 w-10'></img>
            <div className='flex flex-col'>
            <h3>{humidityValue}</h3>
            <p>Humidity</p>
            </div>
        </div>
    </div>
    </div> :
    <div>
    <div className='search m-auto flex flex-row  space-x-4'>
    <input id='input' type='text' value={inputValue} onChange={handleInputChange}  placeholder='Enter a City' className='text-black rounded-lg backdrop-blur-sm bg-none border-none focus:border-none'></input>
    <button onClick={handleAssignValue}><img  id='button' src={Search} className='h-10 cursor-pointer bg-white rounded-full w-auto p-2'></img></button>
</div>
    <div id='notFound' >
            <h1>Not a City, Check your spelling.</h1>
        </div>
        </div>}
    </div>
  )
}
