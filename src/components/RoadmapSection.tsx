import { motion } from 'motion/react';
import { ShieldCheck, Zap, Rocket } from 'lucide-react';

export const RoadmapSection = () => {
    const items = [
        {
            icon: ShieldCheck,
            title: "MVP Phase",
            status: "Current",
            description: "Manual WhatsApp replies with AI-generated templates. Secure confirmation-first logic and daily summaries.",
            color: "#10B981",
            step: "01"
        },
        {
            icon: Zap,
            title: "Automation Phase",
            status: "Next",
            description: "Full WhatsApp Business API integration for one-click reminders and automated client follow-ups.",
            color: "#4F46E5",
            step: "02"
        },
        {
            icon: Rocket,
            title: "Scale Phase",
            status: "Future",
            description: "Multi-user dashboards, advanced agency analytics, and integration with popular CRM tools.",
            color: "#7C3AED",
            step: "03"
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Roadmap</span>
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Built for Today,{' '}
                        <span className="text-white/40 font-light">Ready for Tomorrow</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative p-8 md:p-10 rounded-[1.5rem] bg-white/[0.015] border border-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                                style={{ backgroundColor: item.color }}
                            />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                                {/* Step number + Icon */}
                                <div className="flex items-center gap-5 shrink-0">
                                    <span className="text-3xl font-bold text-white/[0.06] tracking-tight">{item.step}</span>
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                                        style={{
                                            backgroundColor: `${item.color}10`,
                                            border: `1px solid ${item.color}20`,
                                        }}
                                    >
                                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                                        <span
                                            className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full"
                                            style={{
                                                backgroundColor: `${item.color}15`,
                                                color: item.color,
                                                border: `1px solid ${item.color}20`
                                            }}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-white/30 text-sm font-light leading-relaxed max-w-2xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
