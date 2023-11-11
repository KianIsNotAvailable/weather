import React from 'react'
import Clear from '../images/clear.png'
export default function display() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={Clear} className='h-20 w-20'></img>
        <h1>9°C</h1>
        <h2>Seoul</h2>
    </div>
  )
}
