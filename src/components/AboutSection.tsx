import { motion } from 'motion/react';
import { Bot, Code2, Heart } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="relative z-10 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">About</span>
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Control Over{' '}
                            <span className="text-white/30 font-light">Chaos</span>
                        </h2>

                        <div className="space-y-5 text-white/30 text-base font-light leading-relaxed">
                            <p>
                                Stop chasing clients and forgetting payments. AI Assistant Project Manager gives you
                                <span className="text-white/70 font-normal mx-1">mental clarity</span>
                                by handling tracking, reminders, and summaries directly on WhatsApp.
                            </p>
                            <p>
                                No more mental overload. No more forgotten deadlines. Just talk naturally to your assistant,
                                and enjoy the <span className="text-white/70 font-normal">peace of mind</span> you deserve.
                            </p>
                        </div>

                        {/* Value badges */}
                        <div className="flex gap-4 mt-10">
                            {[
                                { icon: Bot, label: "AI First", color: "#4F46E5" },
                                { icon: Code2, label: "Secure", color: "#10B981" },
                                { icon: Heart, label: "Human", color: "#FB7185" }
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] group hover:border-white/10 transition-all"
                                >
                                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                    <span className="text-white/30 text-xs font-medium tracking-wide group-hover:text-white/60 transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — WhatsApp Mockup */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-[360px] mx-auto">
                            {/* Phone frame */}
                            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 via-white/[0.03] to-white/10 overflow-hidden">
                                <div className="bg-[#0a0a0f] rounded-[2rem] overflow-hidden">
                                    {/* Header */}
                                    <div className="bg-white/[0.03] px-5 py-4 border-b border-white/[0.04] flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                                            <span className="text-white text-[10px] font-bold">AI</span>
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-medium">Project Assistant</div>
                                            <div className="text-[#10B981] text-[10px] flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                                                Online
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chat messages */}
                                    <div className="p-5 space-y-3 min-h-[320px]">
                                        <motion.div
                                            initial={{ opacity: 0, x: 15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="bg-[#10B981] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[75%] ml-auto text-xs leading-relaxed"
                                        >
                                            Project Alpha ka task add karo, deadline Friday
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 }}
                                            className="bg-white/[0.04] text-white/70 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] text-xs leading-relaxed border border-white/[0.04]"
                                        >
                                            <div className="font-semibold text-[#10B981] mb-1.5 text-[11px]">Confirm Task:</div>
                                            <div className="space-y-0.5 text-white/50">
                                                <p>📌 Project: Alpha</p>
                                                <p>📅 Deadline: Friday</p>
                                            </div>
                                            <div className="mt-2 pt-2 border-t border-white/[0.04] text-white/25 text-[10px]">
                                                Reply YES to confirm or NO to cancel.
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.8 }}
                                            className="bg-[#10B981] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[30%] ml-auto text-xs font-medium"
                                        >
                                            YES ✓
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.5 }}
                                            className="bg-white/[0.04] text-white/60 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%] text-xs leading-relaxed border border-white/[0.04]"
                                        >
                                            Task saved ✅ I'll remind you on Friday morning.
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle glow behind phone */}
                            <div className="absolute -inset-8 bg-[#10B981]/5 blur-[60px] rounded-full -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
