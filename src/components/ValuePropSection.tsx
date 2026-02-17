import { motion } from 'motion/react';
import { Smile, Brain, ZapOff, ArrowRight } from 'lucide-react';

export const ValuePropSection = () => {
    const items = [
        {
            icon: <Smile className="w-7 h-7" />,
            title: "Peace of Mind",
            description: "Go to sleep knowing every payment is tracked and every client is being followed up with.",
            color: "#10B981",
            metric: "100%",
            metricLabel: "Task Coverage"
        },
        {
            icon: <Brain className="w-7 h-7" />,
            title: "Mental Clarity",
            description: "Free up your brain for creative work. Let the AI handle the cognitive load of project management.",
            color: "#4F46E5",
            metric: "3hrs",
            metricLabel: "Saved Daily"
        },
        {
            icon: <ZapOff className="w-7 h-7" />,
            title: "No More Chaos",
            description: "Turn your scattered WhatsApp chats into a structured business engine without changing how you work.",
            color: "#7C3AED",
            metric: "Zero",
            metricLabel: "Missed Deadlines"
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6">
            {/* Gradient transition from hero */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Always Online</span>
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            More Than Just a Tool.
                        </h2>
                        <p className="text-xl text-white/30 max-w-xl mx-auto font-light">
                            It's your intelligent business partner that never sleeps.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="relative p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-500 h-full overflow-hidden">
                                {/* Hover glow */}
                                <div
                                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                                    style={{ backgroundColor: item.color }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${item.color}10`,
                                        border: `1px solid ${item.color}20`,
                                        color: item.color
                                    }}
                                >
                                    {item.icon}
                                </div>

                                {/* Metric */}
                                <div className="mb-6">
                                    <span className="text-4xl font-black text-white tracking-tight">{item.metric}</span>
                                    <span className="text-xs text-white/30 uppercase tracking-widest font-bold ml-2">{item.metricLabel}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-white/35 text-sm leading-relaxed font-light mb-8">
                                    {item.description}
                                </p>

                                {/* Bottom link */}
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: item.color }}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
