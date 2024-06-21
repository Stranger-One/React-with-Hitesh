import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  function increase(){
    if(count >= 20) return
    setCount(count + 1)
  }
  function decrease(){
    if(count <= 0) return
    setCount(count - 1)
  }

  return (
    <>
      <h2>click to change value</h2>
      <h3>{count}</h3>
      <button onClick={increase}>increase 1</button>
      <button onClick={decrease}>decrease 1</button>
    </>

  )
}

export default App
