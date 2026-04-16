import { useState } from "react"
import './App.css'


const App = () => {
  const MIN = 0
  const MAX = 100

  const [count, setCount] = useState(0)
  const [step, setStep] = useState("1")

  const stepValue = Math.min(Math.max(Number(step) || 1, 1), 10)

  const increment = () => {
    setCount((prev) => Math.min(prev + stepValue, MAX))
  }
  const decrement = () => {
    setCount((prev) => Math.max(prev - stepValue, MIN))
  }
  const reset = () => {
    setCount(0)
    setStep("1")
  }

  const handleStepChange = (e) => {
    const value = e.target.value

    if (value === "") {
      setStep("")
      return
    }
    const num = Number(value)
    if (num >= 1 && num <= 10) {
      setStep(value)
    }
  }

  let message = "Ready to count"
  if (count === MIN) {
    message = "Minimum limit reached"
  } else if (count === MAX) {
    message = "Maximum limit reached"
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Enhanced Counter App</h1>
        <p className="subtitle">React useState practice project</p>
        <p className="count">{count}</p>
        <div className="stepBox">
          <label htmlFor="step">Step Value</label>
          <input
            id="step"
            type="number"
            min={1}
            max={10}
            value={step}
            onChange={handleStepChange}
            onBlur={() => {
              if (step === '') {
                setStep('1')
              }
            }}
          />
        </div>
        <div className="buttons">
          <button onClick={decrement} disabled={count === MIN}>- Decrement</button>
          <button onClick={reset} className="resetBtn">Reset</button>
          <button onClick={increment} disabled={count === MAX}>+ Increment</button>
        </div>
        <div className="info">
          <p><strong>Min:</strong>{MIN}</p>
          <p><strong>Max:</strong>{MAX}</p>
          <p><strong>Status:</strong>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default App