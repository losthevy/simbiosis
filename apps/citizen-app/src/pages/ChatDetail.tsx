import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Mock data for chats
const chatData: Record<string, any> = {
    'sarah-jenkins': {
        name: 'Sarah Jenkins',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB9YUBbNxnc2MHj4dUntODkLBSP7MOlJf6T414YdhCwIzhiM_S05eLtaabsN2aNPgxoVHX8loyMigrqCocBgplRXOUGDHxVfci7yfooKF7fpUfvNVBZIHEiyruJ8leWc2bYJ1IjJwM93ofUOcFEyNcs8YszBLg9xvj2e9mOShuO2MmtHTc6BEP6D0UUpA1a-3rU_x5dAfVBvzFfs8awiYs2jP4F1t0OhNteoKz4RapNS9jjywdAnTHyaCHEDv4tMb_1onIPYUml9c',
        status: 'Online • Sedang menanam pohon',
        messages: [
            { id: 1, text: 'Hai Alex! 👋 Apa kabar? Apakah kamu jadi ikut tantangan bersih-bersih taman minggu ini?', time: '10:30', sender: 'them' },
            { id: 2, text: 'Hai Sarah! Kabar baik. Iya, rencananya begitu. Aku sudah daftar tadi pagi.', time: '10:32', sender: 'me', status: 'read' },
            { id: 3, text: 'Wah bagus! Nanti kita bareng ya kumpulnya. Aku ajak Mike juga biar makin seru.', time: '10:33', sender: 'them' },
            {
                id: 4,
                text: 'Ini panduan acaranya ya, baru dikirim panitia.',
                time: '10:34',
                sender: 'them',
                file: {
                    name: 'Panduan_Acara.pdf',
                    size: '2.4 MB',
                    type: 'pdf'
                }
            }
        ]
    },
    'mike-ross': {
        name: 'Mike Ross',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3xCtfu6Ak-otg_cRT7K5piZXR3myvqHYwuIvzm8Q81k8SYeh6pLYvZJlzN5RGe3PuooP-67dvxe-LgV7A4nd9owJN2FBg5p46qfjqsBV474XZ7RBVrAqZxJ9dFzJj0VDP-VqJbDHcFlbYzY4_W-R3ri2H9aUL6rMjAOTLTciiiHnGpISEBDfY0Gtk8wT8cHmXO9cGFLBQN08V7PWwp2F5O0WOW-i4OevB5InGFyHmnRZWcHzwfMShK5EDq6FO3QZnyCqaHtop6Hk',
        status: 'Online',
        messages: [
            { id: 1, text: 'Bro, lihat papan peringkat gak? Sarah ngebut banget!', time: '09:15', sender: 'them' },
            { id: 2, text: 'Iya gila, dia rajin banget posting kompos.', time: '09:20', sender: 'me', status: 'read' }
        ]
    },
    'emily-clark': {
        name: 'Emily Clark',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwOXLTmhLgh-jYLqpvQ7OlqiHk-v0mj2UC1pN8hEPi4wi22vGFFFw96yP-5_08Yew9h9nQL7GbqiOrNjQ__hz3pzH7PXD-T3J9VByRpZUu64Y7ZD0W7hrE8Ts7kO31JltEkIecHT9chUfmFuMZapnS-8R5HkoAM3l6xiSsivTdvXlW5xAPJOvE7gKudbnJPyt6us6oA_uZz3JQA0KrGpqR6GqCFET9nk9-lyz1iPijZqIFxIEc765O94Bd4afEYdRD0y94nUa7Qlg',
        status: 'Terakhir terlihat 1 jam yang lalu',
        messages: [
            { id: 1, text: 'Mbak Emily, bank sampah buka jam berapa ya?', time: '08:00', sender: 'me', status: 'read' },
            { id: 2, text: 'Jam 9 pagi mas Alex.', time: '08:15', sender: 'them' }
        ]
    },
    'john-doe': {
        name: 'John Doe',
        avatar: null, // Initials fallback
        initials: 'JD',
        status: 'Sedang di Bank Sampah',
        messages: [
            { id: 1, text: 'John, posisi dimana?', time: '11:00', sender: 'me', status: 'delivered' }
        ]
    }
};

function ChatDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [currentChat, setCurrentChat] = useState<any>(null);

    useEffect(() => {
        if (id && chatData[id]) {
            setCurrentChat(chatData[id]);
            setMessages(chatData[id].messages);
        } else {
            // Default fallback or redirect
            navigate('/');
        }
    }, [id, navigate]);

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const msg = {
            id: messages.length + 1,
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sender: 'me',
            status: 'sent'
        };

        setMessages([...messages, msg]);
        setNewMessage('');

        // Simulate reply?
    };

    if (!currentChat) return null;

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-6 lg:px-10 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 flex-shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">recycling</span>
                            <h1 className="text-xl font-black tracking-tight text-text-main dark:text-white">SIMBIOSIS</h1>
                        </div>
                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>
                        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400 hidden sm:block">Obrolan</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/5 rounded-lg px-3 h-10 w-64 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-text-muted">search</span>
                            <input className="bg-transparent border-none text-sm w-full focus:ring-0 text-text-main dark:text-white placeholder-text-muted outline-none ml-2" placeholder="Cari pesan..." type="text" />
                        </div>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-surface-light dark:border-surface-dark"></span>
                        </button>
                        <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2wtAaXqs2ceTwHc6jszwIHhy7Z0wfQNBoiuc1xZ0fM_lYEBDzVxxPKxTEjwK8_39fcQ3m150ZMJp-BW9mTg_GFsITX97ziXYmx7LAICcP2yOsJbnp-dll2qgqNb4Fpfhf412JSeiIpiS16ceJ7nEdcCLGzfXbi8hCn7APC-5etXdBgZqTQEbYOuwryuGaDcmQ5IWrplejkFBOp254eghKhk4OTNnQp2QDD5baxtY2MyUYozP8I6QtDR3StyfqudztgyMqS4azBv8')" }}></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-black/10">
                    <div className="h-full flex flex-col max-w-5xl mx-auto md:p-6 p-2">
                        {/* Chat Container */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full overflow-hidden relative">
                            {/* Chat Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-surface-dark z-10">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => navigate('/')}
                                        className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-muted"
                                    >
                                        <span className="material-symbols-outlined">arrow_back</span>
                                    </button>
                                    <div className="relative">
                                        {currentChat.avatar ? (
                                            <div className="h-12 w-12 rounded-full bg-cover bg-center border border-gray-200" style={{ backgroundImage: `url('${currentChat.avatar}')` }}></div>
                                        ) : (
                                            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border border-purple-200 text-lg">{currentChat.initials}</div>
                                        )}
                                        <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white leading-tight">Obrolan dengan {currentChat.name}</h3>
                                        <p className="text-xs text-text-muted flex items-center gap-1.5">
                                            <span className="block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            {currentChat.status}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <button className="h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined">call</span>
                                    </button>
                                    <button className="h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined">videocam</span>
                                    </button>
                                    <button className="h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8faf9] dark:bg-[#1a1a1a]">
                                <div className="flex justify-center my-4">
                                    <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">Hari ini</span>
                                </div>

                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex gap-3 ${msg.sender === 'me' ? 'flex-row-reverse' : ''}`}>
                                        {/* Avatar for internal messages not strictly needed based on design but good for clarity if group chat, keeping minimal for 1on1 */}
                                        {msg.sender === 'them' && (
                                            currentChat.avatar ? (
                                                <div className="h-8 w-8 rounded-full bg-cover bg-center flex-shrink-0 mt-auto" style={{ backgroundImage: `url('${currentChat.avatar}')` }}></div>
                                            ) : (
                                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs flex-shrink-0 mt-auto">{currentChat.initials}</div>
                                            )
                                        )}

                                        <div className={`flex flex-col gap-1 max-w-[70%] ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                                            <div
                                                className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed relative group
                                                    ${msg.sender === 'me'
                                                        ? 'bg-primary text-text-main rounded-tr-none'
                                                        : 'bg-white dark:bg-surface-dark text-text-main dark:text-white rounded-tl-none border border-gray-100 dark:border-gray-700'
                                                    }`}
                                            >
                                                {/* File Attachment */}
                                                {msg.file && (
                                                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/10 rounded-xl mb-3 border border-red-100 dark:border-red-900/20 max-w-full">
                                                        <div className="h-10 w-10 bg-red-100 flex items-center justify-center rounded-lg text-red-500 flex-shrink-0">
                                                            <span className="material-symbols-outlined">picture_as_pdf</span>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <p className="font-bold text-text-main dark:text-white truncate">{msg.file.name}</p>
                                                            <p className="text-xs text-text-muted">{msg.file.size}</p>
                                                        </div>
                                                        <button className="h-8 w-8 ml-auto flex items-center justify-center text-gray-400 hover:text-text-main">
                                                            <span className="material-symbols-outlined">download</span>
                                                        </button>
                                                    </div>
                                                )}

                                                {msg.text}
                                            </div>
                                            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 px-1">
                                                <span>{msg.time}</span>
                                                {msg.sender === 'me' && (
                                                    <span className="material-symbols-outlined text-[14px] text-green-600">done_all</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-700">
                                <div className="flex items-end gap-3 max-w-4xl mx-auto">
                                    <button className="h-12 w-12 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-text-main transition-colors flex-shrink-0">
                                        <span className="material-symbols-outlined rotate-45">attach_file</span>
                                    </button>
                                    <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center px-4 py-3 min-h-[48px] focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                        <textarea
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                                            placeholder="Ketik pesan baru..."
                                            className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder-gray-400 text-text-main dark:text-white resize-none max-h-32"
                                            rows={1}
                                            style={{ minHeight: '24px' }}
                                        ></textarea>
                                        <button className="ml-2 text-gray-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">sentiment_satisfied</span>
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleSendMessage}
                                        className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary text-text-main hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-95 flex-shrink-0"
                                    >
                                        <span className="material-symbols-outlined -ml-0.5 mt-0.5">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ChatDetail;
