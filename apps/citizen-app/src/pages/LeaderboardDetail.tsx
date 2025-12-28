import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LeaderboardDetail() {
    const navigate = useNavigate();
    const [period] = useState('Minggu Ini');
    const [category] = useState('Poin Eco');
    const [trendPeriod, setTrendPeriod] = useState('Minggu');

    const topThree = [
        {
            rank: 2,
            name: "Mike Ross",
            contributions: 35,
            points: "1.980",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3xCtfu6Ak-otg_cRT7K5piZXR3myvqHYwuIvzm8Q81k8SYeh6pLYvZJlzN5RGe3PuooP-67dvxe-LgV7A4nd9owJN2FBg5p46qfjqsBV474XZ7RBVrAqZxJ9dFzJj0VDP-VqJbDHcFlbYzY4_W-R3ri2H9aUL6rMjAOTLTciiiHnGpISEBDfY0Gtk8wT8cHmXO9cGFLBQN08V7PWwp2F5O0WOW-i4OevB5InGFyHmnRZWcHzwfMShK5EDq6FO3QZnyCqaHtop6Hk", // Reusing Alex for placeholder if needed, or colored initials
            initials: "MR"
        },
        {
            rank: 1,
            name: "Sarah Jenkins",
            contributions: 42,
            points: "2.450",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB9YUBbNxnc2MHj4dUntODkLBSP7MOlJf6T414YdhCwIzhiM_S05eLtaabsN2aNPgxoVHX8loyMigrqCocBgplRXOUGDHxVfci7yfooKF7fpUfvNVBZIHEiyruJ8leWc2bYJ1IjJwM93ofUOcFEyNcs8YszBLg9xvj2e9mOShuO2MmtHTc6BEP6D0UUpA1a-3rU_x5dAfVBvzFfs8awiYs2jP4F1t0OhNteoKz4RapNS9jjywdAnTHyaCHEDv4tMb_1onIPYUml9c", // Reusing Budiman for placeholder
            initials: "SJ"
        },
        {
            rank: 3,
            name: "Emily Clark",
            contributions: 28,
            points: "1.560",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwOXLTmhLgh-jYLqpvQ7OlqiHk-v0mj2UC1pN8hEPi4wi22vGFFFw96yP-5_08Yew9h9nQL7GbqiOrNjQ__hz3pzH7PXD-T3J9VByRpZUu64Y7ZD0W7hrE8Ts7kO31JltEkIecHT9chUfmFuMZapnS-8R5HkoAM3l6xiSsivTdvXlW5xAPJOvE7gKudbnJPyt6us6oA_uZz3JQA0KrGpqR6GqCFET9nk9-lyz1iPijZqIFxIEc765O94Bd4afEYdRD0y94nUa7Qlg", // Placeholder
            initials: "EC"
        }
    ];

    const rankingList = [
        { rank: 4, name: "Anda (Alex)", isMe: true, contributions: 24, points: "1.250", trend: "up", change: "Naik 2 peringkat minggu ini!", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8" },
        { rank: 5, name: "John Doe", isMe: false, contributions: 20, points: "1.100", trend: "down", initials: "JD" },
        { rank: 6, name: "Lisa Wong", isMe: false, contributions: 18, points: "1.050", trend: "neutral", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ" }, // Using challenge img as placeholder avatar
        { rank: 7, name: "Michael Ray", isMe: false, contributions: 15, points: "980", trend: "up", initials: "MR" },
        { rank: 8, name: "Anna Smith", isMe: false, contributions: 12, points: "850", trend: "neutral", initials: "AS" },
    ];

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center justify-between px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">recycling</span>
                            <h1 className="text-xl font-black tracking-tight text-text-main dark:text-white">SIMBIOSIS</h1>
                        </div>
                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>
                        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400 hidden sm:block">Peringkat Lingkungan</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/5 rounded-lg px-3 h-10 w-64 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input className="bg-transparent border-none text-sm w-full focus:ring-0 text-text-main dark:text-white placeholder-text-muted outline-none ml-2" placeholder="Cari warga..." type="text" />
                        </div>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-surface-light dark:border-surface-dark"></span>
                        </button>
                        <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8')" }}></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Title & Filters */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigate('/')}
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <div>
                                    <h1 className="text-2xl font-bold text-text-main dark:text-white">Detail Peringkat Lingkungan</h1>
                                    <p className="text-text-muted text-sm">Green Valley Community • 48 Warga</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors min-w-[140px] justify-between">
                                    <span>{period}</span>
                                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors min-w-[140px] justify-between">
                                    <span>{category}</span>
                                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                                </button>
                            </div>
                        </div>

                        {/* Podium Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mt-8 mb-12">
                            {/* Rank 2 */}
                            <div className="order-2 md:order-1 bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center shadow-sm relative pt-12 mt-4 md:mt-0">
                                <div className="absolute -top-10">
                                    <div className="relative">
                                        <div className="size-20 rounded-full bg-gray-200 border-4 border-white dark:border-surface-dark overflow-hidden">
                                            {topThree[0].avatar ? (
                                                <img src={topThree[0].avatar} alt={topThree[0].name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xl font-bold text-gray-500">{topThree[0].initials}</div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-700 font-bold text-xs py-0.5 px-2 rounded-full border-2 border-white dark:border-surface-dark">#2</div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg text-text-main dark:text-white mt-4">{topThree[0].name}</h3>
                                <p className="text-xs text-text-muted mb-3">{topThree[0].contributions} Kontribusi</p>
                                <p className="text-2xl font-black text-gray-400">{topThree[0].points}</p>
                                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-1">Poin Eco</p>
                            </div>

                            {/* Rank 1 */}
                            <div className="order-1 md:order-2 bg-white dark:bg-surface-dark rounded-2xl p-6 border-2 border-yellow-400 flex flex-col items-center text-center shadow-lg relative pt-16 z-10 scale-110">
                                <div className="absolute -top-[60px] flex flex-col items-center">
                                    <span className="material-symbols-outlined text-4xl text-yellow-400 mb-[-10px] z-10 drop-shadow-sm">crown</span>
                                    <div className="relative">
                                        <div className="size-24 rounded-full bg-yellow-100 border-4 border-yellow-400 overflow-hidden shadow-md">
                                            {topThree[1].avatar ? (
                                                <img src={topThree[1].avatar} alt={topThree[1].name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xl font-bold text-gray-500">{topThree[1].initials}</div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-white font-bold text-sm py-0.5 px-3 rounded-full border-2 border-white dark:border-surface-dark shadow-sm">#1</div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl text-text-main dark:text-white mt-4">{topThree[1].name}</h3>
                                <p className="text-xs text-text-muted mb-4">{topThree[1].contributions} Kontribusi</p>
                                <p className="text-3xl font-black text-yellow-500">{topThree[1].points}</p>
                                <p className="text-[10px] font-bold text-yellow-600/70 uppercase tracking-wider mt-1">Poin Eco</p>
                            </div>

                            {/* Rank 3 */}
                            <div className="order-3 md:order-3 bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center shadow-sm relative pt-12 mt-4 md:mt-0">
                                <div className="absolute -top-10">
                                    <div className="relative">
                                        <div className="size-20 rounded-full bg-gray-200 border-4 border-white dark:border-surface-dark overflow-hidden">
                                            {topThree[2].avatar ? (
                                                <img src={topThree[2].avatar} alt={topThree[2].name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xl font-bold text-gray-500">{topThree[2].initials}</div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-200 text-orange-800 font-bold text-xs py-0.5 px-2 rounded-full border-2 border-white dark:border-surface-dark">#3</div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg text-text-main dark:text-white mt-4">{topThree[2].name}</h3>
                                <p className="text-xs text-text-muted mb-3">{topThree[2].contributions} Kontribusi</p>
                                <p className="text-2xl font-black text-orange-400">{topThree[2].points}</p>
                                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-1">Poin Eco</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* List Section */}
                            <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                                <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/50 dark:bg-white/5 text-xs font-bold text-text-muted tracking-wider uppercase border-b border-gray-100 dark:border-gray-700">
                                    <div className="col-span-1 text-center">#</div>
                                    <div className="col-span-5">Pengguna</div>
                                    <div className="col-span-3 text-center">Aktivitas</div>
                                    <div className="col-span-3 text-right">Poin</div>
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {rankingList.map((user) => (
                                        <div key={user.rank} className={`grid grid-cols-12 gap-4 px-6 py-4 items-center ${user.isMe ? 'bg-green-50/50 dark:bg-green-900/10 border-l-4 border-green-500' : 'hover:bg-gray-50 dark:hover:bg-white/5 transition-colors'}`}>
                                            <div className="col-span-1 text-center font-bold text-text-muted">{user.rank}</div>
                                            <div className="col-span-5 flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0 flex items-center justify-center text-sm font-bold text-gray-500">
                                                    {user.avatar ? <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" /> : user.initials}
                                                </div>
                                                <div>
                                                    <p className={`font-bold text-sm ${user.isMe ? 'text-text-main dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>{user.name}</p>
                                                    {user.change && <p className="text-[10px] text-green-600 font-medium">{user.change}</p>}
                                                </div>
                                            </div>
                                            <div className="col-span-3 text-center text-sm font-medium text-text-main dark:text-white">
                                                {user.contributions}
                                            </div>
                                            <div className="col-span-3 flex justify-end items-center gap-3">
                                                <span className={`text-sm font-black ${user.isMe ? 'text-green-600' : 'text-text-main dark:text-white'}`}>{user.points}</span>
                                                {user.trend === 'up' && <span className="material-symbols-outlined text-green-500 text-lg">trending_up</span>}
                                                {user.trend === 'down' && <span className="material-symbols-outlined text-red-500 text-lg">trending_down</span>}
                                                {user.trend === 'neutral' && <span className="material-symbols-outlined text-gray-300 text-lg">remove</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Section */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-bold text-lg text-text-main dark:text-white">Perbandingan Tren</h3>
                                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                            <button onClick={() => setTrendPeriod('Minggu')} className={`text-xs font-bold px-3 py-1 rounded-md transition-all ${trendPeriod === 'Minggu' ? 'bg-white dark:bg-surface-dark text-text-main shadow-sm' : 'text-text-muted'}`}>Minggu</button>
                                            <button onClick={() => setTrendPeriod('Bulan')} className={`text-xs font-bold px-3 py-1 rounded-md transition-all ${trendPeriod === 'Bulan' ? 'bg-white dark:bg-surface-dark text-text-main shadow-sm' : 'text-text-muted'}`}>Bulan</button>
                                        </div>
                                    </div>

                                    <div className="flex items-end gap-2 h-40 mb-2">
                                        {[
                                            { d: 'Sen', v: 40, active: false },
                                            { d: 'Sel', v: 65, active: false },
                                            { d: 'Rab', v: 55, active: false },
                                            { d: 'Kam', v: 80, active: false },
                                            { d: 'Jum', v: 75, active: false },
                                            { d: 'Sab', v: 100, active: true },
                                        ].map((bar, i) => (
                                            <div key={i} className="flex-1 flex flex-col justify-end gap-2 h-full group">
                                                {bar.active && (
                                                    <div className="bg-green-500 text-white text-[10px] font-bold py-1 px-1.5 rounded mb-1 text-center w-full shadow-sm animate-in fade-in slide-in-from-bottom-2">#4</div>
                                                )}
                                                <div className={`w-full rounded-t-md transition-all ${bar.active ? 'bg-green-500' : 'bg-green-100 dark:bg-green-900/30'}`} style={{ height: `${bar.v}%` }}></div>
                                                <span className="text-[10px] text-center text-text-muted font-medium">{bar.d}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-text-muted mt-4 leading-relaxed">
                                        Peringkat Anda naik secara konsisten minggu ini. Pertahankan untuk mencapai <span className="font-bold text-green-600">Top 3</span>!
                                    </p>
                                </div>

                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                            <span className="material-symbols-outlined">lightbulb</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-main dark:text-white text-sm">Tips Peringkat</h4>
                                            <p className="text-xs text-text-muted mt-1 leading-relaxed">
                                                Selesaikan <strong>Tantangan Minggu Bebas Plastik</strong> untuk mendapatkan tambahan <span className="font-bold text-primary">300 Poin</span> dan naik ke posisi #3!
                                            </p>
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

export default LeaderboardDetail;
