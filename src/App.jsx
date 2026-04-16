import { useState } from "react"
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="app">
      <div className="card">
        <h1>Counter App</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  )
}

export default App