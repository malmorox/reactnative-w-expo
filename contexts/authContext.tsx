import { User } from "@/models/User";
import React, { createContext, ReactNode, useState } from "react";
import { apiLogin, apiRegister } from "@/api/auth";

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const res = await apiLogin(email, password);
    };

    const register = async (email: string, password: string) => {
        const res = await apiRegister(email, password);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
