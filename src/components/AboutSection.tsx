import { motion } from 'motion/react';
import { Bot, Code2, Heart } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="relative z-10 py-32 px-6 bg-[#030213]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] } as any}
                    >
                        <motion.span
                            className="text-[#4F46E5] font-semibold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Our Mission
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Control Over Chaos
                        </h2>
                        <div className="space-y-6 text-white/50 text-xl font-light leading-relaxed">
                            <p>
                                Stop chasing clients and forgetting payments. AI Assistant Project Manager is built to give you
                                <span className="text-white font-normal underline decoration-[#10B981] decoration-2 underline-offset-4 mx-1">Mental Clarity</span>
                                by handling the tracking, reminders, and summaries directly on WhatsApp.
                            </p>
                            <p>
                                No more mental overload. No more forgotten deadlines. Just talk naturally to your assistant,
                                and enjoy the <strong className="text-white font-semibold italic">Peace of Mind</strong> you deserve.
                            </p>
                        </div>

                        <div className="flex gap-10 mt-12">
                            {[
                                { icon: Bot, label: "AI First", color: "#4F46E5" },
                                { icon: Code2, label: "Secure", color: "#10B981" },
                                { icon: Heart, label: "Human", color: "#FB7185" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="flex flex-col items-center group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                    <div
                                        className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-white/40 group-hover:bg-white/10 group-hover:text-white transition-all duration-300"
                                        style={{ border: `1px solid ${item.color}20` }}
                                    >
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-white/40 text-sm font-medium tracking-wide group-hover:text-white transition-colors">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] } as any}
                        style={{ perspective: "1000px" }}
                    >
                        {/* Interactive WhatsApp Mockup */}
                        <div className="relative z-10 w-full max-w-[400px] mx-auto p-[1px] rounded-[3rem] bg-gradient-to-br from-white/20 via-white/5 to-white/20 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                            <div className="bg-[#0c0c0c] rounded-[2.9rem] overflow-hidden aspect-[9/16] flex flex-col relative">
                                {/* WhatsApp Header */}
                                <div className="bg-[#1c1c1c] p-6 border-b border-white/5 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#10B981] to-[#059669] flex items-center justify-center font-bold text-white text-xs">
                                        AI
                                    </div>
                                    <div>
                                        <div className="text-white text-sm font-semibold">Project Assistant</div>
                                        <div className="text-[#10B981] text-[10px] flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                            Online
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Body */}
                                <div className="flex-1 p-6 space-y-4 overflow-hidden bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-90">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="bg-[#10B981] text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-xs shadow-lg"
                                    >
                                        Project Alpha ka task add karo, deadline Friday
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2 }}
                                        className="bg-[#242424] text-white/90 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-xs border border-white/5 shadow-lg"
                                    >
                                        <div className="font-bold text-[#10B981] mb-1">Confirm Task:</div>
                                        <div className="space-y-1">
                                            <p>📌 Project: Alpha</p>
                                            <p>📅 Deadline: Friday</p>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-white/10 italic text-[10px]">
                                            Reply YES to confirm or NO to cancel.
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 3.5 }}
                                        className="bg-[#10B981] text-white p-3 rounded-2xl rounded-tr-none max-w-[40%] ml-auto text-xs shadow-lg"
                                    >
                                        YES
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 4.5 }}
                                        className="bg-[#242424] text-white/90 p-3 rounded-2xl rounded-tl-none max-w-[70%] text-xs border border-white/5 shadow-lg"
                                    >
                                        Task saved successfully! ✅ I'll remind you on Friday morning.
                                    </motion.div>
                                </div>

                                {/* Floating Action Button */}
                                <div className="absolute bottom-10 right-6 w-12 h-12 rounded-full bg-[#10B981] shadow-2xl flex items-center justify-center">
                                    <div className="w-6 h-0.5 bg-white rotate-90 absolute" />
                                    <div className="w-6 h-0.5 bg-white absolute" />
                                </div>
                            </div>
                        </div>

                        {/* Visual Glows */}
                        <div className="absolute -inset-4 bg-[#10B981] blur-[100px] opacity-10 -z-10 group-hover:opacity-20 transition-opacity duration-700" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
