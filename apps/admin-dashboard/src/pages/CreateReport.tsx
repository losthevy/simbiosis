import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { reportsApi } from '../lib/api';

function CreateReport() {
    const navigate = useNavigate();
    const [reportType, setReportType] = useState('Volume Sampah');
    const [period, setPeriod] = useState('Bulanan');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleCreateReport = async () => {
        setIsLoading(true);
        setMessage(null);

        try {
            const reportTypeMap: Record<string, string> = {
                'Volume Sampah': 'monthly',
                'Efisiensi Koleksi': 'weekly',
                'Audit Merek': 'audit',
            };

            const result = await reportsApi.create({
                title: `Laporan ${reportType} - ${new Date().toLocaleDateString('id-ID')}`,
                reportType: reportTypeMap[reportType] || 'custom',
                data: {
                    type: reportType,
                    period: period,
                    generatedAt: new Date().toISOString(),
                },
            });

            if (result.error) {
                setMessage({ type: 'error', text: result.error });
            } else {
                setMessage({ type: 'success', text: 'Laporan berhasil dibuat!' });
                setTimeout(() => navigate('/'), 2000);
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Gagal membuat laporan' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">


            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark shrink-0">
                    <h1 className="text-xl font-bold">Pusat Laporan</h1>
                    <div className="flex items-center gap-4">
                        <div className="w-64 relative hidden md:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                            <input type="text" placeholder="Cari laporan..." className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-black/20 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                        </div>
                        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-WHITE/5">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-WHITE/5">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">help</span>
                        </button>
                        <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLo4NrYcGtlGXTWKt6PV-23GwlEIpEH3Y8v7n_qoE0Lj_p-DUQfYl_Q4kKsLVHJjEC7Jdoju6WxSX5XKUY-XkFQnWd9vjpGmDwpTXbfuxUjN1SZXcSEZ2fooxKX9krVtiB41-Cv6SlxBqNoWl0mDJIzXLYZTbqktnLyEEmZNwdvSeJQbev4IQE-vVzzXm1bf1Xy0vsYSQsUCB-_-ywiUHAyAj8_-D4DPo5R5HW6eaIAdBt_fJ4mlke-3UNFbVnT4MVw213ARnJTCw')" }}></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    {message && (
                        <div className={`mb-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {message.text}
                        </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                        <button
                            onClick={() => navigate('/')}
                            className="size-10 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div>
                            <h2 className="text-2xl font-bold text-[#111814] dark:text-white">Buat Laporan Baru</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Sesuaikan parameter untuk menghasilkan dan mengunduh data analitik terperinci.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 space-y-6">
                            {/* Step 1: Jenis Laporan */}
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-green-500">description</span>
                                    <h3 className="font-bold text-lg">Pilih Jenis Laporan</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {['Volume Sampah', 'Efisiensi Koleksi', 'Audit Merek'].map((type) => (
                                        <div
                                            key={type}
                                            onClick={() => setReportType(type)}
                                            className={`p-4 rounded-xl border cursor-pointer transition-all ${reportType === type ? 'border-primary bg-green-50 dark:bg-green-900/20 ring-1 ring-primary' : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'}`}
                                        >
                                            <div className="size-10 rounded-lg bg-white dark:bg-black/20 flex items-center justify-center mb-3 shadow-sm">
                                                <span className="material-symbols-outlined text-primary">
                                                    {type === 'Volume Sampah' ? 'bar_chart' : type === 'Efisiensi Koleksi' ? 'timer' : 'branding_watermark'}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-sm mb-1">{type}</h4>
                                            <p className="text-[10px] text-gray-500 leading-tight">
                                                {type === 'Volume Sampah' ? 'Analisis total volume sampah terkumpul per wilayah.' :
                                                    type === 'Efisiensi Koleksi' ? 'Laporan kinerja tim petugas dan durasi waktu.' :
                                                        'Komposisi sampah berdasarkan merek produk.'}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Periode Waktu */}
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-green-500">calendar_month</span>
                                    <h3 className="font-bold text-lg">Periode Waktu</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
                                        {['Mingguan', 'Bulanan', 'Kustom'].map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => setPeriod(p)}
                                                className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${period === p ? 'bg-white dark:bg-gray-700 shadow-sm text-[#111814] dark:text-white' : 'text-gray-500'}`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Dari Tanggal</label>
                                            <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-black/20">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">calendar_today</span>
                                                <span className="text-sm font-medium">01/10/2025</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Sampai Tanggal</label>
                                            <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-black/20">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">calendar_today</span>
                                                <span className="text-sm font-medium">31/10/2025</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Parameter Spesifik */}
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-green-500">filter_alt</span>
                                    <h3 className="font-bold text-lg">Parameter Spesifik</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-1.5 block">Area Geografis</label>
                                        <select className="w-full px-3 py-2.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium outline-none focus:ring-1 focus:ring-primary">
                                            <option>Semua Area</option>
                                            <option>Jakarta Pusat</option>
                                            <option>Jakarta Selatan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-1.5 block">Jenis Sampah</label>
                                        <select className="w-full px-3 py-2.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium outline-none focus:ring-1 focus:ring-primary">
                                            <option>Semua Kategori</option>
                                            <option>Plastik</option>
                                            <option>Logam</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-1.5 block">Tim Petugas</label>
                                        <select className="w-full px-3 py-2.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium outline-none focus:ring-1 focus:ring-primary">
                                            <option>Semua Tim</option>
                                            <option>Tim Alpha</option>
                                            <option>Tim Beta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Preview Sidebar */}
                        <div className="w-full lg:w-80 space-y-6">
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm sticky top-6">
                                <h3 className="font-bold text-lg mb-1">Pratinjau</h3>
                                <p className="text-xs text-gray-500 mb-6">Ringkasan konfigurasi laporan Anda.</p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Tipe</span>
                                        <span className="font-bold text-right">{reportType}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Periode</span>
                                        <div className="text-right">
                                            <span className="font-bold block">1 Okt - 31 Okt 2025</span>
                                            <span className="text-xs text-green-600 font-bold">({period})</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Area</span>
                                        <span className="font-bold text-right">Semua Area</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Format</span>
                                        <span className="font-bold text-right">PDF & Excel</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCreateReport}
                                    disabled={isLoading}
                                    className="w-full bg-primary text-background-dark py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20 mb-3 disabled:opacity-50"
                                >
                                    <span className="material-symbols-outlined">{isLoading ? 'hourglass_empty' : 'download'}</span>
                                    {isLoading ? 'Membuat...' : 'Buat & Unduh Laporan'}
                                </button>
                                <button className="w-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-[#111814] dark:text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                                    <span className="material-symbols-outlined">send</span>
                                    Kirim via Email
                                </button>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-3">
                                <span className="material-symbols-outlined text-blue-600 text-xl shrink-0">info</span>
                                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                                    Laporan mencakup data sensitif perusahaan. Pastikan Anda mematuhi kebijakan privasi data sebelum mengunduh atau membagikan dokumen ini.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CreateReport;
