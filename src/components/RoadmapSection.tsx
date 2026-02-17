import { motion } from 'motion/react';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';

export const RoadmapSection = () => {
    const items = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />,
            title: "MVP Phase (Current)",
            description: "Manual WhatsApp replies with AI-generated templates. Secure confirmation-first logic and daily summaries."
        },
        {
            icon: <Zap className="w-6 h-6 text-[#4F46E5]" />,
            title: "Automation Phase",
            description: "Full WhatsApp Business API integration for one-click reminders and automated client follow-ups."
        },
        {
            icon: <Rocket className="w-6 h-6 text-[#7C3AED]" />,
            title: "Scale Phase",
            description: "Multi-user dashboards, advanced agency analytics, and integration with popular CRM tools."
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <span className="text-[#4F46E5] font-semibold tracking-widest uppercase text-sm mb-4 block">Product Evolution</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Built for Today, <br />Ready for Tomorrow</h2>
                </motion.div>

                <div className="relative">
                    {/* Futuristic Connector Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block" />
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent -translate-y-1/2 hidden md:block blur-[2px] opacity-30 animate-pulse" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group overflow-hidden backdrop-blur-xl"
                            >
                                {/* Background Number */}
                                <div className="absolute -top-6 -right-4 text-[10rem] font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.04] transition-colors leading-none tracking-tighter">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 p-5 rounded-3xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-2xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase tracking-widest leading-none">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 text-sm font-medium leading-relaxed tracking-wide">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Glow for the card */}
                                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
