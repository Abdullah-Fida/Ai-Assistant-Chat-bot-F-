import { motion } from 'motion/react';
import { ListTodo, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

export const InfoSection = () => {
    const features = [
        {
            icon: <MessageSquare className="w-8 h-8 text-[#10B981]" />,
            title: "Natural language Chat",
            description: "Manage projects and tasks naturally. Just say 'Client A ka payment follow up kal karna hai' and I'll handle the rest."
        },
        {
            icon: <ListTodo className="w-8 h-8 text-[#4F46E5]" />,
            title: "Task & Deadline Tracking",
            description: "Store titles, projects, and deadlines. I keep track of what's pending and what's done so you don't have to."
        },
        {
            icon: <Clock className="w-8 h-8 text-[#7C3AED]" />,
            title: "Daily Morning Agenda",
            description: "Every morning, receive a summary of pending tasks, today's deadlines, and overdue payments to start your day clear."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />,
            title: "Payment Tracking",
            description: "Track client names, amounts, and due dates. I'll even generate follow-up messages for you to approve and send."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="relative z-10 py-32 px-6 bg-[#030213]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="text-[#10B981] font-semibold tracking-widest uppercase text-sm mb-4 block"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Capabilities
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        How It Helps Your Business
                    </h2>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        A WhatsApp-based AI assistant that operates in a controlled, business-automation scope.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden"
                            variants={itemVariants}
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#10B981] to-[#4F46E5] group-hover:h-full transition-all duration-500" />
                            <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-white/50 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
