import { findPrimes } from './findPrimes';

test('prime founder returns truthy', () => {
  const linkElement = findPrimes('');
  expect(linkElement).toBeTruthy();
});
