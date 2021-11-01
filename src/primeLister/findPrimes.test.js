import { findPrimes } from './findPrimes';

test('in case of 0 the result is empty', () => {
  const result = findPrimes(0);
  expect(result).toBe('No primes were found!');
});

test('in case of 1 the result is empty', () => {
  const result = findPrimes(1);
  expect(result).toBe('No primes were found!');
});

test('in case of 2 the result is 2', () => {
  const result = findPrimes(2);
  expect(result).toBe('2');
});

test('in case of 10 the result is 2, 3, 5, 7', () => {
  const result = findPrimes(10);
  expect(result).toStrictEqual('2, 3, 5, 7');
});
