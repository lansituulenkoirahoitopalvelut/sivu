import { render, screen } from '@testing-library/react';
import App from '../App';
import logo from '../images/logo.png';

test('renders the logo', () => {
  render(<App />);
  const image = screen.getByAltText(/Logo/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', logo);
  expect(image).toHaveAttribute('alt', 'Logo');
});
