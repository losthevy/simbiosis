import { useNavigate } from 'react-router-dom';

function ChallengeProposal() {
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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Aspirasi</h2>
                    </div>
                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
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
                </header>
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth bg-background-light dark:bg-background-dark">
                    <div className="max-w-2xl mx-auto flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/challenges')}
                                className="h-10 w-10 flex items-center justify-center rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary text-text-main dark:text-white transition-all shadow-sm group"
                            >
                                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            </button>
                            <div>
                                <h1 className="text-2xl font-black text-text-main dark:text-white tracking-tight">Ajukan Tantangan Baru</h1>
                                <p className="text-text-muted text-sm">Punya ide seru? Sampaikan aspirasimu untuk komunitas yang lebih baik.</p>
                            </div>
                        </div>

                        <form className="flex flex-col gap-6 bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border-t-8 border-primary shadow-sm">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main dark:text-white">
                                    Nama Tantangan <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50 font-medium"
                                    placeholder="Contoh: Gerakan Pungut Sampah 1KM"
                                />
                                <p className="text-xs text-text-muted">Berikan nama yang singkat dan menarik perhatian warga.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main dark:text-white">
                                    Deskripsi Tantangan <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    className="w-full p-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50 font-medium h-32 resize-none"
                                    placeholder="Jelaskan detail aktivitas, tujuan, dan cara berpartisipasi..."
                                ></textarea>
                            </div>

                            <div className="h-px bg-dashed bg-border-light dark:bg-border-dark w-full my-2"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-text-main dark:text-white">
                                        Kategori Tantangan <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select className="w-full p-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium appearance-none cursor-pointer">
                                            <option value="" disabled selected>Pilih Kategori</option>
                                            <option value="recycling">Daur Ulang</option>
                                            <option value="energy">Hemat Energi</option>
                                            <option value="community">Komunitas</option>
                                            <option value="education">Edukasi</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-text-main dark:text-white">
                                        Durasi Tantangan yang Diinginkan
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50 font-medium"
                                        placeholder="Misal: 1 Minggu, 3 Hari"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main dark:text-white">
                                    Manfaat/Hadiah yang Disarankan
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                        <span className="material-symbols-outlined text-xl">stars</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50 font-medium"
                                        placeholder="Contoh: 500 Poin, Sertifikat Penghargaan"
                                    />
                                </div>
                                <p className="text-xs text-text-muted">Usulkan reward yang sepadan untuk memotivasi partisipan.</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-xs font-semibold text-text-muted">* Wajib diisi</p>
                                <button type="button" className="bg-primary text-text-main dark:text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover hover:-translate-y-0.5 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined">send</span>
                                    Kirim Aspirasi
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ChallengeProposal;
