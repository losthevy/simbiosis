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

// Users API
export const usersApi = {
    getMe: () => api.get('/users/me'),
    updateProfile: (data: { name?: string; image?: string }) => api.patch('/users/me', data),
    getPoints: () => api.get('/users/me/points'),
    getPointsHistory: () => api.get('/users/me/points/history'),
    getFriends: () => api.get('/users/me/friends'),
};

// Challenges API
export const challengesApi = {
    getAll: (status?: string) => api.get(`/challenges${status ? `?status=${status}` : ''}`),
    getById: (id: string) => api.get(`/challenges/${id}`),
    getMy: () => api.get('/challenges/my'),
    join: (id: string) => api.post(`/challenges/${id}/join`),
    updateProgress: (id: string, progress: number) => api.patch(`/challenges/${id}/progress`, { progress }),
};

// Bank Sampah API
export const bankSampahApi = {
    getLocations: () => api.get('/bank-sampah/locations'),
    getLocationById: (id: string) => api.get(`/bank-sampah/locations/${id}`),
    createDeposit: (data: { locationId: string; wasteType: string; weightKg: string; pointsEarned: number }) =>
        api.post('/bank-sampah/deposits', data),
    getMyDeposits: () => api.get('/bank-sampah/deposits/my'),
    createSchedule: (data: { locationId: string; scheduledDate: string; timeSlot: string }) =>
        api.post('/bank-sampah/schedules', data),
    getMySchedules: () => api.get('/bank-sampah/schedules/my'),
    cancelSchedule: (id: string) => api.delete(`/bank-sampah/schedules/${id}`),
};

// Rewards API
export const rewardsApi = {
    getAll: (category?: string) => api.get(`/rewards${category ? `?category=${category}` : ''}`),
    getById: (id: string) => api.get(`/rewards/${id}`),
    redeem: (id: string) => api.post(`/rewards/${id}/redeem`),
    getMyRedemptions: () => api.get('/rewards/redemptions/my'),
};

// Leaderboard API
export const leaderboardApi = {
    getGlobal: (limit?: number) => api.get(`/leaderboard${limit ? `?limit=${limit}` : ''}`),
    getMyRank: () => api.get('/leaderboard/my-rank'),
};

// Notifications API
export const notificationsApi = {
    getAll: () => api.get('/notifications'),
    markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
    delete: (id: string) => api.delete(`/notifications/${id}`),
};
