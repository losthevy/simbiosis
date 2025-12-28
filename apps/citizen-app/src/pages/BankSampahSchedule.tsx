import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BankSampahSchedule() {
    const navigate = useNavigate();
    const [showTicketModal, setShowTicketModal] = useState(false);

    return (
        <div className="flex h-screen w-full bg-[#f8f9fa] dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-white dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex-shrink-0 z-10">
                    <div className="flex items-center gap-6">
                        <h1 className="text-text-main dark:text-white text-2xl font-black tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-4xl">recycling</span>
                            SIMBIOSIS
                        </h1>
                        <div className="h-8 w-px bg-border-light dark:bg-border-dark hidden sm:block"></div>
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Bank Sampah</h2>
                    </div>

                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                        <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-background-light dark:bg-background-dark border border-transparent focus-within:border-primary px-4 transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-muted outline-none ml-2"
                                placeholder="Cari bank sampah..."
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
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8')" }}
                            ></div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
                    <div className="max-w-3xl mx-auto flex flex-col gap-8">
                        {/* Title Section */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary text-text-main dark:text-white transition-all shadow-sm group"
                            >
                                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            </button>
                            <div>
                                <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Konfirmasi Jadwal</h1>
                                <p className="text-text-muted mt-1">Pastikan detail penyetoran Anda sudah benar.</p>
                            </div>
                        </div>

                        {/* Confirmation Card */}
                        <div className="bg-white dark:bg-surface-dark rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg p-8 relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>

                            <div className="relative z-10 flex flex-col gap-8">
                                <div className="flex items-start gap-6 pb-8 border-b border-gray-100 dark:border-gray-800">
                                    <div className="h-24 w-24 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop')" }}></div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold border border-green-200 uppercase tracking-wide">Bank Sampah Unit</span>
                                        </div>
                                        <h2 className="text-2xl font-black text-text-main dark:text-white mb-2">SmartBin Jakpus 01</h2>
                                        <p className="text-text-muted flex items-center gap-1.5 font-medium">
                                            <span className="material-symbols-outlined text-lg text-primary">location_on</span>
                                            Jl. Merdeka Barat No. 12, Gambir, Jakarta Pusat
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-2xl">calendar_today</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Tanggal</p>
                                            <p className="text-lg font-bold text-text-main dark:text-white">Hari Ini, 12 Okt</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-2xl">schedule</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Waktu</p>
                                            <p className="text-lg font-bold text-text-main dark:text-white">09:00 - 10:00 WIB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100 flex gap-4">
                                    <span className="material-symbols-outlined text-green-600 text-2xl">info</span>
                                    <div>
                                        <h4 className="font-bold text-green-800 mb-1">Catatan Penting</h4>
                                        <p className="text-sm text-green-700 leading-relaxed">
                                            Pastikan sampah yang Anda bawa sudah terpilah sesuai kategorinya (Plastik, Kertas, Logam). Tunjukkan QR Code tiket Anda kepada petugas saat tiba di lokasi.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => setShowTicketModal(true)}
                                        className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
                                    >
                                        <span className="material-symbols-outlined">check_circle</span>
                                        Konfirmasi & Dapat Tiket
                                    </button>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="w-full py-4 rounded-xl bg-white border border-gray-200 text-gray-600 font-bold text-lg hover:bg-gray-50 transition-all"
                                    >
                                        Batalkan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ticket Modal */}
                {showTicketModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                        <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 w-full max-w-sm flex flex-col items-center shadow-2xl animate-scale-in">
                            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-4xl text-green-600">qr_code_2</span>
                            </div>

                            <h3 className="text-2xl font-black text-center text-text-main dark:text-white mb-2">Tiket Penyetoran</h3>
                            <p className="text-center text-text-muted mb-8 px-4">Scan QR kode ini ke petugas Bank Sampah saat Anda tiba di lokasi.</p>

                            <div className="bg-white p-4 rounded-2xl border-2 border-dashed border-gray-300 mb-8 w-full flex justify-center">
                                {/* Dummy QR Code */}
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SIMBIOSIS-TICKET-123456"
                                    alt="Tiket QR Code"
                                    className="w-48 h-48 mix-blend-multiply"
                                />
                            </div>

                            <button
                                onClick={() => setShowTicketModal(false)}
                                className="w-full py-3.5 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
                            >
                                Batalkan
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default BankSampahSchedule;
