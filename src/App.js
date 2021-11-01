import { useState } from 'react';
import './App.css';
import { findPrimes } from './primeLister/findPrimes';

function App() {
  const [upperLimit, setLimit] = useState('');
  const handleNumberChange = (event) => {
    setLimit(event.target.value);
  };

  const validatedInput = validateInput(upperLimit);
  const primes = getPrimes(validatedInput, upperLimit);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prime lister</h1>
        <h3>Insert the upper limit of the range you want to search in</h3>
        <input value={upperLimit} onChange={handleNumberChange} />
        <p>Result:</p>
        <p data-testid="result">{primes}</p>
      </header>
    </div>
  );
}

export default App;

function getPrimes(result, upperLimit) {
  if (result === '') {
    result = findPrimes(upperLimit);
  }
  return result;
}

function validateInput(upperLimit) {
  let result = '';
  if (upperLimit === '') {
    result = 'Insert a number!';
  } else if (isNaN(upperLimit)) {
    result = 'Invalid number!';
  }
  return result;
}
