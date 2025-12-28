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
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="material-symbols-outlined text-white text-3xl">local_shipping</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Workforce App</h1>
                    <p className="text-blue-200 mt-2">Aplikasi untuk petugas lapangan Simbiosis</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3 rounded-xl mb-6 text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">error</span>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">Email</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-300">mail</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition placeholder-blue-300"
                                placeholder="petugas@simbiosis.id"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">Password</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-300">lock</span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition placeholder-blue-300"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
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
                    <div className="flex items-center gap-2 text-amber-300 mb-2">
                        <span className="material-symbols-outlined text-lg">science</span>
                        <span className="text-sm font-bold">Mode Prototipe</span>
                    </div>
                    <p className="text-blue-200/70 text-xs mb-3">Gunakan kredensial berikut untuk mengakses fitur Petugas:</p>
                    <div className="bg-white/5 rounded-lg p-3 space-y-1">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-blue-300/70">Email:</span>
                            <code className="text-emerald-400 font-mono">petugas@simbiosis.id</code>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-blue-300/70">Password:</span>
                            <code className="text-emerald-400 font-mono">petugas123</code>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-center text-blue-200 text-sm">
                        Hubungi admin jika ada kendala akses
                    </p>
                </div>
            </div>
        </div>
    );
}
