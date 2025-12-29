import { useNavigate } from 'react-router-dom';

function SimbiAI() {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center justify-between px-4 sm:px-8 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">arrow_back</span>
                        </button>
                        <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">smart_toy</span>
                            Simbi AI
                        </h2>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-4xl mx-auto">

                        <div className="text-center mb-10">
                            <span className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-4">
                                <span className="material-symbols-outlined text-4xl">recycling</span>
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black mb-4">Transparansi Produsen</h1>
                            <p className="text-text-muted max-w-xl mx-auto">
                                Cek jejak sampah paska-konsumsi dari berbagai merek. Data ini dikumpulkan menggunakan teknologi Simbi AI Computer Vision di berbagai titik pengelolaan sampah.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                                        <span className="font-bold text-xl">D</span>
                                    </div>
                                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">High Impact</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">Danone (Aqua)</h3>
                                <p className="text-sm text-text-muted mb-4">Kategori: Minuman Dalam Kemasan</p>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">
                                    <div className="flex justify-between mb-1">
                                        <span>Tingkat Daur Ulang</span>
                                        <span className="font-bold text-orange-500">45%</span>
                                    </div>
                                    <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                        <div className="bg-orange-500 h-full rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                                        <span className="font-bold text-xl">U</span>
                                    </div>
                                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Medium Impact</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">Unilever</h3>
                                <p className="text-sm text-text-muted mb-4">Kategori: Consumer Goods</p>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">
                                    <div className="flex justify-between mb-1">
                                        <span>Tingkat Daur Ulang</span>
                                        <span className="font-bold text-yellow-500">62%</span>
                                    </div>
                                    <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: '62%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-black rounded-2xl p-8 text-white text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Pindai Sampahmu</h3>
                                <p className="text-gray-400 mb-6">Kontribusikan datamu sendiri. Pindai kemasan produk untuk melihat skor keberlanjutannya.</p>
                                <button className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-primary-dark transition-colors">
                                    Buka Pemindai AI
                                </button>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter blur-sm"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SimbiAI;
