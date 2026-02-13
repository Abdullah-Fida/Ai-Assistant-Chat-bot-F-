import { motion } from 'motion/react';
import { UserPlus, MessageSquareText, CalendarCheck } from 'lucide-react';

export const ProcessSection = () => {
    const steps = [
        {
            icon: <UserPlus className="w-6 h-6" />,
            title: "1. Quick Onboarding",
            description: "Sign up, choose your package, and provide your WhatsApp number. Your profile is created instantly.",
            color: "#4F46E5"
        },
        {
            icon: <MessageSquareText className="w-6 h-6" />,
            title: "2. Connect & Talk",
            description: "Receive a welcome message on WhatsApp. Start talking naturally to add tasks, projects, or payments.",
            color: "#10B981"
        },
        {
            icon: <CalendarCheck className="w-6 h-6" />,
            title: "3. Daily Execution",
            description: "Receive morning agendas. Confirm AI-tracked data. Let the assistant handle reminders and follow-ups.",
            color: "#7C3AED"
        }
    ];

    return (
        <section id="process" className="relative z-10 py-32 px-6 bg-black/50">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-[#10B981] font-semibold tracking-widest uppercase text-sm mb-4 block">How it works</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple 3-Step Integration</h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">From setup to daily summaries in less than 5 minutes.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 group overflow-hidden"
                        >
                            <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white/10 group-hover:text-white transition-all duration-300"
                                style={{ border: `1px solid ${step.color}30` }}>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-white/40 leading-relaxed font-light">{step.description}</p>

                            {/* Connector line for desktop */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/10 to-transparent z-20" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
