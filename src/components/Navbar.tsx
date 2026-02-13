import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, MessageCircle, Github, Twitter } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#', icon: <ArrowRight size={20} /> },
        { name: 'About', href: '#about', icon: <ArrowRight size={20} /> },
        { name: 'Plans', href: '#pricing', icon: <ArrowRight size={20} /> },
    ];

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-8 md:px-12 bg-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="shrink-0">
                    <Logo />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-12 text-xl whitespace-nowrap">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative group text-white/50 hover:text-white font-medium transition-all duration-300"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button - Styled as a semi-transparent pill on scroll/hover */}
                <button
                    className="md:hidden text-white p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 relative z-[75] transition-all active:scale-95"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[61] md:hidden"
                        />

                        {/* Right Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[#050505] border-l border-white/10 z-[62] md:hidden flex flex-col shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[100px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-[100px] -z-10" />

                            {/* Sidebar Header */}
                            <div className="p-8 pb-4 border-b border-white/5">
                                <Logo />
                                <p className="text-white/40 text-sm mt-4 font-light">Your Business AI Partner</p>
                            </div>

                            {/* Sidebar Links */}
                            <div className="flex-1 px-8 py-10 flex flex-col gap-6">
                                <div className="text-xs font-bold text-white/20 uppercase tracking-widest mb-2">Navigation</div>
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between text-4xl text-white/70 hover:text-white font-bold transition-all"
                                    >
                                        <span>{link.name}</span>
                                        <motion.div
                                            className="opacity-0 group-hover:opacity-100 text-[#10B981] transition-opacity"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight size={32} />
                                        </motion.div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Sidebar Footer */}
                            <div className="p-8 mt-auto bg-white/[0.02] border-t border-white/5 space-y-8">
                                <div className="space-y-4">
                                    <div className="text-xs font-bold text-white/20 uppercase tracking-widest">Connect With Us</div>
                                    <div className="flex gap-6">
                                        <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-[#10B981] hover:border-[#10B981]/30 transition-all">
                                            <MessageCircle size={20} />
                                        </a>
                                        <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-[#10B981] hover:border-[#10B981]/30 transition-all">
                                            <Github size={20} />
                                        </a>
                                        <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-[#10B981] hover:border-[#10B981]/30 transition-all">
                                            <Twitter size={20} />
                                        </a>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95 transition-all">
                                    Get Started Free
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
