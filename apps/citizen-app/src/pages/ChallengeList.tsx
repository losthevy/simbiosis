import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChallengeList() {
    const navigate = useNavigate();
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Tantangan</h2>
                    </div>
                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                        <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-background-light dark:bg-background-dark border border-transparent focus-within:border-primary px-4 transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-muted outline-none ml-2"
                                placeholder="Cari tantangan..."
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
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigate('/')}
                                    className="h-12 w-12 flex items-center justify-center rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary text-text-main dark:text-white transition-all shadow-sm group"
                                >
                                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                </button>
                                <div>
                                    <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Daftar Tantangan</h1>
                                    <p className="text-text-muted">Pilih misi dan kumpulkan EcoPoin!</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-1.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl w-fit overflow-x-auto">
                                <button className="px-5 py-2.5 rounded-lg bg-primary text-text-main font-bold shadow-sm transition-all whitespace-nowrap">Semua</button>
                                <button className="px-5 py-2.5 rounded-lg text-text-muted hover:bg-background-light dark:hover:bg-background-dark font-medium transition-all whitespace-nowrap">Harian</button>
                                <button className="px-5 py-2.5 rounded-lg text-text-muted hover:bg-background-light dark:hover:bg-background-dark font-medium transition-all whitespace-nowrap">Mingguan</button>
                                <button className="px-5 py-2.5 rounded-lg text-text-muted hover:bg-background-light dark:hover:bg-background-dark font-medium transition-all whitespace-nowrap">Komunitas</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            <div
                                onClick={() => navigate('/challenge-detail')}
                                className="group flex flex-col bg-surface-light dark:bg-surface-dark border-2 border-primary rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
                            >
                                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ')" }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-light/90 backdrop-blur text-text-main text-xs font-bold px-3 py-1.5 rounded-lg border border-border-light shadow-sm">
                                            <span className="text-primary mr-1">●</span> Komunitas
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-primary text-text-main text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">check_circle</span> Telah Bergabung
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-1 text-white/80 text-xs font-medium mb-1">
                                            <span className="material-symbols-outlined text-sm">timer</span> Sisa 2 hari
                                        </div>
                                        <h3 className="font-bold text-xl text-white leading-tight">Bersih-bersih Taman</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <p className="text-sm text-text-muted">Bergabunglah dengan tetangga untuk membersihkan taman kota dan kumpulkan 5kg sampah daur ulang.</p>
                                    <div className="mt-auto space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold text-text-muted uppercase tracking-wider">
                                                <span>Progress Misi</span>
                                                <span className="text-primary">60%</span>
                                            </div>
                                            <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5 overflow-hidden border border-border-light dark:border-border-dark">
                                                <div className="bg-primary h-2.5 rounded-full shadow-[0_0_10px_rgba(19,236,109,0.3)]" style={{ width: "60%" }}></div>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-text-muted font-medium uppercase">Hadiah</span>
                                                <div className="flex items-center gap-1 text-text-main dark:text-white font-bold">
                                                    <span className="material-symbols-outlined text-primary text-lg">stars</span>
                                                    <span>500 Poin</span>
                                                </div>
                                            </div>
                                            <button className="bg-gray-100 dark:bg-gray-800 text-text-muted px-5 py-2.5 rounded-xl text-sm font-bold cursor-default border border-transparent">Sedang Berjalan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => navigate('/challenge-detail-plastic-free')}
                                className="group flex flex-col bg-surface-light dark:bg-surface-dark border-2 border-primary rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
                            >
                                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg')" }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-light/90 backdrop-blur text-text-main text-xs font-bold px-3 py-1.5 rounded-lg border border-border-light shadow-sm">
                                            <span className="text-orange-500 mr-1">●</span> Mingguan
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-primary text-text-main text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">check_circle</span> Telah Bergabung
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-1 text-white/80 text-xs font-medium mb-1">
                                            <span className="material-symbols-outlined text-sm">timer</span> Sisa 5 hari
                                        </div>
                                        <h3 className="font-bold text-xl text-white leading-tight">Minggu Bebas Plastik</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <p className="text-sm text-text-muted">Tantangan personal untuk menghindari penggunaan kantong plastik sekali pakai selama satu minggu penuh.</p>
                                    <div className="mt-auto space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold text-text-muted uppercase tracking-wider">
                                                <span>Progress Misi</span>
                                                <span className="text-primary">2/7 Hari</span>
                                            </div>
                                            <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5 overflow-hidden border border-border-light dark:border-border-dark">
                                                <div className="bg-primary h-2.5 rounded-full shadow-[0_0_10px_rgba(19,236,109,0.3)]" style={{ width: "28%" }}></div>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-text-muted font-medium uppercase">Hadiah</span>
                                                <div className="flex items-center gap-1 text-text-main dark:text-white font-bold">
                                                    <span className="material-symbols-outlined text-primary text-lg">stars</span>
                                                    <span>300 Poin</span>
                                                </div>
                                            </div>
                                            <button className="bg-gray-100 dark:bg-gray-800 text-text-muted px-5 py-2.5 rounded-xl text-sm font-bold cursor-default border border-transparent">Sedang Berjalan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                                <div className="h-48 bg-emerald-50 dark:bg-emerald-900/20 relative flex items-center justify-center overflow-hidden">
                                    <span className="material-symbols-outlined text-9xl text-emerald-200 dark:text-emerald-800/30 absolute -bottom-4 -right-4 rotate-12 select-none">devices</span>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-light/90 backdrop-blur text-text-main text-xs font-bold px-3 py-1.5 rounded-lg border border-border-light shadow-sm">
                                            <span className="text-blue-500 mr-1">●</span> Spesial
                                        </span>
                                    </div>
                                    <div className="text-center z-10 p-4">
                                        <div className="h-16 w-16 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center mx-auto mb-3 shadow-md text-primary">
                                            <span className="material-symbols-outlined text-3xl">smartphone</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-text-main dark:text-white leading-tight">Daur Ulang Elektronik</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <p className="text-sm text-text-muted">Bawa sampah elektronik lama Anda ke pusat daur ulang resmi mitra Simbiosis.</p>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-text-muted font-medium uppercase">Hadiah</span>
                                            <div className="flex items-center gap-1 text-text-main dark:text-white font-bold">
                                                <span className="material-symbols-outlined text-primary text-lg">stars</span>
                                                <span>1000 Poin</span>
                                            </div>
                                        </div>
                                        <button onClick={(e) => { e.stopPropagation(); setIsJoinModalOpen(true); }} className="bg-primary text-text-main px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-95">Gabung</button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                                <div className="h-48 bg-orange-50 dark:bg-orange-900/20 relative flex items-center justify-center overflow-hidden">
                                    <span className="material-symbols-outlined text-9xl text-orange-200 dark:text-orange-800/30 absolute -bottom-4 -right-4 rotate-12 select-none">compost</span>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-light/90 backdrop-blur text-text-main text-xs font-bold px-3 py-1.5 rounded-lg border border-border-light shadow-sm">
                                            <span className="text-primary mr-1">●</span> Harian
                                        </span>
                                    </div>
                                    <div className="text-center z-10 p-4">
                                        <div className="h-16 w-16 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center mx-auto mb-3 shadow-md text-orange-500">
                                            <span className="material-symbols-outlined text-3xl">compost</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-text-main dark:text-white leading-tight">Master Kompos</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <p className="text-sm text-text-muted">Unggah foto hasil komposting harian Anda dan dapatkan bonus poin setiap hari.</p>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-text-muted font-medium uppercase">Hadiah</span>
                                            <div className="flex items-center gap-1 text-text-main dark:text-white font-bold">
                                                <span className="material-symbols-outlined text-primary text-lg">stars</span>
                                                <span>5 Poin/Hari</span>
                                            </div>
                                        </div>
                                        <button onClick={(e) => { e.stopPropagation(); setIsJoinModalOpen(true); }} className="bg-primary text-text-main px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-95">Gabung</button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                                <div className="h-48 bg-blue-50 dark:bg-blue-900/20 relative flex items-center justify-center overflow-hidden">
                                    <span className="material-symbols-outlined text-9xl text-blue-200 dark:text-blue-800/30 absolute -bottom-4 -right-4 rotate-12 select-none">water_drop</span>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-light/90 backdrop-blur text-text-main text-xs font-bold px-3 py-1.5 rounded-lg border border-border-light shadow-sm">
                                            <span className="text-orange-500 mr-1">●</span> Mingguan
                                        </span>
                                    </div>
                                    <div className="text-center z-10 p-4">
                                        <div className="h-16 w-16 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center mx-auto mb-3 shadow-md text-blue-500">
                                            <span className="material-symbols-outlined text-3xl">water_drop</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-text-main dark:text-white leading-tight">Hemat Air</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <p className="text-sm text-text-muted">Kurangi tagihan air Anda sebesar 10% bulan ini dibandingkan bulan lalu.</p>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-text-muted font-medium uppercase">Hadiah</span>
                                            <div className="flex items-center gap-1 text-text-main dark:text-white font-bold">
                                                <span className="material-symbols-outlined text-primary text-lg">stars</span>
                                                <span>800 Poin</span>
                                            </div>
                                        </div>
                                        <button onClick={(e) => { e.stopPropagation(); setIsJoinModalOpen(true); }} className="bg-primary text-text-main px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-95">Gabung</button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                                <div className="h-48 bg-purple-50 dark:bg-purple-900/20 relative flex items-center justify-center overflow-hidden">
                                    <span className="material-symbols-outlined text-9xl text-purple-200 dark:text-purple-800/30 absolute -bottom-4 -right-4 rotate-12 select-none">school</span>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-light/90 backdrop-blur text-text-main text-xs font-bold px-3 py-1.5 rounded-lg border border-border-light shadow-sm">
                                            <span className="text-purple-500 mr-1">●</span> Edukasi
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-red-100 text-red-600 border border-red-200 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                                            Sulit
                                        </span>
                                    </div>
                                    <div className="text-center z-10 p-4">
                                        <div className="h-16 w-16 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center mx-auto mb-3 shadow-md text-purple-500">
                                            <span className="material-symbols-outlined text-3xl">campaign</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-text-main dark:text-white leading-tight">Duta Lingkungan</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <p className="text-sm text-text-muted">Ajak 5 orang teman untuk mendaftar di Simbiosis dan selesaikan satu tantangan.</p>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-text-muted font-medium uppercase">Hadiah</span>
                                            <div className="flex items-center gap-1 text-text-main dark:text-white font-bold">
                                                <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                                                <span>1500 + Sertifikat</span>
                                            </div>
                                        </div>
                                        <button onClick={(e) => { e.stopPropagation(); setIsJoinModalOpen(true); }} className="bg-primary text-text-main px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-95">Gabung</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl p-8 bg-gradient-to-r from-surface-dark to-background-dark text-white relative overflow-hidden shadow-lg mt-4">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-5">
                                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                        <span className="material-symbols-outlined text-3xl">add_reaction</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Punya ide tantangan baru?</h3>
                                        <p className="text-gray-400 mt-1 max-w-lg">Ajukan ide tantangan komunitas Anda sendiri dan dapatkan poin ekstra jika terpilih!</p>
                                    </div>
                                </div>
                                <button onClick={() => navigate('/challenge-proposal')} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl transition-all whitespace-nowrap">
                                    Ajukan Tantangan
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Confirmation Modal */}
                {isJoinModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white dark:bg-[#1A2C22] w-full max-w-sm rounded-2xl shadow-xl border border-[#dbe6e0] dark:border-gray-800 p-6 flex flex-col gap-6 animate-in zoom-in-95 duration-200">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-3xl">add_task</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-[#111814] dark:text-white leading-tight">Konfirmasi Bergabung</h3>
                                    <p className="text-[#618972] dark:text-gray-400 text-sm leading-relaxed">
                                        Konfirmasi bergabung ke tantangan?
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsJoinModalOpen(false)}
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Tidak
                                </button>
                                <button
                                    onClick={() => setIsJoinModalOpen(false)}
                                    className="flex-1 px-4 py-3 rounded-xl bg-primary text-[#111814] font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                >
                                    Ya
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChallengeList;
