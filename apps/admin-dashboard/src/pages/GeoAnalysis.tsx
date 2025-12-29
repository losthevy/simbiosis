import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function GeoAnalysis() {
    const navigate = useNavigate();

    // Mock Data for TPAs
    const tpaData = [
        { id: 1, name: 'TPA Bantar Gebang', status: 'Critical', capacity: 92, activeTrends: '+2%', location: 'Bekasi' },
        { id: 2, name: 'TPA Piyungan', status: 'Active', capacity: 65, activeTrends: '-1%', location: 'Yogyakarta' },
        { id: 3, name: 'TPA Sarimukti', status: 'Idle', capacity: 0, activeTrends: '0%', location: 'Bandung Barat' }, // Idle
    ];

    // Mock Data for AI Recommendations
    const recommendations = [
        {
            id: 1,
            type: 'expansion',
            title: 'Ekspansi Lahan Disarankan',
            desc: 'Area Selatan (Zona B2) memiliki kontur tanah stabil seluas 5 Ha. Cocok untuk instalasi pengolahan limbah organik baru.',
            coords: 'Zona B2 (-6.2, 107.1)',
            impact: 'High Impact'
        },
        {
            id: 2,
            type: 'closure',
            title: 'Peringatan Saturasi Tanah',
            desc: 'Sektor Utara TPA Bantar Gebang mendeteksi kadar lindi tinggi. Disarankan penghentian dumping sementara di sektor ini.',
            coords: 'Sektor Utara',
            impact: 'Critical'
        }
    ];

    // Resources State
    const [activeTrucks, setActiveTrucks] = useState(45);
    const [activeStaff, setActiveStaff] = useState(128);

    // Simulate live data
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTrucks(prev => Math.max(40, Math.min(50, prev + Math.floor(Math.random() * 3) - 1)));
            setActiveStaff(prev => Math.max(120, Math.min(135, prev + Math.floor(Math.random() * 3) - 1)));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400';
            case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400';
            case 'Idle': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-8 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/')} className="hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-text-muted">arrow_back</span>
                        </button>
                        <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">public</span>
                            Geo Analisis & Alokasi Pintar
                        </h2>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-7xl mx-auto space-y-6">

                        {/* 1. Resource Sentinel Dashboard */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Trucks Card */}
                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-9xl text-blue-500">local_shipping</span>
                                </div>
                                <h3 className="text-text-muted font-medium text-sm">Armada Truk Aktif</h3>
                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-text-main dark:text-white">{activeTrucks}</span>
                                    <span className="text-xs text-text-muted">/ 50 Unit</span>
                                </div>
                                <p className="text-xs text-green-500 font-bold mt-2 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    92% Operasional
                                </p>
                            </div>

                            {/* Staff Card */}
                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-9xl text-orange-500">engineering</span>
                                </div>
                                <h3 className="text-text-muted font-medium text-sm">Petugas Lapangan</h3>
                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-text-main dark:text-white">{activeStaff}</span>
                                    <span className="text-xs text-text-muted">Personil</span>
                                </div>
                                <p className="text-xs text-blue-500 font-bold mt-2 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">group</span>
                                    Shift Pagi Aktif
                                </p>
                            </div>

                            {/* Alert Card */}
                            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 shadow-sm border border-red-200 dark:border-red-800 relative overflow-hidden">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-red-800 dark:text-red-400 font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined">warning</span>
                                            Peringatan Sistem
                                        </h3>
                                        <p className="text-sm text-red-600 dark:text-red-300 mt-2 leading-relaxed">
                                            Lindi di Sektor Utara TPA Bantar Gebang mencapai level waspada. Mohon periksa sensor segera.
                                        </p>
                                    </div>
                                </div>
                                <button className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-bold rounded-lg hover:bg-red-200 transition-colors w-full text-left">
                                    Lihat Detail Sensor →
                                </button>
                            </div>
                        </div>

                        {/* 2. Monitor Status TPA */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">landscape</span>
                                    Status Fasilitas TPA
                                </h3>
                                <button className="text-sm text-primary font-bold hover:underline">Lihat Semua Laporan</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tpaData.map(tpa => (
                                    <div key={tpa.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white">{tpa.name}</h4>
                                                <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                                                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                                                    {tpa.location}
                                                </p>
                                            </div>
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(tpa.status)}`}>
                                                {tpa.status}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-medium">
                                                <span className="text-text-muted">Kapasitas</span>
                                                <span className={tpa.capacity > 90 ? 'text-red-500' : 'text-text-main dark:text-white'}>
                                                    {tpa.capacity}% Terisi
                                                </span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${tpa.capacity > 90 ? 'bg-red-500' : tpa.capacity > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                                    style={{ width: `${tpa.capacity}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {tpa.status === 'Idle' && (
                                            <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg flex items-center gap-3">
                                                <span className="material-symbols-outlined text-yellow-600">engineering</span>
                                                <span className="text-xs text-yellow-800 dark:text-yellow-200 font-medium">Sedang dalam maintenance ringan</span>
                                            </div>
                                        )}
                                        {tpa.status === 'Critical' && (
                                            <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg flex items-center gap-3">
                                                <span className="material-symbols-outlined text-red-600">block</span>
                                                <span className="text-xs text-red-800 dark:text-red-200 font-medium">Penuh! Alihkan rute truk.</span>
                                            </div>
                                        )}
                                        {tpa.status === 'Active' && (
                                            <div className="mt-4 flex gap-2">
                                                <button className="flex-1 py-1.5 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded text-text-muted hover:bg-gray-50 dark:hover:bg-white/5">
                                                    Log Masuk
                                                </button>
                                                <button className="flex-1 py-1.5 text-xs font-bold bg-primary/10 text-primary border border-transparent rounded hover:bg-primary/20">
                                                    Live CCTV
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. AI Spatial Recommendations */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
                                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-blue-500">map</span>
                                    Peta Sebaran & Rekomendasi
                                </h3>
                                <div className="flex-1 bg-blue-50 dark:bg-blue-900/10 rounded-xl relative border border-blue-100 dark:border-blue-800/30 min-h-[300px] flex items-center justify-center overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://placehold.co/800x400/e0f2fe/1e3a8a?text=Map+Visualization')] bg-cover opacity-30"></div>
                                    <div className="relative z-10 text-center p-6 backdrop-blur-sm bg-white/60 dark:bg-black/40 rounded-xl shadow-lg border border-white/50">
                                        <span className="material-symbols-outlined text-5xl text-blue-600 mb-2">satellite_alt</span>
                                        <h4 className="font-bold text-text-main dark:text-white">Analisis Geospasial Aktif</h4>
                                        <p className="text-sm text-text-muted">Memproses citra satelit terbaru...</p>
                                    </div>

                                    {/* Mock Pins */}
                                    <div className="absolute top-1/4 left-1/4 animate-bounce">
                                        <span className="material-symbols-outlined text-4xl text-red-500 drop-shadow-md">location_on</span>
                                    </div>
                                    <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-700">
                                        <span className="material-symbols-outlined text-4xl text-green-500 drop-shadow-md">location_on</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-purple-500">auto_awesome</span>
                                    Rekomendasi AI
                                </h3>
                                <div className="space-y-4">
                                    {recommendations.map(rec => (
                                        <div key={rec.id} className="p-4 bg-gray-50 dark:bg-black/20 rounded-xl border border-gray-100 dark:border-gray-800">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${rec.impact === 'Critical' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
                                                    {rec.impact}
                                                </span>
                                                <span className="text-xs text-text-muted font-mono">{rec.coords}</span>
                                            </div>
                                            <h4 className="font-bold text-sm text-text-main dark:text-white mb-1">{rec.title}</h4>
                                            <p className="text-xs text-text-muted leading-relaxed">{rec.desc}</p>
                                            <button className="mt-3 w-full py-1.5 text-xs font-bold bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 transition-colors shadow-sm">
                                                Simulasi {rec.type === 'expansion' ? 'Konstruksi' : 'Penutupan'}
                                            </button>
                                        </div>
                                    ))}
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-center">
                                        <p className="text-xs text-blue-600 dark:text-blue-300 font-medium">
                                            Update citra satelit terakhir: 2 jam lalu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default GeoAnalysis;
