import { User } from "@/models/User";
import { apiFetch, ApiResponse } from "./client";

export interface LoginResponse {
    user: User;
}

export interface RegisterResponse {
    user: User;
}

export async function apiLogin(
    email_or_username: string,
    password: string
): Promise<ApiResponse<LoginResponse>> {
    return apiFetch<LoginResponse>("/login", {
        method: "POST",
        body: JSON.stringify({ email_or_username, password }),
    });
}

export async function apiRegister(
    username: string,
    password: string
): Promise<ApiResponse<RegisterResponse>> {
    return apiFetch<RegisterResponse>("/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
}
