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
    signUp: async (email: string, password: string, name: string) => {
        try {
            const res = await fetch(`${API_BASE_URL.replace('/api', '')}/api/auth/sign-up/email`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name }),
            });
            const text = await res.text();
            return text ? JSON.parse(text) : { error: { message: 'Empty response' } };
        } catch (e: any) {
            return { error: { message: e.message || 'Network error' } };
        }
    },

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

// Reports API
export const reportsApi = {
    getAll: () => api.get('/reports'),
    getById: (id: string) => api.get(`/reports/${id}`),
    create: (data: { title: string; reportType: string; data?: Record<string, unknown> }) =>
        api.post('/reports', data),
    update: (id: string, data: Partial<{ title: string; reportType: string; status: string }>) =>
        api.patch(`/reports/${id}`, data),
    delete: (id: string) => api.delete(`/reports/${id}`),
};

// Audits API
export const auditsApi = {
    getAll: () => api.get('/audits'),
    getById: (id: string) => api.get(`/audits/${id}`),
    create: (data: { title: string; findings?: string }) =>
        api.post('/audits', data),
    update: (id: string, data: Partial<{ title: string; findings: string; status: string }>) =>
        api.patch(`/audits/${id}`, data),
};

// Collections API (Admin)
export const collectionsApi = {
    getAll: (status?: string) => api.get(`/collections${status ? `?status=${status}` : ''}`),
    create: (data: { collectionCode: string; location: string; brand?: string; wasteType: string; weightKg: string }) =>
        api.post('/collections', data),
    verify: (id: string) => api.post(`/collections/${id}/verify`),
};

// Pickups API (Admin/Workforce)
export const pickupsApi = {
    getMy: () => api.get('/pickups/my'),
    getById: (id: string) => api.get(`/pickups/${id}`),
    start: (id: string) => api.post(`/pickups/${id}/start`),
    complete: (id: string, wasteCollected: string) => api.post(`/pickups/${id}/complete`, { wasteCollected }),
};

// Users API
export const usersApi = {
    getMe: () => api.get('/users/me'),
    updateProfile: (data: { name?: string; image?: string }) => api.patch('/users/me', data),
};

// Challenges API
export const challengesApi = {
    getAll: (status?: string) => api.get(`/challenges${status ? `?status=${status}` : ''}`),
    getById: (id: string) => api.get(`/challenges/${id}`),
    create: (data: any) => api.post('/challenges', data),
    update: (id: string, data: any) => api.patch(`/challenges/${id}`, data),
};

// Rewards API
export const rewardsApi = {
    getAll: () => api.get('/rewards'),
    create: (data: any) => api.post('/rewards', data),
};

// Notifications API
export const notificationsApi = {
    getAll: () => api.get('/notifications'),
    markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
};
