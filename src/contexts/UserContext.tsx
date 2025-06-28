
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'support' | 'manager';
  avatar?: string;
  preferences: {
    notifications: boolean;
    voiceCommands: boolean;
    theme: 'dark' | 'light' | 'system';
  };
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication - in real app, this would call an API
    if (email && password.length >= 6) {
      const demoUser: User = {
        id: '1',
        name: 'Sahayoheshwaran',
        email: email,
        role: email.includes('admin') ? 'admin' : 'user',
        avatar: undefined,
        preferences: {
          notifications: true,
          voiceCommands: true,
          theme: 'system'
        }
      };
      setUser(demoUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <UserContext.Provider value={{
      user,
      login,
      logout,
      updateUser,
      isAuthenticated
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
