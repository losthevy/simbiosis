import { useNavigate } from 'react-router-dom';

function TopUp() {
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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Isi Saldo</h2>
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
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors w-fit mb-1"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                <span className="text-sm font-semibold">Kembali ke Dasbor</span>
                            </button>
                            <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight">Isi Saldo EcoPoin</h1>
                            <p className="text-lg text-text-muted dark:text-gray-400">Pilih nominal dan metode pembayaran untuk menambah saldo Anda.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8 flex flex-col gap-8">
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 lg:p-8 border border-border-light dark:border-border-dark shadow-sm">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-6">Pilih Nominal Top Up</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                        <button className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border-2 border-primary bg-primary/5 text-primary font-bold text-lg shadow-sm transition-all relative ring-2 ring-primary ring-offset-2 ring-offset-surface-light dark:ring-offset-surface-dark">
                                            <span className="material-symbols-outlined mb-2 text-3xl">savings</span>
                                            Rp 10.000
                                            <div className="absolute top-2 right-2 text-xs bg-primary text-text-main px-2 py-0.5 rounded-full font-bold">+100 Poin</div>
                                        </button>
                                        <button className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-semibold text-lg transition-all hover:bg-background-light/80 hover:shadow-md">
                                            Rp 25.000
                                        </button>
                                        <button className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-semibold text-lg transition-all hover:bg-background-light/80 hover:shadow-md">
                                            Rp 50.000
                                        </button>
                                        <button className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-semibold text-lg transition-all hover:bg-background-light/80 hover:shadow-md">
                                            Rp 100.000
                                        </button>
                                        <button className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-semibold text-lg transition-all hover:bg-background-light/80 hover:shadow-md">
                                            Rp 250.000
                                        </button>
                                        <button className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-semibold text-lg transition-all hover:bg-background-light/80 hover:shadow-md">
                                            Rp 500.000
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-text-muted">Nominal Lainnya</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-bold">Rp</span>
                                            <input
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-text-main dark:text-white font-bold"
                                                placeholder="Masukkan jumlah (min. Rp 10.000)"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 lg:p-8 border border-border-light dark:border-border-dark shadow-sm">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-6">Pilih Metode Pembayaran</h3>
                                    <div className="space-y-4">
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">E-Wallet</h4>
                                            <label className="flex items-center justify-between p-4 rounded-xl border border-primary bg-primary/5 cursor-pointer transition-colors group relative">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                        <span className="material-symbols-outlined">account_balance_wallet</span>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-text-main dark:text-white">GoPay</div>
                                                        <div className="text-xs text-text-muted">Biaya layanan Rp 1.000</div>
                                                    </div>
                                                </div>
                                                <input checked readOnly className="w-5 h-5 text-primary focus:ring-primary bg-surface-light border-border-light" name="payment" type="radio" />
                                            </label>
                                            <label className="flex items-center justify-between p-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                                        <span className="material-symbols-outlined">payments</span>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-text-main dark:text-white">OVO</div>
                                                        <div className="text-xs text-text-muted">Biaya layanan Rp 1.500</div>
                                                    </div>
                                                </div>
                                                <input className="w-5 h-5 text-primary focus:ring-primary bg-surface-light border-border-light" name="payment" type="radio" />
                                            </label>
                                            <label className="flex items-center justify-between p-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                                                        <span className="material-symbols-outlined">wallet</span>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-text-main dark:text-white">DANA</div>
                                                        <div className="text-xs text-text-muted">Bebas biaya admin</div>
                                                    </div>
                                                </div>
                                                <input className="w-5 h-5 text-primary focus:ring-primary bg-surface-light border-border-light" name="payment" type="radio" />
                                            </label>
                                        </div>
                                        <div className="space-y-3 pt-2">
                                            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Transfer Bank</h4>
                                            <label className="flex items-center justify-between p-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                                                        <span className="material-symbols-outlined">account_balance</span>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-text-main dark:text-white">Bank Transfer (VA)</div>
                                                        <div className="text-xs text-text-muted">BCA, Mandiri, BNI, BRI</div>
                                                    </div>
                                                </div>
                                                <input className="w-5 h-5 text-primary focus:ring-primary bg-surface-light border-border-light" name="payment" type="radio" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                                <div className="rounded-2xl p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark relative overflow-hidden shadow-sm group">
                                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
                                    <div className="relative z-10 flex flex-col gap-4">
                                        <div className="flex items-center gap-2 text-text-muted">
                                            <div className="p-2 bg-background-light dark:bg-background-dark rounded-lg">
                                                <span className="material-symbols-outlined">account_balance_wallet</span>
                                            </div>
                                            <span className="text-base font-semibold">Saldo EcoPoin Saat Ini</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-5xl font-black text-text-main dark:text-white tracking-tight">1.250</span>
                                            <span className="text-sm text-text-muted font-medium">≈ Rp185.000 nilai</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm overflow-hidden sticky top-6">
                                    <div className="p-6 border-b border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50">
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">Rincian Pembayaran</h3>
                                    </div>
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-text-muted">Nominal Top Up</span>
                                            <span className="font-bold text-text-main dark:text-white">Rp 10.000</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-text-muted">Biaya Layanan</span>
                                            <span className="font-bold text-text-main dark:text-white">Rp 1.000</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-text-muted">Bonus Poin</span>
                                            <span className="font-bold text-primary">+100 Poin</span>
                                        </div>
                                        <div className="h-px bg-border-light dark:bg-border-dark my-2"></div>
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="font-bold text-text-main dark:text-white">Total Bayar</span>
                                            <span className="font-black text-primary text-2xl">Rp 11.000</span>
                                        </div>
                                        <button onClick={() => navigate('/top-up-confirm')} className="mt-4 w-full bg-primary text-text-main font-bold text-base py-4 px-6 rounded-xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                                            Konfirmasi Isi Saldo
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                        <p className="text-xs text-center text-text-muted mt-2">
                                            Dengan mengonfirmasi, Anda menyetujui <a className="text-primary hover:underline" href="#">Syarat &amp; Ketentuan</a> kami.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-text-muted opacity-70">
                                    <span className="material-symbols-outlined text-sm">lock</span>
                                    <span className="text-xs font-semibold">Pembayaran 100% Aman &amp; Terenkripsi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default TopUp;
