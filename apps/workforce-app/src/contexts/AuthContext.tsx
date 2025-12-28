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
    id: 'demo-worker-001',
    email: 'petugas@simbiosis.id',
    name: 'Petugas Demo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8',
    role: 'worker',
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

