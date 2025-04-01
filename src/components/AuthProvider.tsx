
import { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signOut: () => void;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  signOut: () => {},
  signIn: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock sign in function - replace with your own auth logic
  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock successful login after a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock user
      setUser({
        id: '123',
        email: email
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    signOut,
    signIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
