import { User } from "@/models/User";
import React, { createContext, ReactNode, useState } from "react";

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
        
        } catch (error) {
        
        } finally {
        
        }
    };

    const register = async (email: string, password: string) => {
        try {
        
        } catch (error) {
        
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
