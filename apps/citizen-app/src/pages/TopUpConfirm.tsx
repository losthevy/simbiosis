import { useNavigate } from 'react-router-dom';

function TopUpConfirm() {
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
                                <span className="text-sm font-semibold">Kembali</span>
                            </button>
                            <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight">Konfirmasi Pembayaran Isi Saldo</h1>
                            <p className="text-lg text-text-muted dark:text-gray-400">Selesaikan pembayaran Anda dalam batas waktu yang ditentukan.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8 flex flex-col gap-8">
                                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex items-center gap-4">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-800/40 rounded-full text-orange-600 dark:text-orange-400">
                                        <span className="material-symbols-outlined">timer</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-orange-800 dark:text-orange-300">Selesaikan pembayaran dalam 23:59:45</h3>
                                        <p className="text-sm text-orange-700 dark:text-orange-400">Batas waktu pembayaran berakhir besok, pukul 14:30 WIB</p>
                                    </div>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 lg:p-8 border border-border-light dark:border-border-dark shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-text-main dark:text-white">Transfer Bank</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">BCA</span>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-text-muted">Nomor Rekening Tujuan</label>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-background-light dark:bg-background-dark p-4 rounded-xl border border-border-light dark:border-border-dark font-mono text-xl font-bold text-text-main dark:text-white flex justify-between items-center group">
                                                    <span>8839 0001 2345 6789</span>
                                                    <button className="text-text-muted hover:text-primary transition-colors p-1" title="Salin">
                                                        <span className="material-symbols-outlined text-lg">content_copy</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-sm text-text-muted">a.n. PT Simbiosis Solusi Digital</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-text-muted">Jumlah Transfer</label>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-background-light dark:bg-background-dark p-4 rounded-xl border border-border-light dark:border-border-dark font-mono text-xl font-bold text-text-main dark:text-white flex justify-between items-center group">
                                                    <span>Rp 11.000</span>
                                                    <button className="text-text-muted hover:text-primary transition-colors p-1" title="Salin">
                                                        <span className="material-symbols-outlined text-lg">content_copy</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 text-sm mt-1">
                                                <span className="material-symbols-outlined text-sm">warning</span>
                                                <span>Mohon transfer sesuai nominal hingga 3 digit terakhir.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Petunjuk Transfer</h3>
                                    <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden transition-all duration-300" open>
                                        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                            <span className="font-semibold text-text-main dark:text-white">ATM BCA</span>
                                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-text-muted text-sm border-t border-border-light dark:border-border-dark transition-all">
                                            <ol className="list-decimal list-inside space-y-1 mt-4">
                                                <li>Masukkan kartu ATM dan PIN BCA Anda.</li>
                                                <li>Pilih menu Transaksi Lainnya &gt; Transfer &gt; ke Rekening BCA.</li>
                                                <li>Masukkan nomor rekening <strong>8839 0001 2345 6789</strong>.</li>
                                                <li>Masukkan jumlah transfer sesuai tagihan.</li>
                                                <li>Ikuti instruksi selanjutnya untuk menyelesaikan transaksi.</li>
                                            </ol>
                                        </div>
                                    </details>
                                    <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden transition-all duration-300">
                                        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                            <span className="font-semibold text-text-main dark:text-white">M-BCA (Mobile Banking)</span>
                                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-text-muted text-sm border-t border-border-light dark:border-border-dark transition-all">
                                            <p className="mt-4">Login ke m-BCA, pilih m-Transfer, masukkan rekening dan nominal.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm overflow-hidden sticky top-6">
                                    <div className="p-6 border-b border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50">
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">Rincian Transaksi</h3>
                                    </div>
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-text-muted">ID Transaksi</span>
                                            <span className="font-mono font-bold text-text-main dark:text-white">#TRX-899201</span>
                                        </div>
                                        <div className="h-px bg-border-light dark:bg-border-dark"></div>
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
                                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-xs text-blue-700 dark:text-blue-300 mt-2">
                                            Status: <span className="font-bold">Menunggu Pembayaran</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-text-muted opacity-70">
                                    <span className="material-symbols-outlined text-sm">verified_user</span>
                                    <span className="text-xs font-semibold">Transaksi Anda dilindungi SIMBIOSIS Protection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default TopUpConfirm;
