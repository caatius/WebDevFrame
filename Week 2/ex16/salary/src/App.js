import './App.css';
import { useState } from 'react'

function App() {

  const [ salary, setSalary] = useState(0);
  const [ tax, setTax] = useState(0);
  const [ pension, setPension] = useState(0);
  const [ insurance, setInsurance] = useState(0);
  const [ result, setResult] = useState(0);

  function calculate() {
    const result = salary - (salary*tax/100) - (salary*pension/100) - (salary*insurance/100);
    setResult(result);
  }

  return (
    <>
    <h1>Gross salary calculator</h1>
    <form>
      <div>
        <label>Gross salary (€)</label> 
        <br />
        <input name="salary" type="number" value={salary} onChange={e => setSalary(e.target.value)}/>
      </div>
      <div>
        <label>Tax (%) {(salary * (tax/100)).toFixed(2)}€</label> 
        <br />
        <input name="tax" type="number" value={tax} onChange={e => setTax(e.target.value)}/>
      </div>
      <div>
        <label>Pension (%) {(salary * (pension/100)).toFixed(2)}€</label> 
        <br />
        <select name="pension" type="number" value={pension} onChange={e => setPension(e.target.value)}>
          <option value="0.25">0.25%</option>
          <option value="0.5">0.50%</option>
          <option value="0.75">0.75%</option>
          <option value="1">1%</option>
          <option value="1.25">1.25%</option>
          <option value="1.5">1.50%</option>
          <option value="1.75">1.75%</option>
          <option value="2">2%</option>
          <option value="2.25">2.25%</option>
          <option value="2.5">2.50%</option>
          <option value="2.75">2.75%</option>
          <option value="3">3%</option>
          <option value="3.25">3.25%</option>
          <option value="3.5">3.50%</option>
          <option value="3.75">3.75%</option>
          <option value="4">4%</option>
          <option value="4.25">4.25%</option>
          <option value="4.5">4.50%</option>
          <option value="4.75">4.75%</option>
          <option value="5">5%</option>
        </select>
      </div>
      <div>
        <label>Insurance (%) {(salary * (insurance/100)).toFixed(2)}€</label> 
        <br />
        <select name="insurance" type="number" value={insurance} onChange={e => setInsurance(e.target.value)}>
          <option value="0.25">0.25%</option>
          <option value="0.5">0.50%</option>
          <option value="0.75">0.75%</option>
          <option value="1">1%</option>
          <option value="1.25">1.25%</option>
          <option value="1.5">1.50%</option>
          <option value="1.75">1.75%</option>
          <option value="2">2%</option>
          <option value="2.25">2.25%</option>
          <option value="2.5">2.50%</option>
          <option value="2.75">2.75%</option>
          <option value="3">3%</option>
          <option value="3.25">3.25%</option>
          <option value="3.5">3.50%</option>
          <option value="3.75">3.75%</option>
          <option value="4">4%</option>
          <option value="4.25">4.25%</option>
          <option value="4.5">4.50%</option>
          <option value="4.75">4.75%</option>
          <option value="5">5%</option>
        </select>
      </div>
      <div>
        <label>Net salary (€)</label><br />
        <output>{result.toFixed(2)}</output>
      </div>
      <button type="button" onClick={calculate}>Calculate</button>
    </form>
    </>
  );
}

export default App;
