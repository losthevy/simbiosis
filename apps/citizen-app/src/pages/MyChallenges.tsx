import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyChallenges() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

    const activeChallenges = [
        {
            id: 1,
            title: "Bersih-bersih Taman Akhir Pekan",
            description: "Kumpulkan 5kg barang daur ulang di Taman Pusat.",
            points: 500,
            progress: 60,
            target: "5kg",
            current: "3kg",
            daysLeft: 2,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ",
            path: '/challenge-detail'
        },
        {
            id: 2,
            title: "Minggu Bebas Plastik",
            description: "Hindari plastik sekali pakai selama 7 hari.",
            points: 300,
            progress: 28,
            target: "7 Hari",
            current: "2 Hari",
            daysLeft: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg",
            path: '/challenge-detail-plastic-free'
        }
    ];

    const completedChallenges = [
        {
            id: 3,
            title: "Pilah Sampah Rumah Tangga",
            description: "Memilah sampah organik dan anorganik selama sebulan.",
            points: 1000,
            date: "10 Okt 2023",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
        }
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
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Tantangan Saya</h2>
                    </div>

                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                        <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-background-light dark:bg-background-dark border border-transparent focus-within:border-primary px-4 transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-muted outline-none ml-2"
                                placeholder="Cari tantangan..."
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
                    <div className="max-w-5xl mx-auto flex flex-col gap-8">
                        {/* Title Section */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary text-text-main dark:text-white transition-all shadow-sm group"
                                >
                                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                </button>
                                <div>
                                    <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Tantangan Saya</h1>
                                    <p className="text-text-muted mt-1">Pantau progres dan riwayat tantangan Anda.</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 p-1 bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark w-fit">
                            <button
                                onClick={() => setActiveTab('active')}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'active'
                                        ? 'bg-primary text-white shadow-lg shadow-green-200'
                                        : 'text-text-muted hover:bg-background-light dark:hover:bg-background-dark'
                                    }`}
                            >
                                Aktif ({activeChallenges.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('completed')}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'completed'
                                        ? 'bg-primary text-white shadow-lg shadow-green-200'
                                        : 'text-text-muted hover:bg-background-light dark:hover:bg-background-dark'
                                    }`}
                            >
                                Selesai ({completedChallenges.length})
                            </button>
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activeTab === 'active' ? (
                                activeChallenges.map((challenge) => (
                                    <div
                                        key={challenge.id}
                                        onClick={() => navigate(challenge.path)}
                                        className="bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                                    >
                                        <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: `url('${challenge.image}')` }}>
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold text-text-main shadow-sm">
                                                {challenge.points} poin
                                            </div>
                                            <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">timer</span>
                                                Sisa {challenge.daysLeft} hari
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-bold text-xl text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">{challenge.title}</h3>
                                            <p className="text-text-muted text-sm mb-6">{challenge.description}</p>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm font-bold">
                                                    <span className="text-text-muted">Progres</span>
                                                    <span className="text-primary">{challenge.current} / {challenge.target}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                    <div
                                                        className="bg-primary h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                                                        style={{ width: `${challenge.progress}%` }}
                                                    >
                                                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="w-full mt-6 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                                                Lanjutkan
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                completedChallenges.map((challenge) => (
                                    <div key={challenge.id} className="bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col opacity-80 hover:opacity-100 transition-opacity">
                                        <div className="h-48 w-full bg-cover bg-center relative grayscale" style={{ backgroundImage: `url('${challenge.image}')` }}>
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                                                    <span className="material-symbols-outlined">check_circle</span>
                                                    Selesai
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-xl text-text-main dark:text-white">{challenge.title}</h3>
                                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg border border-green-200">
                                                    +{challenge.points} Poin
                                                </span>
                                            </div>
                                            <p className="text-text-muted text-sm mb-4">{challenge.description}</p>
                                            <p className="text-xs font-bold text-text-muted flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">event</span>
                                                Diselesaikan pada {challenge.date}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MyChallenges;
