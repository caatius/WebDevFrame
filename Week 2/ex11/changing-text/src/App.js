import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [myValue,setMyValue] = useState()
  return (
  <form>
    <div>
      <label>Type something here</label>
      <input type="text" value={myValue} onChange={e => setMyValue(e.target.value)} />
    </div>
    <div>
      <label>My value is </label>
      <output>{myValue}</output>
    </div>
  </form>
  );
  }

export default App;
