import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
            setError(result.error || 'Login failed');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">eco</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Selamat Datang</h1>
                    <p className="text-gray-500 mt-2">Masuk ke akun Simbiosis kamu</p>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                            placeholder="nama@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50"
                    >
                        {isLoading ? 'Memproses...' : 'Masuk'}
                    </button>
                </form>

                {/* Demo Credentials Box */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div className="flex items-center gap-2 text-amber-600 mb-2">
                        <span className="material-symbols-outlined text-lg">science</span>
                        <span className="text-sm font-bold">Mode Prototipe</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">Gunakan kredensial berikut untuk mengakses fitur Warga:</p>
                    <div className="bg-white rounded-lg p-3 space-y-1 border border-amber-100">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Email:</span>
                            <code className="text-green-600 font-mono text-sm">warga@simbiosis.id</code>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Password:</span>
                            <code className="text-green-600 font-mono text-sm">warga123</code>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-4 text-gray-500">
                    Belum punya akun?{' '}
                    <Link to="/register" className="text-green-600 font-semibold hover:underline">
                        Daftar
                    </Link>
                </p>
            </div>
        </div>
    );
}
