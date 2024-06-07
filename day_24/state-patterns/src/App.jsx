import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(window.innerWidth)

  function increaseCount() { 
    setCount(window.innerWidth)
  }

  useEffect(() => {
    increaseCount()

    window.addEventListener('resize', increaseCount())

    return () => {window.removeEventListener('resize', increaseCount)}
  }, [count])

  return (
    <>
      <button onClick={() => increaseCount()}>Count {count}</button>
    </>
  )
}

export default App
