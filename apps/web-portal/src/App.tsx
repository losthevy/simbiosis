

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-[#102218] px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4 text-[#111814] dark:text-white">
          <div className="size-8 text-primary">
            <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">SIMBIOSIS</h2>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Bantuan</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tentang</a>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-[#111814] transition-all duration-300 text-sm font-bold leading-normal tracking-[0.015em] border border-primary/20">
            <span className="truncate">Hubungi Dukungan</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 lg:pr-10 order-2 lg:order-1">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-lg mb-4"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB60-NF7q2e9Ykcx4b4V1FD1spc6EpWoizJMKAfTlN781PiSNKEgYCDovJIUHz4TYBi6Te9X0tp5M9kp5XiqCgAd2yGAOp6BGaUgltBicPNC73nHhiNe3aV3FrPWJyynhj63drez1evheWY_9tnu1KVPtDy9LJwHXpmXTrKsszrETGl5RlpEit5echAeDiS13FyMWSj-ompX6Ttvdfrq60T4febwUv8BCWIRkrPZp0_vYCZLm7-CWwKzmt8DNoKysa72SGSfWVmd0c")' }}
              >
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111814] dark:text-white lg:text-5xl">
                  Selamat datang di SIMBIOSIS
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                  Sistem Pengelolaan Sampah Terpadu Cerdas. Bergabunglah dengan kami dalam menjadikan kota-kota kita lebih bersih, lebih hijau, dan lebih berkelanjutan untuk semua orang.
                </p>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <span className="material-symbols-outlined text-primary">recycling</span>
                    <span className="text-sm font-medium">Ramah Lingkungan</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <span className="material-symbols-outlined text-primary">speed</span>
                    <span className="text-sm font-medium">Waktu Nyata</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <span className="material-symbols-outlined text-primary">group</span>
                    <span className="text-sm font-medium">Komunitas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2e24] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 lg:p-12 order-1 lg:order-2 flex flex-col justify-center">
              <div className="mb-10 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#111814] dark:text-white mb-3">Portal Login</h2>
                <p className="text-gray-500 dark:text-gray-400">Harap identifikasi peran Anda untuk melanjutkan ke dasbor Anda.</p>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="text-lg font-bold text-[#111814] dark:text-white border-b pb-2 border-gray-100 dark:border-gray-700">Apakah kamu?</h3>
                <div className="grid gap-4">
                  <a href="http://localhost:3001/login" className="group flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102218] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-light dark:bg-gray-800 text-[#111814] dark:text-white group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-base font-bold text-[#111814] dark:text-white group-hover:text-primary transition-colors">Pengguna</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Pengguna Umum: Kelola sampah rumah tangga</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </a>
                  <a href="http://localhost:3002/login" className="group flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102218] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-light dark:bg-gray-800 text-[#111814] dark:text-white group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                      <span className="material-symbols-outlined">local_shipping</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-base font-bold text-[#111814] dark:text-white group-hover:text-primary transition-colors">Petugas</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Pengguna Tenaga Kerja: Kelola jadwal</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </a>
                  <a href="http://localhost:3003/login" className="group flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102218] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-light dark:bg-gray-800 text-[#111814] dark:text-white group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-base font-bold text-[#111814] dark:text-white group-hover:text-primary transition-colors">Admin</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Administrator Sistem: Pengawasan Dasbor</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#102218]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
              © 2025 SIMBIOSIS. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex items-center gap-8">
              <a className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm font-normal transition-colors" href="#">Kebijakan Privasi</a>
              <a className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm font-normal transition-colors" href="#">Ketentuan Layanan</a>
              <a className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm font-normal transition-colors" href="#">Hubungi Kami</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
