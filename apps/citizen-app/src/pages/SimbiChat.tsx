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
            text: "Halo! Saya Simbi, asisten daur ulang pribadimu. 🌱 Ada yang bisa saya bantu hari ini? Kamu bisa tanya soal jenis sampah, jadwal penjemputan, atau cara tukar poin!",
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

        // Simple mock AI logic
        setTimeout(() => {
            let replyText = "Maaf, saya masih belajar. Bisa coba tanya tentang 'plastik' atau 'poin'?";
            const lowerInput = newUserMsg.text.toLowerCase();

            if (lowerInput.includes('halo') || lowerInput.includes('hai')) {
                replyText = "Halo juga! Semangat menjaga lingkungan hari ini! 🌍";
            } else if (lowerInput.includes('plastik') || lowerInput.includes('botol')) {
                replyText = "Botol plastik PET (bening) bisa didaur ulang menjadi serat baju lho! Pastikan bersih dan remas sebelum dibuang ya. Nilainya 50 EcoPoints per botol. ♻️";
            } else if (lowerInput.includes('kertas') || lowerInput.includes('kardus')) {
                replyText = "Kardus dan kertas harus dijaga tetap kering. Jangan campur dengan sampah basah/organik ya agar bisa didaur ulang maksimal.";
            } else if (lowerInput.includes('poin') || lowerInput.includes('redeem') || lowerInput.includes('tukar')) {
                replyText = "Kamu bisa menukar EcoPoints di menu 'Redeem' dengan pulsa, token listrik, atau e-wallet. Saat ini rate-nya 100 poin = Rp 1.000.";
            } else if (lowerInput.includes('jadwal') || lowerInput.includes('kapan')) {
                replyText = "Jadwal penjemputan di area kamu biasanya setiap Selasa dan Jumat pagi pukul 08:00 WIB. 🚛";
            } else if (lowerInput.includes('terima kasih') || lowerInput.includes('makasih')) {
                replyText = "Sama-sama! Senang bisa membantu pahlawan lingkungan sepertimu! 💚";
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
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center p-1">
                        <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-black rounded-full"></div>
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-text-main dark:text-white">Simbi Assistant</h2>
                    <p className="text-xs text-text-muted flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                    </p>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5] dark:bg-[#0a0a0a]">
                <div className="text-center text-xs text-text-muted my-4">
                    <p>Hari ini, {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${msg.sender === 'user'
                                ? 'bg-primary text-black rounded-tr-none'
                                : 'bg-white dark:bg-surface-dark text-text-main dark:text-white border border-gray-200 dark:border-gray-700 rounded-tl-none'
                            }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-black/60' : 'text-text-muted'}`}>
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
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Tanya Simbi sesuatu..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-text-main dark:text-white placeholder:text-text-muted"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className={`p-2 rounded-full transition-all ${inputValue.trim()
                                ? 'bg-primary text-black hover:bg-primary-dark shadow-md transform hover:scale-105'
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
