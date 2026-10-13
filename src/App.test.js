import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Moroccan cultural portal title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Royaume du Maroc/i);
  expect(titleElement).toBeInTheDocument();
});
