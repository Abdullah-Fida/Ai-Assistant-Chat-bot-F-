import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Instagram, Github, ArrowUpRight, Send } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: [
                { label: "Features", href: "#" },
                { label: "Pricing", href: "#pricing" },
                { label: "Integration", href: "#" },
                { label: "Changelog", href: "#" },
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#about" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#" },
            ]
        },
        {
            title: "Resources",
            links: [
                { label: "Documentation", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Status", href: "#" },
            ]
        }
    ];

    const socials = [
        { Icon: Twitter, label: "Twitter" },
        { Icon: Linkedin, label: "LinkedIn" },
        { Icon: Instagram, label: "Instagram" },
        { Icon: Github, label: "GitHub" },
    ];

    return (
        <footer className="relative z-10 bg-[#030308] border-t border-white/[0.04]">
            {/* CTA Banner */}
            <div className="border-b border-white/[0.04]">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <motion.div
                        className="flex flex-col lg:flex-row items-center justify-between gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                                Ready to transform your workflow?
                            </h3>
                            <p className="text-white/30 font-light">Start your free 7-day trial. No credit card required.</p>
                        </div>
                        <motion.button
                            className="group flex items-center gap-3 px-8 py-4 bg-[#10B981] text-black font-bold text-sm tracking-[0.15em] uppercase rounded-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started Free
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Logo />
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed max-w-sm mb-8 font-light">
                            Empowering agencies and freelancers to manage projects effortlessly through the power of AI and WhatsApp.
                        </p>

                        {/* Newsletter */}
                        <div className="flex gap-2 max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#10B981]/30 transition-colors"
                            />
                            <button className="px-4 py-3 bg-white/[0.05] border border-white/[0.06] rounded-xl text-white/40 hover:text-[#10B981] hover:border-[#10B981]/20 transition-all">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-6">{group.title}</h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/25 text-sm hover:text-white/70 transition-colors duration-200 font-light"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-xs font-light tracking-wide">
                        © {currentYear} AI Assistant Project Manager. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {/* Socials */}
                        <div className="flex gap-2">
                            {socials.map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/20 hover:text-white/60 hover:border-white/10 transition-all duration-200"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex gap-6 text-xs">
                            <a href="#" className="text-white/20 hover:text-white/50 transition-colors font-light">Privacy</a>
                            <a href="#" className="text-white/20 hover:text-white/50 transition-colors font-light">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
