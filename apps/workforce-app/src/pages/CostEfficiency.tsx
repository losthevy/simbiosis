import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CostEfficiency() {
    const navigate = useNavigate();

    // Mock Data State
    const [population] = useState(250000); // 250k residents
    const [wastePerCapita] = useState(0.7); // kg/day
    const [collectionRatio] = useState(1.0); // 100% target

    // Costs (Monthly)
    const currentCost = {
        fuel: 12000000,
        vehicle: 5000000,
        labor: 18000000,
    };

    const optimalCost = {
        fuel: 8500000, // optimized route
        vehicle: 5000000, // same fleet
        labor: 12000000, // efficient scheduling
    };

    const totalCurrent = Object.values(currentCost).reduce((a, b) => a + b, 0);
    const totalOptimal = Object.values(optimalCost).reduce((a, b) => a + b, 0);

    const isEfficient = totalCurrent <= totalOptimal;
    const efficiencyGap = totalCurrent - totalOptimal;

    // Projection Logic
    const dailyWaste = population * wastePerCapita * collectionRatio; // kg
    const capacityDumpTruck = 6000; // 6 tons
    const capacityArmRoll = 10000; // 10 tons

    const requiredDumpTrucks = Math.ceil((dailyWaste * 0.6) / capacityDumpTruck); // 60% via SCS
    const requiredArmRolls = Math.ceil((dailyWaste * 0.4) / capacityArmRoll); // 40% via HCS

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="flex h-screen w-full bg-surface-light dark:bg-surface-dark text-text-main font-display antialiased overflow-hidden flex-col">
            {/* Header */}
            <header className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 flex-shrink-0">
                <button onClick={() => navigate('/')} className="hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-full transition-colors">
                    <span className="material-symbols-outlined text-text-muted">arrow_back</span>
                </button>
                <div className="flex-1">
                    <h1 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600">analytics</span>
                        Analisis Efisiensi Biaya
                    </h1>
                    <p className="text-xs text-text-muted">Evaluasi Operasional & Proyeksi Kebutuhan</p>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 bg-gray-50 dark:bg-black/10">

                {/* 1. Efficiency Comparator Section */}
                <section className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
                    <h2 className="text-base font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">compare_arrows</span>
                        Komparasi Biaya Pengangkutan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Current Cost (A) */}
                        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                            <h3 className="text-sm font-bold text-red-800 dark:text-red-300 mb-3">Biaya Saat Ini (A)</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-text-muted">Bahan Bakar</span>
                                    <span className="font-mono">{formatCurrency(currentCost.fuel)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-muted">Operasional Kendaraan</span>
                                    <span className="font-mono">{formatCurrency(currentCost.vehicle)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-muted">Tenaga Kerja</span>
                                    <span className="font-mono">{formatCurrency(currentCost.labor)}</span>
                                </div>
                                <div className="h-px bg-red-200 dark:bg-red-800 my-2"></div>
                                <div className="flex justify-between font-bold text-red-700 dark:text-red-400">
                                    <span>Total (A)</span>
                                    <span>{formatCurrency(totalCurrent)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Optimal Cost (B) */}
                        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                            <h3 className="text-sm font-bold text-green-800 dark:text-green-300 mb-3">Biaya Optimal (B)</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-text-muted">Bahan Bakar</span>
                                    <span className="font-mono">{formatCurrency(optimalCost.fuel)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-muted">Operasional Kendaraan</span>
                                    <span className="font-mono">{formatCurrency(optimalCost.vehicle)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-muted">Tenaga Kerja</span>
                                    <span className="font-mono">{formatCurrency(optimalCost.labor)}</span>
                                </div>
                                <div className="h-px bg-green-200 dark:bg-green-800 my-2"></div>
                                <div className="flex justify-between font-bold text-green-700 dark:text-green-400">
                                    <span>Total (B)</span>
                                    <span>{formatCurrency(totalOptimal)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Analysis */}
                    <div className={`mt-6 p-4 rounded-xl border flex items-start gap-4 ${isEfficient ? 'bg-green-100 dark:bg-green-900/20 border-green-200' : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'}`}>
                        <span className={`material-symbols-outlined text-3xl ${isEfficient ? 'text-green-600' : 'text-yellow-600'}`}>
                            {isEfficient ? 'check_circle' : 'warning'}
                        </span>
                        <div>
                            <h4 className={`font-bold text-lg ${isEfficient ? 'text-green-800 dark:text-green-300' : 'text-yellow-800 dark:text-yellow-300'}`}>
                                Status: {isEfficient ? 'EFISIEN (A ≤ B)' : 'INEFISIEN (A > B)'}
                            </h4>
                            <p className="text-sm text-text-muted mt-1">
                                {isEfficient
                                    ? 'Operasional saat ini berjalan optimal sesuai standar Lingo 9.0.'
                                    : `Terdeteksi pemborosan sebesar ${formatCurrency(efficiencyGap)}. Disarankan evaluasi rute manual dan penjadwalan ulang arm roll.`}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Projection & Recommendation Section */}
                <section className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
                    <h2 className="text-base font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-600">trending_up</span>
                        Proyeksi Kebutuhan Armada (2025)
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg text-center">
                            <p className="text-xs text-text-muted uppercase tracking-wider">Populasi</p>
                            <p className="text-xl font-black text-text-main dark:text-white">{population.toLocaleString()}</p>
                            <p className="text-xs text-green-500 font-bold">+2.4% YoY</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg text-center">
                            <p className="text-xs text-text-muted uppercase tracking-wider">Timbulan Sampah</p>
                            <p className="text-xl font-black text-text-main dark:text-white">{(dailyWaste / 1000).toFixed(1)} <span className="text-sm font-normal">Ton/Hari</span></p>
                        </div>
                        <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg text-center">
                            <p className="text-xs text-text-muted uppercase tracking-wider">Rasio Angkut</p>
                            <p className="text-xl font-black text-text-main dark:text-white">100%</p>
                        </div>
                    </div>

                    <h3 className="text-sm font-bold text-text-main dark:text-white mb-3">Rekomendasi Armada:</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                <span className="material-symbols-outlined text-2xl">local_shipping</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold text-text-main dark:text-white">Dump Truck / Compactor</h4>
                                    <span className="text-sm font-bold bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded text-text-main dark:text-white">{requiredDumpTrucks} Unit</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-500 h-full w-[80%]"></div>
                                </div>
                                <p className="text-xs text-text-muted mt-1">Ketersediaan saat ini: 80% (Kurang 2 unit)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                <span className="material-symbols-outlined text-2xl">swap_driving_apps_wheel</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold text-text-main dark:text-white">Arm Roll Truck</h4>
                                    <span className="text-sm font-bold bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded text-text-main dark:text-white">{requiredArmRolls} Unit</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full w-[100%]"></div>
                                </div>
                                <p className="text-xs text-text-muted mt-1">Ketersediaan saat ini: 100% (Cukup)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CostEfficiency;
