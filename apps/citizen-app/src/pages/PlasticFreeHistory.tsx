import { useNavigate } from 'react-router-dom';

function PlasticFreeHistory() {
    const navigate = useNavigate();

    // Dummy data for history
    const historyData = [
        {
            id: 1,
            location: "Minimarket Sejahtera",
            date: "Senin, 27 Okt 2025 • 09:30",
            status: "Berhasil Dilaporkan",
            points: "+14"
        },
        {
            id: 2,
            location: "Warung Bu Siti",
            date: "Minggu, 26 Okt 2025 • 15:45",
            status: "Berhasil Dilaporkan",
            points: "+14"
        }
    ];

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex-shrink-0 z-10">
                    <div className="flex items-center gap-6">
                        <h1 className="text-text-main dark:text-white text-2xl font-black tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-4xl">recycling</span>
                            SIMBIOSIS
                        </h1>
                        <div className="h-8 w-px bg-border-light dark:bg-border-dark hidden sm:block"></div>
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Riwayat Laporan</h2>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
                    <div className="max-w-3xl mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => navigate('/challenge-detail-plastic-free')}
                                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors w-fit mb-1"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                <span className="text-sm font-semibold">Kembali ke Tantangan</span>
                            </button>
                            <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Riwayat Mingguan Bebas Plastik</h1>
                            <p className="text-lg text-text-muted dark:text-gray-400">Laporan aktivitas penghindaran plastik Anda.</p>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                            {historyData.length > 0 ? (
                                <div className="divide-y divide-border-light dark:divide-border-dark">
                                    {historyData.map((item) => (
                                        <div key={item.id} className="p-6 flex items-center justify-between hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                                    <span className="material-symbols-outlined">qr_code_scanner</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-text-main dark:text-white text-lg">{item.location}</h3>
                                                    <p className="text-sm text-text-muted">{item.date}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800 mb-1">
                                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                                    {item.status}
                                                </div>
                                                <p className="text-xs font-bold text-primary">{item.points} Dampak</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 text-center flex flex-col items-center justify-center text-text-muted">
                                    <div className="h-16 w-16 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl opacity-50">history</span>
                                    </div>
                                    <p className="font-bold text-lg mb-1">Belum ada riwayat</p>
                                    <p className="text-sm">Scan QR code di merchant mitra untuk mulai melapor.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PlasticFreeHistory;
