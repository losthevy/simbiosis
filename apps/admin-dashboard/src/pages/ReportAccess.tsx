import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ReportAccess() {
    const navigate = useNavigate();
    const [filterType, setFilterType] = useState('Semua');

    const reports = [
        {
            id: 'RPT-2025-001',
            title: 'Laporan Keberlanjutan Tahunan 2024',
            type: 'Sustainability',
            date: '10 Jan 2025',
            author: 'Tim ESG',
            status: 'Final',
            size: '4.2 MB'
        },
        {
            id: 'RPT-2025-002',
            title: 'Audit Sampah Q1 2025 - Jakarta Pusat',
            type: 'Audit',
            date: '15 Apr 2025',
            author: 'Budi Santoso',
            status: 'Review',
            size: '2.8 MB'
        },
        {
            id: 'RPT-2025-003',
            title: 'Dampak Program "Minggu Bebas Plastik"',
            type: 'Impact',
            date: '20 Mei 2025',
            author: 'Citra Lestari',
            status: 'Draft',
            size: '1.5 MB'
        },
        {
            id: 'RPT-2025-004',
            title: 'Kepatuhan Mitra Daur Ulang - Semester 1',
            type: 'Compliance',
            date: '30 Jun 2025',
            author: 'Tim Legal',
            status: 'Final',
            size: '3.1 MB'
        }
    ];

    const filteredReports = filterType === 'Semua'
        ? reports
        : reports.filter(r => r.type === filterType);

    return (
        <div className="flex-1 flex flex-col w-full h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
            <header className="h-16 flex items-center justify-between px-8 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Akses Laporan</h2>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-8">
                <div className="w-full space-y-6">
                    {/* Header & Stats */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-black text-text-main dark:text-white">Laporan & Analisis</h1>
                            <p className="text-text-muted mt-1">Unduh dan kelola laporan performa keberlanjutan.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white">
                                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                                Filter
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-lg text-sm font-bold transition-colors">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Laporan Baru
                            </button>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {['Semua', 'Sustainability', 'Audit', 'Impact', 'Compliance'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filterType === type
                                        ? 'bg-primary/20 text-primary border border-primary/20'
                                        : 'bg-surface-light dark:bg-surface-dark text-text-muted border border-gray-200 dark:border-gray-700 hover:border-primary/50'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Reports Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredReports.map((report) => (
                            <div key={report.id} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-lg ${report.type === 'Sustainability' ? 'bg-green-100 text-green-600' :
                                            report.type === 'Audit' ? 'bg-blue-100 text-blue-600' :
                                                report.type === 'Impact' ? 'bg-purple-100 text-purple-600' :
                                                    'bg-orange-100 text-orange-600'
                                        }`}>
                                        <span className="material-symbols-outlined text-2xl">
                                            {report.type === 'Sustainability' ? 'eco' :
                                                report.type === 'Audit' ? 'fact_check' :
                                                    report.type === 'Impact' ? 'query_stats' : 'gavel'}
                                        </span>
                                    </div>
                                    <button className="text-text-muted hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <h3 className="font-bold text-lg text-text-main dark:text-white mb-2 line-clamp-2">{report.title}</h3>

                                <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        {report.date}
                                    </span>
                                    <span>•</span>
                                    <span>{report.size}</span>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                            {report.author.charAt(0)}
                                        </div>
                                        <span className="text-xs font-medium text-text-muted">{report.author}</span>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${report.status === 'Final' ? 'bg-green-100 text-green-700' :
                                            report.status === 'Review' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-gray-100 text-gray-700'
                                        }`}>
                                        {report.status}
                                    </span>
                                </div>

                                <button className="w-full mt-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Unduh PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportAccess;
