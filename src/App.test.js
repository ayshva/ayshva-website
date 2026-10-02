import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

beforeEach(() => { window.scrollTo = jest.fn(); });

test('preserves banner, assurances, navigation and shopping interactions', () => {
  render(<App />);
  expect(within(screen.getByRole('region', { name: 'Product assurances' })).getAllByRole('img')).toHaveLength(4);
  fireEvent.click(screen.getByRole('button', { name: /SHOP NOW/ }));
  fireEvent.click(screen.getByRole('radio', { name: /500g best value/ }));
  fireEvent.click(screen.getByRole('button', { name: 'Increase quantity' }));
  fireEvent.click(screen.getAllByRole('button', { name: 'Add to Cart' })[0]);
  fireEvent.click(screen.getByRole('button', { name: 'Open cart' }));
  expect(screen.getByText('₹398')).toBeInTheDocument();
  expect(decodeURIComponent(screen.getByRole('link', { name: 'Proceed to checkout' }).href)).toContain('2 × AYSHVA Turmeric Powder (500g)');
  fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
  expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByText('Your cart')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
  fireEvent.click(screen.getAllByRole('link', { name: 'Our Story' })[0]);
  fireEvent.click(screen.getAllByRole('link', { name: 'Process & Quality' })[0]);
  expect(screen.getByText('Harvesting photo')).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('link', { name: 'Contact' })[0]);
  expect(screen.getByLabelText('Your name')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'AYSHVA home' }));
  expect(screen.getByRole('heading', { name: 'From Our Farm To Your Kitchen' })).toBeInTheDocument();
});
