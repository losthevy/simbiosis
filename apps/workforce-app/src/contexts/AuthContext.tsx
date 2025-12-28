import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authApi } from '../lib/api';

interface User {
    id: string;
    email: string;
    name: string;
    image?: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    signOut: () => Promise<void>;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = async () => {
        try {
            const session = await authApi.getSession();
            if (session?.user) {
                // Verify user has workforce or admin role
                if (session.user.role === 'worker' || session.user.role === 'admin') {
                    setUser(session.user);
                } else {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        }
    };

    useEffect(() => {
        const init = async () => {
            await refreshUser();
            setIsLoading(false);
        };
        init();
    }, []);

    const signIn = async (email: string, password: string) => {
        try {
            const result = await authApi.signIn(email, password);
            if (result.error) {
                return { success: false, error: result.error.message || 'Login gagal' };
            }

            // Refresh user and check role
            await refreshUser();

            // Check if user has workforce or admin role
            const session = await authApi.getSession();
            if (session?.user?.role !== 'worker' && session?.user?.role !== 'admin') {
                await authApi.signOut();
                setUser(null);
                return { success: false, error: 'Akses ditolak. Hanya petugas yang dapat masuk.' };
            }

            return { success: true };
        } catch (error: any) {
            return { success: false, error: error.message || 'Login gagal' };
        }
    };

    const signOut = async () => {
        await authApi.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: !!user,
                signIn,
                signOut,
                refreshUser,
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
