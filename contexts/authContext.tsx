import { User } from "@/models/User";
import React, { createContext, ReactNode, useState } from "react";

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
        await new Promise((res) => setTimeout(res, 800));

        if (email === "beta@beta.es" && password === "1234") {
            setUser({
                id: 1,
                name: "Pruebas",
                email,
            });
        } else {
            throw new Error("Credenciales inválidas");
        }
    };

    const register = async (email: string, password: string) => {
        await new Promise((res) => setTimeout(res, 800));

        setUser({
            id: 2,
            name: "Nuevo Usuario",
            email,
        });
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
