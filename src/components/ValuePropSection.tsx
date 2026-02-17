import { motion } from 'motion/react';
import { Smile, Brain, ZapOff } from 'lucide-react';

export const ValuePropSection = () => {
    const items = [
        {
            icon: <Smile className="w-10 h-10 text-[#10B981]" />,
            title: "Peace of Mind",
            description: "Go to sleep knowing every payment is tracked and every client is being followed up with."
        },
        {
            icon: <Brain className="w-10 h-10 text-[#4F46E5]" />,
            title: "Mental Clarity",
            description: "Free up your brain for creative work. Let the AI handle the cognitive load of project management."
        },
        {
            icon: <ZapOff className="w-10 h-10 text-[#7C3AED]" />,
            title: "No More Chaos",
            description: "Turn your scattered WhatsApp chats into a structured business engine without changing how you work."
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#030213] to-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        More Than Just a Tool. <br />
                        <div className="flex items-center justify-center gap-3 mt-2">
                            <span className="text-white/40 italic font-light">It's Your Business Partner.</span>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#10B981]/10 rounded-full border border-[#10B981]/20">
                                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                                <span className="text-[#10B981] text-[10px] font-bold uppercase tracking-wider">Online</span>
                            </div>
                        </div>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                                <div className="p-6 rounded-full bg-white/[0.02] border border-white/5 relative">
                                    {item.icon}
                                    <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-white/40 text-lg leading-relaxed font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
