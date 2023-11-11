import React from 'react'
import Wind from '../images/wind.png'
import Humidity from '../images/humidity.png'
export default function bottom() {
  return (
    <div className='flex flex-row items-center justify-center space-x-10 py-20'>
        <div>
            <img src={Wind}></img>
            <h3></h3>
            <p>Wind Speed</p>
        </div>
        <div>
            <img src={Humidity}></img>
            <h3></h3>
            <p>Humidity</p>
        </div>
    </div>
  )
}
