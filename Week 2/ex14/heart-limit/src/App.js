import './App.css'
import { useState } from 'react'

function App() {
  const [upper,setUpper] = useState(0)
  const [lower,setLower] = useState(0)
  const [age,setAge] = useState(0)

  function calculate() {

     setUpper((220 - age) * 0.85)
     setLower((220 - age) * 0.65)
    }
  
  return (
    <div id="container">
      <h1>Heart rate limit by age calculator</h1>
      <form>
        <div>
          <label>Age</label>
        </div>

        <div>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>

        <div>
          <label>Heart rate limits:  </label>
        </div>

        <div>
          <output>{upper.toFixed(0)} - {lower.toFixed(0)}</output>
        </div>

        <button type="button" onClick={calculate}>Calculate!</button>
      </form>
    </div>

  );
}

export default App;