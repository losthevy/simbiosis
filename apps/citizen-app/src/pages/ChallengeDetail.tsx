import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChallengeDetail() {
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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Detail Tantangan</h2>
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
                    <div className="max-w-7xl mx-auto flex flex-col gap-6">
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-bold text-sm w-fit group"
                        >
                            <div className="p-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group-hover:border-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                            </div>
                            Kembali ke Daftar Tantangan
                        </button>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-8 flex flex-col gap-8">
                                <div
                                    className="h-64 md:h-96 w-full rounded-2xl bg-cover bg-center shadow-sm relative overflow-hidden group"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ')" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute top-6 right-6">
                                        <div className="bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold text-text-main dark:text-white shadow-lg border border-border-light dark:border-border-dark flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            Sedang Berlangsung
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white">
                                        <span className="bg-primary text-black text-xs font-bold px-3 py-1.5 rounded-lg mb-4 inline-block shadow-[0_0_10px_rgba(19,236,109,0.4)]">Lingkungan</span>
                                        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Bersih-bersih Taman Akhir Pekan</h1>
                                        <p className="text-white/80 font-medium text-lg flex items-center gap-2">
                                            <span className="material-symbols-outlined text-xl">supervised_user_circle</span>
                                            Diselenggarakan oleh Komunitas Green Valley
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8 bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-xl font-bold text-text-main dark:text-white flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">description</span>
                                            Deskripsi Tantangan
                                        </h2>
                                        <p className="text-text-muted dark:text-gray-400 leading-relaxed text-base">
                                            Taman Pusat kota kita membutuhkan bantuan! Setelah festival musim panas minggu lalu, banyak sampah plastik dan sisa makanan yang tertinggal di area hijau. Mari kita kembalikan keindahan taman kita bersama-sama agar kembali asri dan nyaman untuk semua warga.
                                        </p>
                                        <p className="text-text-muted dark:text-gray-400 leading-relaxed text-base">
                                            Tantangan ini mengajak seluruh warga untuk meluangkan waktu di akhir pekan ini. Tidak hanya membuat taman bersih, Anda juga akan membantu memisahkan sampah yang bisa didaur ulang sehingga tidak berakhir di TPA. Ini adalah kesempatan bagus untuk bertemu tetangga baru, berolahraga ringan, dan memberikan dampak nyata bagi lingkungan sekitar kita.
                                        </p>
                                    </div>
                                    <hr className="border-border-light dark:border-border-dark" />
                                    <div className="flex flex-col gap-6">
                                        <h2 className="text-xl font-bold text-text-main dark:text-white flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">checklist</span>
                                            Aturan & Cara Berpartisipasi
                                        </h2>
                                        <div className="grid gap-4">
                                            <div className="flex gap-4 items-start p-4 rounded-xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                                                <div>
                                                    <h4 className="font-bold text-text-main dark:text-white text-lg">Daftar & Check-in</h4>
                                                    <p className="text-sm text-text-muted mt-1">Lakukan pendaftaran di aplikasi ini, lalu datang ke posko utama Taman Pusat untuk memindai QR code kehadiran.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 items-start p-4 rounded-xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                                                <div>
                                                    <h4 className="font-bold text-text-main dark:text-white text-lg">Kumpulkan Sampah</h4>
                                                    <p className="text-sm text-text-muted mt-1">Kumpulkan minimal 5kg sampah anorganik (botol plastik, kaleng, dll) menggunakan kantong yang disediakan panitia.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 items-start p-4 rounded-xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                                                <div>
                                                    <h4 className="font-bold text-text-main dark:text-white text-lg">Validasi & Klaim Poin</h4>
                                                    <p className="text-sm text-text-muted mt-1">Bawa hasil pungutan ke posko penimbangan. Setelah divalidasi, poin akan otomatis masuk ke akun Anda.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
                                    <h2 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">query_stats</span>
                                        Dampak yang Diharapkan
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark">
                                            <span className="text-4xl font-black text-text-main dark:text-white mb-2">500<span className="text-lg text-text-muted">kg</span></span>
                                            <span className="text-sm font-bold text-text-muted uppercase tracking-wider">Target Sampah</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark">
                                            <span className="text-4xl font-black text-text-main dark:text-white mb-2">200<span className="text-lg text-text-muted">+</span></span>
                                            <span className="text-sm font-bold text-text-muted uppercase tracking-wider">Partisipan</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark">
                                            <span className="text-4xl font-black text-text-main dark:text-white mb-2">100<span className="text-lg text-text-muted">%</span></span>
                                            <span className="text-sm font-bold text-text-muted uppercase tracking-wider">Taman Bersih</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-6 sticky top-6">
                                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-xl shadow-primary/5 relative overflow-hidden group">
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="flex flex-col items-center gap-2 text-center py-2">
                                            <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Total Hadiah</span>
                                            <div className="flex items-center justify-center gap-2 text-primary">
                                                <span className="material-symbols-outlined text-4xl">savings</span>
                                                <span className="text-5xl font-black text-text-main dark:text-white">500 <span className="text-lg font-bold text-text-muted">Poin</span></span>
                                            </div>
                                        </div>
                                        <div className="space-y-4 py-6 border-y border-border-light dark:border-border-dark">
                                            <div className="flex justify-between items-center group/item">
                                                <span className="flex items-center gap-3 text-text-muted text-sm font-medium">
                                                    <div className="p-1.5 rounded-lg bg-background-light dark:bg-background-dark group-hover/item:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                                                    </div>
                                                    Tanggal
                                                </span>
                                                <span className="font-bold text-text-main dark:text-white text-sm text-right">Sabtu, 18 Nov 2023</span>
                                            </div>
                                            <div className="flex justify-between items-center group/item">
                                                <span className="flex items-center gap-3 text-text-muted text-sm font-medium">
                                                    <div className="p-1.5 rounded-lg bg-background-light dark:bg-background-dark group-hover/item:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-lg">schedule</span>
                                                    </div>
                                                    Waktu
                                                </span>
                                                <span className="font-bold text-text-main dark:text-white text-sm text-right">07:00 - 11:00 WIB</span>
                                            </div>
                                            <div className="flex justify-between items-center group/item">
                                                <span className="flex items-center gap-3 text-text-muted text-sm font-medium">
                                                    <div className="p-1.5 rounded-lg bg-background-light dark:bg-background-dark group-hover/item:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-lg">location_on</span>
                                                    </div>
                                                    Lokasi
                                                </span>
                                                <span className="font-bold text-text-main dark:text-white text-sm text-right">Taman Pusat Kota</span>
                                            </div>
                                            <div className="flex justify-between items-center group/item">
                                                <span className="flex items-center gap-3 text-text-muted text-sm font-medium">
                                                    <div className="p-1.5 rounded-lg bg-background-light dark:bg-background-dark group-hover/item:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-lg">timelapse</span>
                                                    </div>
                                                    Batas Daftar
                                                </span>
                                                <span className="font-bold text-red-500 text-sm text-right">2 Hari Lagi</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsJoinModalOpen(true)}
                                            className="w-full py-4 bg-primary text-text-main font-black text-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                                        >
                                            Gabung Tantangan
                                            <span className="material-symbols-outlined font-bold">arrow_forward</span>
                                        </button>
                                        <p className="text-xs text-center text-text-muted font-medium">Dengan bergabung, Anda menyetujui aturan tantangan.</p>
                                    </div>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-text-main dark:text-white">Peserta Terdaftar</h3>
                                        <a className="text-xs font-bold text-primary hover:text-primary-hover hover:underline" href="#">Lihat Semua</a>
                                    </div>
                                    <div className="flex items-center justify-between bg-background-light dark:bg-background-dark p-3 rounded-xl">
                                        <div className="flex -space-x-3 overflow-hidden pl-1">
                                            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-surface-light dark:border-surface-dark ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB9YUBbNxnc2MHj4dUntODkLBSP7MOlJf6T414YdhCwIzhiM_S05eLtaabsN2aNPgxoVHX8loyMigrqCocBgplRXOUGDHxVfci7yfooKF7fpUfvNVBZIHEiyruJ8leWc2bYJ1IjJwM93ofUOcFEyNcs8YszBLg9xvj2e9mOShuO2MmtHTc6BEP6D0UUpA1a-3rU_x5dAfVBvzFfs8awiYs2jP4F1t0OhNteoKz4RapNS9jjywdAnTHyaCHEDv4tMb_1onIPYUml9c')" }} title="Sarah"></div>
                                            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-surface-light dark:border-surface-dark ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3xCtfu6Ak-otg_cRT7K5piZXR3myvqHYwuIvzm8Q81k8SYeh6pLYvZJlzN5RGe3PuooP-67dvxe-LgV7A4nd9owJN2FBg5p46qfjqsBV474XZ7RBVrAqZxJ9dFzJj0VDP-VqJbDHcFlbYzY4_W-R3ri2H9aUL6rMjAOTLTciiiHnGpISEBDfY0Gtk8wT8cHmXO9cGFLBQN08V7PWwp2F5O0WOW-i4OevB5InGFyHmnRZWcHzwfMShK5EDq6FO3QZnyCqaHtop6Hk')" }} title="Mike"></div>
                                            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-surface-light dark:border-surface-dark ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwOXLTmhLgh-jYLqpvQ7OlqiHk-v0mj2UC1pN8hEPi4wi22vGFFFw96yP-5_08Yew9h9nQL7GbqiOrNjQ__hz3pzH7PXD-T3J9VByRpZUu64Y7ZD0W7hrE8Ts7kO31JltEkIecHT9chUfmFuMZapnS-8R5HkoAM3l6xiSsivTdvXlW5xAPJOvE7gKudbnJPyt6us6oA_uZz3JQA0KrGpqR6GqCFET9nk9-lyz1iPijZqIFxIEc765O94Bd4afEYdRD0y94nUa7Qlg')" }} title="Emily"></div>
                                            <div className="h-10 w-10 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-surface-light dark:border-surface-dark ring-1 ring-black/5 flex items-center justify-center text-xs font-bold text-text-muted">+21</div>
                                        </div>
                                        <span className="text-sm font-bold text-text-main dark:text-white">24 Orang</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm text-text-muted">
                                        <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                                        <p className="leading-relaxed">
                                            <span className="font-bold text-text-main dark:text-white">Mike Ross</span> dan 3 teman komunitas Anda lainnya sudah bergabung.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

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
    );
}

export default ChallengeDetail;
