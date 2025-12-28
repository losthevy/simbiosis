import { useNavigate } from 'react-router-dom';

function NavigationDetail() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased">
            {/* Header */}
            <header className="h-16 flex items-center gap-4 px-6 border-b border-[#f0f4f2] dark:border-[#2a3c30] bg-surface-light dark:bg-surface-dark shrink-0">
                <button
                    onClick={() => navigate(-1)}
                    className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#25382e] transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div>
                    <h1 className="text-lg font-bold text-[#111814] dark:text-white">Navigasi Rute</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Pangkalan <span className="mx-1">→</span> Toko Maju Jaya</p>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                {/* Map Section */}
                <div className="w-full h-[400px] rounded-2xl bg-gray-200 dark:bg-gray-800 relative overflow-hidden shadow-md border border-[#f0f4f2] dark:border-[#2a3c30] group">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk')" }}
                    ></div>

                    {/* SVG Routes Overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}>
                        {/* Worst Route (Red) */}
                        <path d="M150,350 C300,350 400,300 500,100" stroke="#ef4444" strokeWidth="6" fill="none" opacity="0.6" strokeDasharray="5,5" />

                        {/* Best Route (Green) */}
                        <path d="M150,350 C200,300 600,350 750,150" stroke="#10b981" strokeWidth="6" fill="none" />

                        {/* Another Alternative (Blue) */}
                        <path d="M150,350 C100,200 300,100 750,150" stroke="#3b82f6" strokeWidth="6" fill="none" opacity="0.6" strokeDasharray="5,5" />

                        {/* Start Point */}
                        <circle cx="150" cy="350" r="8" fill="#111814" stroke="white" strokeWidth="3" />

                        {/* End Point */}
                        <circle cx="750" cy="150" r="8" fill="#ef4444" stroke="white" strokeWidth="3" />
                    </svg>

                    {/* Markers */}
                    <div className="absolute bottom-[40px] left-[130px] bg-white text-xs font-bold px-2 py-1 rounded shadow-md">Pangkalan</div>
                    <div className="absolute top-[130px] right-[25%] bg-white text-xs font-bold px-2 py-1 rounded shadow-md">Toko Maju Jaya</div>

                    <div className="absolute bottom-4 right-4 bg-white dark:bg-surface-dark p-2 rounded-lg shadow-lg">
                        <div className="flex items-center gap-2 text-xs font-bold mb-1">
                            <span className="size-3 rounded-full bg-green-500"></span> Disarankan
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold mb-1">
                            <span className="size-3 rounded-full bg-red-500"></span> Macet
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold">
                            <span className="size-3 rounded-full bg-blue-500"></span> Alternatif
                        </div>
                    </div>
                </div>

                {/* Route Analysis Cards */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-[#111814] dark:text-white">Analisis Rute</h3>

                    {/* Suggested / Best Route */}
                    <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-2xl border border-green-200 dark:border-green-800 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Saran Rute Terbaik
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="size-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                <span className="material-symbols-outlined text-2xl">recommend</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-lg text-[#111814] dark:text-white">Lewat Jl. Pahlawan</h4>
                                    <span className="font-black text-lg text-green-600 dark:text-green-400">12 Menit</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-3">Rute tercepat dengan kondisi lalu lintas lancar. Hemat bahan bakar estimasi 5%.</p>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-white/50 dark:bg-black/20 text-gray-600 dark:text-gray-300 border border-transparent">
                                        <span className="material-symbols-outlined text-sm">straight</span> 4.2 km
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-white/50 dark:bg-black/20 text-gray-600 dark:text-gray-300 border border-transparent">
                                        <span className="material-symbols-outlined text-sm">traffic</span> Lancar
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20">
                            <span className="material-symbols-outlined">navigation</span>
                            Mulai Navigasi
                        </button>
                    </div>

                    {/* Worst Route */}
                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                        <div className="flex items-start gap-4">
                            <div className="size-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                                <span className="material-symbols-outlined text-2xl">block</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-lg text-[#111814] dark:text-white">Lewat Jl. Soedirman</h4>
                                    <span className="font-bold text-lg text-red-500">45 Menit</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-2"><span className="font-bold text-red-500">Tidak Disarankan.</span> Kemacetan parah akibat perbaikan jalan dan pasar tumpah.</p>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-sm">straight</span> 5.8 km
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Route */}
                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm hover:border-primary transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                <span className="material-symbols-outlined text-2xl">alt_route</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-lg text-[#111814] dark:text-white">Lewat Jl. Kebon Sirih</h4>
                                    <span className="font-bold text-lg text-gray-700 dark:text-gray-300">18 Menit</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Opsi cadangan jika rute utama macet mendadak. Sedikit memutar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NavigationDetail;
