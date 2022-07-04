import { render, screen } from '@testing-library/react';
import App from './TenCorMotor';
//import App2 from './App2';

test('renders learn react link', () => {
  render(<App />);
//  render(<App2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
