import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Card from './components/card'
function App() {
 

  return (
    <>
     <h1 className='bg-green-800 text-white '>Hello tailwind </h1> 
     < Card username="abhi" textbtn="click Me" /> 
     < Card username="abhishek" textbtn="swipe Me" />
    </>
  )
}


export default App
