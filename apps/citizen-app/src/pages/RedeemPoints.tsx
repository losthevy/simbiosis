import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RedeemPoints() {
    const navigate = useNavigate();
    const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);

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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Tukar Poin</h2>
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
                    <div className="max-w-[1920px] mx-auto flex flex-col gap-8">
                        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigate('/')}
                                    className="h-12 w-12 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-surface-light dark:hover:bg-surface-dark hover:border-primary transition-all group shadow-sm bg-white dark:bg-surface-dark"
                                >
                                    <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">arrow_back</span>
                                </button>
                                <div>
                                    <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Tukar Poin EcoPoin</h1>
                                    <p className="text-text-muted mt-1 font-medium">Tukarkan poin Anda dengan hadiah ramah lingkungan.</p>
                                </div>
                            </div>
                            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-2 rounded-2xl flex items-center gap-4 pr-8 shadow-sm self-start lg:self-auto hover:shadow-md transition-shadow cursor-default">
                                <div className="bg-primary/10 h-16 w-16 rounded-xl flex items-center justify-center text-primary relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                                    <span className="material-symbols-outlined text-3xl relative z-10">account_balance_wallet</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Saldo EcoPoin</p>
                                    <p className="text-3xl font-black text-text-main dark:text-white">1.250 <span className="text-sm font-medium text-text-muted align-middle">Pts</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center shadow-sm">
                            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                                <button className="px-5 py-2.5 bg-primary text-text-main font-bold rounded-xl shadow-lg shadow-primary/20 whitespace-nowrap transition-transform hover:scale-105 active:scale-95">
                                    Semua
                                </button>
                                <button className="px-5 py-2.5 bg-background-light dark:bg-background-dark text-text-muted font-bold rounded-xl border border-transparent hover:border-border-light dark:hover:border-border-dark hover:text-text-main whitespace-nowrap transition-all hover:bg-gray-200 dark:hover:bg-gray-800">
                                    Voucher Diskon
                                </button>
                                <button className="px-5 py-2.5 bg-background-light dark:bg-background-dark text-text-muted font-bold rounded-xl border border-transparent hover:border-border-light dark:hover:border-border-dark hover:text-text-main whitespace-nowrap transition-all hover:bg-gray-200 dark:hover:bg-gray-800">
                                    Produk Ramah Lingkungan
                                </button>
                                <button className="px-5 py-2.5 bg-background-light dark:bg-background-dark text-text-muted font-bold rounded-xl border border-transparent hover:border-border-light dark:hover:border-border-dark hover:text-text-main whitespace-nowrap transition-all hover:bg-gray-200 dark:hover:bg-gray-800">
                                    Donasi
                                </button>
                            </div>
                            <div className="w-full md:w-96 relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">search</span>
                                <input
                                    className="w-full pl-12 pr-12 py-3 rounded-xl bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-0 text-text-main dark:text-white transition-all shadow-inner placeholder:text-gray-400"
                                    placeholder="Cari voucher, produk..."
                                    type="text"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-text-muted transition-colors">
                                    <span className="material-symbols-outlined text-xl">tune</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="h-56 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                                    <img className="w-24 h-24 opacity-20 absolute -bottom-4 -right-4 transform rotate-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5wRD-Z72n268umhZbxownAxLjGaoJsfvAhl5ViQopN5UhcDrA9JyAO29-GMwfhcdy6ik8Ni7sSpgext3C_qybrxgDXlQTrrHXC3DDhyBXEndC7NszoRiM7yB16EfMeI5widdPDGMSMCLAyGmbLObc-s8leVhscFgvlyyoG0lfUrFDcLfq90WOLL9_kSv7b7c6ETzHPzAfKRzr1l766RVJ43QuEfvwUAltf-fI0tMipatJWPv_6MvuECVyOM0CWp8Km37jR1kp8w" />
                                    <div className="text-center z-10 p-6">
                                        <span className="material-symbols-outlined text-6xl text-emerald-600 dark:text-emerald-400 mb-2 drop-shadow-sm">local_mall</span>
                                        <p className="font-black text-emerald-800 dark:text-emerald-300 text-lg">EcoStore Voucher</p>
                                    </div>
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-text-main dark:text-white shadow-sm border border-black/5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-emerald-500">sell</span>
                                        Voucher Diskon
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Voucher Belanja Rp50.000</h3>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">Potongan langsung untuk pembelian produk organik di EcoStore.</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-text-muted uppercase">Harga</span>
                                            <span className="text-xl font-black text-primary">500 Poin</span>
                                        </div>
                                        <button onClick={() => setIsRedeemModalOpen(true)} className="px-5 py-2.5 bg-text-main dark:bg-white text-white dark:text-text-main rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none">
                                            Tukar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg')" }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-text-main dark:text-white shadow-sm border border-black/5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-blue-500">inventory_2</span>
                                        Produk
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Tas Belanja Canvas</h3>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">Tas belanja guna ulang yang kuat, bergaya, dan ramah lingkungan.</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-text-muted uppercase">Harga</span>
                                            <span className="text-xl font-black text-primary">300 Poin</span>
                                        </div>
                                        <button onClick={() => setIsRedeemModalOpen(true)} className="px-5 py-2.5 bg-text-main dark:bg-white text-white dark:text-text-main rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none">
                                            Tukar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="h-56 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
                                    <div className="text-center z-10 p-6">
                                        <span className="material-symbols-outlined text-6xl text-blue-500 dark:text-blue-400 mb-2 drop-shadow-sm">volunteer_activism</span>
                                        <p className="font-black text-blue-700 dark:text-blue-300 text-lg">Donasi Hutan</p>
                                    </div>
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-text-main dark:text-white shadow-sm border border-black/5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-pink-500">favorite</span>
                                        Donasi
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Tanam 1 Pohon</h3>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">Kontribusi nyata untuk penghijauan kembali hutan tropis Indonesia.</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-text-muted uppercase">Harga</span>
                                            <span className="text-xl font-black text-primary">1.000 Poin</span>
                                        </div>
                                        <button onClick={() => setIsRedeemModalOpen(true)} className="px-5 py-2.5 bg-text-main dark:bg-white text-white dark:text-text-main rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none">
                                            Tukar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="h-56 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 flex items-center justify-center relative overflow-hidden">
                                    <div className="text-center z-10 p-6">
                                        <span className="material-symbols-outlined text-6xl text-orange-500 dark:text-orange-400 mb-2 drop-shadow-sm">coffee</span>
                                        <p className="font-black text-orange-700 dark:text-orange-300 text-lg">Kopi Gratis</p>
                                    </div>
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-text-main dark:text-white shadow-sm border border-black/5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-emerald-500">sell</span>
                                        Voucher Diskon
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Voucher Kopi Pagi</h3>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">Nikmati satu cangkir kopi gratis dengan membawa tumbler sendiri.</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-text-muted uppercase">Harga</span>
                                            <span className="text-xl font-black text-primary">200 Poin</span>
                                        </div>
                                        <button onClick={() => setIsRedeemModalOpen(true)} className="px-5 py-2.5 bg-text-main dark:bg-white text-white dark:text-text-main rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none">
                                            Tukar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ')" }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-text-main dark:text-white shadow-sm border border-black/5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-blue-500">inventory_2</span>
                                        Produk
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Set Alat Makan Bambu</h3>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">Sendok, garpu, dan sedotan bambu dalam pouch cantik.</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-text-muted uppercase">Harga</span>
                                            <span className="text-xl font-black text-primary">450 Poin</span>
                                        </div>
                                        <button onClick={() => setIsRedeemModalOpen(true)} className="px-5 py-2.5 bg-text-main dark:bg-white text-white dark:text-text-main rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none">
                                            Tukar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="h-56 bg-gradient-to-br from-purple-50 to-fuchsia-100 dark:from-purple-900/20 dark:to-fuchsia-900/20 flex items-center justify-center relative overflow-hidden">
                                    <div className="text-center z-10 p-6">
                                        <span className="material-symbols-outlined text-6xl text-purple-500 dark:text-purple-400 mb-2 drop-shadow-sm">pets</span>
                                        <p className="font-black text-purple-700 dark:text-purple-300 text-lg">Pakan Hewan</p>
                                    </div>
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-text-main dark:text-white shadow-sm border border-black/5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-pink-500">favorite</span>
                                        Donasi
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Donasi Pakan Kucing Jalanan</h3>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">Berikan makanan layak untuk kucing-kucing terlantar di kota.</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-text-muted uppercase">Harga</span>
                                            <span className="text-xl font-black text-primary">150 Poin</span>
                                        </div>
                                        <button onClick={() => setIsRedeemModalOpen(true)} className="px-5 py-2.5 bg-text-main dark:bg-white text-white dark:text-text-main rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none">
                                            Tukar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Confirmation Modal */}
                {isRedeemModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white dark:bg-[#1A2C22] w-full max-w-sm rounded-2xl shadow-xl border border-[#dbe6e0] dark:border-gray-800 p-6 flex flex-col gap-6 animate-in zoom-in-95 duration-200">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-3xl">shopping_cart_checkout</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-[#111814] dark:text-white leading-tight">Konfirmasi Menukar</h3>
                                    <p className="text-[#618972] dark:text-gray-400 text-sm leading-relaxed">
                                        Konfirmasi menukar ecopoin?
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsRedeemModalOpen(false)}
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Tidak
                                </button>
                                <button
                                    onClick={() => setIsRedeemModalOpen(false)}
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

export default RedeemPoints;
