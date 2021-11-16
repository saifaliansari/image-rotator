/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rotate image app', () => {
  render(<App />);
  const headerElement = screen.getByText(/Image Rotator/i);
  expect(headerElement).toBeInTheDocument();
});
