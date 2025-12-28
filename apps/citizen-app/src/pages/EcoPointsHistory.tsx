import { useNavigate } from 'react-router-dom';

function EcoPointsHistory() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111814] dark:text-gray-100 min-h-screen flex flex-col font-display">

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 flex flex-col gap-6">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <button onClick={() => navigate('/')} className="text-[#618972] dark:text-gray-400 font-medium hover:underline">Beranda</button>
                    <span className="text-[#618972] dark:text-gray-400">/</span>
                    <span className="text-[#111814] dark:text-white font-medium">Riwayat</span>
                </div>
                {/* Header Section with Stats */}
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-end">
                    {/* Page Heading */}
                    <div className="flex flex-col gap-3 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <button onClick={() => navigate('/')} className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="material-symbols-outlined text-[#111814] dark:text-white">arrow_back</span>
                            </button>
                            <h1 className="text-[#111814] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Riwayat EcoPoin</h1>
                        </div>
                        <p className="text-[#618972] dark:text-gray-400 text-base font-normal leading-normal pl-12">
                            Pantau semua transaksi masuk dan keluar poin Anda secara detail.
                        </p>
                    </div>
                    {/* Total Balance Card */}
                    <div className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-xl p-5 min-w-[240px] flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-primary dark:text-primary">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span className="text-sm font-bold uppercase tracking-wide">Total Saldo</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-[#111814] dark:text-white text-3xl font-black">250</span>
                            <span className="text-[#618972] dark:text-gray-400 font-medium mb-1">Poin</span>
                        </div>
                    </div>
                </div>
                {/* Filters & Actions Bar */}
                <div className="bg-white dark:bg-[#1A2C22] p-4 rounded-xl border border-[#dbe6e0] dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-end md:items-center justify-between mt-4">
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
                        {/* Date Range Filter */}
                        <div className="flex flex-col gap-1 w-full md:w-64">
                            <label className="text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider">Rentang Tanggal</label>
                            <div className="relative flex items-center">
                                <input className="w-full bg-background-light dark:bg-gray-900 border border-[#dbe6e0] dark:border-gray-700 text-[#111814] dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block pl-10 p-2.5" placeholder="DD/MM/YYYY - DD/MM/YYYY" type="text" />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-500 text-[20px]">calendar_month</span>
                                </div>
                            </div>
                        </div>
                        {/* Transaction Type Filter */}
                        <div className="flex flex-col gap-1 w-full md:w-48">
                            <label className="text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider">Tipe Transaksi</label>
                            <div className="relative">
                                <select className="bg-background-light dark:bg-gray-900 border border-[#dbe6e0] dark:border-gray-700 text-[#111814] dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 appearance-none">
                                    <option defaultValue="">Semua Tipe</option>
                                    <option value="income">Pemasukan (+)</option>
                                    <option value="expense">Pengeluaran (-)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#111814] bg-white dark:bg-gray-800 border border-[#dbe6e0] dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                            <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                            Filter
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-[#111814] bg-primary rounded-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            Unduh CSV
                        </button>
                    </div>
                </div>
                {/* Transaction Table */}
                <div className="bg-white dark:bg-[#1A2C22] border border-[#dbe6e0] dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-background-light dark:bg-gray-900/50 border-b border-[#dbe6e0] dark:border-gray-800">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider whitespace-nowrap" scope="col">Tanggal</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider" scope="col">Aktivitas</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider" scope="col">Tipe</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider text-right" scope="col">Jumlah</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-[#618972] dark:text-gray-400 uppercase tracking-wider text-right" scope="col">Saldo Akhir</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f0f4f2] dark:divide-gray-800">
                                {/* Row 1: Income */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111814] dark:text-gray-300 font-medium">12 Okt 2023</td>
                                    <td className="px-6 py-4 text-sm text-[#111814] dark:text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                                <span className="material-symbols-outlined text-[18px]">recycling</span>
                                            </div>
                                            <span>Penukaran Sampah Plastik</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800">
                                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                                            Pemasukan
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <span className="text-sm font-bold text-green-600 dark:text-primary">+50 Poin</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-[#111814] dark:text-gray-300 font-bold">250</td>
                                </tr>
                                {/* Row 2: Expense */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111814] dark:text-gray-300 font-medium">10 Okt 2023</td>
                                    <td className="px-6 py-4 text-sm text-[#111814] dark:text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                                <span className="material-symbols-outlined text-[18px]">bolt</span>
                                            </div>
                                            <span>Tukar Poin Voucher Listrik</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                                            Pengeluaran
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">-100 Poin</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-[#111814] dark:text-gray-300 font-bold">200</td>
                                </tr>
                                {/* Row 3: Income */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111814] dark:text-gray-300 font-medium">05 Okt 2023</td>
                                    <td className="px-6 py-4 text-sm text-[#111814] dark:text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                                <span className="material-symbols-outlined text-[18px]">emoji_events</span>
                                            </div>
                                            <span>Hadiah Tantangan Mingguan</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800">
                                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                                            Pemasukan
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <span className="text-sm font-bold text-green-600 dark:text-primary">+150 Poin</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-[#111814] dark:text-gray-300 font-bold">300</td>
                                </tr>
                                {/* Row 4: Income */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111814] dark:text-gray-300 font-medium">01 Okt 2023</td>
                                    <td className="px-6 py-4 text-sm text-[#111814] dark:text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <span className="material-symbols-outlined text-[18px]">description</span>
                                            </div>
                                            <span>Daur Ulang Kertas</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800">
                                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                                            Pemasukan
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <span className="text-sm font-bold text-green-600 dark:text-primary">+20 Poin</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-[#111814] dark:text-gray-300 font-bold">150</td>
                                </tr>
                                {/* Row 5: Expense */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111814] dark:text-gray-300 font-medium">28 Sep 2023</td>
                                    <td className="px-6 py-4 text-sm text-[#111814] dark:text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                                <span className="material-symbols-outlined text-[18px]">favorite</span>
                                            </div>
                                            <span>Donasi Poin Komunitas</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                                            Pengeluaran
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">-50 Poin</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-[#111814] dark:text-gray-300 font-bold">130</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-[#f0f4f2] dark:border-gray-800 bg-white dark:bg-[#1A2C22] flex items-center justify-between">
                        <span className="text-sm text-[#618972] dark:text-gray-400">
                            Menampilkan <span className="font-bold text-[#111814] dark:text-white">1-5</span> dari <span className="font-bold text-[#111814] dark:text-white">48</span> transaksi
                        </span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
                                Sebelumnya
                            </button>
                            <button className="px-3 py-1.5 text-sm font-medium text-[#111814] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary transition-colors">
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default EcoPointsHistory;
