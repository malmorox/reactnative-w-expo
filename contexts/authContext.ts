import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User } from @/types";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      
    } catch (err) {
      
    } finally {
      
    }
  };

  const register = async (email: string, password: string) => {
    try {
      
    } catch (err) {
      
    } finally {
      
    }
  };

  const logout = () => {
    
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
