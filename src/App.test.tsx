import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /backend-minded/i })).toBeInTheDocument();
});
