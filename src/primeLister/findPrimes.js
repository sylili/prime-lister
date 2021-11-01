const noPrimeUnder2 = 'No primes were found!';

export function findPrimes(upToLimit) {
  if (upToLimit < 2) {
    return noPrimeUnder2;
  }
  const arrayOfNumbersExcluding1 = getArrayForPrimesExcluding1(upToLimit);
  const primesAndNulls = getPrimesAndNulls(upToLimit, arrayOfNumbersExcluding1);
  return removeNullsFromArray(primesAndNulls).join(', ');
}

function getArrayForPrimesExcluding1(upperLimit) {
  upperLimit = Number(upperLimit);
  let arrayOfNumbers = getArrayOfNumbers(upperLimit);
  arrayOfNumbers = exclude1FromPrimeList(arrayOfNumbers);
  return arrayOfNumbers;
}

function getArrayOfNumbers(upperLimit) {
  const listOfNumbers = [];
  for (var i = 1; i <= upperLimit; i++) {
    listOfNumbers.push(i);
  }
  return listOfNumbers;
}

function exclude1FromPrimeList(arrayOfNumbers) {
  arrayOfNumbers[0] = null;
  return arrayOfNumbers;
}

function getPrimesAndNulls(upToLimit, arrayOfNumbers) {
  for (let index = 2; index < upToLimit; index++) {
    const currentNumber = arrayOfNumbers[index];
    insertNullIfNotPrime(currentNumber, arrayOfNumbers, index);
  }
  return arrayOfNumbers;
}

function insertNullIfNotPrime(currentNumber, arrayOfNumbers, index) {
  const maxDivider = Math.ceil(Math.sqrt(currentNumber));
  for (let j = 2; j <= maxDivider; j++) {
    if (currentNumber % j === 0) {
      arrayOfNumbers[index] = null;
      break;
    }
  }
}

function removeNullsFromArray(arrayOfPrimesAndNulls) {
  const arrayWithoutNulls = arrayOfPrimesAndNulls.filter((x) => x !== null);
  return arrayWithoutNulls;
}
