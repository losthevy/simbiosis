import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Scanner() {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isScanning, setIsScanning] = useState(true);
    const [flashOn, setFlashOn] = useState(false);

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
        navigate('/');
    };

    const [scannedData, setScannedData] = useState<string | null>(null);

    const handleCapture = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

                // Simulate processing
                setIsScanning(false);
                // In a real app, we would scan the image data here
                setTimeout(() => {
                    setScannedData("Warga: Budi Santoso (ID: 8821)");
                }, 500);
            }
        }
    };

    const handleReset = () => {
        setIsScanning(true);
        setScannedData(null);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-black relative overflow-hidden">
            {/* Camera Viewfinder */}
            <div className="flex-1 relative">
                {!scannedData ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                        <canvas ref={canvasRef} className="max-w-full max-h-full object-contain" />
                    </div>
                )}

                {/* Overlay UI */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 bg-gradient-to-b from-black/60 via-transparent to-black/60">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleBack}
                            className="p-3 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-black/60 transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">arrow_back</span>
                        </button>
                        <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white text-sm font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">qr_code_scanner</span>
                            Mode Petugas
                        </div>
                        <button
                            onClick={() => setFlashOn(!flashOn)}
                            className={`p-3 rounded-full backdrop-blur-sm border border-white/10 transition-colors ${flashOn ? 'bg-yellow-400 text-black' : 'bg-black/40 text-white hover:bg-black/60'}`}
                            disabled={!!scannedData}
                        >
                            <span className="material-symbols-outlined text-xl">{flashOn ? 'flash_on' : 'flash_off'}</span>
                        </button>
                    </div>

                    {!scannedData ? (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-white/30 rounded-3xl relative">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl -mt-1 -ml-1"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl -mt-1 -mr-1"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl -mb-1 -ml-1"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl -mb-1 -mr-1"></div>

                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/80 shadow-[0_0_20px_rgba(19,236,109,0.8)] animate-pulse"></div>
                        </div>
                    ) : (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 animate-in zoom-in duration-300 w-[90%] max-w-sm border border-white/10">
                            <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-4xl">check_circle</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white">Scan Berhasil!</h3>
                            <p className="text-text-muted text-center text-sm">{scannedData}</p>

                            {/* Map Info */}
                            <div className="w-full bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                                <div className="h-24 w-full bg-gray-200 relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-60"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsb6VN2FFSp-UZxWjIg-PcM5u8-fSl8olc5ShdH3B6erXu246j4_EQJo_t0T_IuqBx4FZIM_B3vTlkZZyTiDUoPzRFOspuzE3-jx-7SNMfr5OJtWpIGt2BRK1PiYdIkJmdXLgzZEskXJN80vxjc74AiFh4z7o-xSldCus2cJntnFuenRFptrl7w8S-7FEVIq9lKruTpvK_ZPHvxbp9QvAdIyZyvhaKc4v1_qeCQBELCcZ7hkdL16g6nTJvZvUIY6JmmxRCv6euKGk')" }}
                                    ></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="material-symbols-outlined text-red-500 text-3xl drop-shadow-md">location_on</span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Lokasi Terdeteksi</p>
                                    <p className="text-sm font-bold truncate">Jl. Merdeka No. 10, Jakarta Pusat</p>
                                    <a href="https://maps.google.com" target="_blank" className="text-xs text-primary font-bold flex items-center gap-1 mt-1 hover:underline">
                                        <span className="material-symbols-outlined text-sm">map</span>
                                        Buka di Google Maps
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-3 w-full mt-2">
                                <button onClick={handleReset} className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    Scan Lagi
                                </button>
                                <button onClick={() => navigate('/verification')} className="flex-1 py-3 rounded-xl bg-primary text-text-main font-bold hover:bg-primary-hover transition-colors">
                                    Lanjut
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col items-center gap-6">
                        {!scannedData && (
                            <>
                                <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 text-center">
                                    <p className="text-white font-bold text-lg">Pindai QR Pelanggan</p>
                                    <p className="text-white/70 text-sm">Arahkan kamera ke kode QR warga untuk verifikasi.</p>
                                </div>

                                <div className="flex items-center justify-center gap-6 w-full max-w-sm">
                                    <button className="flex-1 py-4 rounded-xl bg-surface-light dark:bg-surface-dark text-text-main dark:text-white font-bold text-sm hover:brightness-95 transition-all flex flex-col items-center gap-1 shadow-lg">
                                        <span className="material-symbols-outlined text-2xl text-primary">qr_code_2</span>
                                        Input Manual
                                    </button>
                                    <button
                                        onClick={handleCapture}
                                        className="size-20 rounded-full border-4 border-white/30 bg-white/10 flex items-center justify-center group hover:bg-white/20 transition-all scale-100 hover:scale-105 active:scale-95 shadow-xl backdrop-blur-sm relative"
                                    >
                                        <div className="size-16 rounded-full bg-primary group-hover:bg-primary-hover shadow-inner border-2 border-white/20"></div>
                                        <div className="absolute inset-0 rounded-full border border-white/50 opacity-0 group-hover:opacity-100 animate-ping"></div>
                                    </button>
                                    <button className="flex-1 py-4 rounded-xl bg-surface-light dark:bg-surface-dark text-text-main dark:text-white font-bold text-sm hover:brightness-95 transition-all flex flex-col items-center gap-1 shadow-lg">
                                        <span className="material-symbols-outlined text-2xl text-blue-500">image</span>
                                        Galeri
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* The canvas is now conditionally rendered inside the main view, so this one is removed */}
        </div>
    );
}

export default Scanner;
