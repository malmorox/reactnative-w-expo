import { apiLogin, apiRegister } from "@/api/auth";
import { User } from "@/models/User";
import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
    user: User | null;
    login: (email_or_username: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email_or_username: string, password: string) => {
        const res = await apiLogin(email_or_username, password);

        setUser(res.data!.user);
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
