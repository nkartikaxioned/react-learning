import { useState } from "react"

export const AdvancedCounter = () => {
  const[count, setCount] = useState(0);
  const[step, setStep] = useState(1);

  const handleIncrement = () => {
    if(prev => prev + step <= 100) {
      setCount(prev => prev + step);
    }
  }
  const handleDecrement = () => {
    if(prev => prev - step >= 0) {
      setCount(prev => prev - step);
    }
  }
  const handleReset = () => {
    setStep(1);
    setCount(0);
  }
  const handleStepChange = (stepValue) => {
    let updatedStepValue = Number(stepValue);
    setStep(updatedStepValue);
  }

return (
  <div>
    <h3>Advanced Counter</h3>
    <div className="display-output">
      <p>
        Count: {count}
      </p>
      <div>
        <label htmlFor="step">Step</label>
        <input type="number" value={step} onChange={(e) => {handleStepChange(Number(e.target.value));}}/>
      </div>
    </div>
    <div className="button-container">
      <button onClick={() => {handleIncrement();}}>Increment</button>
      <button onClick={() => {handleDecrement();}}>Decrement</button>
      <button onClick={() => {handleReset();}}>Reset</button>
    </div>
  </div>
)
}