import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export const PricingSection = () => {
    const plans = [
        {
            name: "Free",
            price: "Free",
            period: "7 days",
            description: "Try the assistant for yourself",
            features: [
                "Full Access for 7 Days",
                "Project & Task Tracking",
                "WhatsApp Message Extraction",
                "Daily Morning Agenda",
                "Confirmation-First System"
            ],
            highlight: false,
            cta: "Start Free",
            color: "#6B7280"
        },
        {
            name: "Standard",
            price: "$5",
            secondPrice: "PKR 1,499",
            period: "/month",
            description: "Everything you need to automate",
            features: [
                "Unlimited Projects & Tasks",
                "Payment Tracking & Follow-ups",
                "Daily Detailed Summaries",
                "Custom Reminders",
                "Morning Strategy Agenda",
                "Client Message Generation"
            ],
            highlight: true,
            cta: "Get Started",
            color: "#10B981"
        },
        {
            name: "Pro",
            price: "$15",
            secondPrice: "PKR 3,500",
            period: "/month",
            description: "For agencies with multiple clients",
            features: [
                "Everything in Standard",
                "Priority Support",
                "Advanced AI Insights",
                "Performance Reports",
                "Custom Automation Workflows",
                "Multi-Client Management"
            ],
            highlight: false,
            cta: "Contact Us",
            color: "#7C3AED"
        }
    ];

    return (
        <section id="pricing" className="relative z-10 py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Pricing</span>
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-white/30 max-w-xl mx-auto font-light">
                        Choose the plan that fits your workflow. Upgrade or cancel anytime.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative rounded-[1.5rem] border p-8 flex flex-col transition-all duration-500 group overflow-hidden ${plan.highlight
                                ? 'bg-white/[0.04] border-[#10B981]/20'
                                : 'bg-white/[0.015] border-white/[0.05] hover:border-white/10'
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#10B981] text-black text-[9px] uppercase tracking-[0.2em] font-bold rounded-b-lg">
                                    Most Popular
                                </div>
                            )}

                            {/* Plan name */}
                            <div className="mb-6 pt-2">
                                <h3 className="text-sm font-bold text-white/50 uppercase tracking-[0.2em] mb-1">{plan.name}</h3>
                                <p className="text-white/20 text-xs font-light">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-white/20 text-sm font-light">{plan.period}</span>}
                                </div>
                                {plan.secondPrice && (
                                    <span className="text-[10px] font-medium tracking-[0.15em] uppercase mt-1 block" style={{ color: plan.color }}>
                                        or {plan.secondPrice}
                                    </span>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] bg-white/[0.05] mb-8" />

                            {/* Features */}
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-white/35 text-sm font-light">
                                        <div className={`shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5 ${plan.highlight
                                            ? 'bg-[#10B981]/15 text-[#10B981]'
                                            : 'bg-white/[0.04] text-white/25'
                                            }`}>
                                            <Check size={11} strokeWidth={3} />
                                        </div>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <motion.button
                                className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-[0.1em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${plan.highlight
                                    ? 'bg-[#10B981] text-black hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                                    : 'bg-white/[0.04] text-white/50 border border-white/[0.06] hover:border-white/15 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {plan.cta}
                                <ArrowRight size={14} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
