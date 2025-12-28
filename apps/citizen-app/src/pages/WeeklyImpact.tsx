import { useNavigate } from 'react-router-dom';

function WeeklyImpact() {
    const navigate = useNavigate();

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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Dasbor Warga</h2>
                    </div>
                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                        <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-background-light dark:bg-background-dark border border-transparent focus-within:border-primary px-4 transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-muted outline-none ml-2"
                                placeholder="Cari aktivitas, tantangan, atau teman..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative p-2.5 rounded-full hover:bg-background-light dark:hover:bg-background-dark text-text-main dark:text-white transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
                            </button>
                            <div
                                className="h-11 w-11 rounded-full bg-cover bg-center border-2 border-primary cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all"
                                data-alt="Portrait of the user Alex"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8')" }}
                            ></div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-bold group"
                            >
                                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            </button>
                            <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Detail Dampak Mingguan</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Card: Total Recycling */}
                            <div className="bg-gradient-to-br from-[#e0fdf0] to-white dark:from-surface-dark dark:to-surface-dark rounded-3xl p-8 border border-border-light dark:border-border-dark shadow-sm relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-text-muted mb-2">Total Daur Ulang Minggu Ini</h3>
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-8xl font-black text-text-main dark:text-white tracking-tighter">12</span>
                                        <span className="text-2xl font-bold text-text-muted">kg</span>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-8">
                                        <span className="material-symbols-outlined text-base">trending_up</span>
                                        +20% dari minggu lalu
                                    </div>

                                    <p className="text-text-muted font-bold mb-4">Dampak positifmu setara dengan:</p>
                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-surface-light/60 dark:bg-surface-light/5 backdrop-blur-sm rounded-2xl p-4 border border-border-light/50 dark:border-border-dark flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined">water_drop</span>
                                            </div>
                                            <div>
                                                <span className="block text-2xl font-black text-text-main dark:text-white">600</span>
                                                <span className="text-xs text-text-muted font-bold">Botol Plastik</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-surface-light/60 dark:bg-surface-light/5 backdrop-blur-sm rounded-2xl p-4 border border-border-light/50 dark:border-border-dark flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined">forest</span>
                                            </div>
                                            <div>
                                                <span className="block text-2xl font-black text-text-main dark:text-white">2</span>
                                                <span className="text-xs text-text-muted font-bold">Pohon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            </div>

                            <div className="flex flex-col gap-8">
                                {/* Right Top Card: CO2 Reduction */}
                                <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 border border-border-light dark:border-border-dark shadow-sm flex justify-between items-center relative overflow-hidden">
                                    <div className="flex flex-col gap-2 relative z-10 max-w-[60%]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                                                <span className="material-symbols-outlined text-xl">cloud_off</span>
                                            </div>
                                            <h3 className="font-bold text-text-main dark:text-white">Reduksi Emisi CO2</h3>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-black text-text-main dark:text-white">24.5</span>
                                            <span className="text-lg font-bold text-text-muted">kgCO2e</span>
                                        </div>
                                        <p className="text-sm text-text-muted mt-2">
                                            Anda telah mencegah emisi karbon setara dengan perjalanan mobil sejauh 150km!
                                        </p>
                                    </div>
                                    <div className="relative h-24 w-24 flex items-center justify-center">
                                        <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 36 36">
                                            <path
                                                className="text-gray-100 dark:text-gray-800"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            />
                                            <path
                                                className="text-primary"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeDasharray="75, 100"
                                                strokeWidth="3"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-3xl">eco</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Bottom Card: Environment Comparison */}
                                <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 border border-border-light dark:border-border-dark shadow-sm flex flex-col gap-6">
                                    <h3 className="font-bold text-lg text-text-main dark:text-white">Perbandingan dengan Lingkungan</h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold">
                                                <span className="text-text-main dark:text-white">Anda</span>
                                                <span className="text-primary">12 kg</span>
                                            </div>
                                            <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-3 overflow-hidden">
                                                <div className="bg-primary h-full rounded-full w-[80%]"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-medium text-text-muted">
                                                <span>Rata-rata Tetangga</span>
                                                <span>9.5 kg</span>
                                            </div>
                                            <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-3 overflow-hidden">
                                                <div className="bg-gray-400 dark:bg-gray-600 h-full rounded-full w-[63%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-100 dark:border-yellow-800/30 flex items-center gap-3">
                                        <span className="material-symbols-outlined text-yellow-600">emoji_events</span>
                                        <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                                            Luar biasa! Anda berada di <span className="font-bold">top 15%</span> pahlawan lingkungan minggu ini.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Card: Daily Activity */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 border border-border-light dark:border-border-dark shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white">Aktivitas Harian</h3>
                                    <p className="text-text-muted">Breakdown daur ulang 7 hari terakhir</p>
                                </div>
                                <select className="px-4 py-2 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-white font-bold text-sm outline-none focus:border-primary">
                                    <option>Minggu Ini</option>
                                    <option>Bulan Ini</option>
                                </select>
                            </div>

                            <div className="flex items-end justify-between h-64 gap-2 md:gap-4 px-2">
                                {/* Bars */}
                                {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, index) => {
                                    const heights = ['30%', '45%', '25%', '60%', '85%', '40%', '15%'];
                                    const isToday = day === 'Jum'; // Assuming Friday is today based on the image highlighting
                                    return (
                                        <div key={day} className="flex-1 flex flex-col justify-end gap-3 group h-full">
                                            <div className="w-full relative flex flex-col justify-end items-center h-full">
                                                {isToday && (
                                                    <div className="mb-2 bg-text-main text-white text-xs font-bold py-1 px-2.5 rounded-lg relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-text-main shadow-lg transform -translate-y-1 transition-transform">
                                                        3.0 kg
                                                    </div>
                                                )}
                                                <div
                                                    className={`w-full md:w-16 rounded-t-xl transition-all duration-300 ${isToday ? 'bg-primary shadow-[0_0_20px_rgba(19,236,109,0.3)]' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/30'}`}
                                                    style={{ height: heights[index] }}
                                                ></div>
                                            </div>
                                            <span className={`text-sm font-bold text-center ${isToday ? 'text-primary' : 'text-text-muted'}`}>{day}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default WeeklyImpact;
