import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Project Coach heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Project Coach/i);
  expect(headingElement).toBeInTheDocument();
}); 