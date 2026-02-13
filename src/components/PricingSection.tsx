import { motion } from 'motion/react';
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            className={`relative p-10 rounded-[2.5rem] border ${plan.highlight
                                ? 'bg-white/[0.08] border-[#10B981]/50 shadow-[0_0_50px_rgba(16,185,129,0.15)]'
                                : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                                } flex flex-col transition-all duration-500 group overflow-hidden`}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.4 } }}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#10B981] text-white text-[0.65rem] uppercase tracking-widest font-black rounded-full shadow-[0_5px_15px_rgba(16,185,129,0.4)]">
                                    Most Popular
                                </div>
                            )}

                            {/* Decorative background glow for cards */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="mb-10 text-center">
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
                                <p className="text-white/40 text-sm font-light leading-relaxed h-10">{plan.description}</p>
                            </div>

                            <div className="flex flex-col items-center mb-10">
                                <div className="flex items-baseline">
                                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                                    {plan.period && <span className="text-white/30 text-lg ml-2 font-light">{plan.period}</span>}
                                </div>
                                {plan.secondPrice && (
                                    <span className="text-[#10B981] text-sm mt-1 font-semibold tracking-wide">
                                        or {plan.secondPrice}
                                    </span>
                                )}
                            </div>

                            <ul className="flex-1 space-y-5 mb-12">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-white/50 text-sm font-light">
                                        <div className={`p-1 rounded-full mr-4 ${plan.highlight ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-white/5 text-white/20'}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                className={`w-full py-5 rounded-2xl font-bold tracking-wide transition-all duration-300 ${plan.highlight
                                    ? 'bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25 hover:bg-[#059669] hover:shadow-[#059669]/40'
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                                whileTap={{ scale: 0.98 }}
                            >
                                {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
