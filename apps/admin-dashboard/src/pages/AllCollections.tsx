import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AllCollections() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    // Mock Data
    const collections = [
        { id: '#COL-2940', location: 'Jakarta Pusat', brand: 'Unilever', type: 'Plastik (HDPE)', weight: '1.204 kg', status: 'Terverifikasi', date: '24 Okt 2025', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk' },
        { id: '#COL-2939', location: 'Bandung Utara', brand: 'Danone', type: 'Kertas Campuran', weight: '850 kg', status: 'Tertunda', date: '23 Okt 2025', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAg2WnlWGrOmiHU_erisGIjScBz07lQwmF1QSF9Y12xXjaHpL2TDI60JDq2kJWtlWkTMNe93qKJVM_9b0Exm3qeSfhJ4McfFX6c3SmwCYFgRQi68qUXoiiMbMlBR5JEfR5NR5kUCrMwa_uevlZ53Nqyp_FutMtFpF5Ix14wygXCKJNXEV9zBJ-D52w2FCZJmVwzGxj9nD1C-YHfxRws-Q8q7EJLGvv4RqKdD2x4zglkftkVJ7KNaMvEyDh_iVKzKNjpDINEBXctlc' },
        { id: '#COL-2938', location: 'Surabaya Timur', brand: 'Nestlé', type: 'Logam (Alu)', weight: '340 kg', status: 'Terverifikasi', date: '23 Okt 2025', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiPxonezBbrGCPSQ19cnBfUJmJoIm7PW9otNEY3JbtPynmqj7aj9mWBBp_3MO3VQckaBNtrjNJYGfgJrxHvCE2G4qQa-ZLXuKp9blp59eOUJ5OT5fP_ANfPg0PFW_XZwKsd6L_59QUGqjYfa-_TQ06jTtSRONMgf-BLZ53PCrW_rceWHPusjkKWn1tOai8RD88GT8HT3ACGGQ6LuVQj5s9GBCcpvM5C01JM5rLa4f8FLiLgZbUwe0guPOJwF3uL6GbG7TMxJmi96o' },
        { id: '#COL-2937', location: 'Bali Resort', brand: 'Coca-Cola', type: 'Plastik (PET)', weight: '2.100 kg', status: 'Terverifikasi', date: '22 Okt 2025', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZo2Kiz77wcIvrd_cMlpL4Ivbe1E-y7yUTsdNKATtDLDTJCJCvDHT7b__TJXcn86HhiRux-Kbk6N7XLZKOtopLewelE9oczzGN5sMT_4HAAC1ZW1fxXYWA00sFGd2-wg7rUt9tgMfTDvHYESytUq3lcT9Q24BQAm1iFJdUlVddSd9p3foKcTuBA-uil-ibhIVeO0fRs93N6Nx-LIYOszjBT3IwblVK86bQgUCIAP3RMakouLJuF0QBy0DuWasMVXp9bGJuJ-TBFk' },
        { id: '#COL-2936', location: 'Medan Kota', brand: 'Indofood', type: 'Plastik (Flexible)', weight: '560 kg', status: 'Diproses', date: '21 Okt 2025', img: 'https://placehold.co/100x100?text=Map' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Terverifikasi': return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400';
            case 'Tertunda': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400';
            case 'Diproses': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400';
            default: return 'bg-gray-100 text-gray-800';
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
                    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <button onClick={() => navigate('/')} className="hover:bg-gray-200 dark:hover:bg-white/10 p-1 rounded-full transition-colors">
                                    <span className="material-symbols-outlined text-gray-500">arrow_back</span>
                                </button>
                                <h1 className="text-2xl font-bold text-text-main dark:text-white">Semua Koleksi Sampah</h1>
                            </div>
                            <p className="text-text-muted text-sm ml-9">Lihat dan kelola semua data pengumpulan sampah dari mitra di seluruh lokasi.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white shadow-sm">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                                Ekspor CSV
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-lg text-sm font-bold transition-colors shadow-sm shadow-primary/20">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Catat Koleksi
                            </button>
                        </div>
                    </div>

                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 w-full">
                        {/* Filters */}
                        <div className="flex flex-col xl:flex-row gap-4 mb-6">
                            <div className="flex-1 relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                <input
                                    type="text"
                                    placeholder="Cari berdasarkan ID, lokasi, atau merek..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                />
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-2 xl:pb-0">
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 whitespace-nowrap">
                                    <span className="material-symbols-outlined text-gray-500">calendar_today</span>
                                    Rentang Tanggal
                                    <span className="material-symbols-outlined text-gray-400 text-lg ml-1">expand_more</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 whitespace-nowrap">
                                    <span className="material-symbols-outlined text-gray-500">filter_list</span>
                                    Status
                                    <span className="material-symbols-outlined text-gray-400 text-lg ml-1">expand_more</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 whitespace-nowrap">
                                    <span className="material-symbols-outlined text-gray-500">category</span>
                                    Tipe
                                    <span className="material-symbols-outlined text-gray-400 text-lg ml-1">expand_more</span>
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-text-muted uppercase bg-gray-50 dark:bg-black/20 border-b border-gray-200 dark:border-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 font-medium flex items-center gap-1 cursor-pointer hover:text-text-main">
                                            ID <span className="material-symbols-outlined text-[16px]">unfold_more</span>
                                        </th>
                                        <th className="px-6 py-4 font-medium">LOKASI</th>
                                        <th className="px-6 py-4 font-medium cursor-pointer hover:text-text-main">
                                            MEREK <span className="material-symbols-outlined text-[16px] align-middle inline-block">unfold_more</span>
                                        </th>
                                        <th className="px-6 py-4 font-medium">TIPE</th>
                                        <th className="px-6 py-4 font-medium cursor-pointer hover:text-text-main">
                                            BERAT <span className="material-symbols-outlined text-[16px] align-middle inline-block">unfold_more</span>
                                        </th>
                                        <th className="px-6 py-4 font-medium">STATUS</th>
                                        <th className="px-6 py-4 font-medium cursor-pointer hover:text-text-main">
                                            TANGGAL <span className="material-symbols-outlined text-[16px] align-middle inline-block">unfold_more</span>
                                        </th>
                                        <th className="px-6 py-4 font-medium text-right">AKSI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                                    {collections.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                            <td className="px-6 py-4 font-semibold text-text-main dark:text-white">{item.id}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-lg bg-gray-200 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                                    <span className="text-text-main dark:text-white font-medium">{item.location}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-main dark:text-white">{item.brand}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 dark:border-gray-700">
                                                    {item.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-text-main dark:text-white">{item.weight}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-green-600 dark:text-green-400 font-medium text-sm">{item.date}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 hover:text-text-main dark:hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                            <p className="text-sm text-text-muted">
                                Menampilkan <span className="font-bold text-text-main dark:text-white">{(currentPage - 1) * 5 + 1}</span> sampai <span className="font-bold text-text-main dark:text-white">{Math.min(currentPage * 5, 128)}</span> dari <span className="font-bold text-text-main dark:text-white">128</span> hasil
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50 transition-colors flex items-center gap-1"
                                >
                                    <span className="hidden sm:inline">Sebelumnya</span>
                                    <span className="sm:hidden material-symbols-outlined text-lg">chevron_left</span>
                                </button>
                                {[1, 2, 3].map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`h-9 w-9 rounded-lg flex items-center justify-center text-sm transition-colors ${currentPage === page
                                            ? 'bg-primary text-black font-bold shadow-sm shadow-primary/20'
                                            : 'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 text-text-muted'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <span className="text-gray-400 px-1">...</span>
                                <button
                                    onClick={() => setCurrentPage(10)}
                                    className={`h-9 w-9 rounded-lg flex items-center justify-center text-sm transition-colors ${currentPage === 10
                                        ? 'bg-primary text-black font-bold shadow-sm shadow-primary/20'
                                        : 'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 text-text-muted'
                                        }`}
                                >
                                    10
                                </button>
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
                                    disabled={currentPage === 10}
                                    className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50 transition-colors flex items-center gap-1"
                                >
                                    <span className="hidden sm:inline">Berikutnya</span>
                                    <span className="sm:hidden material-symbols-outlined text-lg">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AllCollections;
