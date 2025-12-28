import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function DetailedStatistics() {
    const navigate = useNavigate();
    const [year, setYear] = useState('Tahunan (2025)');
    const [province, setProvince] = useState('Semua Provinsi');

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center justify-between px-8 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">arrow_back</span>
                        </button>
                        <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Dampak Ekonomi</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/5 rounded-lg px-3 h-10 w-64 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input className="bg-transparent border-none text-sm w-full focus:ring-0 text-text-main dark:text-white placeholder-text-muted outline-none ml-2" placeholder="Cari data, wilayah..." type="text" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-surface-light dark:border-surface-dark"></span>
                            </button>
                            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors">
                                <span className="material-symbols-outlined">help</span>
                            </button>
                            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                            <button className="flex items-center gap-3 pl-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="h-9 w-9 rounded-full bg-center bg-cover border border-gray-200 dark:border-gray-700"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLo4NrYcGtlGXTWKt6PV-23GwlEIpEH3Y8v7n_qoE0Lj_p-DUQfYl_Q4kKsLVHJjEC7Jdoju6WxSX5XKUY-XkFQnWd9vjpGmDwpTXbfuxUjN1SZXcSEZ2fooxKX9krVtiB41-Cv6SlxBqNoWl0mDJIzXLYZTbqktnLyEEmZNwdvSeJQbev4IQE-vVzzXm1bf1Xy0vsYSQsUCB-_-ywiUHAyAj8_-D4DPo5R5HW6eaIAdBt_fJ4mlke-3UNFbVnT4MVw213ARnJTCw')" }}
                                ></div>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-text-main dark:text-white mb-1">Analisis Ekonomi Makro</h1>
                            <p className="text-text-muted text-sm">Evaluasi dampak kebijakan pengelolaan sampah terhadap indikator ekonomi.</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="relative">
                                <span className="material-symbols-outlined text-gray-500 text-[20px] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">location_on</span>
                                <select
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                    className="appearance-none pl-10 pr-10 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors min-w-[180px] cursor-pointer outline-none focus:ring-1 focus:ring-primary"
                                >
                                    <option value="Semua Provinsi">Semua Provinsi</option>
                                    <option value="DKI Jakarta">DKI Jakarta</option>
                                    <option value="Jawa Barat">Jawa Barat</option>
                                    <option value="Jawa Timur">Jawa Timur</option>
                                    <option value="Bali">Bali</option>
                                </select>
                                <span className="material-symbols-outlined text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined text-gray-500 text-[20px] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">calendar_today</span>
                                <select
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="appearance-none pl-10 pr-10 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors min-w-[180px] cursor-pointer outline-none focus:ring-1 focus:ring-primary"
                                >
                                    <option value="Tahunan (2025)">Tahunan (2025)</option>
                                    <option value="Tahunan (2024)">Tahunan (2024)</option>
                                    <option value="Tahunan (2023)">Tahunan (2023)</option>
                                    <option value="Tahunan (2022)">Tahunan (2022)</option>
                                </select>
                                <span className="material-symbols-outlined text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-bold transition-colors shadow-sm shadow-green-500/20">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                                Ekspor Laporan
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">Total Nilai Ekonomi</p>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">Rp 4.2 Triliun</h3>
                                </div>
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+12.5%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="bg-green-500 h-full rounded-full" style={{ width: '75%' }}></div>
                            </div>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] dark:opacity-[0.05]">
                                <span className="material-symbols-outlined text-[120px]">monetization_on</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">Penghematan Anggaran</p>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">Rp 850 Miliar</h3>
                                </div>
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+8.2%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] dark:opacity-[0.05]">
                                <span className="material-symbols-outlined text-[120px]">savings</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">Kontribusi PDB (Sektor)</p>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">0.45%</h3>
                                </div>
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+0.05%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="bg-purple-500 h-full rounded-full" style={{ width: '45%' }}></div>
                            </div>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] dark:opacity-[0.05]">
                                <span className="material-symbols-outlined text-[120px]">show_chart</span>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">Lapangan Kerja Hijau</p>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">12.450</h3>
                                </div>
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+1500</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="bg-yellow-500 h-full rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] dark:opacity-[0.05]">
                                <span className="material-symbols-outlined text-[120px]">engineering</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 1 Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Line Chart */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="font-bold text-lg text-text-main dark:text-white">Kontribusi PDB Sektor Daur Ulang</h3>
                                    <p className="text-xs text-text-muted">Pertumbuhan YoY (%)</p>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div className="h-64 relative w-full flex items-end">
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                                    {/* Grid Lines */}
                                    <line className="text-gray-100 dark:text-gray-800" stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="10" y2="10" strokeDasharray="3" />
                                    <line className="text-gray-100 dark:text-gray-800" stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="20" y2="20" strokeDasharray="3" />
                                    <line className="text-gray-100 dark:text-gray-800" stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="30" y2="30" strokeDasharray="3" />
                                    <line className="text-gray-100 dark:text-gray-800" stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="40" y2="40" strokeDasharray="3" />

                                    {/* Line */}
                                    <path d="M0,45 C20,40 40,35 50,30 S80,15 100,10" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />

                                    {/* Gradient Area */}
                                    <path d="M0,45 C20,40 40,35 50,30 S80,15 100,10 V50 H0 Z" fill="url(#pdbGradient)" opacity="0.1" />

                                    <defs>
                                        <linearGradient id="pdbGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8"></stop>
                                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* Dots */}
                                <div className="absolute bottom-[30%] left-[25%] size-3 bg-white border-2 border-green-500 rounded-full"></div>
                                <div className="absolute bottom-[40%] left-[50%] size-3 bg-white border-2 border-green-500 rounded-full"></div>
                                <div className="absolute bottom-[60%] left-[75%] size-3 bg-white border-2 border-green-500 rounded-full"></div>
                                <div className="absolute top-[20%] right-[-4px] size-3 bg-white border-2 border-green-500 rounded-full shadow-md z-10"></div>
                            </div>
                            <div className="flex justify-between text-xs text-text-muted mt-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                                <span>2021</span>
                                <span>2022</span>
                                <span>2023</span>
                                <span>2024</span>
                                <span>2025</span>
                            </div>
                        </div>

                        {/* Progress Bar Chart */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="mb-6">
                                <h3 className="font-bold text-lg text-text-main dark:text-white">Penciptaan Lapangan Kerja</h3>
                                <p className="text-xs text-text-muted">Berdasarkan tahapan pengelolaan</p>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-text-main dark:text-white">Koleksi & Transportasi</span>
                                        <span className="font-bold text-text-main dark:text-white">5.400</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-4 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-text-main dark:text-white">Pemilahan & Pemrosesan Awal</span>
                                        <span className="font-bold text-text-main dark:text-white">4.200</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-4 rounded-full overflow-hidden">
                                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-text-main dark:text-white">Daur Ulang Manufaktur</span>
                                        <span className="font-bold text-text-main dark:text-white">2.850</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-4 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full rounded-full" style={{ width: '35%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Bar Chart Samping */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="font-bold text-lg text-text-main dark:text-white">Penghematan Biaya Pengelolaan</h3>
                                    <p className="text-xs text-text-muted">Biaya Konvensional vs. Terintegrasi (Miliar IDR)</p>
                                </div>
                                <div className="flex items-center gap-3 text-[10px]">
                                    <div className="flex items-center gap-1">
                                        <div className="size-2 rounded-full bg-gray-300"></div>
                                        <span className="text-gray-500">Konvensional</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="size-2 rounded-full bg-green-500"></div>
                                        <span className="text-gray-500">Terintegrasi</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 flex items-end justify-between gap-6 px-4">
                                {[{ l: 'Q1', v1: 40, v2: 20 }, { l: 'Q2', v1: 60, v2: 25 }, { l: 'Q3', v1: 80, v2: 30 }, { l: 'Q4', v1: 100, v2: 40 }].map((d, i) => (
                                    <div key={i} className="flex-1 flex gap-2 h-full items-end justify-center group">
                                        <div className="w-8 bg-gray-300 dark:bg-gray-600 rounded-t-sm transition-all hover:bg-gray-400" style={{ height: `${d.v1}%` }}></div>
                                        <div className="w-8 bg-green-500 rounded-t-sm transition-all hover:bg-green-400" style={{ height: `${d.v2}%` }}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-text-muted mt-2 px-8">
                                <span>Q1</span>
                                <span>Q2</span>
                                <span>Q3</span>
                                <span>Q4</span>
                            </div>
                        </div>

                        {/* Donut Chart */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="mb-2">
                                <h3 className="font-bold text-lg text-text-main dark:text-white">Nilai Ekonomi Material Terkumpul</h3>
                                <p className="text-xs text-text-muted">Distribusi berdasarkan jenis material</p>
                            </div>
                            <div className="flex items-center justify-center gap-8 h-64">
                                <div className="relative size-48">
                                    <svg className="size-full transform -rotate-90" viewBox="0 0 100 100">
                                        {/* Background Circle */}
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" className="dark:stroke-gray-800" />

                                        {/* Segments */}
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="100 251" strokeDashoffset="0" /> {/* 40% */}
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="63 251" strokeDashoffset="-100" /> {/* 25% */}
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#eab308" strokeWidth="12" strokeDasharray="50 251" strokeDashoffset="-163" /> {/* 20% */}
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#a855f7" strokeWidth="12" strokeDasharray="38 251" strokeDashoffset="-213" /> {/* 15% */}
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-text-muted text-xs">Total</span>
                                        <span className="text-xl font-bold text-text-main dark:text-white">100%</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-green-500"></div>
                                        <div className="text-xs">
                                            <span className="block font-bold text-text-main dark:text-white">40%</span>
                                            <span className="text-text-muted">Plastik (PET)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-blue-500"></div>
                                        <div className="text-xs">
                                            <span className="block font-bold text-text-main dark:text-white">25%</span>
                                            <span className="text-text-muted">Plastik (HDPE)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-yellow-500"></div>
                                        <div className="text-xs">
                                            <span className="block font-bold text-text-main dark:text-white">20%</span>
                                            <span className="text-text-muted">Logam & Alu</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-purple-500"></div>
                                        <div className="text-xs">
                                            <span className="block font-bold text-text-main dark:text-white">15%</span>
                                            <span className="text-text-muted">Kertas & Karton</span>
                                        </div>
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

export default DetailedStatistics;
