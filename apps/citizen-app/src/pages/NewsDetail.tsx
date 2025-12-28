import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Mock data moved outside or imported
const fullNewsData: Record<string, any> = {
    '1': {
        id: 1,
        title: "Green Valley Luncurkan Program Bank Sampah Digital",
        category: "Berita",
        date: "27 Desember 2025",
        author: "Pemkot GV",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSjRzvuj3hAz0UsmM6IJ9sUEm_bVPhgLZvTQ0R1S5YmZAPEN0GfsEAfW4GJDRxVV2aFmE3-5jz-TzSsf9AFBFGZifgTBPyig55VbG1AxMKQya6Mpz6_-w7OEDpQa5Y8jX0Tvz6YjnBdBIPVZd4B09oVhhCoDSkJIFBr9bafT2sM5FhynzTqBloEv3vxv29fW_tqXgLr0NxGNaOBJklYX3r0CP8IudbMkJYDYGFq1Hjmn0LmMdpPWbosVpPWWN0gZArpzHCMGq_nWQ",
        content: `
            <p class="mb-4"><strong>Green Valley, 27 Desember 2025</strong> - Pemerintah Kota Green Valley resmi meluncurkan inisiatif terbaru mereka dalam penanganan limbah perkotaan dengan memperkenalkan "Program Bank Sampah Digital" yang terintegrasi dengan aplikasi warga Simbiosis.</p>
            
            <p class="mb-4">Walikota Green Valley, dalam sambutannya di Balai Kota pagi ini, menyatakan bahwa program ini bertujuan untuk meningkatkan partisipasi warga dalam memilah sampah dari sumbernya hingga 50% dalam enam bulan ke depan.</p>
            
            <h3 class="text-xl font-bold mb-2">Sistem Insentif Terintegrasi</h3>
            <p class="mb-4">Salah satu fitur unggulan dari program ini adalah sistem insentif yang langsung terhubung dengan dompet digital warga. Untuk setiap kilogram sampah terpilah yang disetorkan ke bank sampah mitra, warga akan mendapatkan "Poin Eco" yang dapat ditukarkan dengan diskon pembayaran PBB, token listrik, atau voucher belanja di UMKM lokal.</p>
            
            <p class="mb-4">"Kami ingin mengubah paradigma bahwa sampah adalah masalah, menjadi sampah adalah sumber daya. Dengan teknologi, kami membuat proses ini transparan dan menguntungkan bagi semua pihak," ujar Kepala Dinas Lingkungan Hidup Green Valley.</p>
            
            <h3 class="text-xl font-bold mb-2">Cara Berpartisipasi</h3>
            <p class="mb-4">Warga cukup mengunduh pembaruan terbaru aplikasi Simbiosis, mendaftar di menu "Bank Sampah", dan mulai memindai kode QR saat menyetorkan sampah mereka. Saat ini sudah tersedia 25 titik drop-box pintar yang tersebar di seluruh kecamatan, dengan target penambahan hingga 100 titik di akhir tahun.</p>

            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-gray-600 dark:text-gray-300">
                "Langkah kecil dari setiap rumah tangga akan menjadi lompatan besar bagi kelestarian kota kita."
            </blockquote>
        `
    },
    '2': {
        id: 2,
        title: "5 Tips Mengurangi Sampah Plastik di Rumah Tangga",
        category: "Tips",
        date: "26 Desember 2025",
        author: "Tim Simbiosis",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJIW6IVbveS8pgjS0FPJUoHWkGIEj7GrwgHbE-0-KDxtqa23h-u2qGHyZpMQqq1TM7L5Onrzz_0YO9QQIoyPRj3pJNm_OkoHuZBtbmDmyW0J3FJx_gXWOpi6SCq2JDNAx1J1NtqxVp_TRLElEBtJpKG6fLKVWv4wRccYpr5iztJm69sU0C0qrpjZMRlnFp2LHEzFyYU1L4lxuPlG8oiZ8pYA_foozAoGlICQ8qb_HvvNlFEO0CvSZ4V5vpxDt3uK5rrMjzo2vMSeg",
        content: `
            <p class="mb-4">Penggunaan plastik sekali pakai masih menjadi penyumbang terbesar volume sampah rumah tangga. Namun, mengubah kebiasaan tidak harus drastis. Berikut adalah 5 langkah sederhana yang bisa Anda mulai hari ini:</p>

            <h3 class="text-xl font-bold mb-2">1. Bawa Tas Belanja Sendiri (Tote Bag)</h3>
            <p class="mb-4">Siapkan selalu tas belanja lipat di dalam tas kerja atau kendaraan Anda. Ini adalah cara termudah untuk menolak kantong plastik saat berbelanja di minimarket atau pasar.</p>

            <h3 class="text-xl font-bold mb-2">2. Gunakan Botol Minum Tumbler</h3>
            <p class="mb-4">Alih-alih membeli air kemasan setiap kali haus di jalan, bawalah botol minum sendiri. Selain mengurangi sampah botol plastik, Anda juga lebih hemat dan bisa memastikan kebersihan air minum Anda.</p>

            <h3 class="text-xl font-bold mb-2">3. Pilih Produk dengan Kemasan Minim (Bulk Store)</h3>
            <p class="mb-4">Belanja di toko curah (bulk store) atau pilih produk dengan kemasan kertas/karton dibanding plastik berlapis. Sabun batang, misalnya, jauh lebih ramah lingkungan daripada sabun cair dalam botol plastik pump.</p>

            <h3 class="text-xl font-bold mb-2">4. Hindari Sedotan dan Alat Makan Plastik</h3>
            <p class="mb-4">Saat memesan makanan online, berikan catatan "Tanpa alat makan plastik". Di rumah atau restoran, biasakan minum langsung dari gelas tanpa sedotan.</p>

            <h3 class="text-xl font-bold mb-2">5. Simpan Makanan dengan Wadah Ulang Pakai</h3>
            <p class="mb-4">Ganti penggunaan plastic wrap atau kantong kresek untuk membungkus makanan sisa dengan wadah kaca atau kontainer makanan yang bisa dicuci dan dipakai ulang.</p>

            <p class="mt-6 font-medium">Mulailah dari satu langkah yang paling mudah menurut Anda. Konsistensi adalah kunci!</p>
        `
    },
    '3': {
        id: 3,
        title: "Mengapa Memilah Sampah Organik Itu Penting?",
        category: "Edukasi",
        date: "25 Desember 2025",
        author: "Dr. Eco",
        image: "https://images.unsplash.com/photo-1595278069441-2cf29f52d350?q=80&w=2072&auto=format&fit=crop",
        content: `
            <p class="mb-4">Sampah organik seringkali dianggap sepele dan dibuang begitu saja bercampur dengan sampah lainnya. Padahal, memilah sampah organik adalah kunci utama dalam manajemen sampah yang efektif.</p>
            <p>Ketika sampah organik tercampur dengan sampah anorganik di TPA, proses pembusukan anaerobik akan menghasilkan gas metana, gas rumah kaca yang jauh lebih berbahaya daripada karbon dioksida.</p>
        `
    },
    '4': {
        id: 4,
        title: "Festival Daur Ulang 2025: Siapkan Kreasimu!",
        category: "Event",
        date: "24 Desember 2025",
        author: "Komunitas GV",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2072&auto=format&fit=crop",
        content: `
            <p class="mb-4">Festival tahunan yang paling ditunggu warga Green Valley kembali lagi! Festival Daur Ulang 2025 akan diadakan bulan depan di Taman Kota.</p>
            <p>Akan ada pameran seni dari barang bekas, workshop pembuatan kompos, dan tentu saja kompetisi fashion show busana daur ulang.</p>
        `
    }
};

function NewsDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [news, setNews] = useState<any>(null);

    useEffect(() => {
        if (id && fullNewsData[id]) {
            setNews(fullNewsData[id]);
        } else {
            navigate('/news');
        }
    }, [id, navigate]);

    if (!news) return null;

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-16 flex items-center gap-4 px-6 lg:px-10 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-text-muted"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h2 className="text-lg font-bold text-text-main dark:text-white">Detail Berita</h2>
                    <div className="flex-1"></div>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-3xl mx-auto bg-white dark:bg-surface-dark min-h-full border-x border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="relative h-64 md:h-96 w-full">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${news.image}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                <span className="px-3 py-1 bg-primary text-text-main font-bold text-xs rounded-lg mb-3 inline-block shadow-sm">{news.category}</span>
                                <h1 className="text-2xl md:text-4xl font-black text-white leading-tight shadow-black drop-shadow-md">{news.title}</h1>
                            </div>
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500">
                                        {news.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-text-main dark:text-white">{news.author}</p>
                                        <p className="text-xs text-text-muted">{news.date}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">bookmark_border</span></button>
                                </div>
                            </div>

                            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-main dark:prose-headings:text-white prose-p:text-text-main dark:prose-p:text-gray-300">
                                <div dangerouslySetInnerHTML={{ __html: news.content }} />
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NewsDetail;
