import { useState } from 'react'
import './App.css'

function App() {
    const [color, setColor] = useState("black");
  return (
    <div className = "w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-3">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}>red</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "green"}}
          onClick={() => setColor('green')}>green</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>blue</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "olive"}}
          onClick={() => setColor("olive")}>olive</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "gray"}}
          onClick={() => setColor('gray')}>gray</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-black' style={{backgroundColor: "yellow"}}
          onClick={() => setColor("yellow")}>yellow</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-black' style={{backgroundColor: "pink"}}
          onClick={() => setColor("pink")}>pink</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "purple"}}
          onClick={() => setColor('purple')}>purple</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-black' style={{backgroundColor: "lavender"}}
          onClick={() => setColor("lavender")}>lavender</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-black' style={{backgroundColor: "white"}}
          onClick={() => setColor("white")}>white</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: "black"}}
          onClick={() => setColor('black')}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
