import logo from './logo.svg';
import './App.css';
import { useState } from 'react' ;

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);

  function calculate() {
    setGbp(eur *0.9);
  }

  return (
    <div>
      <h3>Currency calculator</h3>
        <form>
          <div>
            <label>EUR</label>
            <input type="number" value={eur} onChange={e => setEur(e.target.value)} />
          </div>

          <div>
            <label>GBP</label>
            <output>{gbp.toFixed(2)}</output>
          </div>
          <button type="button" onClick={calculate}>Calculate</button>
        </form>
    </div>
  );
}

export default App;
