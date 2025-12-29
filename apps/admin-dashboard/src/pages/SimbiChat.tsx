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
            text: "Selamat Datang, Admin. 🛡️ Simbi Analytics siap menyajikan data real-time. Butuh ringkasan laporan, status audit, atau analitik user?",
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

        // Mock AI logic for Admin
        setTimeout(() => {
            let replyText = "Data tidak ditemukan. Silakan gunakan kata kunci spesifik seperti 'laporan', 'user', atau 'audit'.";
            const lowerInput = newUserMsg.text.toLowerCase();

            if (lowerInput.includes('halo') || lowerInput.includes('hi')) {
                replyText = "Halo, Admin. Sistem berjalan optimal hari ini. Semua server online.";
            } else if (lowerInput.includes('laporan') || lowerInput.includes('report')) {
                replyText = "📊 Ringkasan Laporan Bulan Ini:\n- Total Masuk: 1,240\n- Diselesaikan: 1,100 (88%)\n- Pending: 140\n\nTren laporan meningkat 15% dibanding bulan lalu, terutama di kategori sampah elektronik.";
            } else if (lowerInput.includes('user') || lowerInput.includes('pengguna')) {
                replyText = "👥 Statistik Pengguna:\n- Total User: 15,400\n- Aktif Harian (DAU): 3,200\n- User Baru minggu ini: +450\n\nRetensi pengguna cukup baik di angka 65%.";
            } else if (lowerInput.includes('audit') || lowerInput.includes('perusahaan')) {
                replyText = "🏢 Status Audit Terakhir (25 Des 2025):\n- Target: PT Indofood\n- Status: Compliant (Patuh)\n- Skor EPR: 85/100\n\nJadwal audit berikutnya: 2 Jan 2026 (PT Mayora).";
            } else if (lowerInput.includes('terima kasih') || lowerInput.includes('makasih')) {
                replyText = "Sama-sama. Silakan lanjutkan pemantauan.";
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
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center p-1">
                        <span className="material-symbols-outlined text-blue-600 text-2xl">smart_toy</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-black rounded-full"></div>
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-text-main dark:text-white">Simbi Admin Assistant</h2>
                    <p className="text-xs text-text-muted flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Secure Connection
                    </p>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5] dark:bg-[#0a0a0a]">
                <div className="text-center text-xs text-text-muted my-4">
                    <p>Encrypted Session End-to-End</p>
                </div>

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${msg.sender === 'user'
                                ? 'bg-blue-600 text-white rounded-tr-none'
                                : 'bg-white dark:bg-surface-dark text-text-main dark:text-white border border-gray-200 dark:border-gray-700 rounded-tl-none'
                            }`}>
                            <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
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
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-transparent focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600/50 transition-all">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ketik perintah query..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-text-main dark:text-white placeholder:text-text-muted"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className={`p-2 rounded-full transition-all ${inputValue.trim()
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md transform hover:scale-105'
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
