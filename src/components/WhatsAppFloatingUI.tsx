import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageSquare, X, Send, Phone, Video } from 'lucide-react';

export const WhatsAppFloatingUI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! How can I help you manage your projects today?", sender: 'bot', time: '10:00 AM' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');

        // Mock bot response
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: "That sounds like a great plan! I've noted it down. I'll remind you about this task tomorrow morning in your daily agenda. ✅",
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-4 sm:bottom-8 sm:right-8 z-[999] transform translate-z-0">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50, x: 20 }}
                        className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[350px] h-[min(500px,calc(100vh-150px))] bg-[#0c0c0c] border border-white/10 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#1c1c1c] p-3 sm:p-4 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#10B981] to-[#059669] flex items-center justify-center font-bold text-white text-[10px] sm:text-xs">
                                    AI
                                </div>
                                <div>
                                    <div className="text-white text-xs sm:text-sm font-semibold">Assistant</div>
                                    <div className="text-[#10B981] text-[8px] sm:text-[10px] flex items-center gap-1">
                                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                        Online
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-white/50">
                                <Video size={16} className="cursor-pointer hover:text-white transition-colors" />
                                <Phone size={16} className="cursor-pointer hover:text-white transition-colors" />
                                <X size={18} className="cursor-pointer hover:text-white transition-colors ml-1" onClick={() => setIsOpen(false)} />
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-90 custom-scrollbar">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${msg.sender === 'user'
                                        ? 'bg-[#10B981] text-white rounded-tr-none ml-auto'
                                        : 'bg-[#242424] text-white/90 rounded-tl-none mr-auto'
                                        } p-3 rounded-2xl max-w-[85%] text-[13px] shadow-lg relative group`}
                                >
                                    {msg.text}
                                    <div className={`text-[9px] mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-white/40'} text-right`}>
                                        {msg.time} {msg.sender === 'user' && '✓✓'}
                                    </div>

                                    {/* Bubble Tail */}
                                    <div className={`absolute top-0 w-2 h-2 ${msg.sender === 'user'
                                        ? 'right-[-8px] border-l-[8px] border-l-[#10B981] border-b-[8px] border-b-transparent'
                                        : 'left-[-8px] border-r-[8px] border-r-[#242424] border-b-[8px] border-b-transparent'
                                        }`} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Input */}
                        <div className="p-4 bg-[#1c1c1c] flex items-center gap-3">
                            <div className="flex-1 bg-[#0c0c0c] rounded-full px-4 py-2 border border-white/10">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="w-full bg-transparent text-white text-sm focus:outline-none"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                />
                            </div>
                            <button
                                onClick={handleSend}
                                className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white hover:bg-[#059669] transition-colors shadow-lg"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#10B981] shadow-[0_10px_40px_rgba(16,185,129,0.4)] flex items-center justify-center text-white relative group border border-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                            <MessageSquare size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse Notification */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold">
                        1
                    </span>
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute right-20 bg-white text-black text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                        Talk to AI Assistant
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>
                )}
            </motion.button>
        </div>
    );
};
