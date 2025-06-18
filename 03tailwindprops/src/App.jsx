import { useState } from 'react'
import React from 'react';

import './App.css'
import Card from './componenets/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "golden",
    age: 23
  }

  let newArr = [1, 2, 3]

  return (
    <>
    <div className=' bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center p-10'></div>
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10" >
      Tailwind test</h1>

      <div className='flex flex-wrap justify-center gap-10'></div>
      <Card username="chaiaurcode" btnText="click me"/>
      <br/>
      <Card username="golden"/>
    </>
  )
}

export default App
