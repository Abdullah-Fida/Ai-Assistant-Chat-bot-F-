import { motion } from 'motion/react';
import { ListTodo, MessageSquare, ShieldCheck, Clock, CheckCheck } from 'lucide-react';

export const InfoSection = () => {
    const features = [
        {
            icon: <MessageSquare className="w-8 h-8 text-[#10B981]" />,
            title: "Natural language Chat",
            description: "Manage projects and tasks naturally. Just say 'Client A ka payment follow up kal karna hai' and I'll handle the rest.",
            type: 'bot'
        },
        {
            icon: <ListTodo className="w-8 h-8 text-[#4F46E5]" />,
            title: "Task & Deadline Tracking",
            description: "Store titles, projects, and deadlines. I keep track of what's pending and what's done so you don't have to.",
            type: 'user'
        },
        {
            icon: <Clock className="w-8 h-8 text-[#7C3AED]" />,
            title: "Daily Morning Agenda",
            description: "Every morning, receive a summary of pending tasks, today's deadlines, and overdue payments to start your day clear.",
            type: 'bot'
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />,
            title: "Payment Tracking",
            description: "Track client names, amounts, and due dates. I'll even generate follow-up messages for you to approve and send.",
            type: 'user'
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 bg-[#030213] overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="text-[#10B981] font-semibold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Capabilities
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Built for Business Automation
                    </h2>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        An AI assistant that understands your business logic and communicates via the app you already use every day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 group overflow-hidden ${index === 0 || index === 3 ? 'md:col-span-2' : ''
                                } ${feature.type === 'bot'
                                    ? 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.05]'
                                    : 'bg-[#10B981]/10 border border-[#10B981]/20 hover:bg-[#10B981]/20'
                                }`}
                        >
                            {/* Accent Glow */}
                            <div
                                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"
                                style={{ backgroundColor: feature.type === 'bot' ? '#4F46E5' : '#10B981' }}
                            />

                            <div className="flex flex-col h-full relative z-10">
                                <div className="mb-6 self-start p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                    {feature.icon}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase tracking-widest">{feature.title}</h3>

                                    {/* The Chat Bubble Styled Content */}
                                    <div className={`relative p-6 rounded-2xl text-sm leading-relaxed font-medium ${feature.type === 'bot'
                                            ? 'bg-[#1c1c1c] text-white/70 border border-white/5 rounded-tl-none'
                                            : 'bg-[#10B981] text-black rounded-tr-none'
                                        }`}>
                                        {feature.description}

                                        {/* Meta info like WhatsApp */}
                                        <div className={`mt-4 flex items-center justify-end gap-1.5 text-[10px] font-bold ${feature.type === 'bot' ? 'text-white/20' : 'text-black/40'
                                            }`}>
                                            <span>Just now</span>
                                            {feature.type === 'user' && <CheckCheck size={14} className="text-black/60" />}
                                            {feature.type === 'bot' && <CheckCheck size={14} className="text-[#10B981]" />}
                                        </div>

                                        {/* Tail */}
                                        <div className={`absolute top-0 w-3 h-3 ${feature.type === 'bot'
                                                ? 'left-[-12px] border-r-[12px] border-r-[#1c1c1c] border-b-[12px] border-b-transparent'
                                                : 'right-[-12px] border-l-[12px] border-l-[#10B981] border-b-[12px] border-b-transparent'
                                            }`} />
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

