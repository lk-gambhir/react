import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15);
  //let counter = 0
  const addvalue = () => {
    //if(counter >= 20) return;
     setcounter(counter+1)
    }
    const decreasevalue = () => {
      //if(counter <= 0) return;
      setcounter(counter-1)
    }
  return (
    <>
    <h1>Lakshay</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={addvalue} disabled = {counter === 20}>Add value</button>
    <br/>
    <button onClick={decreasevalue} disabled = {counter === 0}>Remove value</button>

    </>
  )
}

export default App
