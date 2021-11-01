import { render, screen } from '@testing-library/react';
import App from './App';

test('renders prime finder header', () => {
  render(<App />);
  const linkElement = screen.getByText('Prime lister');
  expect(linkElement).toBeInTheDocument();
});

test('return instructions on empty input', () => {
  render(<App />);
  const result = screen.getByTestId('result');
  expect(result.textContent).toBe('Insert a number!');
});
