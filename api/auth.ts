import { apiFetch, ApiResponse } from "./client";
import { User } from "@/models/User";

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse {
  user: User;
}

export async function apiLogin(
  email: string,
  password: string
): Promise<ApiResponse<LoginResponse>> {
  return apiFetch<LoginResponse>("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function apiRegister(
  email: string,
  password: string
): Promise<ApiResponse<RegisterResponse>> {
  return apiFetch<RegisterResponse>("/register", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}
