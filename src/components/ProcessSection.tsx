import { motion } from 'motion/react';
import { UserPlus, MessageSquareText, CalendarCheck, CheckCheck } from 'lucide-react';

export const ProcessSection = () => {
    const steps = [
        {
            icon: <UserPlus className="w-8 h-8" />,
            title: "1. Quick Onboarding",
            description: "Sign up, choose your package, and provide your WhatsApp number. Your profile is created instantly.",
            color: "#4F46E5",
            chatMsg: "Welcome to AIPM! 🚀 Please provide your email to get started.",
            type: 'bot'
        },
        {
            icon: <MessageSquareText className="w-8 h-8" />,
            title: "2. Connect & Talk",
            description: "Receive a welcome message on WhatsApp. Start talking naturally to add tasks, projects, or payments.",
            color: "#10B981",
            chatMsg: "Client A ka 5,000 PKR follow-up kal remind karwana.",
            type: 'user'
        },
        {
            icon: <CalendarCheck className="w-8 h-8" />,
            title: "3. Daily Execution",
            description: "Receive morning agendas. Confirm AI-tracked data. Let the assistant handle reminders and follow-ups.",
            color: "#7C3AED",
            chatMsg: "Good morning! ☀️ Here is your agenda for today: 3 Tasks, 1 Payment due.",
            type: 'bot'
        }
    ];

    return (
        <section id="process" className="relative z-10 py-32 px-6 bg-black/50 overflow-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-[0.02] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#10B981] font-semibold tracking-widest uppercase text-sm mb-4 block">How it works</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Experience the Flow</h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">Everything happens naturally. No complex dashboards, just simple conversations.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col h-full"
                        >
                            {/* Step Card */}
                            <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 group overflow-hidden mb-8 hover:bg-white/[0.05] transition-all duration-500 flex-1">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />

                                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:scale-110 group-hover:text-white transition-all duration-300"
                                    style={{ border: `1px solid ${step.color}30` }}>
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light mb-6">{step.description}</p>

                                {/* The Chat Bubble Visualization */}
                                <div className={`relative p-4 rounded-xl text-xs max-w-[90%] shadow-xl ${step.type === 'bot'
                                    ? 'bg-[#242424] text-white/90 rounded-tl-none mr-auto'
                                    : 'bg-[#10B981] text-white rounded-tr-none ml-auto'
                                    }`}>
                                    {step.chatMsg}
                                    <div className="mt-2 flex items-center justify-end gap-1 opacity-40">
                                        <span>10:00 AM</span>
                                        <CheckCheck size={12} />
                                    </div>

                                    {/* Bubble Tail */}
                                    <div className={`absolute top-0 w-2 h-2 ${step.type === 'bot'
                                        ? 'left-[-8px] border-r-[8px] border-r-[#242424] border-b-[8px] border-b-transparent'
                                        : 'right-[-8px] border-l-[8px] border-l-[#10B981] border-b-[8px] border-b-transparent'
                                        }`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

