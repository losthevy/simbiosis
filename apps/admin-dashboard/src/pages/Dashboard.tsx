import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate();
    const [showNotif, setShowNotif] = useState(false);

    const handleNotifClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (showNotif) {
            setShowNotif(false);
        } else {
            setShowNotif(true);
            setShowProfile(false);
            // Optional: keep auto-close if desired, but user asked for explicit "click back to close"
            // Keeping timeout might conflict with manual toggle if not careful, but usually acceptable for toasts
            // Removed timeout to respect manual toggle behavior more strictly as per request "ketika kembali memencet... tertutup"
        }
    };

    const [showProfile, setShowProfile] = useState(false);

    const handleProfileClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (showProfile) {
            setShowProfile(false);
        } else {
            setShowProfile(true);
            setShowNotif(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = () => {
            if (showNotif) setShowNotif(false);
            if (showProfile) setShowProfile(false);
        };

        if (showNotif || showProfile) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showNotif, showProfile]);

    return (
        <div className="flex-1 flex flex-col w-full h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
            {/* Profile Popup */}
            {showProfile && (
                <div className="absolute top-20 right-8 z-50 animate-in slide-in-from-top-2 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-4 min-w-[200px] flex flex-col gap-3">
                        <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-3">
                            <div
                                className="h-10 w-10 rounded-full bg-center bg-cover border border-gray-200 dark:border-gray-700"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLo4NrYcGtlGXTWKt6PV-23GwlEIpEH3Y8v7n_qoE0Lj_p-DUQfYl_Q4kKsLVHJjEC7Jdoju6WxSX5XKUY-XkFQnWd9vjpGmDwpTXbfuxUjN1SZXcSEZ2fooxKX9krVtiB41-Cv6SlxBqNoWl0mDJIzXLYZTbqktnLyEEmZNwdvSeJQbev4IQE-vVzzXm1bf1Xy0vsYSQsUCB-_-ywiUHAyAj8_-D4DPo5R5HW6eaIAdBt_fJ4mlke-3UNFbVnT4MVw213ARnJTCw')" }}
                            ></div>
                            <div>
                                <h4 className="font-bold text-sm text-text-main dark:text-white">Adminoto Santoso</h4>
                                <p className="text-xs text-text-muted">ID: #ADM-001</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors font-semibold">
                            <span className="material-symbols-outlined text-lg">logout</span>
                            Keluar
                        </button>
                    </div>
                </div>
            )}

            {/* Notification Toast */}
            {showNotif && (
                <div className="absolute top-20 right-8 z-50 animate-in slide-in-from-top-2 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-4 flex items-center gap-3 min-w-[300px]">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                            <span className="material-symbols-outlined">notifications_off</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-text-main dark:text-white">Tidak ada notifikasi terbaru</h4>
                            <p className="text-xs text-text-muted">Anda sudah melihat semua pembaruan.</p>
                        </div>
                    </div>
                </div>
            )}

            <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                <div className="flex items-center gap-6">
                    <h1 className="text-text-main dark:text-white text-2xl font-black tracking-tight flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-4xl">recycling</span>
                        SIMBIOSIS
                    </h1>
                    <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
                    <h2 className="text-lg font-bold text-text-muted hidden sm:block">Admin</h2>
                </div>
                <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                    <a href="https://simbiosis-web-portal.vercel.app" className="hidden sm:flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">grid_view</span>
                        Portal
                    </a>
                    <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-gray-800 border border-transparent focus-within:border-primary px-4 transition-all focus-within:ring-1 focus-within:ring-primary">
                        <span className="material-symbols-outlined text-text-muted">search</span>
                        <input className="bg-transparent border-none text-sm w-full focus:ring-0 text-text-main dark:text-white placeholder-text-muted outline-none ml-2" placeholder="Cari audit, pengguna..." type="text" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleNotifClick}
                            className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors relative"
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-surface-light dark:border-surface-dark"></span>
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors">
                            <span className="material-symbols-outlined">help</span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                        <button
                            onClick={handleProfileClick}
                            className="flex items-center gap-3 pl-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                        >
                            <div
                                className="h-9 w-9 rounded-full bg-center bg-cover border border-gray-200 dark:border-gray-700"
                                data-alt="Admin user profile picture showing a smiling man"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLo4NrYcGtlGXTWKt6PV-23GwlEIpEH3Y8v7n_qoE0Lj_p-DUQfYl_Q4kKsLVHJjEC7Jdoju6WxSX5XKUY-XkFQnWd9vjpGmDwpTXbfuxUjN1SZXcSEZ2fooxKX9krVtiB41-Cv6SlxBqNoWl0mDJIzXLYZTbqktnLyEEmZNwdvSeJQbev4IQE-vVzzXm1bf1Xy0vsYSQsUCB-_-ywiUHAyAj8_-D4DPo5R5HW6eaIAdBt_fJ4mlke-3UNFbVnT4MVw213ARnJTCw')" }}
                            >
                            </div>
                        </button>
                    </div>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-8">
                <div className="w-full space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="text-text-muted text-sm font-medium flex items-center">
                            <span className="material-symbols-outlined align-bottom text-lg mr-1">calendar_today</span>
                            <span>Hari ini, <span className="text-text-main dark:text-white font-semibold">24 Oktober 2025</span></span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate('/detailed-statistics')}
                                className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                Rincian Lengkap
                            </button>
                            <button
                                onClick={() => navigate('/report-access')}
                                className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">folder_open</span>
                                Akses Laporan
                            </button>
                            <button
                                onClick={() => navigate('/new-audit')}
                                className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">add_task</span>
                                Audit Baru
                            </button>
                            <button
                                onClick={() => navigate('/create-report')}
                                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-lg text-sm font-bold transition-colors shadow-sm shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-[20px]">description</span>
                                Buat Laporan
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm flex flex-col gap-3 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                                    <span className="material-symbols-outlined">delete</span>
                                </div>
                                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                    +12%
                                </span>
                            </div>
                            <div>
                                <p className="text-text-muted text-sm font-medium">Total Sampah Terkumpul</p>
                                <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">1.240 Ton</h3>
                            </div>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm flex flex-col gap-3 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg">
                                    <span className="material-symbols-outlined">eco</span>
                                </div>
                                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                    +5%
                                </span>
                            </div>
                            <div>
                                <p className="text-text-muted text-sm font-medium">Karbon Tersimpan</p>
                                <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">450 kg</h3>
                            </div>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm flex flex-col gap-3 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg">
                                    <span className="material-symbols-outlined">pending_actions</span>
                                </div>
                                <span className="flex items-center text-xs font-bold text-gray-50 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                    0%
                                </span>
                            </div>
                            <div>
                                <p className="text-text-muted text-sm font-medium">Audit Tertunda</p>
                                <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">12</h3>
                            </div>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm flex flex-col gap-3 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg">
                                    <span className="material-symbols-outlined">local_shipping</span>
                                </div>
                                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    Aktif
                                </span>
                            </div>
                            <div>
                                <p className="text-text-muted text-sm font-medium">Rute Aktif</p>
                                <h3 className="text-2xl font-bold text-text-main dark:text-white mt-1">8/10</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-text-main dark:text-white">Volume Koleksi Bulanan</h3>
                                <p className="text-sm text-text-muted">Performa 30 Hari Terakhir</p>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 dark:bg-black/20 p-1 rounded-lg">
                                <button className="px-3 py-1 text-xs font-semibold bg-white dark:bg-surface-dark shadow-sm rounded-md text-text-main dark:text-white">Volume (Kg)</button>
                            </div>
                        </div>
                        <div className="relative w-full h-64">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                                <line className="text-gray-400 dark:text-gray-600" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.2" x1="0" x2="100" y1="0" y2="0"></line>
                                <line className="text-gray-400 dark:text-gray-600" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.2" x1="0" x2="100" y1="12.5" y2="12.5"></line>
                                <line className="text-gray-400 dark:text-gray-600" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.2" x1="0" x2="100" y1="25" y2="25"></line>
                                <line className="text-gray-400 dark:text-gray-600" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.2" x1="0" x2="100" y1="37.5" y2="37.5"></line>
                                <line className="text-gray-400 dark:text-gray-600" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.2" x1="0" x2="100" y1="50" y2="50"></line>
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#13ec6d" stopOpacity="0.4"></stop>
                                        <stop offset="100%" stopColor="#13ec6d" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,40 Q10,35 20,38 T40,20 T60,25 T80,10 T100,15 V50 H0 Z" fill="url(#chartGradient)"></path>
                                <path d="M0,40 Q10,35 20,38 T40,20 T60,25 T80,10 T100,15" fill="none" stroke="#13ec6d" strokeLinecap="round" strokeWidth="0.8" vectorEffect="non-scaling-stroke"></path>
                                <circle className="hidden md:block" cx="20" cy="38" fill="#13ec6d" r="1"></circle>
                                <circle className="hidden md:block" cx="40" cy="20" fill="#13ec6d" r="1"></circle>
                                <circle className="hidden md:block" cx="60" cy="25" fill="#13ec6d" r="1"></circle>
                                <circle className="hidden md:block" cx="80" cy="10" fill="#13ec6d" r="1"></circle>
                            </svg>
                        </div>
                        <div className="flex justify-between text-xs text-text-muted mt-2 px-1">
                            <span>Minggu 1</span>
                            <span>Minggu 2</span>
                            <span>Minggu 3</span>
                            <span>Minggu 4</span>
                        </div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700/50 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Koleksi Terbaru</h3>
                            <button onClick={() => navigate('/all-collections')} className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">Lihat Semua</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-text-muted uppercase bg-gray-50 dark:bg-black/20">
                                    <tr>
                                        <th className="px-6 py-3 font-medium">ID</th>
                                        <th className="px-6 py-3 font-medium">Lokasi</th>
                                        <th className="px-6 py-3 font-medium">Merek</th>
                                        <th className="px-6 py-3 font-medium">Tipe</th>
                                        <th className="px-6 py-3 font-medium text-right">Berat</th>
                                        <th className="px-6 py-3 font-medium text-center">Status</th>
                                        <th className="px-6 py-3 font-medium text-right">Tanggal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-text-main dark:text-white">#COL-2940</td>
                                        <td className="px-6 py-4 text-text-muted flex items-center gap-2">
                                            <div
                                                className="h-6 w-6 rounded bg-cover bg-center"
                                                data-alt="Map thumbnail of Jakarta location"
                                                data-location="Jakarta"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk')" }}
                                            ></div>
                                            Jakarta Pusat
                                        </td>
                                        <td className="px-6 py-4 text-text-main dark:text-white font-medium">Unilever</td>
                                        <td className="px-6 py-4 text-text-muted">Plastik (HDPE)</td>
                                        <td className="px-6 py-4 text-text-main dark:text-white text-right font-medium">1.204 kg</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400">
                                                Terverifikasi
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-text-muted text-right">24 Okt</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-text-main dark:text-white">#COL-2939</td>
                                        <td className="px-6 py-4 text-text-muted flex items-center gap-2">
                                            <div
                                                className="h-6 w-6 rounded bg-cover bg-center"
                                                data-alt="Map thumbnail of Bandung location"
                                                data-location="Bandung"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAg2WnlWGrOmiHU_erisGIjScBz07lQwmF1QSF9Y12xXjaHpL2TDI60JDq2kJWtlWkTMNe93qKJVM_9b0Exm3qeSfhJ4McfFX6c3SmwCYFgRQi68qUXoiiMbMlBR5JEfR5NR5kUCrMwa_uevlZ53Nqyp_FutMtFpF5Ix14wygXCKJNXEV9zBJ-D52w2FCZJmVwzGxj9nD1C-YHfxRws-Q8q7EJLGvv4RqKdD2x4zglkftkVJ7KNaMvEyDh_iVKzKNjpDINEBXctlc')" }}
                                            ></div>
                                            Bandung Utara
                                        </td>
                                        <td className="px-6 py-4 text-text-main dark:text-white font-medium">Danone</td>
                                        <td className="px-6 py-4 text-text-muted">Kertas Campuran</td>
                                        <td className="px-6 py-4 text-text-main dark:text-white text-right font-medium">850 kg</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400">
                                                Tertunda
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-text-muted text-right">23 Okt</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-text-main dark:text-white">#COL-2938</td>
                                        <td className="px-6 py-4 text-text-muted flex items-center gap-2">
                                            <div
                                                className="h-6 w-6 rounded bg-cover bg-center"
                                                data-alt="Map thumbnail of Surabaya location"
                                                data-location="Surabaya"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiPxonezBbrGCPSQ19cnBfUJmJoIm7PW9otNEY3JbtPynmqj7aj9mWBBp_3MO3VQckaBNtrjNJYGfgJrxHvCE2G4qQa-ZLXuKp9blp59eOUJ5OT5fP_ANfPg0PFW_XZwKsd6L_59QUGqjYfa-_TQ06jTtSRONMgf-BLZ53PCrW_rceWHPusjkKWn1tOai8RD88GT8HT3ACGGQ6LuVQj5s9GBCcpvM5C01JM5rLa4f8FLiLgZbUwe0guPOJwF3uL6GbG7TMxJmi96o')" }}
                                            ></div>
                                            Surabaya Timur
                                        </td>
                                        <td className="px-6 py-4 text-text-main dark:text-white font-medium">Nestlé</td>
                                        <td className="px-6 py-4 text-text-muted">Logam (Alu)</td>
                                        <td className="px-6 py-4 text-text-main dark:text-white text-right font-medium">340 kg</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400">
                                                Terverifikasi
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-text-muted text-right">23 Okt</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-text-main dark:text-white">#COL-2937</td>
                                        <td className="px-6 py-4 text-text-muted flex items-center gap-2">
                                            <div
                                                className="h-6 w-6 rounded bg-cover bg-center"
                                                data-alt="Map thumbnail of Bali location"
                                                data-location="Bali"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrZo2Kiz77wcIvrd_cMlpL4Ivbe1E-y7yUTsdNKATtDLDTJCJCvDHT7b__TJXcn86HhiRux-Kbk6N7XLZKOtopLewelE9oczzGN5sMT_4HAAC1ZW1fxXYWA00sFGd2-wg7rUt9tgMfTDvHYESytUq3lcT9Q24BQAm1iFJdUlVddSd9p3foKcTuBA-uil-ibhIVeO0fRs93N6Nx-LIYOszjBT3IwblVK86bQgUCIAP3RMakouLJuF0QBy0DuWasMVXp9bGJuJ-TBFk')" }}
                                            ></div>
                                            Bali Resort
                                        </td>
                                        <td className="px-6 py-4 text-text-main dark:text-white font-medium">Coca-Cola</td>
                                        <td className="px-6 py-4 text-text-muted">Plastik (PET)</td>
                                        <td className="px-6 py-4 text-text-main dark:text-white text-right font-medium">2.100 kg</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400">
                                                Terverifikasi
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-text-muted text-right">22 Okt</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
