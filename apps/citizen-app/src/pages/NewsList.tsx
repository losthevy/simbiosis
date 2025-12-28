import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewsList() {
    const navigate = useNavigate();
    const [category, setCategory] = useState('Semua');

    const newsData = [
        {
            id: 1,
            title: "Green Valley Luncurkan Program Bank Sampah Digital",
            category: "Berita",
            date: "2 jam yang lalu",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ",
            author: "Pemkot GV"
        },
        {
            id: 2,
            title: "5 Tips Mengurangi Sampah Plastik di Rumah Tangga",
            category: "Tips",
            date: "Kemarin",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg",
            author: "Tim Simbiosis"
        },
        {
            id: 3,
            title: "Mengapa Memilah Sampah Organik Itu Penting?",
            category: "Edukasi",
            date: "2 hari yang lalu",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmY_NlC_x-0XX28yqOck7vF7C-gO-x2C9yW7c_C2s3lG5vO6bT3z9hF5vC8yB4kL7jX0wH3uM6nO9qE5sT2rV4pW8xJ1uG6aQ9zF3sD8cE5bV7nL1kM3p6hR9tO2wZ5lJ8uG4cT7vB6yN1mP3kQ9rS2tW5xZ6yH7jK0uL1vO4nI6qM9wS3eJ8rT5pL3qO9zV7wM6nB8xK2cJ5hG1uF4lP7sO0wV9zX6yH3kQ1rT5pL3qO9zV7wM6nB8xK2cJ5hG1uF4lP7sO0wV9zX6yH3kQ1rT5pL3qO9zV7w", // Compost image fallback
            author: "Dr. Eco"
        },
        {
            id: 4,
            title: "Festival Daur Ulang 2025: Siapkan Kreasimu!",
            category: "Event",
            date: "3 hari yang lalu",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7A5cZ8yE9wF1tG4vH8sJ2qK6lM5nO9pP3rR7tU1vW4xY8zB2cC5dE9fG3hI6jK9tL2mN5oP8qR1sT4uW7xY2zB5dC8eF1gH4jI7kL0mN3oP6qR9sT2uW5xZ6yB3dC9eF1gH4jI7kL0mN3oP6qR9sT2uW5xZ6yB3dC9eF1gH4jI7kL0mN3oP6qR9sT2uW5xZ6yB3dC9eF1gH4jI7kL0mN3oP6qR9sT2uW5xZ6yB3dC9eF1gH4jI7kL0mN3oP6qR9sT2uW5xZ6yB3dC9eF1gH4jI7kL0mN3oP6qR9sT2uW5xZ6yB3dC9e", // Event image fallback
            author: "Komunitas GV"
        }
    ];

    const filteredNews = category === 'Semua' ? newsData : newsData.filter(item => item.category === category);

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center justify-between px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">recycling</span>
                            <h1 className="text-xl font-black tracking-tight text-text-main dark:text-white">SIMBIOSIS</h1>
                        </div>
                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>
                        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400 hidden sm:block">Berita & Edukasi</h2>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-black/10">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Featured News */}
                        <div className="flex items-center gap-4 mb-2">
                            <button
                                onClick={() => navigate('/')}
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <h1 className="text-2xl font-bold text-text-main dark:text-white">Wawasan Lingkungan</h1>
                        </div>

                        <div
                            onClick={() => navigate('/news/1')}
                            className="relative h-64 md:h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-md"
                        >
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col gap-3 max-w-2xl">
                                <span className="px-3 py-1 bg-primary text-text-main font-bold text-xs rounded-full w-fit">Berita Utama</span>
                                <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">Green Valley Luncurkan Program Bank Sampah Digital Terintegrasi</h2>
                                <p className="text-gray-200 text-sm md:text-base line-clamp-2">Pemerintah Kota Green Valley resmi meluncurkan aplikasi Simbiosis untuk mempermudah warga dalam mengelola sampah dan mendapatkan insentif ekonomi.</p>
                                <div className="flex items-center gap-2 text-gray-300 text-xs font-medium mt-2">
                                    <span>Oleh Pemkot GV</span>
                                    <span>•</span>
                                    <span>2 jam yang lalu</span>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {['Semua', 'Berita', 'Tips', 'Edukasi', 'Event'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${category === cat
                                        ? 'bg-text-main dark:bg-white text-white dark:text-text-main shadow-lg shadow-gray-200 dark:shadow-none'
                                        : 'bg-white dark:bg-surface-dark text-text-muted hover:bg-gray-50 dark:hover:bg-white/5 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* News Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredNews.map((news) => (
                                <div
                                    key={news.id}
                                    onClick={() => navigate(`/news/${news.id}`)}
                                    className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group cursor-pointer flex flex-col h-full"
                                >
                                    <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${news.image}')` }}></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm text-text-main dark:text-white font-bold text-xs rounded-lg border border-border-light dark:border-border-dark shadow-sm">
                                                {news.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 gap-4">
                                        <h3 className="font-bold text-lg text-text-main dark:text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                            {news.title}
                                        </h3>
                                        <div className="mt-auto flex items-center justify-between text-xs text-text-muted pt-4 border-t border-gray-100 dark:border-gray-800">
                                            <span className="font-medium">{news.author}</span>
                                            <span>{news.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NewsList;
