import React from 'react'
import Search from '../images/search.png'
export default function search() {
  return (
    <div className='search m-auto flex flex-row  space-x-4'>
        <input id='input' className=' rounded-lg backdrop-blur-sm bg-none border-none focus:border-none'></input>
        <img src={Search} className='h-10 cursor-pointer bg-white rounded-full w-auto p-2'></img>
    </div>
  )
}
