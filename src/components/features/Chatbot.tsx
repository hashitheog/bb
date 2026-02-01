import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, Minimize2, ChevronRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const API_KEY = "sk-c3850e8b4bc24f4e8391c39ab71297cb";

const SUGGESTED_QUERIES = [
    "Available Packages?",
    "Visa Requirements?",
    "Hajj 2026 Dates?",
    "Private Jet options?"
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: "Welcome to iMusafir. How may I serve your journey?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage = text;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('https://api.deepseek.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: [
                        { role: "system", content: "You are the AI Concierge for iMusafir Global, a luxury Hajj travel brand. CRITICAL INSTRUCTION: Be extremely concise. Use fewer than 20 words where possible. Only elaborate if explicitly asked. Tone: aristocratic, servant-leader, warm. Never list generic info unless asked." },
                        ...messages.map(m => ({ role: m.role, content: m.content })),
                        { role: "user", content: userMessage }
                    ],
                    stream: false
                })
            });

            const data = await response.json();
            const aiMessage = data.choices[0].message.content;
            setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
        } catch (error) {
            console.error('Chat Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection interrupted. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50"
            >
                {!isOpen && (
                    <MagneticButton
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold to-[#B8860B] text-obsidian shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center relative overflow-hidden group hover:scale-110 transition-transform duration-300"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full group-hover:animate-shine" />
                        <MessageSquare className="w-6 h-6 md:w-8 md:h-8 relative z-10" />

                        {/* Hanging Animation Ping */}
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-obsidian"></span>
                        </span>
                    </MagneticButton>
                )}
            </motion.div>

            {/* Premium Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[95vw] md:w-[380px] h-[600px] max-h-[80vh] flex flex-col rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-3xl bg-black/80"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 bg-gradient-to-r from-obsidian via-[#1a1a1a] to-obsidian border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#8B6508] p-[1px]">
                                    <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-gold" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-serif tracking-wide">Concierge</h3>
                                    <p className="text-[10px] text-gold uppercase tracking-[0.2em] flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Makkah Live
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                            >
                                <Minimize2 className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 text-sm leading-6 relative ${msg.role === 'user'
                                        ? 'bg-gradient-to-br from-gold to-[#B8860B] text-obsidian rounded-2xl rounded-br-sm font-medium shadow-lg'
                                        : 'bg-white/5 backdrop-blur-md text-gray-100 border border-white/10 rounded-2xl rounded-bl-sm shadow-sm'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-bl-none flex gap-1.5 items-center">
                                        <span className="text-xs text-gray-500 font-serif mr-2">Typing</span>
                                        <span className="w-1 h-1 bg-gold rounded-full animate-bounce" />
                                        <span className="w-1 h-1 bg-gold rounded-full animate-bounce delay-100" />
                                        <span className="w-1 h-1 bg-gold rounded-full animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Queries */}
                        {messages.length < 3 && (
                            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
                                {SUGGESTED_QUERIES.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSend(q)}
                                        className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-300 uppercase tracking-wider"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-black/40 backdrop-blur-md border-t border-white/10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your inquiry..."
                                    className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/10 rounded-full pl-6 pr-14 py-4 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-gray-600"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-obsidian shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all duration-300"
                                >
                                    {isLoading ? <span className="animate-spin w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full" /> : <ChevronRight className="w-5 h-5 ml-0.5" />}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
