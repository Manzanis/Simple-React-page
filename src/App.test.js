import { render, screen } from '@testing-library/react';
import Full from './App';

test('renders learn react link', () => {
  render(<Full />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
