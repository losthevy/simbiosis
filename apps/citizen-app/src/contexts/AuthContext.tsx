import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authApi, usersApi } from '../lib/api';

interface User {
    id: string;
    email: string;
    name: string;
    image?: string;
    role: string;
}

interface EcoPoints {
    balance: number;
    monetaryValue: string;
}

interface AuthContextType {
    user: User | null;
    ecoPoints: EcoPoints | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    signUp: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
    signOut: () => Promise<void>;
    refreshUser: () => Promise<void>;
    refreshPoints: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [ecoPoints, setEcoPoints] = useState<EcoPoints | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = async () => {
        try {
            const session = await authApi.getSession();
            if (session?.user) {
                setUser(session.user);
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        }
    };

    const refreshPoints = async () => {
        if (!user) return;
        try {
            const response = await usersApi.getPoints();
            if (response.data) {
                setEcoPoints(response.data as EcoPoints);
            }
        } catch {
            // Ignore error
        }
    };

    useEffect(() => {
        const init = async () => {
            await refreshUser();
            setIsLoading(false);
        };
        init();
    }, []);

    useEffect(() => {
        if (user) {
            refreshPoints();
        } else {
            setEcoPoints(null);
        }
    }, [user]);

    const signIn = async (email: string, password: string) => {
        try {
            const result = await authApi.signIn(email, password);
            if (result.error) {
                return { success: false, error: result.error.message || 'Login failed' };
            }
            await refreshUser();
            return { success: true };
        } catch (error: any) {
            return { success: false, error: error.message || 'Login failed' };
        }
    };

    const signUp = async (email: string, password: string, name: string) => {
        try {
            const result = await authApi.signUp(email, password, name);
            if (result.error) {
                return { success: false, error: result.error.message || 'Registration failed' };
            }
            await refreshUser();
            return { success: true };
        } catch (error: any) {
            return { success: false, error: error.message || 'Registration failed' };
        }
    };

    const signOut = async () => {
        await authApi.signOut();
        setUser(null);
        setEcoPoints(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                ecoPoints,
                isLoading,
                isAuthenticated: !!user,
                signIn,
                signUp,
                signOut,
                refreshUser,
                refreshPoints,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
