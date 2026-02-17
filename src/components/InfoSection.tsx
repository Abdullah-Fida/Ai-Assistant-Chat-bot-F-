import { motion } from 'motion/react';
import { MessageSquare, ListTodo, Clock, ShieldCheck } from 'lucide-react';

export const InfoSection = () => {
    const features = [
        {
            icon: MessageSquare,
            title: "Natural Language Chat",
            description: "Manage projects and tasks naturally. Just say 'Client A ka payment follow up kal karna hai' and the AI handles the rest.",
            color: "#10B981",
        },
        {
            icon: ListTodo,
            title: "Task & Deadline Tracking",
            description: "Store titles, projects, and deadlines. Keep track of what's pending and what's done automatically.",
            color: "#4F46E5",
        },
        {
            icon: Clock,
            title: "Daily Morning Agenda",
            description: "Every morning, receive a summary of pending tasks, today's deadlines, and overdue payments.",
            color: "#7C3AED",
        },
        {
            icon: ShieldCheck,
            title: "Payment Tracking",
            description: "Track client names, amounts, and due dates. Automated follow-up message generation included.",
            color: "#3B82F6",
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Core Features</span>
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Built for Business Automation
                    </h2>
                    <p className="text-lg text-white/30 max-w-xl mx-auto font-light">
                        An AI assistant that understands your business logic and communicates via WhatsApp.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-[1.5rem] bg-white/[0.015] border border-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                                style={{ backgroundColor: feature.color }}
                            />

                            <div className="relative z-10 flex gap-6">
                                <div
                                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${feature.color}10`,
                                        border: `1px solid ${feature.color}20`,
                                    }}
                                >
                                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                                    <p className="text-white/30 text-sm leading-relaxed font-light">
                                        {feature.description}
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
