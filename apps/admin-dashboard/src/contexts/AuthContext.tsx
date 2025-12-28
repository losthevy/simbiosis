import { createContext, useContext, useState, type ReactNode } from 'react';

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

// Demo user for frontend-only deployment
const DEMO_USER: User = {
    id: 'demo-admin-001',
    email: 'admin@simbiosis.id',
    name: 'Admin Demo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB9YUBbNxnc2MHj4dUntODkLBSP7MOlJf6T414YdhCwIzhiM_S05eLtaabsN2aNPgxoVHX8loyMigrqCocBgplRXOUGDHxVfci7yfooKF7fpUfvNVBZIHEiyruJ8leWc2bYJ1IjJwM93ofUOcFEyNcs8YszBLg9xvj2e9mOShuO2MmtHTc6BEP6D0UUpA1a-3rU_x5dAfVBvzFfs8awiYs2jP4F1t0OhNteoKz4RapNS9jjywdAnTHyaCHEDv4tMb_1onIPYUml9c',
    role: 'admin',
};

export function AuthProvider({ children }: { children: ReactNode }) {
    // Demo mode: always authenticated with demo user
    const [user] = useState<User | null>(DEMO_USER);
    const [isLoading] = useState(false);

    const refreshUser = async () => {
        // Demo mode: no-op
    };

    const signIn = async (_email: string, _password: string) => {
        // Demo mode: always succeed
        return { success: true };
    };

    const signOut = async () => {
        // Demo mode: no-op, stay logged in
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: true, // Always authenticated in demo mode
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

