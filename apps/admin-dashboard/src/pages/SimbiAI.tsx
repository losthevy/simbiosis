import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SimbiAI() {
    const navigate = useNavigate();
    const [isScanning, setIsScanning] = useState(false);
    const [detectedBrands, setDetectedBrands] = useState<any[]>([]);

    const startScan = () => {
        setIsScanning(true);
        setDetectedBrands([]);

        // Simulation of scanning process
        setTimeout(() => {
            setIsScanning(false);
            // Mock detected results
            setDetectedBrands([
                { name: 'Danone (Aqua)', count: 45, type: 'PET Plastic', confidence: 98 },
                { name: 'Unilever', count: 32, type: 'HDPE Sachet', confidence: 95 },
                { name: 'Mayora', count: 28, type: 'Flexible Packaging', confidence: 92 },
                { name: 'Coca-Cola', count: 15, type: 'PET Plastic', confidence: 97 },
                { name: 'Indofood', count: 12, type: 'Multilayer', confidence: 89 },
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
                            Simbi AI
                        </h2>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Hero Section */}
                        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                            <div className="relative z-10 max-w-3xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold border border-primary/30 mb-6 backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Computer Vision 2.0 Active
                                </span>
                                <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                                    Producer Accountability <span className="text-primary block">Dashboard</span>
                                </h1>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                                    Menggunakan AI Computer Vision canggih untuk mengidentifikasi merek sampah yang mendominasi di TPA.
                                    Data ini berfungsi sebagai bukti forensik untuk penerapan Extended Producer Responsibility (EPR) yang lebih transparan.
                                    <br /><br />
                                    <span className="text-sm italic text-gray-400">"Data akurat dapat meningkatkan tingkat daur ulang hingga 80% dalam satu dekade." - Laporan Komisi Eropa (2023)</span>
                                </p>
                            </div>
                        </div>

                        {/* Analysis Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Computer Vision Simulator */}
                            <div className="bg-surface-light dark:bg-surface-dark p-1 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                                <div className="bg-black/95 rounded-xl aspect-video relative flex items-center justify-center overflow-hidden group">

                                    {/* Scan Line Animation */}
                                    {isScanning && (
                                        <div className="absolute inset-0 z-20 pointer-events-none">
                                            <div className="w-full h-1 bg-primary/80 shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                                            <div className="absolute inset-0 bg-primary/5"></div>
                                        </div>
                                    )}

                                    {/* Background Image / Placeholder */}
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>

                                    {/* UI Overlays */}
                                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-xs font-mono text-green-400 flex items-center gap-2 shadow-lg">
                                            <span className="material-symbols-outlined text-[14px]">videocam</span>
                                            LIVE FEED: CAM-04 (TPA BANTAGEBANG)
                                        </div>
                                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-xs font-mono text-blue-400 flex items-center gap-2 shadow-lg">
                                            <span className="material-symbols-outlined text-[14px]">analytics</span>
                                            MODEL: YOLO-v8-Darknet (OBJ DETECTION)
                                        </div>
                                    </div>

                                    {!isScanning && detectedBrands.length === 0 && (
                                        <div className="z-30 text-center">
                                            <button
                                                onClick={startScan}
                                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-black transition-all duration-200 bg-primary font-lg rounded-xl hover:bg-primary-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-gray-900"
                                            >
                                                <span className="material-symbols-outlined">center_focus_strong</span>
                                                Jalankan Analisis AI
                                            </button>
                                            <p className="mt-4 text-gray-400 text-sm font-mono">Klik untuk memindai sampel sampah terbaru</p>
                                        </div>
                                    )}

                                    {/* Bounding Boxes Simulation */}
                                    {(isScanning || detectedBrands.length > 0) && (
                                        <div className="absolute inset-0 z-10 pointer-events-none p-12">
                                            {/* Mock Bounding Boxes - Random positions */}
                                            <div className={`absolute top-[30%] left-[20%] w-[15%] h-[20%] border-2 border-red-500 rounded-lg flex items-start justify-center transition-opacity duration-300 ${isScanning ? 'opacity-80 animate-pulse' : 'opacity-100'}`}>
                                                <span className="bg-red-500 text-white text-[10px] px-1 font-bold absolute -top-4 left-[-2px]">PLASTIC (PET)</span>
                                            </div>
                                            <div className={`absolute bottom-[20%] right-[30%] w-[12%] h-[15%] border-2 border-yellow-500 rounded-lg flex items-start justify-center transition-opacity duration-300 delay-100 ${isScanning ? 'opacity-80 animate-pulse' : 'opacity-100'}`}>
                                                <span className="bg-yellow-500 text-black text-[10px] px-1 font-bold absolute -top-4 left-[-2px]">SACHET (MLB)</span>
                                            </div>
                                            <div className={`absolute top-[50%] right-[10%] w-[18%] h-[25%] border-2 border-blue-500 rounded-lg flex items-start justify-center transition-opacity duration-300 delay-200 ${isScanning ? 'opacity-80 animate-pulse' : 'opacity-100'}`}>
                                                <span className="bg-blue-500 text-white text-[10px] px-1 font-bold absolute -top-4 left-[-2px]">CARTON</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 bg-gray-900 text-gray-300 font-mono text-xs flex justify-between items-center rounded-b-xl border-t border-gray-800">
                                    <span>SYSTEM STATUS: {isScanning ? 'PROCESSING...' : detectedBrands.length > 0 ? 'ANALYSIS COMPLETE' : 'READY'}</span>
                                    <span>CONFIDENCE THRESHOLD: 85%</span>
                                </div>
                            </div>

                            {/* Results Panel */}
                            <div className="space-y-6">
                                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col h-full">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">leaderboard</span>
                                        Dominasi Merek (Real-time)
                                    </h3>

                                    {detectedBrands.length > 0 ? (
                                        <div className="space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-500">
                                            {detectedBrands.map((brand, idx) => (
                                                <div key={idx} className="group">
                                                    <div className="flex justify-between text-sm mb-2 font-medium">
                                                        <span className="text-text-main dark:text-white flex items-center gap-2">
                                                            <span className="w-6 text-center text-text-muted text-xs">#{idx + 1}</span>
                                                            {brand.name}
                                                        </span>
                                                        <span className="text-text-muted">{brand.count} item ({brand.type})</span>
                                                    </div>
                                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-orange-500' : idx === 2 ? 'bg-yellow-500' : 'bg-primary'}`}
                                                            style={{ width: `${(brand.count / 50) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="text-[10px] text-right mt-1 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                                                        AI Confidence: {brand.confidence}%
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 flex gap-3 items-start">
                                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                                                <div className="text-sm text-blue-800 dark:text-blue-300">
                                                    <strong>Implikasi EPR:</strong> Berdasarkan data ini, perusahaan Danone dan Unilever diwajibkan meningkatkan kontribusi biaya pengelolaan sampah sebesar 15% bulan ini sesuai mandat regulasi lokal.
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                                                <span className="material-symbols-outlined text-3xl text-gray-400">query_stats</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-text-muted mb-2">Menunggu Data Analisis</h4>
                                            <p className="text-sm text-text-muted max-w-xs">
                                                Silakan jalankan simulasi AI di panel sebelah kiri untuk melihat data dominasi merek secara real-time.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default SimbiAI;
