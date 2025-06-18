import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] =  useState(15)

  // let counter = 15

  const addValue = () => {
    
    if (counter < 20) {
      // counter = counter + 1
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      
      console.log("Value increased to:", counter + 1)
    } else {
      console.log("Cannot go above 20")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("Value decreased to:", counter - 1)
    } else {
      console.log("Cannot go below 0")
    }
    
  }

  return (
    <>
  <h1>Chai aur react</h1>
  <h2>Counter value: {counter}</h2>

  <button
  onClick={addValue}
  >Add value {counter}</button>
  <br />

  <button
  onClick={removeValue}
  >remove value {counter}</button>
  <p> Thank You</p>
    </>
  )
}

export default App
