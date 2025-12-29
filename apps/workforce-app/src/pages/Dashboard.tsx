import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate();
    const [showNotif, setShowNotif] = useState(false);
    const [showFinishConfirm, setShowFinishConfirm] = useState(false);
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
        <div className="flex h-screen w-full overflow-hidden relative">
            {/* Profile Popup */}
            {showProfile && (
                <div className="absolute top-16 right-6 z-[60] animate-in slide-in-from-top-2 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-4 min-w-[200px] flex flex-col gap-3">
                        <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-3">
                            <div
                                className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 bg-center bg-cover border-2 border-primary"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnEKdrBPJsUzMKI6VSEqP1gSDJ3GqIFmNMY3M_yRV8WNlaq_LDoBX3KOqyqVeJwvxNie52xIt594WxeLF_th6A6f_Rr8NIMq4QIXunyb3cJCWLpKVkwLdsKYpaJruO22AtUup8f-qb4LxtaEzyDFMbJkASeiXYDP7Iqd8nzoH-BRlAHOlensswO_yOqV-HOJP5KUd_6ZBhPUwMpMG7O3iWDfTBOSZy1doFp63YxvF2kwN5erxKdKDTjOQdw3ZGxowImonNKA726i8')" }}
                            ></div>
                            <div>
                                <h4 className="font-bold text-sm text-[#111814] dark:text-white">Budiman Santoso</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">ID: #WF-8821</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowFinishConfirm(true)}
                            className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors font-bold"
                        >
                            <span className="material-symbols-outlined text-lg">logout</span>
                            Selesai Tugas
                        </button>
                    </div>
                </div>
            )}

            {/* Finish Task Confirmation Modal */}
            {showFinishConfirm && (
                <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-xl w-full max-w-xs mx-4 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
                        <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-3xl">logout</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#111814] dark:text-white mb-2">Konfirmasi Selesai?</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Anda akan mengakhiri sesi tugas hari ini.</p>
                        <div className="flex gap-3 w-full">
                            <button
                                onClick={() => setShowFinishConfirm(false)}
                                className="flex-1 py-2.5 rounded-xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                            >
                                Tidak
                            </button>
                            <button
                                onClick={() => {
                                    setShowFinishConfirm(false);
                                    // Logout logic would go here
                                    navigate('/');
                                }}
                                className="flex-1 py-2.5 rounded-xl font-bold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
                            >
                                Ya
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Notification Toast */}
            {showNotif && (
                <div className="absolute top-20 right-6 z-50 animate-in slide-in-from-top-2 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-4 flex items-center gap-3 min-w-[300px]">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                            <span className="material-symbols-outlined">notifications_off</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-[#111814] dark:text-white">Tidak ada notifikasi terbaru</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Anda sudah melihat semua update.</p>
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
                <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-[#f0f4f2] dark:border-[#2a3c30] shrink-0 z-10">
                    <div className="flex items-center gap-6">
                        <h1 className="text-[#111814] dark:text-white text-2xl font-black tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-4xl">recycling</span>
                            <span className="hidden sm:inline">SIMBIOSIS</span>
                        </h1>
                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
                        <h2 className="text-lg font-bold text-gray-500 dark:text-gray-400 hidden sm:block">Petugas</h2>
                    </div>
                    <div className="flex items-center gap-4">
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
                        <button
                            onClick={handleNotifClick}
                            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#25382e] text-gray-600 dark:text-gray-300 transition-colors relative"
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
                        </button>
                        <div
                            onClick={handleProfileClick}
                            className="flex items-center gap-3 pl-4 border-l border-[#f0f4f2] dark:border-[#2a3c30] cursor-pointer hover:opacity-80 transition-opacity"
                        >

                            <div
                                className="size-9 rounded-full bg-gray-200 dark:bg-gray-700 bg-center bg-cover border-2 border-primary"
                                data-alt="Portrait of waste collector Budi smiling"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnEKdrBPJsUzMKI6VSEqP1gSDJ3GqIFmNMY3M_yRV8WNlaq_LDoBX3KOqyqVeJwvxNie52xIt594WxeLF_th6A6f_Rr8NIMq4QIXunyb3cJCWLpKVkwLdsKYpaJruO22AtUup8f-qb4LxtaEzyDFMbJkASeiXYDP7Iqd8nzoH-BRlAHOlensswO_yOqV-HOJP5KUd_6ZBhPUwMpMG7O3iWDfTBOSZy1doFp63YxvF2kwN5erxKdKDTjOQdw3ZGxowImonNKA726i8')" }}
                            >
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 bg-background-light dark:bg-background-dark">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#111814] dark:text-white">
                                Selamat datang kembali, Budiman <span className="text-primary">👋</span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-base">
                                Siap untuk shift Anda? Zona saat ini: <span className="font-semibold text-[#111814] dark:text-white">Jakarta Utara</span>.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-2 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm shrink-0">
                            <div className="flex gap-2 px-4 py-2">
                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-bold font-mono">04</span>
                                    <span className="text-[10px] uppercase text-gray-500 font-medium">Hrs</span>
                                </div>
                                <span className="text-xl font-bold text-gray-300">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-bold font-mono">12</span>
                                    <span className="text-[10px] uppercase text-gray-500 font-medium">Min</span>
                                </div>
                                <span className="text-xl font-bold text-gray-300">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-bold font-mono text-primary">30</span>
                                    <span className="text-[10px] uppercase text-gray-500 font-medium">Sec</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowFinishConfirm(true)}
                                className="bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 px-4 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
                            >
                                <span className="material-symbols-outlined text-lg">logout</span>
                                Selesai Tugas
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
                        <div className="bg-surface-light dark:bg-surface-dark p-5 xl:p-6 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pickup Selesai</p>
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                            </div>
                            <p className="text-3xl font-bold">12 <span className="text-gray-400 text-xl font-normal">/ 45</span></p>
                            <p className="text-primary text-xs font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span> +2% dibanding kemarin
                            </p>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-5 xl:p-6 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Sampah Terkumpul</p>
                                <span className="material-symbols-outlined text-primary">recycling</span>
                            </div>
                            <p className="text-3xl font-bold">240 <span className="text-base font-normal text-gray-500">kg</span></p>
                            <p className="text-primary text-xs font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span> +15kg diproyeksikan
                            </p>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-5 xl:p-6 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] shadow-sm flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Progres Rute</p>
                                <span className="material-symbols-outlined text-primary">alt_route</span>
                            </div>
                            <p className="text-3xl font-bold">28%</p>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                                <div className="bg-primary h-full rounded-full" style={{ width: "28%" }}></div>
                            </div>
                        </div>
                        <div className="bg-primary p-5 xl:p-6 rounded-xl shadow-lg shadow-primary/20 flex flex-col justify-between text-background-dark relative overflow-hidden group min-h-[140px]">
                            <div className="absolute right-[-20px] top-[-20px] size-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <p className="text-sm font-bold opacity-80 mb-2">Tindakan Cepat</p>
                                <button
                                    onClick={() => navigate('/scan')}
                                    className="w-full bg-background-dark text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-md"
                                >
                                    <span className="material-symbols-outlined">qr_code_scanner</span>
                                    Pindai Kode QR
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
                        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold">Pickup Mendatang</h3>
                                <button className="text-sm font-semibold text-primary hover:underline">Lihat Semua</button>
                            </div>
                            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border-l-4 border-primary shadow-sm ring-1 ring-black/5 dark:ring-white/5 relative overflow-hidden">
                                <div className="absolute right-0 top-0 bg-primary/10 text-primary px-3 py-1 rounded-bl-lg text-xs font-bold">BERIKUTNYA</div>
                                <div className="flex flex-col gap-4 items-start">
                                    <div className="flex items-start gap-4 w-full">
                                        <div className="size-14 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                            <span className="material-symbols-outlined text-2xl">storefront</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg">Toko Maju Jaya</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Jl. Merdeka No. 10 (5 menit lagi)</p>
                                            <div className="flex flex-wrap gap-2 mb-1">
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">Daur Ulang</span>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">Volume Besar</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 w-full pt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
                                        <button
                                            onClick={() => navigate('/verification')}
                                            className="flex-1 bg-primary text-background-dark py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-1 hover:brightness-110 transition-all shadow-sm"
                                        >
                                            <span className="material-symbols-outlined text-lg">check_circle</span> Verifikasi
                                        </button>
                                        <button
                                            onClick={() => navigate('/navigation')}
                                            className="size-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <span className="material-symbols-outlined">navigation</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 overflow-y-auto pr-1">
                                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:bg-gray-50 dark:hover:bg-[#25382e]">
                                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 shrink-0">
                                        <span className="material-symbols-outlined">home</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm">Rumah Bu Siti</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Jl. Anggrek No. 4</p>
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Menunggu</span>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:bg-gray-50 dark:hover:bg-[#25382e]">
                                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 shrink-0">
                                        <span className="material-symbols-outlined">restaurant</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm">Warung Sederhana</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Jl. Melati No. 22</p>
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Menunggu</span>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:bg-gray-50 dark:hover:bg-[#25382e]">
                                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 shrink-0">
                                        <span className="material-symbols-outlined">apartment</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm">Apartemen Gading</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Jl. Kelapa Dua</p>
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Menunggu</span>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f2] dark:border-[#2a3c30] flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:bg-gray-50 dark:hover:bg-[#25382e]">
                                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 shrink-0">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm">SDN 01 Pagi</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Jl. Pendidikan No. 5</p>
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Menunggu</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 xl:col-span-9 h-[500px] lg:h-auto rounded-xl overflow-hidden relative shadow-md group border border-[#f0f4f2] dark:border-[#2a3c30]">
                            <div
                                className="absolute inset-0 bg-gray-200 dark:bg-gray-800"
                                data-alt="Abstract map view of city streets with green hue"
                                data-location="Jakarta City Map"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk')", backgroundSize: "cover", backgroundPosition: "center" }}
                            >
                                <div className="absolute inset-0 bg-black/10 dark:bg-black/40"></div>
                                <div className="absolute top-4 left-4 bg-surface-light dark:bg-surface-dark p-2 rounded-lg shadow-lg hidden sm:flex gap-2">
                                    <button className="px-3 py-1.5 bg-primary text-background-dark font-bold text-xs rounded hover:brightness-110">Pelacakan Langsung</button>
                                    <button onClick={() => navigate('/traffic')} className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium text-xs rounded transition-colors">Lalu Lintas</button>
                                    <button onClick={() => navigate('/heatmap')} className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium text-xs rounded transition-colors">Peta Panas</button>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <div className="bg-white text-[#111814] px-3 py-1 rounded-full shadow-lg text-xs font-bold mb-1 animate-bounce">Anda</div>
                                    <div className="size-6 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800 shadow-xl relative cursor-pointer hover:scale-110 transition-transform">
                                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                    </div>
                                </div>
                                <div className="absolute top-[40%] left-[60%] flex flex-col items-center group/marker cursor-pointer">
                                    <div className="bg-white text-[#111814] px-2 py-0.5 rounded shadow text-[10px] font-bold mb-1 opacity-0 group-hover/marker:opacity-100 transition-opacity">Toko Maju</div>
                                    <span className="material-symbols-outlined text-red-500 text-4xl drop-shadow-md hover:-translate-y-1 transition-transform">location_on</span>
                                </div>
                                <div className="absolute bottom-[30%] left-[30%] opacity-80 cursor-pointer hover:opacity-100">
                                    <span className="material-symbols-outlined text-gray-600 text-4xl drop-shadow-md">location_on</span>
                                </div>
                                <div className="absolute top-[25%] left-[45%] opacity-80 cursor-pointer hover:opacity-100">
                                    <span className="material-symbols-outlined text-gray-600 text-4xl drop-shadow-md">location_on</span>
                                </div>
                                <div className="absolute right-6 bottom-6 flex flex-col gap-3">
                                    <button className="bg-white dark:bg-surface-dark size-12 rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e] transition-all hover:scale-105">
                                        <span className="material-symbols-outlined text-xl">my_location</span>
                                    </button>
                                    <div className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white dark:bg-surface-dark">
                                        <button className="size-12 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e] border-b border-gray-100 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-xl">add</span>
                                        </button>
                                        <button className="size-12 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25382e]">
                                            <span className="material-symbols-outlined text-xl">remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Floating Action Button for AI Chat */}
            <button
                onClick={() => navigate('/chat-ai')}
                className="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl shadow-orange-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50 group border-2 border-white dark:border-gray-800"
                aria-label="Chat dengan AI"
            >
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
                <span className="material-symbols-outlined text-3xl relative z-10">smart_toy</span>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-x-2 group-hover:translate-x-0">
                    Bantuan Operasional
                </div>
            </button>
        </div>
    );
}

export default Dashboard;
