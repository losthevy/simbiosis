import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auditsApi } from '../lib/api';

function NewAudit() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [auditType, setAuditType] = useState('Audit Lokasi');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleCreateAudit = async () => {
        if (!title.trim()) {
            setMessage({ type: 'error', text: 'Nama audit wajib diisi' });
            return;
        }

        setIsLoading(true);
        setMessage(null);

        try {
            const result = await auditsApi.create({
                title: title,
                findings: `Tipe: ${auditType}\nLokasi: ${location}\nDeskripsi: ${description}`,
            });

            if (result.error) {
                setMessage({ type: 'error', text: result.error });
            } else {
                setMessage({ type: 'success', text: 'Audit berhasil dibuat!' });
                setTimeout(() => navigate('/'), 2000);
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Gagal membuat audit' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center justify-between px-8 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Selamat datang kembali, Admin</h2>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/5 rounded-lg px-3 h-10 w-64 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input className="bg-transparent border-none text-sm w-full focus:ring-0 text-text-main dark:text-white placeholder-text-muted outline-none ml-2" placeholder="Cari audit, pengguna..." type="text" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-surface-light dark:border-surface-dark"></span>
                            </button>
                            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors">
                                <span className="material-symbols-outlined">help</span>
                            </button>
                            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                            <button className="flex items-center gap-3 pl-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="h-9 w-9 rounded-full bg-center bg-cover border border-gray-200 dark:border-gray-700"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLo4NrYcGtlGXTWKt6PV-23GwlEIpEH3Y8v7n_qoE0Lj_p-DUQfYl_Q4kKsLVHJjEC7Jdoju6WxSX5XKUY-XkFQnWd9vjpGmDwpTXbfuxUjN1SZXcSEZ2fooxKX9krVtiB41-Cv6SlxBqNoWl0mDJIzXLYZTbqktnLyEEmZNwdvSeJQbev4IQE-vVzzXm1bf1Xy0vsYSQsUCB-_-ywiUHAyAj8_-D4DPo5R5HW6eaIAdBt_fJ4mlke-3UNFbVnT4MVw213ARnJTCw')" }}
                                ></div>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-4xl mx-auto">
                        {message && (
                            <div className={`mb-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {message.text}
                            </div>
                        )}

                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={() => navigate('/')}
                                className="size-10 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <div>
                                <h2 className="text-2xl font-bold text-[#111814] dark:text-white">Mulai Audit Baru</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Konfigurasi parameter audit untuk tim lapangan</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-8">
                            {/* Detail Audit Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-800">Detail Audit</h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 block">Nama Audit</label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Contoh: Audit Brand Plastik Oktober 2025"
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 block">Tipe Audit</label>
                                            <div className="relative">
                                                <select
                                                    value={auditType}
                                                    onChange={(e) => setAuditType(e.target.value)}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white appearance-none cursor-pointer"
                                                >
                                                    <option>Audit Lokasi</option>
                                                    <option>Audit Merek</option>
                                                    <option>Audit Volume</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 block">Area/Lokasi Audit</label>
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">location_on</span>
                                                <input
                                                    type="text"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    placeholder="Cari area atau lokasi..."
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white placeholder-gray-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 block">Deskripsi Audit</label>
                                        <textarea
                                            rows={4}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Jelaskan tujuan dan ruang lingkup audit ini secara rinci..."
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white placeholder-gray-400 resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Logistik & Jadwal Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-800">Logistik & Jadwal</h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 block">Periode Audit</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">calendar_today</span>
                                                <input
                                                    type="text"
                                                    placeholder="Tanggal Mulai"
                                                    onFocus={(e) => e.target.type = 'date'}
                                                    onBlur={(e) => e.target.type = 'text'}
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white placeholder-gray-400"
                                                />
                                            </div>
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">event_busy</span>
                                                <input
                                                    type="text"
                                                    placeholder="Tanggal Selesai"
                                                    onFocus={(e) => e.target.type = 'date'}
                                                    onBlur={(e) => e.target.type = 'text'}
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white placeholder-gray-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 block">Tim Audit</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">person_add</span>
                                            <input
                                                type="text"
                                                placeholder="Tambahkan anggota tim (email atau nama)..."
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white placeholder-gray-400"
                                            />
                                        </div>
                                        <p className="flex items-center gap-1 mt-2 text-[10px] text-gray-500">
                                            <span className="material-symbols-outlined text-[12px]">info</span>
                                            Pisahkan dengan koma untuk menambah banyak anggota sekaligus.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100 dark:border-gray-800 mb-6" />

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => navigate('/')}
                                    className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 font-bold text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleCreateAudit}
                                    disabled={isLoading}
                                    className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-black font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                                >
                                    <span className="material-symbols-outlined text-[18px]">{isLoading ? 'hourglass_empty' : 'play_arrow'}</span>
                                    {isLoading ? 'Membuat...' : 'Mulai Audit'}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NewAudit;
