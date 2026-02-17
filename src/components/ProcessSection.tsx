import { motion } from 'motion/react';
import { UserPlus, MessageSquareText, CalendarCheck, CheckCheck } from 'lucide-react';

export const ProcessSection = () => {
    const steps = [
        {
            icon: <UserPlus className="w-6 h-6" />,
            title: "Quick Onboarding",
            description: "Sign up, choose your package, and provide your WhatsApp number. Your profile is created instantly.",
            color: "#4F46E5",
            chatMsg: "Welcome to AIPM! 🚀 Please provide your email to get started.",
            type: 'bot',
            step: '01'
        },
        {
            icon: <MessageSquareText className="w-6 h-6" />,
            title: "Connect & Talk",
            description: "Receive a welcome message on WhatsApp. Start talking naturally to add tasks, projects, or payments.",
            color: "#10B981",
            chatMsg: "Client A ka 5,000 PKR follow-up kal remind karwana.",
            type: 'user',
            step: '02'
        },
        {
            icon: <CalendarCheck className="w-6 h-6" />,
            title: "Daily Execution",
            description: "Receive morning agendas. Confirm AI-tracked data. Let the assistant handle reminders and follow-ups.",
            color: "#7C3AED",
            chatMsg: "Good morning! ☀️ Here is your agenda for today: 3 Tasks, 1 Payment due.",
            type: 'bot',
            step: '03'
        }
    ];

    return (
        <section id="process" className="relative z-10 py-32 px-6 overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">3 Simple Steps</span>
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Experience the Flow</h2>
                    <p className="text-lg text-white/30 max-w-xl mx-auto font-light">Everything happens naturally. No complex dashboards, just simple conversations.</p>
                </motion.div>

                {/* Connection line */}
                <div className="hidden lg:block absolute top-[calc(50%+60px)] left-[16.67%] right-[16.67%] h-[1px]">
                    <div className="w-full h-full bg-gradient-to-r from-[#4F46E5]/30 via-[#10B981]/30 to-[#7C3AED]/30" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Step number */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                                    style={{
                                        backgroundColor: `${step.color}15`,
                                        border: `1px solid ${step.color}25`,
                                        color: step.color
                                    }}
                                >
                                    {step.icon}
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] block" style={{ color: step.color }}>Step {step.step}</span>
                                    <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="relative p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.06] group overflow-hidden hover:border-white/10 transition-all duration-500">
                                <p className="text-white/35 text-sm leading-relaxed font-light mb-6">{step.description}</p>

                                {/* Chat Bubble */}
                                <div className={`relative p-4 rounded-2xl text-xs leading-relaxed max-w-[95%] ${step.type === 'bot'
                                    ? 'bg-[#1a1a2e] text-white/80 rounded-tl-sm mr-auto border border-white/[0.04]'
                                    : 'bg-[#10B981] text-white rounded-tr-sm ml-auto'
                                    }`}>
                                    {step.chatMsg}
                                    <div className="mt-2 flex items-center justify-end gap-1 opacity-30 text-[10px]">
                                        <span>10:00 AM</span>
                                        <CheckCheck size={10} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
