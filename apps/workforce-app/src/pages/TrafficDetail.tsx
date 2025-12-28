import { useNavigate } from 'react-router-dom';

function TrafficDetail() {
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
                <h1 className="text-lg font-bold text-[#111814] dark:text-white">Pemantauan Lalu Lintas</h1>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                {/* Map Section */}
                <div className="w-full h-80 md:h-96 rounded-2xl bg-gray-200 dark:bg-gray-800 relative overflow-hidden shadow-md border border-[#f0f4f2] dark:border-[#2a3c30] group">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Simulated Traffic Lines (Overlay) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}>
                        <path d="M100,300 C200,280 400,350 600,200" stroke="#ef4444" strokeWidth="6" fill="none" strokeDasharray="10,5" className="animate-pulse" />
                        <path d="M600,200 S700,100 900,150" stroke="#f59e0b" strokeWidth="6" fill="none" />
                        <path d="M100,50 C300,50 300,200 100,300" stroke="#10b981" strokeWidth="6" fill="none" />
                    </svg>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-lg border border-[#f0f4f2] dark:border-[#2a3c30]">
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mb-1">Status Zona</p>
                            <h2 className="text-xl font-black text-[#111814] dark:text-white flex items-center gap-2">
                                <span className="size-3 rounded-full bg-red-500 animate-pulse"></span>
                                Padat Merayap
                            </h2>
                        </div>
                        <button className="bg-primary text-background-dark p-3 rounded-xl shadow-lg font-bold hover:brightness-110 flex items-center gap-2 transition-transform active:scale-95">
                            <span className="material-symbols-outlined">near_me</span>
                            Re-route
                        </button>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#111814] dark:text-white">Insiden Terlapor</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Jl. Sudirman (2km dari posisi Anda)</p>
                                <div className="mt-3 bg-gray-50 dark:bg-black/20 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50">
                                    <p className="text-xs font-medium text-gray-600 dark:text-gray-300">"Perbaikan drainase memakan 1 lajur kiri. Harap berhati-hati."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                                <span className="material-symbols-outlined">schedule</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#111814] dark:text-white">Estimasi Waktu</h3>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <h4 className="text-3xl font-black text-[#111814] dark:text-white">15</h4>
                                    <span className="text-sm font-medium text-gray-500">menit keterlambatan</span>
                                </div>
                                <p className="text-xs text-red-500 font-bold mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    Lebih lambat dari biasanya
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternative Routes */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-[#111814] dark:text-white px-1">Rute Alternatif</h3>

                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex items-center justify-between group cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">A</div>
                            <div>
                                <h4 className="font-bold text-[#111814] dark:text-white">Lewat Jl. Antasari</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">12 menit • 4.5 km • <span className="text-green-600 font-bold">Lancar</span></p>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-600 dark:text-gray-300 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            Pilih
                        </button>
                    </div>

                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex items-center justify-between group cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">B</div>
                            <div>
                                <h4 className="font-bold text-[#111814] dark:text-white">Lewat Jl. Fatmawati</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">18 menit • 5.2 km • <span className="text-yellow-600 font-bold">Sedang</span></p>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-600 dark:text-gray-300 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            Pilih
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TrafficDetail;
