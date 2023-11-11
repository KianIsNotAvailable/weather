import search from "./components/search";

const API_KEY = '7199c791f5656a6336d69d42f8eab69b';
const API = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;
const CITY = document.getElementById('input');

async function fetchData() {
    try {
        const response = await fetch(API);
        
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        // Handle errors, for instance:
        console.error('Error fetching data:', error);
        return null;
    }
    
};

const windSpeed = data.wind.speed;
const humidity = data.humidity;
const temperature = data.temp;
fetchData();

export {
    windSpeed, 
    humidity, 
    temperature
};


