
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Verification() {
    const navigate = useNavigate();
    const [wasteType, setWasteType] = useState('plastik');
    const [weight, setWeight] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = () => {
        setShowSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    if (showSuccess) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-surface-light dark:bg-surface-dark p-6">
                <div className="flex flex-col items-center gap-4 text-center animate-in zoom-in duration-300">
                    <div className="size-24 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shadow-lg shadow-green-500/20">
                        <span className="material-symbols-outlined text-6xl">check_circle</span>
                    </div>
                    <h1 className="text-2xl font-black text-text-main dark:text-white">Verifikasi Berhasil!</h1>
                    <p className="text-text-muted">Poin telah dikirim ke warga.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden flex-col">
            <header className="h-16 flex items-center gap-4 px-6 border-b border-[#f0f4f2] dark:border-[#2a3c30] bg-surface-light dark:bg-surface-dark shrink-0">
                <button onClick={() => navigate('/')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#25382e] transition-colors">
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">arrow_back</span>
                </button>
                <h1 className="text-lg font-bold">Verifikasi Pickup</h1>
            </header>

            <main className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Customer Card */}
                <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex items-start gap-4">
                    <div className="size-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <span className="material-symbols-outlined text-3xl">storefront</span>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-bold text-lg leading-tight">Toko Maju Jaya</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Jl. Merdeka No. 10</p>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 rounded-md text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Terverifikasi QR</span>
                        </div>
                    </div>
                </div>

                {/* Waste Form */}
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm space-y-6">
                    <h3 className="font-bold text-lg border-b border-gray-100 dark:border-gray-700 pb-4">Detail Sampah</h3>

                    <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-600 dark:text-gray-300">Kategori Sampah</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setWasteType('plastik')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${wasteType === 'plastik' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200'}`}
                            >
                                <span className="material-symbols-outlined text-3xl">water_bottle</span>
                                <span className="font-bold text-sm">Plastik</span>
                            </button>
                            <button
                                onClick={() => setWasteType('kertas')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${wasteType === 'kertas' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200'}`}
                            >
                                <span className="material-symbols-outlined text-3xl">newspaper</span>
                                <span className="font-bold text-sm">Kertas/Kardus</span>
                            </button>
                            <button
                                onClick={() => setWasteType('logam')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${wasteType === 'logam' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200'}`}
                            >
                                <span className="material-symbols-outlined text-3xl">construction</span>
                                <span className="font-bold text-sm">Logam</span>
                            </button>
                            <button
                                onClick={() => setWasteType('organik')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${wasteType === 'organik' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200'}`}
                            >
                                <span className="material-symbols-outlined text-3xl">compost</span>
                                <span className="font-bold text-sm">Organik</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-600 dark:text-gray-300">Berat Total (kg)</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="0.0"
                                className="w-full text-4xl font-black p-4 text-center bg-gray-50 dark:bg-[#25382e] rounded-xl outline-none focus:ring-2 focus:ring-primary border-transparent"
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-gray-400">KG</span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <label className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#25382e] rounded-xl cursor-pointer">
                            <div className="size-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                <span className="material-symbols-outlined">add_a_photo</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-sm">Foto Bukti (Opsional)</p>
                                <p className="text-xs text-text-muted">Klik untuk ambil foto tumpukan</p>
                            </div>
                        </label>
                    </div>
                </div>
            </main>

            <footer className="p-6 bg-surface-light dark:bg-surface-dark border-t border-[#f0f4f2] dark:border-[#2a3c30]">
                <button
                    onClick={handleSubmit}
                    disabled={!weight}
                    className="w-full py-4 bg-primary text-text-main font-black text-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined">check_circle</span>
                    Konfirmasi & Selesai
                </button>
            </footer>
        </div>
    );
}

export default Verification;
