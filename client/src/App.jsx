import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>PostHub</h1>
      <p className="read-the-docs">
        PostHub is a simple full-stack MERN application.
      </p>
    </>
  )
}

export default App
