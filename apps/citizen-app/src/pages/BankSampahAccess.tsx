import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BankSampahAccess() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('Hari Ini');
    const [selectedTime, setSelectedTime] = useState('09:00 - 10:00');

    // Mock Data for History
    const historyData = [
        { id: 1, date: "12 Okt 2023, 14:30", location: "SmartBin Jakpus 01", type: "Plastik", weight: "2.5 kg", points: "+125", typeColor: "bg-blue-100 text-blue-600", icon: "water_drop" },
        { id: 2, date: "10 Okt 2023, 09:15", location: "SmartBin Jaksel 04", type: "Kertas", weight: "4.0 kg", points: "+80", typeColor: "bg-yellow-100 text-yellow-600", icon: "description" },
        { id: 3, date: "05 Okt 2023, 16:45", location: "SmartBin Jakpus 01", type: "Logam", weight: "1.2 kg", points: "+150", typeColor: "bg-gray-100 text-gray-600", icon: "settings" },
    ];

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
                    <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary text-text-main dark:text-white transition-all shadow-sm group"
                            >
                                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            </button>
                            <div>
                                <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight flex items-center gap-3">
                                    Bank Sampah Pintar
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold border border-green-200">Live Map</span>
                                </h1>
                                <p className="text-text-muted mt-1">Kelola penyetoran sampah dan pantau poin Anda.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* LEFT COLUMN */}
                            <div className="lg:col-span-8 flex flex-col gap-8">

                                {/* MAP SECTION */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-text-main dark:text-white">Lokasi Bank Sampah</h2>
                                            <p className="text-sm text-text-muted">Temukan titik pembuangan terdekat di sekitar Jakarta.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm text-sm font-bold hover:bg-gray-50">
                                                <span className="material-symbols-outlined text-lg">my_location</span>
                                                Lokasi Saya
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm text-sm font-bold hover:bg-gray-50">
                                                <span className="material-symbols-outlined text-lg">tune</span>
                                                Filter
                                            </button>
                                        </div>
                                    </div>

                                    <div className="h-[400px] w-full rounded-2xl bg-gray-200 relative overflow-hidden border border-gray-200 shadow-sm group">
                                        {/* Mock Map Background */}
                                        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/map-bg.png')" }}></div>

                                        {/* Map UI Elements */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                            <div className="h-12 w-12 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-white animate-bounce">
                                                <span className="material-symbols-outlined text-2xl">recycling</span>
                                            </div>
                                            <div className="mt-2 px-3 py-1 bg-white rounded-lg shadow-md text-xs font-bold">SmartBin Jakpus 01</div>
                                        </div>

                                        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                                            <button className="h-10 w-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 text-gray-600"><span className="material-symbols-outlined">add</span></button>
                                            <button className="h-10 w-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 text-gray-600"><span className="material-symbols-outlined">remove</span></button>
                                        </div>
                                    </div>
                                </div>

                                {/* HISTORY SECTION */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-text-main dark:text-white">Riwayat Penyetoran Saya</h2>
                                        <button className="text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1">
                                            Lihat Semua
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                    </div>

                                    <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 font-bold uppercase text-xs tracking-wider border-b border-gray-100">
                                                    <tr>
                                                        <th className="px-6 py-4">Tanggal & Waktu</th>
                                                        <th className="px-6 py-4">Lokasi</th>
                                                        <th className="px-6 py-4">Jenis Sampah</th>
                                                        <th className="px-6 py-4">Berat</th>
                                                        <th className="px-6 py-4 text-right">Poin</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                                    {historyData.map((item) => (
                                                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                            <td className="px-6 py-4 font-medium text-text-main dark:text-white">{item.date}</td>
                                                            <td className="px-6 py-4 text-gray-500">{item.location}</td>
                                                            <td className="px-6 py-4">
                                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${item.typeColor}`}>
                                                                    <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                                                                    {item.type}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-text-main dark:text-white">{item.weight}</td>
                                                            <td className="px-6 py-4 text-right font-bold text-green-500">{item.points}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* RIGHT COLUMN (SIDEBAR) */}
                            <div className="lg:col-span-4 flex flex-col gap-6">

                                {/* SELECTED BIN CARD */}
                                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm flex flex-col gap-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Terpilih</span>
                                            <h2 className="text-xl font-bold text-text-main dark:text-white mt-1">SmartBin Jakpus 01</h2>
                                            <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                                Jl. Merdeka Barat No. 12
                                            </p>
                                        </div>
                                        <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">recycling</span>
                                        </div>
                                    </div>

                                    {/* Capacity */}
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <div className="flex justify-between text-sm font-bold mb-2">
                                            <span className="text-gray-500">Kapasitas</span>
                                            <span className="text-orange-500">80% Penuh</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 rounded-full" style={{ width: "80%" }}></div>
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white">
                                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                                <span className="material-symbols-outlined text-sm">schedule</span>
                                                <span className="text-[10px] font-bold uppercase">Terakhir Kosong</span>
                                            </div>
                                            <p className="font-bold text-text-main">2 jam lalu</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white">
                                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                                <span className="material-symbols-outlined text-sm">sensors</span>
                                                <span className="text-[10px] font-bold uppercase">Status Sensor</span>
                                            </div>
                                            <p className="font-bold text-green-500">Aktif</p>
                                        </div>
                                    </div>
                                </div>

                                {/* SCHEDULE CARD */}
                                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm flex flex-col gap-6">
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white">Jadwalkan Penyetoran</h3>
                                        <p className="text-sm text-gray-400 mt-1">Pilih waktu kedatangan Anda</p>
                                    </div>

                                    {/* Date Picker */}
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Pilih Tanggal</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['Hari Ini', 'Besok', 'Jum 14'].map((day, idx) => (
                                                <button
                                                    key={day}
                                                    onClick={() => setSelectedDate(day)}
                                                    className={`py-3 px-2 rounded-xl border text-center transition-all ${selectedDate === day
                                                        ? 'bg-primary text-white border-primary shadow-lg shadow-green-200'
                                                        : 'bg-white border-gray-200 text-gray-500 hover:border-primary/50'
                                                        }`}
                                                >
                                                    <div className="text-xs opacity-80">{idx === 0 ? '12 OKT' : idx === 1 ? '13 OKT' : '14 OKT'}</div>
                                                    <div className="font-bold text-sm mt-0.5">{day}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Picker */}
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Pilih Waktu</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '13:00 (Penuh)'].map((time) => (
                                                <button
                                                    key={time}
                                                    disabled={time.includes('Penuh')}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`py-2.5 px-3 rounded-lg border text-sm font-bold transition-all ${selectedTime === time
                                                        ? 'border-primary text-primary bg-green-50'
                                                        : time.includes('Penuh')
                                                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => navigate('/bank-sampah-schedule')}
                                        className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">calendar_month</span>
                                        Konfirmasi Jadwal
                                    </button>
                                </div>

                                {/* WASTE TYPES */}
                                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                                    <h3 className="font-bold text-base text-text-main dark:text-white flex items-center gap-2 mb-4">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        Jenis Sampah Diterima
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <span className="material-symbols-outlined text-sm">water_drop</span>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm">Plastik</div>
                                                <div className="text-[10px] text-gray-400">Botol, Cup</div>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                                <span className="material-symbols-outlined text-sm">description</span>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm">Kertas</div>
                                                <div className="text-[10px] text-gray-400">Kardus, Koran</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BankSampahAccess;
