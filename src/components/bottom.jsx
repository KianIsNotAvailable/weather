import React from 'react'
import Wind from '../images/wind.png'
import Humidity from '../images/humidity.png'
export default function bottom() {
  return (
    <div className='flex flex-row items-center justify-center space-x-10 py-20'>
        <div className='flex flex-row space-x-3'>
            <img src={Wind} className='h-10 w-10'></img>
            <h3></h3>
            <p>Wind Speed</p>
        </div>
        <div className='flex flex-row space-x-3'>
            <img src={Humidity} className='h-10 w-10'></img>
            <h3></h3>
            <p>Humidity</p>
        </div>
    </div>
  )
}
