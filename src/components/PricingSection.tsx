import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export const PricingSection = () => {
    const plans = [
        {
            name: "Free",
            price: "Free",
            period: "7 Days",
            description: "Try the assistant for yourself",
            features: [
                "Full Access for 7 Days",
                "Project & Task Tracking",
                "WhatsApp Message Extraction",
                "Daily Morning Agenda",
                "Confirmation-First System"
            ],
            highlight: false,
            color: "blue"
        },
        {
            name: "Standard",
            price: "$5",
            secondPrice: "PKR 1,499",
            period: "/month",
            description: "Everything you need to automate your work",
            features: [
                "Unlimited Projects & Tasks",
                "Payment Tracking & Follow-ups",
                "Daily Detailed Summaries",
                "Custom Reminders",
                "Morning Strategy Agenda",
                "Client Message Generation"
            ],
            highlight: true,
            color: "emerald"
        },
        {
            name: "Pro",
            price: "$15",
            secondPrice: "PKR 3,500",
            period: "/month",
            description: "For agencies handling multiple clients",
            features: [
                "Everything in Standard",
                "Priority Support",
                "Advanced AI Insights",
                "Detailed Performance Reports",
                "Custom Automation Workflows",
                "Multi-Client Management"
            ],
            highlight: false,
            color: "purple"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants: any = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any
        }
    };

    return (
        <section id="pricing" className="relative z-10 py-32 px-6 bg-black/40 backdrop-blur-3xl">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    <motion.span
                        className="text-[#10B981] font-semibold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Pricing Plans
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                        Choose the plan that fits your workflow. Upgrade or cancel anytime.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                >
                    {/* Background glow for the middle section */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            className={`relative p-10 rounded-[2.5rem] border backdrop-blur-xl ${plan.highlight
                                ? 'bg-white/[0.08] border-[#10B981]/40 shadow-[0_20px_60px_rgba(16,185,129,0.1)]'
                                : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                                } flex flex-col transition-all duration-500 group overflow-hidden h-full`}
                            variants={cardVariants}
                            whileHover={{
                                y: -15,
                                rotateX: 2,
                                rotateY: -2,
                                transition: { duration: 0.4 }
                            }}
                            style={{ perspective: "1000px" }}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
                            )}

                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#10B981] text-black text-[0.65rem] uppercase tracking-[0.2em] font-black rounded-b-xl shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            {/* Decorative background glow for cards */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${plan.highlight ? 'bg-[#10B981]/20' : 'bg-white/5'}`} />

                            <div className="mb-10 text-center relative pt-4">
                                <h3 className="text-2xl font-black text-white mb-3 tracking-widest uppercase">{plan.name}</h3>
                                <p className="text-white/40 text-xs font-medium leading-relaxed h-10 tracking-widest uppercase">{plan.description}</p>
                            </div>

                            <div className="flex flex-col items-center mb-10 relative">
                                <div className="flex items-baseline">
                                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                                    {plan.period && <span className="text-white/30 text-base ml-2 font-medium tracking-widest uppercase">{plan.period}</span>}
                                </div>
                                <div className="h-6 mt-1 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {plan.secondPrice && (
                                            <motion.span
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-[#10B981] text-[10px] font-black tracking-[0.2em] uppercase block"
                                            >
                                                or {plan.secondPrice}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                            <ul className="flex-1 space-y-6 mb-12">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start text-white/50 text-xs font-bold tracking-wider uppercase group/item">
                                        <div className={`p-1 rounded-full mr-4 mt-0.5 transition-colors ${plan.highlight ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-white/5 text-white/20 group-hover/item:text-white'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="flex-1 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 relative overflow-hidden group/btn ${plan.highlight
                                    ? 'bg-[#10B981] text-black shadow-xl shadow-[#10B981]/20'
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">{plan.name === "Free" ? "Start Now" : "Unlock Power"}</span>
                                {plan.highlight && (
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                )}
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
