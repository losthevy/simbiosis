import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function HeatmapDetail() {
    const navigate = useNavigate();
    const [filterPeriod, setFilterPeriod] = useState('Harian');
    const [wasteType, setWasteType] = useState('Semua Jenis');

    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased">
            {/* Header */}
            <header className="h-16 flex items-center justify-between px-6 border-b border-[#f0f4f2] dark:border-[#2a3c30] bg-surface-light dark:bg-surface-dark shrink-0">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#25382e] transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div>
                        <h1 className="text-lg font-bold text-[#111814] dark:text-white">Detail Peta Panas</h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Visualisasi akumulasi sampah & efisiensi</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e] transition-colors">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Ekspor Data
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-primary text-background-dark rounded-lg text-sm font-bold hover:brightness-110 transition-colors">
                        <span className="material-symbols-outlined text-lg">refresh</span>
                        Perbarui
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                {/* Map Section with Filters */}
                <div className="relative w-full h-[500px] rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-md border border-[#f0f4f2] dark:border-[#2a3c30] group">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk')" }}
                    ></div>

                    {/* Heatmap Overlay (CSS Gradients) */}
                    <div className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none" style={{
                        background: 'radial-gradient(circle at 40% 40%, rgba(239, 68, 68, 0.8) 0%, rgba(239, 68, 68, 0) 30%), radial-gradient(circle at 70% 60%, rgba(245, 158, 11, 0.6) 0%, rgba(245, 158, 11, 0) 25%)'
                    }}></div>

                    {/* Floating Filter Panel */}
                    <div className="absolute top-4 left-4 w-72 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-4 text-[#111814] dark:text-white font-bold">
                            <span className="material-symbols-outlined text-primary">tune</span>
                            Filter Peta
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 block">Periode Waktu</label>
                                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                    {['Harian', 'Mingguan', 'Bulanan'].map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => setFilterPeriod(p)}
                                            className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${filterPeriod === p ? 'bg-white dark:bg-gray-700 text-[#111814] dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 block">Jenis Sampah</label>
                                <div className="relative">
                                    <select
                                        value={wasteType}
                                        onChange={(e) => setWasteType(e.target.value)}
                                        className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold text-[#111814] dark:text-white py-2.5 px-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                                    >
                                        <option>Semua Jenis</option>
                                        <option>Plastik</option>
                                        <option>Organik</option>
                                        <option>Logam</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 block">Tingkat Keparahan</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-[#111814] dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-1 rounded transition-colors">
                                        <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                                        <span className="size-2 rounded-full bg-red-500"></span>
                                        Kritis (High)
                                    </label>
                                    <label className="flex items-center gap-2 text-sm font-medium text-[#111814] dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-1 rounded transition-colors">
                                        <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                                        <span className="size-2 rounded-full bg-orange-400"></span>
                                        Waspada (Medium)
                                    </label>
                                    <label className="flex items-center gap-2 text-sm font-medium text-[#111814] dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-1 rounded transition-colors">
                                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                        <span className="size-2 rounded-full bg-yellow-300"></span>
                                        Normal (Low)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                        <button className="size-10 bg-white dark:bg-surface-dark rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e]">
                            <span className="material-symbols-outlined">layers</span>
                        </button>
                        <div className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white dark:bg-surface-dark">
                            <button className="size-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e] border-b border-gray-100 dark:border-gray-700">
                                <span className="material-symbols-outlined">add</span>
                            </button>
                            <button className="size-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e]">
                                <span className="material-symbols-outlined">remove</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Analysis Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[#111814] dark:text-white">
                            <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
                            <h3 className="font-bold text-lg">Analisis Hotspot</h3>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] overflow-hidden shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-black/20 text-gray-500 font-bold border-b border-[#f0f4f2] dark:border-[#2a3c30]">
                                    <tr>
                                        <th className="px-5 py-3">Lokasi</th>
                                        <th className="px-5 py-3">Keparahan</th>
                                        <th className="px-5 py-3">Faktor Utama</th>
                                        <th className="px-5 py-3 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#f0f4f2] dark:divide-[#2a3c30]">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#25382e] transition-colors">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600">
                                                    <span className="material-symbols-outlined text-lg">location_on</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#111814] dark:text-white">Pasar Senen</p>
                                                    <p className="text-xs text-gray-500">Zona A-12</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="inline-flex px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold">
                                                Tinggi
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-gray-600 dark:text-gray-400 text-xs">
                                            Kurang tong sampah, Aktivitas pasar tinggi
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <button className="text-primary hover:text-primary-hover font-bold text-xs border border-primary/20 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-colors">
                                                Lihat Detail
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#25382e] transition-colors">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                                    <span className="material-symbols-outlined text-lg">location_on</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#111814] dark:text-white">Stasiun Tebet</p>
                                                    <p className="text-xs text-gray-500">Zona B-04</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="inline-flex px-2 py-1 rounded bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-bold">
                                                Sedang
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-gray-600 dark:text-gray-400 text-xs">
                                            Jadwal pickup terlambat, Kepadatan jam sibuk
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <button className="text-primary hover:text-primary-hover font-bold text-xs border border-primary/20 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-colors">
                                                Lihat Detail
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[#111814] dark:text-white">
                            <span className="material-symbols-outlined text-green-500 text-2xl">compare_arrows</span>
                            <h3 className="font-bold text-lg">Perbandingan Area</h3>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex flex-col gap-6">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Volume Sampah (Ton/Hari)</h4>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Minggu Ini</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-bold text-[#111814] dark:text-white">Jakarta Pusat</span>
                                        <span className="font-bold text-[#111814] dark:text-white">12.5 Ton</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-black/20 rounded-full h-2.5 overflow-hidden">
                                        <div className="bg-red-500 h-full rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <p className="text-[10px] text-red-500 font-bold mt-1">+5% vs minggu lalu</p>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-bold text-[#111814] dark:text-white">Jakarta Selatan</span>
                                        <span className="font-bold text-[#111814] dark:text-white">9.2 Ton</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-black/20 rounded-full h-2.5 overflow-hidden">
                                        <div className="bg-orange-400 h-full rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-bold mt-1">Stabil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HeatmapDetail;
