import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
};

function SimbiChat() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Halo Petugas! 👷‍♂️ Simbi di sini siap membantu operasional lapanganmu. Tanya soal rute, jadwal, atau prosedur pelaporan.",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMsg: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // Mock AI logic for Workforce
        setTimeout(() => {
            let replyText = "Maaf, saya tidak mengerti perintah itu. Coba tanya soal 'rute' atau 'jadwal'.";
            const lowerInput = newUserMsg.text.toLowerCase();

            if (lowerInput.includes('halo') || lowerInput.includes('pagi') || lowerInput.includes('siang')) {
                replyText = "Halo! Tetap semangat menjaga kebersihan kota ya. Jangan lupa pakai APD lengkap! 🦺";
            } else if (lowerInput.includes('rute') || lowerInput.includes('arah') || lowerInput.includes('macet')) {
                replyText = "Berdasarkan data lalu lintas, hindari Jl. Sudirman hari ini karena ada perbaikan jalan. Rute alternatif lewat Jl. bypass lebih cepat 10 menit. 🚛";
            } else if (lowerInput.includes('jadwal') || lowerInput.includes('shift')) {
                replyText = "Jadwal shift Anda hari ini: 08:00 - 16:00 WIB. Lokasi fokus: Sektor 4 (Pasar Baru).";
            } else if (lowerInput.includes('lapor') || lowerInput.includes('masalah') || lowerInput.includes('rusak')) {
                replyText = "Untuk kendala lapangan (truk mogok/insiden), segera gunakan menu 'Lapor Insiden' prioritas tinggi agar Dispatcher segera tahu. 🚨";
            } else if (lowerInput.includes('terima kasih') || lowerInput.includes('makasih')) {
                replyText = "Siap, laksanakan! Hati-hati di jalan. 👋";
            }

            const newAiMsg: Message = {
                id: Date.now() + 1,
                text: replyText,
                sender: 'ai',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, newAiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-black font-display antialiased overflow-hidden flex-col">
            {/* Header */}
            <header className="h-16 flex items-center gap-3 px-4 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10 shadow-sm">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                >
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">arrow_back</span>
                </button>
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center p-1">
                        <span className="material-symbols-outlined text-orange-600 text-2xl">smart_toy</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-black rounded-full"></div>
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-text-main dark:text-white">Simbi Field Ops</h2>
                    <p className="text-xs text-text-muted flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Connected to HQ
                    </p>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5] dark:bg-[#0a0a0a]">
                <div className="text-center text-xs text-text-muted my-4">
                    <p>Sesi Operasional #{Math.floor(Math.random() * 1000)}</p>
                </div>

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${msg.sender === 'user'
                                ? 'bg-orange-500 text-white rounded-tr-none'
                                : 'bg-white dark:bg-surface-dark text-text-main dark:text-white border border-gray-200 dark:border-gray-700 rounded-tl-none'
                            }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/80' : 'text-text-muted'}`}>
                                {msg.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex w-full justify-start">
                        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-transparent focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500/50 transition-all">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Lapor status atau tanya rute..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-text-main dark:text-white placeholder:text-text-muted"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className={`p-2 rounded-full transition-all ${inputValue.trim()
                                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md transform hover:scale-105'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SimbiChat;
