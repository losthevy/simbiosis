const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

interface ApiResponse<T> {
    data?: T;
    error?: string;
}

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                ...options,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                return { error: data.error || 'Request failed' };
            }

            return { data: data.data };
        } catch (error) {
            return { error: 'Network error' };
        }
    }

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'GET' });
    }

    async post<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    async patch<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'PATCH',
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'DELETE' });
    }
}

export const api = new ApiClient(API_BASE_URL);

// Auth API
export const authApi = {
    signIn: async (email: string, password: string) => {
        try {
            const res = await fetch(`${API_BASE_URL.replace('/api', '')}/api/auth/sign-in/email`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const text = await res.text();
            return text ? JSON.parse(text) : { error: { message: 'Empty response' } };
        } catch (e: any) {
            return { error: { message: e.message || 'Network error' } };
        }
    },

    signOut: async () => {
        try {
            const res = await fetch(`${API_BASE_URL.replace('/api', '')}/api/auth/sign-out`, {
                method: 'POST',
                credentials: 'include',
            });
            const text = await res.text();
            return text ? JSON.parse(text) : {};
        } catch {
            return {};
        }
    },

    getSession: async () => {
        try {
            const res = await fetch(`${API_BASE_URL.replace('/api', '')}/api/auth/get-session`, {
                credentials: 'include',
            });
            const text = await res.text();
            return text ? JSON.parse(text) : null;
        } catch {
            return null;
        }
    },
};

// Users API
export const usersApi = {
    getMe: () => api.get('/users/me'),
};

// Pickups API (Workforce)
export const pickupsApi = {
    getMy: () => api.get('/pickups/my'),
    getById: (id: string) => api.get(`/pickups/${id}`),
    start: (id: string) => api.post(`/pickups/${id}/start`),
    complete: (id: string, wasteCollected: string) => api.post(`/pickups/${id}/complete`, { wasteCollected }),
};

// Collections API
export const collectionsApi = {
    create: (data: { collectionCode: string; location: string; brand?: string; wasteType: string; weightKg: string }) =>
        api.post('/collections', data),
};

// Notifications API
export const notificationsApi = {
    getAll: () => api.get('/notifications'),
    markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
};
