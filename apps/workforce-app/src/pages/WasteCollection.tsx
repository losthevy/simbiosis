import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type CollectionMode = 'SCS' | 'HCS';

// SCS Data Types (Stationary Container System)
interface TPSStop {
    id: number;
    name: string;
    completed: boolean;
    volume: string;
}

// HCS Data Types (Hauled Container System)
type HCSState = 'AT_POOL' | 'PICKING_UP' | 'HAULING_TO_TPA' | 'UNLOADING' | 'RETURNING_CONTAINER' | 'COMPLETED';

function WasteCollection() {
    const navigate = useNavigate();
    const [mode, setMode] = useState<CollectionMode>('SCS');

    // SCS State
    const [stops, setStops] = useState<TPSStop[]>([
        { id: 1, name: 'TPS Pasar Induk', completed: false, volume: '85%' },
        { id: 2, name: 'TPS Sekolah Pinus', completed: false, volume: '60%' },
        { id: 3, name: 'TPS Rusunawa', completed: false, volume: '90%' },
        { id: 4, name: 'TPS Kelurahan', completed: false, volume: '45%' },
    ]);

    // HCS State
    const [hcsState, setHcsState] = useState<HCSState>('AT_POOL');
    const [containerId] = useState('KONT-2025-X');

    // SCS Handlers
    const handleSCSAction = (id: number) => {
        setStops(prev => prev.map(stop => stop.id === id ? { ...stop, completed: true } : stop));
    };

    const scsProgress = stops.filter(s => s.completed).length / stops.length * 100;
    const isSCSReadyForTPA = stops.every(s => s.completed);

    // HCS Handlers
    const advanceHCS = () => {
        switch (hcsState) {
            case 'AT_POOL': setHcsState('PICKING_UP'); break;
            case 'PICKING_UP': setHcsState('HAULING_TO_TPA'); break;
            case 'HAULING_TO_TPA': setHcsState('UNLOADING'); break;
            case 'UNLOADING': setHcsState('RETURNING_CONTAINER'); break;
            case 'RETURNING_CONTAINER': setHcsState('COMPLETED'); break;
            case 'COMPLETED': setHcsState('AT_POOL'); break; // Reset
        }
    };

    const getHCSInstruction = () => {
        switch (hcsState) {
            case 'AT_POOL': return 'Mulai shift dari Pool Kendaraan.';
            case 'PICKING_UP': return 'Menuju Lokasi TPS. Angkut kontainer penuh ke truk.';
            case 'HAULING_TO_TPA': return 'Bawa kontainer penuh menuju TPA terdekat.';
            case 'UNLOADING': return 'Lakukan pembongkaran muatan di TPA.';
            case 'RETURNING_CONTAINER': return 'Kembalikan kontainer kosong ke lokasi asal.';
            case 'COMPLETED': return 'Siklus selesai. Kembali ke Pool atau mulai siklus baru.';
        }
    };

    return (
        <div className="flex h-screen w-full bg-surface-light dark:bg-surface-dark text-text-main font-display antialiased overflow-hidden flex-col">
            {/* Header */}
            <header className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 flex-shrink-0">
                <button onClick={() => navigate('/')} className="hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-full transition-colors">
                    <span className="material-symbols-outlined text-text-muted">arrow_back</span>
                </button>
                <div className="flex-1">
                    <h1 className="text-lg font-bold text-text-main dark:text-white">Rute Pengangkutan</h1>
                    <p className="text-xs text-text-muted">Pilih mode operasional armada Anda</p>
                </div>
            </header>

            {/* Mode Switcher */}
            <div className="p-4 flex gap-2 bg-gray-50 dark:bg-black/10 shrink-0">
                <button
                    onClick={() => setMode('SCS')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold flex flex-col items-center gap-2 transition-all ${mode === 'SCS' ? 'bg-primary text-black shadow-lg shadow-primary/20 ring-1 ring-primary' : 'bg-white dark:bg-surface-dark text-text-muted border border-gray-200 dark:border-gray-700'}`}
                >
                    <span className="material-symbols-outlined text-2xl">local_shipping</span>
                    Kontainer Tetap (SCS)
                </button>
                <button
                    onClick={() => setMode('HCS')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold flex flex-col items-center gap-2 transition-all ${mode === 'HCS' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-500' : 'bg-white dark:bg-surface-dark text-text-muted border border-gray-200 dark:border-gray-700'}`}
                >
                    <span className="material-symbols-outlined text-2xl">swap_driving_apps_wheel</span>
                    Kontainer Angkat (HCS)
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* SCS MODE CONTENT */}
                {mode === 'SCS' && (
                    <div className="space-y-6">
                        <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                            <h3 className="font-bold text-primary flex items-center gap-2 mb-1">
                                <span className="material-symbols-outlined">info</span>
                                Info Rute
                            </h3>
                            <p className="text-sm text-text-main dark:text-white">
                                Kumpulkan sampah dari 4 TPS menggunakan Truck Compactor, lalu buang ke TPA.
                            </p>
                            <div className="mt-3 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${scsProgress}%` }}></div>
                            </div>
                        </div>

                        <div className="space-y-3 relative">
                            {/* Connector Line */}
                            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>

                            {stops.map((stop, index) => (
                                <div key={stop.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${stop.completed ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800' : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700'}`}>
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 border-2 ${stop.completed ? 'bg-green-500 border-green-500 text-white' : 'bg-white dark:bg-surface-dark border-gray-300 dark:border-gray-600 text-gray-400'}`}>
                                        <span className="material-symbols-outlined">{stop.completed ? 'check' : 'location_on'}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className={`font-bold ${stop.completed ? 'text-green-800 dark:text-green-300' : 'text-text-main dark:text-white'}`}>{stop.name}</h4>
                                                <p className="text-xs text-text-muted mt-0.5">EST. Volume: {stop.volume}</p>
                                            </div>
                                            {!stop.completed && (
                                                <button
                                                    onClick={() => handleSCSAction(stop.id)}
                                                    className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-lg hover:opacity-80 transition-opacity"
                                                >
                                                    Angkut
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* TPA Destination */}
                            <div className={`flex items-start gap-4 p-4 rounded-xl border-2 border-dashed transition-all ${isSCSReadyForTPA ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 opacity-50'}`}>
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${isSCSReadyForTPA ? 'bg-primary text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                                    <span className="material-symbols-outlined">flag</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-text-main dark:text-white">Dumping ke TPA</h4>
                                    <p className="text-xs text-text-muted mt-1">Selesaikan semua titik angkut sebelum menuju TPA.</p>
                                    {isSCSReadyForTPA && (
                                        <button className="mt-3 w-full py-2 bg-primary hover:bg-primary-dark text-black font-bold rounded-lg transition-colors shadow-sm">
                                            Mulai Perjalanan ke TPA
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* HCS MODE CONTENT */}
                {mode === 'HCS' && (
                    <div className="h-full flex flex-col items-center justify-center text-center py-6">
                        <div className="relative mb-8">
                            {/* Status Circle */}
                            <div className="h-48 w-48 rounded-full border-8 border-gray-100 dark:border-gray-800 flex items-center justify-center relative bg-white dark:bg-surface-dark shadow-xl">
                                <span className={`material-symbols-outlined text-8xl ${hcsState === 'UNLOADING' ? 'text-red-500' : 'text-blue-500'}`}>
                                    {hcsState === 'AT_POOL' ? 'garage_home' :
                                        hcsState === 'PICKING_UP' ? 'publish' :
                                            hcsState === 'HAULING_TO_TPA' ? 'local_shipping' :
                                                hcsState === 'UNLOADING' ? 'delete_forever' :
                                                    hcsState === 'RETURNING_CONTAINER' ? 'settings_backup_restore' : 'check_circle'}
                                </span>
                                {/* Progress Indicator */}
                                <div className="absolute -bottom-4 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                                    ID: {containerId}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-black text-text-main dark:text-white mb-2">
                            {hcsState === 'AT_POOL' ? 'Di Pool Kendaraan' :
                                hcsState === 'PICKING_UP' ? 'Ambil Kontainer' :
                                    hcsState === 'HAULING_TO_TPA' ? 'Menuju TPA' :
                                        hcsState === 'UNLOADING' ? 'Bongkar Muatan' :
                                            hcsState === 'RETURNING_CONTAINER' ? 'Kembalikan Kontainer' : 'Selesai'}
                        </h2>

                        <p className="text-text-muted max-w-xs mx-auto mb-8 min-h-[48px]">
                            {getHCSInstruction()}
                        </p>

                        <button
                            onClick={advanceHCS}
                            className={`w-full max-w-sm py-4 rounded-2xl text-lg font-bold shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-3
                                ${hcsState === 'UNLOADING' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                        >
                            <span>{hcsState === 'COMPLETED' ? 'Mulai Siklus Baru' : 'Lanjut Tahap Berikutnya'}</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>

                        <div className="mt-8 grid grid-cols-5 gap-2 w-full max-w-sm px-4">
                            {['AT_POOL', 'PICKING_UP', 'HAULING_TO_TPA', 'UNLOADING', 'RETURNING_CONTAINER'].map((step, idx) => {
                                const stateOrder = ['AT_POOL', 'PICKING_UP', 'HAULING_TO_TPA', 'UNLOADING', 'RETURNING_CONTAINER', 'COMPLETED'];
                                const currIdx = stateOrder.indexOf(hcsState);
                                const stepIdx = stateOrder.indexOf(step as HCSState);
                                const active = stepIdx <= currIdx;

                                return (
                                    <div key={idx} className={`h-1.5 rounded-full ${active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WasteCollection;
