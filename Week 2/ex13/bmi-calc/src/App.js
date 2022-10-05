import './App.css'
import { useState } from 'react'

function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBmi] = useState(0)

  function calculate() {
    // weight / (height*height)
    const result = weight / Math.pow(height,2)
    setBmi(result)
  }

  return (
    <div id="container">
      <h3>BMI calculator</h3>
      <form>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}/>
        </div>

        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>

        <div>
          <label>Body mass index is:  </label>
          <output>{bmi.toFixed(1)}</output>
        </div>

        <button type="button" onClick={calculate}>Calculate!</button>
      </form>
    </div>

  );
}

export default App;
