import { useState } from 'react';
import './App.css';
import { findPrimes } from './primeFounder/findPrimes';

function App() {
  const [upperLimit, setLimit] = useState('');

  const handleNumberChange = (event) => {
    setLimit(event.target.value);
  };

  const primes = findPrimes(upperLimit);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prime founder</h1>
        <h3>Insert the upper limit of the range you want to search in</h3>
        <input value={upperLimit} onChange={handleNumberChange} />
        <p>{primes}</p>
      </header>
    </div>
  );
}

export default App;
