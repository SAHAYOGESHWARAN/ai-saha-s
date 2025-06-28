import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <UserContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      <div data-theme={theme}>{children}</div>
    </UserContext.Provider>
  );
};

export default UserContext;
