import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';
import { UserProvider } from '@/context/UserContext';

describe('Profile Page', () => {
  it('renders and updates user info', () => {
    render(
      <UserProvider>
        <Profile />
      </UserProvider>
    );
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    expect(nameInput).toHaveValue('Test User');
    expect(emailInput).toHaveValue('test@email.com');
  });
});
