import { useNavigate } from 'react-router-dom';

function PlasticFreeChallengeDetail() {
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
                    <div className="max-w-5xl mx-auto flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-bold group"
                            >
                                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                Kembali ke Dasbor
                            </button>
                            <div className="h-1 w-1 rounded-full bg-border-dark dark:bg-border-light/20"></div>
                            <span className="text-text-muted text-sm">Detail Tantangan</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-8 flex flex-col gap-8">
                                <div className="flex flex-col gap-6">
                                    <div
                                        className="h-64 md:h-80 w-full rounded-2xl bg-cover bg-center relative shadow-sm overflow-hidden group"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg')" }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                        <div className="absolute top-4 left-4 bg-primary text-text-main font-bold px-3 py-1.5 rounded-lg text-sm shadow-md">
                                            Tantangan Komunitas
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 drop-shadow-sm">Minggu Bebas Plastik</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted font-medium items-center px-2">
                                        <span className="flex items-center gap-2 text-text-main dark:text-white">
                                            <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                                            7 Hari
                                        </span>
                                        <span className="hidden sm:block w-1 h-1 rounded-full bg-border-dark dark:bg-border-light/30"></span>
                                        <span className="flex items-center gap-2 text-text-main dark:text-white">
                                            <span className="material-symbols-outlined text-primary text-xl">group</span>
                                            1.245 Peserta
                                        </span>
                                        <span className="hidden sm:block w-1 h-1 rounded-full bg-border-dark dark:bg-border-light/30"></span>
                                        <span className="flex items-center gap-2 text-text-main dark:text-white">
                                            <span className="material-symbols-outlined text-primary text-xl">eco</span>
                                            Kategori: Lingkungan
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 lg:p-8 border border-border-light dark:border-border-dark">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">info</span>
                                        Tentang Tantangan
                                    </h3>
                                    <div className="prose dark:prose-invert text-text-muted max-w-none space-y-4 leading-relaxed">
                                        <p>
                                            Plastik sekali pakai telah menjadi masalah utama bagi lingkungan kita. Tantangan "Minggu Bebas Plastik" mengajak Anda untuk berkomitmen mengurangi konsumsi plastik sekali pakai selama satu minggu penuh.
                                        </p>
                                        <p>
                                            Mulai dari menolak kantong plastik saat berbelanja, membawa botol minum sendiri, hingga menghindari sedotan plastik. Tujuannya adalah membangun kebiasaan baru yang lebih sadar lingkungan dan memahami dampak kecil yang kita buat setiap hari.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 lg:p-8 border border-border-light dark:border-border-dark">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">rule</span>
                                        Aturan & Objektif
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 border border-transparent hover:border-primary/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                                <span className="material-symbols-outlined text-lg">check</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-text-main dark:text-white text-sm">Bawa Tas Belanja Sendiri</h4>
                                                <p className="text-sm text-text-muted mt-0.5">Selalu bawa tas guna ulang (tote bag) saat ke minimarket atau pasar.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 border border-transparent hover:border-primary/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                                <span className="material-symbols-outlined text-lg">check</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-text-main dark:text-white text-sm">Gunakan Tumbler</h4>
                                                <p className="text-sm text-text-muted mt-0.5">Hindari membeli air kemasan botol plastik, gunakan botol isi ulang.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 border border-transparent hover:border-primary/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                                <span className="material-symbols-outlined text-lg">check</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-text-main dark:text-white text-sm">Tanpa Sedotan Plastik</h4>
                                                <p className="text-sm text-text-muted mt-0.5">Tolak sedotan plastik saat memesan minuman di restoran atau kafe.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 border border-transparent hover:border-primary/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                                <span className="material-symbols-outlined text-lg">photo_camera</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-text-main dark:text-white text-sm">Dokumentasi Harian</h4>
                                                <p className="text-sm text-text-muted mt-0.5">Unggah foto aksi bebas plastikmu setiap hari untuk validasi.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white px-2">Tips Sukses</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex items-start gap-4 hover:shadow-md transition-shadow">
                                            <div className="p-2 bg-blue-100 dark:bg-blue-800/30 rounded-lg text-blue-600 dark:text-blue-400">
                                                <span className="material-symbols-outlined">shopping_bag</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-sm">Siapkan "Kit" Darurat</h4>
                                                <p className="text-xs text-text-muted mt-1 leading-relaxed">Simpan tas lipat kecil di tas kerja, mobil, atau jok motor agar selalu siap saat mendadak belanja.</p>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/30 flex items-start gap-4 hover:shadow-md transition-shadow">
                                            <div className="p-2 bg-orange-100 dark:bg-orange-800/30 rounded-lg text-orange-600 dark:text-orange-400">
                                                <span className="material-symbols-outlined">local_cafe</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-sm">Diskon Tumbler</h4>
                                                <p className="text-xs text-text-muted mt-1 leading-relaxed">Banyak kedai kopi memberikan diskon khusus jika Anda membawa tumbler sendiri. Hemat uang & plastik!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-6">
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-border-light dark:border-border-dark shadow-lg shadow-primary/5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-bold text-text-main dark:text-white text-lg">Progres Anda</h3>
                                        <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full text-xs font-bold border border-green-200 dark:border-green-800">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            Sedang Berjalan
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-1.5 mb-2">
                                        <span className="text-5xl font-black text-text-main dark:text-white tracking-tight">2</span>
                                        <span className="text-text-muted font-medium">/ 7 Hari</span>
                                    </div>
                                    <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-4 overflow-hidden border border-border-light dark:border-border-dark mb-8 relative">
                                        <div className="bg-primary h-full rounded-full shadow-[0_0_15px_rgba(19,236,109,0.4)] relative" style={{ width: "28%" }}>
                                            <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/30"></div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => navigate('/scan?source=plastic_free_challenge')}
                                        className="w-full bg-primary text-text-main font-bold py-4 px-6 rounded-xl hover:bg-primary-hover transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 mb-3 flex items-center justify-center gap-3 group"
                                    >
                                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">qr_code_scanner</span>
                                        <div className="flex flex-col items-center leading-none">
                                            <span className="text-sm font-bold">Scan QR untuk</span>
                                            <span className="text-lg font-black">Pelaporan</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => navigate('/plastic-free-history')}
                                        className="w-full bg-transparent text-text-muted font-bold py-3 px-6 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors text-sm border border-transparent hover:border-border-light dark:hover:border-border-dark"
                                    >
                                        Lihat Riwayat Laporan
                                    </button>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-border-light dark:border-border-dark">
                                    <h3 className="font-bold text-text-main dark:text-white mb-5 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
                                        Hadiah Menanti
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                            <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-500 shadow-sm border border-yellow-200 dark:border-yellow-800/30">
                                                <span className="material-symbols-outlined">stars</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-text-main dark:text-white text-base">300 EcoPoin</p>
                                                <p className="text-xs text-text-muted">Dapat ditukar di marketplace</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm border border-purple-200 dark:border-purple-800/30">
                                                <span className="material-symbols-outlined">military_tech</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-text-main dark:text-white text-base">Lencana Pahlawan</p>
                                                <p className="text-xs text-text-muted">Badge eksklusif di profilmu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-[#0c3925] to-background-dark rounded-2xl p-6 text-white relative overflow-hidden shadow-md">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                                    <h3 className="font-bold text-white mb-2 relative z-10 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">public</span>
                                        Dampak Kolektif
                                    </h3>
                                    <p className="text-green-100/80 text-sm mb-6 relative z-10 leading-relaxed">
                                        Jika kamu menyelesaikan tantangan ini, kamu berpotensi menyelamatkan lingkungan dari:
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 relative z-10">
                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/15 transition-colors text-center">
                                            <span className="material-symbols-outlined text-green-300 text-2xl mb-1">water_bottle</span>
                                            <span className="block text-2xl font-black mt-1">14</span>
                                            <span className="text-xs text-green-200 font-medium">Botol Plastik</span>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/15 transition-colors text-center">
                                            <span className="material-symbols-outlined text-green-300 text-2xl mb-1">shopping_bag</span>
                                            <span className="block text-2xl font-black mt-1">21+</span>
                                            <span className="text-xs text-green-200 font-medium">Kantong Kresek</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PlasticFreeChallengeDetail;
