import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SimbiAI() {
    const navigate = useNavigate();
    const [isScanning, setIsScanning] = useState(false);
    const [detectedBrands, setDetectedBrands] = useState<any[]>([]);

    const startScan = () => {
        setIsScanning(true);
        setDetectedBrands([]);

        setTimeout(() => {
            setIsScanning(false);
            setDetectedBrands([
                { name: 'Danone (Aqua)', count: 45, type: 'PET Plastic' },
                { name: 'Unilever', count: 32, type: 'HDPE Sachet' },
                { name: 'Mayora', count: 28, type: 'Flexible Packaging' }
            ]);
        }, 3000);
    };

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
                            Simbi AI Field Tool
                        </h2>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-3xl mx-auto space-y-6">

                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <h1 className="text-2xl font-bold">Identifikasi Sampah Lapangan</h1>
                                <p className="text-text-muted text-sm mt-1">Gunakan kamera untuk memindai tumpukan sampah dan mengidentifikasi produsen.</p>
                            </div>

                            <div className="aspect-[4/3] bg-black relative flex items-center justify-center overflow-hidden">
                                {isScanning ? (
                                    <>
                                        <div className="absolute inset-0 z-20 pointer-events-none">
                                            <div className="w-full h-1 bg-primary/80 shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-[scan_1.5s_linear_infinite]"></div>
                                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-primary/50 w-full"></div>
                                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-primary/50 h-full"></div>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-red-600 animate-pulse w-3 h-3 rounded-full"></div>
                                        <div className="absolute top-4 left-9 text-white text-xs font-mono">REC</div>
                                        <div className="absolute bottom-4 left-4 text-green-400 text-xs font-mono">SCANNING...</div>
                                    </>
                                ) : (
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                                            <span className="material-symbols-outlined text-4xl text-gray-400">photo_camera</span>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-6">Arahkan kamera ke tumpukan sampah</p>
                                        <button
                                            onClick={startScan}
                                            className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2 mx-auto"
                                        >
                                            <span className="material-symbols-outlined">shutter_speed</span>
                                            Mulai Pindai
                                        </button>
                                    </div>
                                )}

                                <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605600659873-d808a13a4d2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transition-opacity duration-300 ${isScanning ? 'opacity-40' : 'opacity-0'}`}></div>
                            </div>

                            {detectedBrands.length > 0 && (
                                <div className="p-6 bg-gray-50 dark:bg-black/20">
                                    <h3 className="font-bold text-lg mb-4">Hasil Identifikasi</h3>
                                    <div className="space-y-3">
                                        {detectedBrands.map((brand, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">{idx + 1}</span>
                                                    <div>
                                                        <p className="font-bold text-sm text-text-main dark:text-white">{brand.name}</p>
                                                        <p className="text-xs text-text-muted">{brand.type}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="block font-bold text-lg text-primary">{brand.count}</span>
                                                    <span className="text-[10px] text-text-muted">unit</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity">
                                        Simpan & Kirim Laporan
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default SimbiAI;
