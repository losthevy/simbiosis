import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate();

    const [showNotif, setShowNotif] = useState(false);

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

    const handleNotifClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (showNotif) {
            setShowNotif(false);
        } else {
            setShowNotif(true);
            setShowProfile(false);
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
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden relative">
            {/* Profile Popup */}
            {showProfile && (
                <div className="absolute top-24 right-6 lg:right-10 z-[60] animate-in slide-in-from-top-2 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-4 min-w-[220px] flex flex-col gap-3">
                        <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-3">
                            <div
                                className="h-10 w-10 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8')" }}
                            ></div>
                            <div>
                                <h4 className="font-bold text-sm text-text-main dark:text-white">Alex Santoso</h4>
                                <p className="text-xs text-text-muted">ID: #USR-1234</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-sm text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors font-medium">
                            <span className="material-symbols-outlined text-lg">person</span>
                            Profil Saya
                        </button>
                        <button className="flex items-center gap-2 text-sm text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors font-medium">
                            <span className="material-symbols-outlined text-lg">settings</span>
                            Pengaturan
                        </button>
                        <button className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors font-bold mt-1">
                            <span className="material-symbols-outlined text-lg">logout</span>
                            Keluar
                        </button>
                    </div>
                </div>
            )}

            {/* Notification Toast */}
            {showNotif && (
                <div className="absolute top-24 right-6 lg:right-10 z-[60] animate-in slide-in-from-top-2 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-4 flex items-center gap-3 min-w-[320px]">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 font-bold shrink-0">
                            <span className="material-symbols-outlined">notifications_off</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-text-main dark:text-white">Tidak ada notifikasi terbaru</h4>
                            <p className="text-xs text-text-muted mt-0.5">Anda sudah melihat semua pembaruan.</p>
                        </div>
                        <button onClick={() => setShowNotif(false)} className="ml-auto p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>
                </div>
            )}

            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex-shrink-0 z-10">
                    <div className="flex items-center gap-6">
                        <h1 className="text-text-main dark:text-white text-2xl font-black tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-4xl">recycling</span>
                            SIMBIOSIS
                        </h1>
                        <div className="h-8 w-px bg-border-light dark:bg-border-dark hidden sm:block"></div>
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Pengguna</h2>
                    </div>
                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                        <a href="https://simbiosis-web-portal.vercel.app" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-lg">grid_view</span>
                            <span className="hidden sm:inline">Portal</span>
                        </a>
                        <button
                            onClick={() => navigate('/simbi-ai')}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-sm hover:bg-blue-500/20 transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">smart_toy</span>
                            <span className="hidden sm:inline">Simbi AI</span>
                        </button>
                        <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-background-light dark:bg-background-dark border border-transparent focus-within:border-primary px-4 transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-muted outline-none ml-2" placeholder="Cari aktivitas, tantangan, atau teman..." type="text" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleNotifClick}
                                className="relative p-2.5 rounded-full hover:bg-background-light dark:hover:bg-background-dark text-text-main dark:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
                            </button>
                            <div
                                onClick={handleProfileClick}
                                className="h-11 w-11 rounded-full bg-cover bg-center border-2 border-primary cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all"
                                data-alt="Portrait of the user Alex"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8')" }}
                            ></div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1920px] mx-auto">
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight">Selamat datang kembali, Alex Santoso!</h1>
                                <p className="text-lg text-text-muted dark:text-gray-400">Berikut adalah ringkasan dampak harian dan tugas aktif Anda.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                <button
                                    onClick={() => navigate('/scan?source=citizen')}
                                    className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all text-left"
                                >
                                    <div className="p-3.5 rounded-xl bg-[#e0fdf0] text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">delete_outline</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white">Lapor Sampah</h3>
                                        <p className="text-sm text-text-muted mt-1">Pindai QR atau foto</p>
                                    </div>
                                </button>
                                <button onClick={() => navigate('/bank-sampah')} className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all text-left">
                                    <div className="p-3.5 rounded-xl bg-[#e0fdf0] text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">account_balance</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white">Akses Bank Sampah</h3>
                                        <p className="text-sm text-text-muted mt-1">Cek lokasi & jadwal</p>
                                    </div>
                                </button>
                                <button onClick={() => navigate('/challenges')} className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all text-left">
                                    <div className="p-3.5 rounded-xl bg-[#e0fdf0] text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">flag</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white">Gabung Tantangan</h3>
                                        <p className="text-sm text-text-muted mt-1">3 Baru di dekat Anda</p>
                                    </div>
                                </button>
                                <button onClick={() => navigate('/redeem')} className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all text-left">
                                    <div className="p-3.5 rounded-xl bg-[#e0fdf0] text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">redeem</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white">Tukar Poin</h3>
                                        <p className="text-sm text-text-muted mt-1">Belanja produk ramah</p>
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white">Tantangan Aktif</h3>
                                    <div
                                        className="text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1 cursor-pointer"
                                        onClick={() => navigate('/my-challenges')}
                                    >
                                        Lihat Semua
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div onClick={() => navigate('/challenge-detail')} className="flex flex-col rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="h-48 w-full bg-cover bg-center relative" data-alt="Community cleaning up plastic bottles in a park" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ')" }}>
                                            <div className="absolute top-4 right-4 bg-surface-light/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold text-text-main shadow-sm border border-border-light">
                                                500 poin
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col gap-4">
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-lg">Bersih-bersih Taman Akhir Pekan</h4>
                                                <p className="text-base text-text-muted mt-1">Kumpulkan 5kg barang daur ulang di Taman Pusat.</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm font-medium text-text-muted">
                                                    <span>Kemajuan</span>
                                                    <span className="text-primary font-bold">60%</span>
                                                </div>
                                                <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-3 overflow-hidden border border-border-light dark:border-border-dark">
                                                    <div className="bg-primary h-3 rounded-full shadow-[0_0_10px_rgba(19,236,109,0.3)]" style={{ width: "60%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => navigate('/challenge-detail-plastic-free')} className="flex flex-col rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="h-48 w-full bg-cover bg-center relative" data-alt="Assorted plastic free reusable grocery bags" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg')" }}>
                                            <div className="absolute top-4 right-4 bg-surface-light/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold text-text-main shadow-sm border border-border-light">
                                                300 poin
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col gap-4">
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-lg">Minggu Bebas Plastik</h4>
                                                <p className="text-base text-text-muted mt-1">Hindari plastik sekali pakai selama 7 hari.</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm font-medium text-text-muted">
                                                    <span>Kemajuan</span>
                                                    <span className="text-primary font-bold">2/7 Hari</span>
                                                </div>
                                                <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-3 overflow-hidden border border-border-light dark:border-border-dark">
                                                    <div className="bg-primary h-3 rounded-full shadow-[0_0_10px_rgba(19,236,109,0.3)]" style={{ width: "28%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h3 className="text-xl font-bold text-text-main dark:text-white">Aktivitas Terbaru</h3>
                                <div className="flex flex-col rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark divide-y divide-border-light dark:divide-border-dark">
                                    <div className="flex items-center gap-5 p-5 hover:bg-background-light/50 transition-colors">
                                        <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <span className="material-symbols-outlined text-2xl">compost</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-base font-bold text-text-main dark:text-white">Limbah Organik Diproses</p>
                                            <p className="text-sm text-text-muted">2 jam yang lalu</p>
                                        </div>
                                        <span className="text-base font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">+50 poin</span>
                                    </div>
                                    <div className="flex items-center gap-5 p-5 hover:bg-background-light/50 transition-colors">
                                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <span className="material-symbols-outlined text-2xl">recycling</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-base font-bold text-text-main dark:text-white">Botol Plastik Disetor</p>
                                            <p className="text-sm text-text-muted">Kemarin</p>
                                        </div>
                                        <span className="text-base font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">+120 poin</span>
                                    </div>
                                    <div className="flex items-center gap-5 p-5 hover:bg-background-light/50 transition-colors">
                                        <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <span className="material-symbols-outlined text-2xl">inventory_2</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-base font-bold text-text-main dark:text-white">Hadiah Tantangan: Jalan Bersih</p>
                                            <p className="text-sm text-text-muted">2 hari yang lalu</p>
                                        </div>
                                        <span className="text-base font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">+300 poin</span>
                                    </div>
                                </div>
                            </div>

                            {/* News Section */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white">Berita & Tips</h3>
                                    <button
                                        onClick={() => navigate('/news')}
                                        className="text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1"
                                    >
                                        Lihat Semua
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                    <div
                                        onClick={() => navigate('/news/1')}
                                        className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row"
                                    >
                                        <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 relative">
                                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ')" }}></div>
                                        </div>
                                        <div className="p-6 md:w-2/3 flex flex-col gap-2 justify-center">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded md:bg-gray-100 md:dark:bg-white/10 text-text-muted uppercase tracking-wide">Berita</span>
                                                <span className="text-[10px] text-text-muted">• 2 jam yang lalu</span>
                                            </div>
                                            <h4 className="font-bold text-text-main dark:text-white text-lg leading-tight">Green Valley Luncurkan Program Bank Sampah Digital</h4>
                                            <p className="text-sm text-text-muted line-clamp-2">Inisiatif baru untuk mempermudah warga dalam mengelola sampah...</p>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => navigate('/news/2')}
                                        className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row"
                                    >
                                        <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 relative">
                                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg')" }}></div>
                                        </div>
                                        <div className="p-6 md:w-2/3 flex flex-col gap-2 justify-center">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded md:bg-gray-100 md:dark:bg-white/10 text-text-muted uppercase tracking-wide">Tips</span>
                                                <span className="text-[10px] text-text-muted">• Kemarin</span>
                                            </div>
                                            <h4 className="font-bold text-text-main dark:text-white text-lg leading-tight">5 Tips Mengurangi Sampah Plastik di Rumah Tangga</h4>
                                            <p className="text-sm text-text-muted line-clamp-2">Langkah sederhana yang berdampak besar bagi lingkungan...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            <div className="rounded-2xl p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark relative overflow-hidden group shadow-sm">
                                <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="flex items-center gap-2 text-text-muted">
                                        <div className="p-2 bg-background-light dark:bg-background-dark rounded-lg">
                                            <span className="material-symbols-outlined">account_balance_wallet</span>
                                        </div>
                                        <span className="text-base font-semibold">Saldo EcoPoin</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-5xl font-black text-text-main dark:text-white tracking-tight">1.250</span>
                                        <span className="text-base text-text-muted font-medium">≈ Rp185.000 nilai</span>
                                    </div>
                                    <div className="flex gap-3 mt-2">
                                        <button onClick={() => navigate('/top-up')} className="flex-1 bg-primary text-text-main font-bold text-base py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                                            Isi Saldo
                                        </button>
                                        <button onClick={() => navigate('/history')} className="flex-1 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-bold text-base py-3 px-6 rounded-xl border border-border-light dark:border-border-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                            Riwayat
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => navigate('/weekly-impact')}
                                className="rounded-2xl p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex flex-col gap-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">Dampak Mingguan</h3>
                                        <p className="text-base text-text-muted mt-1">12kg Didaur Ulang (+20%)</p>
                                    </div>
                                    <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                                        <span className="material-symbols-outlined text-2xl">monitoring</span>
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 lg:gap-4 h-48 mt-2 pt-6 border-t border-dashed border-border-light dark:border-border-dark">
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary/30 h-[40%] rounded-t-lg group-hover:bg-primary/50 transition-all relative">
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">4kg</div>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-text-muted">Sen</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary/30 h-[60%] rounded-t-lg group-hover:bg-primary/50 transition-all relative">
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">6kg</div>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-text-muted">Sel</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary/30 h-[30%] rounded-t-lg group-hover:bg-primary/50 transition-all relative">
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">3kg</div>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-text-muted">Rab</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary/30 h-[80%] rounded-t-lg group-hover:bg-primary/50 transition-all relative">
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">8kg</div>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-text-muted">Kam</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary h-[90%] rounded-t-lg shadow-[0_0_15px_rgba(19,236,109,0.4)] relative">
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-text-main font-bold text-xs py-1 px-2 rounded pointer-events-none">12kg</div>
                                        </div>
                                        <span className="text-xs font-bold text-center text-text-main dark:text-white">Jum</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary/30 h-[50%] rounded-t-lg group-hover:bg-primary/50 transition-all relative">
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">5kg</div>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-text-muted">Sab</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer h-full">
                                        <div className="w-full bg-primary/30 h-[20%] rounded-t-lg group-hover:bg-primary/50 transition-all relative">
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">2kg</div>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-text-muted">Min</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => navigate('/leaderboard')}
                                className="rounded-2xl p-0 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
                            >
                                <div className="p-8 pb-6 border-b border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50">
                                    <h3 className="text-lg font-bold text-text-main dark:text-white">Peringkat Lingkungan</h3>
                                    <div className="flex items-center gap-3 mt-2 bg-yellow-500/10 w-fit px-3 py-1.5 rounded-lg border border-yellow-500/20">
                                        <span className="material-symbols-outlined text-yellow-600 text-xl">military_tech</span>
                                        <p className="text-sm font-medium text-text-main dark:text-white">Anda di <span className="text-yellow-700 dark:text-yellow-500 font-bold">#4</span> di Green Valley</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 px-8 py-5 hover:bg-background-light dark:hover:bg-background-dark transition-colors border-b border-border-light/50 dark:border-border-dark/50">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 font-bold text-text-muted">1</div>
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-transparent group-hover:ring-primary/50" data-alt="Portrait of Sarah" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB9YUBbNxnc2MHj4dUntODkLBSP7MOlJf6T414YdhCwIzhiM_S05eLtaabsN2aNPgxoVHX8loyMigrqCocBgplRXOUGDHxVfci7yfooKF7fpUfvNVBZIHEiyruJ8leWc2bYJ1IjJwM93ofUOcFEyNcs8YszBLg9xvj2e9mOShuO2MmtHTc6BEP6D0UUpA1a-3rU_x5dAfVBvzFfs8awiYs2jP4F1t0OhNteoKz4RapNS9jjywdAnTHyaCHEDv4tMb_1onIPYUml9c')" }}></div>
                                        <span className="text-base font-medium flex-1 text-text-main dark:text-white">Sarah Jenkins</span>
                                        <span className="text-sm font-bold text-primary bg-primary/5 px-2 py-1 rounded">2.450</span>
                                    </div>
                                    <div className="flex items-center gap-4 px-8 py-5 hover:bg-background-light dark:hover:bg-background-dark transition-colors border-b border-border-light/50 dark:border-border-dark/50">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 font-bold text-text-muted">2</div>
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of Mike" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3xCtfu6Ak-otg_cRT7K5piZXR3myvqHYwuIvzm8Q81k8SYeh6pLYvZJlzN5RGe3PuooP-67dvxe-LgV7A4nd9owJN2FBg5p46qfjqsBV474XZ7RBVrAqZxJ9dFzJj0VDP-VqJbDHcFlbYzY4_W-R3ri2H9aUL6rMjAOTLTciiiHnGpISEBDfY0Gtk8wT8cHmXO9cGFLBQN08V7PWwp2F5O0WOW-i4OevB5InGFyHmnRZWcHzwfMShK5EDq6FO3QZnyCqaHtop6Hk')" }}></div>
                                        <span className="text-base font-medium flex-1 text-text-main dark:text-white">Mike Ross</span>
                                        <span className="text-sm font-bold text-primary bg-primary/5 px-2 py-1 rounded">1.980</span>
                                    </div>
                                    <div className="flex items-center gap-4 px-8 py-5 hover:bg-background-light dark:hover:bg-background-dark transition-colors border-b border-border-light/50 dark:border-border-dark/50">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 font-bold text-text-muted">3</div>
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of Emily" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwOXLTmhLgh-jYLqpvQ7OlqiHk-v0mj2UC1pN8hEPi4wi22vGFFFw96yP-5_08Yew9h9nQL7GbqiOrNjQ__hz3pzH7PXD-T3J9VByRpZUu64Y7ZD0W7hrE8Ts7kO31JltEkIecHT9chUfmFuMZapnS-8R5HkoAM3l6xiSsivTdvXlW5xAPJOvE7gKudbnJPyt6us6oA_uZz3JQA0KrGpqR6GqCFET9nk9-lyz1iPijZqIFxIEc765O94Bd4afEYdRD0y94nUa7Qlg')" }}></div>
                                        <span className="text-base font-medium flex-1 text-text-main dark:text-white">Emily Clark</span>
                                        <span className="text-sm font-bold text-primary bg-primary/5 px-2 py-1 rounded">1.560</span>
                                    </div>
                                    <div className="flex items-center gap-4 px-8 py-5 bg-primary/5 border-l-4 border-primary">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-text-main font-bold">4</div>
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary" data-alt="Portrait of user Alex" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAz3P335I0SOrT2N6gdhhmDt3UF86DIO0LxOovoN-C3sJzj0-rGe7JG5nCJ6mdCbFmjDQesgoW4IBga1EnMunwBAHWFDPYI8yFLdSoYaAtnVU3zH89DTuH7tbWHU2gWbPxiHBFeN_NB4chWvKPl_GdeIRmYUs_U6u_HvX3kkFSzk8PXEaTF3ljuooK4OznHMBZRf3UxuG-JCoZZGnjiqva-gGfcmWkpfPkTXvOWWGiw9L48pLJg-T9_c-30F8IHouViekFfVN3OoOc')" }}></div>
                                        <span className="text-base font-bold flex-1 text-text-main dark:text-white">Anda</span>
                                        <span className="text-sm font-bold text-primary">1.250</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Friends Section */}
                            <div className="rounded-2xl p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-text-main dark:text-white">Teman Sosial</h3>
                                    <button className="text-primary text-sm font-bold hover:underline">Tambah Teman</button>
                                </div>
                                <div className="space-y-4">
                                    <div
                                        className="flex items-center gap-3 cursor-pointer p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                                        onClick={() => navigate('/chat/mike-ross')}
                                    >
                                        <div className="relative">
                                            <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3xCtfu6Ak-otg_cRT7K5piZXR3myvqHYwuIvzm8Q81k8SYeh6pLYvZJlzN5RGe3PuooP-67dvxe-LgV7A4nd9owJN2FBg5p46qfjqsBV474XZ7RBVrAqZxJ9dFzJj0VDP-VqJbDHcFlbYzY4_W-R3ri2H9aUL6rMjAOTLTciiiHnGpISEBDfY0Gtk8wT8cHmXO9cGFLBQN08V7PWwp2F5O0WOW-i4OevB5InGFyHmnRZWcHzwfMShK5EDq6FO3QZnyCqaHtop6Hk')" }}></div>
                                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-text-main dark:text-white group-hover:text-primary transition-colors">Mike Ross</h4>
                                            <p className="text-xs text-text-muted">Baru saja menyelesaikan tantangan</p>
                                        </div>
                                        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                            <span className="material-symbols-outlined text-lg">thumb_up</span>
                                        </button>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 cursor-pointer p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                                        onClick={() => navigate('/chat/emily-clark')}
                                    >
                                        <div className="relative">
                                            <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwOXLTmhLgh-jYLqpvQ7OlqiHk-v0mj2UC1pN8hEPi4wi22vGFFFw96yP-5_08Yew9h9nQL7GbqiOrNjQ__hz3pzH7PXD-T3J9VByRpZUu64Y7ZD0W7hrE8Ts7kO31JltEkIecHT9chUfmFuMZapnS-8R5HkoAM3l6xiSsivTdvXlW5xAPJOvE7gKudbnJPyt6us6oA_uZz3JQA0KrGpqR6GqCFET9nk9-lyz1iPijZqIFxIEc765O94Bd4afEYdRD0y94nUa7Qlg')" }}></div>
                                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-gray-400 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-text-main dark:text-white group-hover:text-primary transition-colors">Emily Clark</h4>
                                            <p className="text-xs text-text-muted">1 jam yang lalu</p>
                                        </div>
                                        <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 transition-colors">
                                            <span className="material-symbols-outlined text-lg">chat_bubble</span>
                                        </button>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 cursor-pointer p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                                        onClick={() => navigate('/chat/john-doe')}
                                    >
                                        <div className="relative">
                                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs border border-purple-200">
                                                JD
                                            </div>
                                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-text-main dark:text-white group-hover:text-primary transition-colors">John Doe</h4>
                                            <p className="text-xs text-text-muted">Sedang di Bank Sampah</p>
                                        </div>
                                        <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 transition-colors">
                                            <span className="material-symbols-outlined text-lg">chat_bubble</span>
                                        </button>
                                    </div>
                                    {/* Added Sarah specifically if needed, but she is #1 on leaderboard so maybe not in this list, but standardizing for these 3 for now */}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
