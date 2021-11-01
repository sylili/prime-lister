import { render, screen } from '@testing-library/react';
import App from './App';

test('renders prime finder header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Prime founder/i);
  expect(linkElement).toBeInTheDocument();
});
