import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await signIn(email, password);

        if (result.success) {
            navigate('/');
        } else {
            setError(result.error || 'Login gagal');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700/50">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-green-500/20">
                        <span className="material-symbols-outlined text-white text-3xl">admin_panel_settings</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-gray-400 mt-2">Masuk ke panel administrasi Simbiosis</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6 text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">error</span>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">mail</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition placeholder-gray-500"
                                placeholder="admin@simbiosis.id"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">lock</span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition placeholder-gray-500"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                Memproses...
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">login</span>
                                Masuk
                            </>
                        )}
                    </button>
                </form>

                {/* Demo Credentials Box */}
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                        <span className="material-symbols-outlined text-lg">science</span>
                        <span className="text-sm font-bold">Mode Prototipe</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-3">Gunakan kredensial berikut untuk mengakses fitur Admin:</p>
                    <div className="bg-gray-900/50 rounded-lg p-3 space-y-1">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Email:</span>
                            <code className="text-emerald-400 font-mono">admin@simbiosis.id</code>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Password:</span>
                            <code className="text-emerald-400 font-mono">admin123</code>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-center text-gray-500 text-sm">
                        Hanya administrator yang dapat mengakses panel ini
                    </p>
                </div>
            </div>
        </div>
    );
}
