
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Scanner() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const source = searchParams.get('source');

    // Camera state
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isScanning, setIsScanning] = useState(true);
    const [scannedData, setScannedData] = useState<string | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;

        const startCamera = async () => {
            try {
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    stream = await navigator.mediaDevices.getUserMedia({
                        video: { facingMode: "environment" }
                    });
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
            }
        };

        if (isScanning) {
            startCamera();
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [isScanning]);

    const handleBack = () => {
        if (source === 'workforce') {
            window.location.href = 'http://localhost:3002';
        } else {
            navigate('/');
        }
    };

    const handleCapture = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

                setIsScanning(false);
                setTimeout(() => {
                    const sampleText = source === 'plastic_free_challenge'
                        ? "Lokasi: Minimarket Sejahtera\nStatus: Terverifikasi"
                        : "Lokasi: TPS RW 05\nID: #TRX-9982";
                    setScannedData(sampleText);
                }, 500);
            }
        }
    };

    const handleReset = () => {
        setIsScanning(true);
        setScannedData(null);
    };

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex-shrink-0 z-10">
                    <div className="flex items-center gap-6">
                        <h1 className="text-text-main dark:text-white text-2xl font-black tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-4xl">recycling</span>
                            SIMBIOSIS
                        </h1>
                        <div className="h-8 w-px bg-border-light dark:bg-border-dark hidden sm:block"></div>
                        <h2 className="text-lg font-bold text-text-muted hidden sm:block">Layanan Warga</h2>
                    </div>
                    <div className="flex items-center flex-1 justify-end gap-4 sm:gap-6">
                        <div className="hidden md:flex w-full max-w-md items-center h-12 rounded-xl bg-background-light dark:bg-background-dark border border-transparent focus-within:border-primary px-4 transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-muted outline-none ml-2"
                                placeholder="Cari aktivitas, tantangan, atau teman..."
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

                <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
                    <div className="max-w-6xl mx-auto flex flex-col gap-8">
                        <div className="flex items-start gap-4">
                            <button onClick={handleBack} className="group mt-1 p-2 rounded-full border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark hover:border-primary transition-all bg-surface-light dark:bg-surface-dark shadow-sm">
                                <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">arrow_back</span>
                            </button>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">
                                    {source === 'plastic_free_challenge' ? 'Scan Laporan Tantangan' : 'Pindai QR Lapor Sampah'}
                                </h1>
                                <p className="text-text-muted text-lg">
                                    {source === 'plastic_free_challenge'
                                        ? 'Scan QR code di lokasi mitra untuk melaporkan kemajuan tantangan Anda.'
                                        : 'Arahkan kamera ke kode QR di lokasi untuk melaporkan sampah secara otomatis.'}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-7 flex flex-col gap-6">
                                <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col h-full min-h-[500px] relative">
                                    {/* Camera Frame */}
                                    <div className="flex-1 relative bg-black rounded-xl overflow-hidden group flex flex-col items-center justify-center border border-border-light/20">
                                        {!scannedData ? (
                                            <video
                                                ref={videoRef}
                                                autoPlay
                                                playsInline
                                                muted
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                                                <canvas ref={canvasRef} className="max-w-full max-h-full object-contain opacity-50" />
                                            </div>
                                        )}

                                        {/* Overlay UI */}
                                        {!scannedData ? (
                                            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 bg-black/30 backdrop-blur-[2px]">
                                                <div className="relative w-64 h-64 border-2 border-white/20 rounded-3xl">
                                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl shadow-[0_0_10px_rgba(19,236,109,0.5)]"></div>
                                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl shadow-[0_0_10px_rgba(19,236,109,0.5)]"></div>
                                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl shadow-[0_0_10px_rgba(19,236,109,0.5)]"></div>
                                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl shadow-[0_0_10px_rgba(19,236,109,0.5)]"></div>
                                                    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-primary/80 shadow-[0_0_15px_rgba(19,236,109,0.9)] animate-pulse"></div>
                                                </div>
                                                <h3 className="mt-8 text-white font-bold text-xl tracking-tight text-center drop-shadow-md">
                                                    {isScanning ? 'Arahkan ke Kode QR' : 'Memproses...'}
                                                </h3>
                                            </div>
                                        ) : (
                                            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 animate-in zoom-in duration-300">
                                                <div className="size-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                                                    <span className="material-symbols-outlined text-5xl">check</span>
                                                </div>
                                                <h3 className="text-white font-bold text-2xl tracking-tight text-center">Berhasil Dipindai!</h3>
                                                <div className="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-white text-sm whitespace-pre-line text-center">
                                                    {scannedData}
                                                </div>
                                                <button
                                                    onClick={handleReset}
                                                    className="mt-6 px-6 py-2 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                                                >
                                                    Pindai Lagi
                                                </button>
                                            </div>
                                        )}

                                        {/* Capture Button (Only when scanning) */}
                                        {!scannedData && (
                                            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
                                                <button
                                                    onClick={handleCapture}
                                                    className="size-16 rounded-full border-4 border-white/30 bg-white/10 flex items-center justify-center group hover:bg-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                                                >
                                                    <div className="size-12 rounded-full bg-primary group-hover:bg-primary-hover shadow-inner border-2 border-white/20"></div>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 flex justify-center gap-4">
                                        <button className="px-4 py-2 bg-background-light dark:bg-background-dark rounded-lg text-sm font-bold text-text-muted hover:text-primary transition-colors border border-border-light dark:border-border-dark flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">image</span>
                                            Unggah QR dari Galeri
                                        </button>
                                        <button className="px-4 py-2 bg-background-light dark:bg-background-dark rounded-lg text-sm font-bold text-text-muted hover:text-primary transition-colors border border-border-light dark:border-border-dark flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">flashlight_on</span>
                                            Nyalakan Lampu
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col gap-6">
                                <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col h-full sticky top-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="block text-base font-bold text-text-main dark:text-white flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">map</span>
                                            Lokasi Kejadian
                                        </label>
                                        <button className="text-primary text-sm font-bold hover:text-primary-hover flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                                            <span className="material-symbols-outlined text-lg">my_location</span>
                                            Lokasi Saya
                                        </button>
                                    </div>
                                    <div className="relative w-full aspect-square lg:aspect-[4/3] bg-background-light dark:bg-background-dark rounded-xl overflow-hidden mb-6 border border-border-light dark:border-border-dark group shadow-inner">
                                        <div
                                            className="absolute inset-0 bg-[#e5e7eb] dark:bg-[#1f2937]"
                                            style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 opacity-10 dark:opacity-20"
                                            style={{ backgroundImage: "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)", backgroundSize: "100px 100px" }}
                                        ></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 flex flex-col items-center">
                                            <span className="material-symbols-outlined text-5xl text-red-500 drop-shadow-xl z-10">location_on</span>
                                            <div className="w-8 h-2 bg-black/20 rounded-[100%] blur-[2px] mt-[-5px]"></div>
                                            <div className="bg-surface-light dark:bg-surface-dark px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold text-text-main dark:text-white mt-2 whitespace-nowrap border border-border-light dark:border-border-dark">Geser Peta</div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                                            <button className="w-8 h-8 bg-surface-light dark:bg-surface-dark rounded-t-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-gray-50 text-text-main dark:text-white shadow-sm">+</button>
                                            <button className="w-8 h-8 bg-surface-light dark:bg-surface-dark rounded-b-lg border-x border-b border-border-light dark:border-border-dark flex items-center justify-center hover:bg-gray-50 text-text-main dark:text-white shadow-sm">-</button>
                                        </div>
                                    </div>

                                    <div className="bg-background-light dark:bg-background-dark p-4 rounded-xl border border-border-light dark:border-border-dark mb-6 flex gap-3">
                                        <div className="p-2 bg-surface-light dark:bg-surface-dark rounded-lg h-fit shadow-sm text-primary">
                                            <span className="material-symbols-outlined">place</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Alamat Terdeteksi</p>
                                            <p className="text-sm font-bold text-text-main dark:text-white leading-relaxed">Jl. Sudirman No. 45, RT.01/RW.03, Kel. Bendungan Hilir, Kec. Tanah Abang, Jakarta Pusat</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <button className="w-full bg-primary text-text-main font-black text-lg py-4 px-6 rounded-xl hover:bg-primary-hover transition-all shadow-[0_4px_14px_0_rgba(19,236,109,0.39)] hover:shadow-[0_6px_20px_rgba(19,236,109,0.23)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined">check_circle</span>
                                            Selesai Melapor
                                        </button>
                                        <p className="text-xs text-text-muted text-center mt-4 px-4 leading-normal">
                                            Dengan memindai QR, Anda menyetujui data lokasi yang terdeteksi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* Hidden canvas for capture */}
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}

export default Scanner;
