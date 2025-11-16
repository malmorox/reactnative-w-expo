const BASE_URL = "http://127.0.0.1:8000"; 

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export async function apiFetch<T>(
    path: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        });
    
        const data = await response.json().catch(() => null);

        if (!response.ok) {
            const message =
                data?.detail ||
                data?.message ||
                "Error en la petición";

            return {
                success: false,
                error: message,
            };
        }

        return {
            success: true,
            data: data as T,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || "Error de red",
        };
    }
}
