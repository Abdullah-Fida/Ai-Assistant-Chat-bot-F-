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
                    {/* Horizontal line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-[#0c0c0c] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/40 font-light leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
