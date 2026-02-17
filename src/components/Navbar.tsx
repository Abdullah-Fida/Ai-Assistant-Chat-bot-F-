import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, User, LogOut, ChevronRight } from 'lucide-react';
import { AnimatedSphere } from './AnimatedSphere';

interface NavbarProps {
    isLoggedIn: boolean;
    username: string | null;
    onAuthClick: () => void;
    onLogout: () => void;
}

export const Navbar = ({ isLoggedIn, username, onAuthClick, onLogout }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Responsive values based on scroll
    const navWidth = useTransform(scrollY, [0, 100], ['100%', '90%']);
    const navTop = useTransform(scrollY, [0, 100], [0, 20]);
    const navRadius = useTransform(scrollY, [0, 100], [0, 50]);
    const navBlur = useTransform(scrollY, [0, 100], [5, 15]);

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#' },
        { name: 'Plan', href: '#pricing' },
        { name: 'About', href: '#about' },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center pointer-events-none px-4">
                <motion.nav
                    style={{
                        width: navWidth,
                        top: navTop,
                        borderRadius: navRadius,
                        backdropFilter: `blur(${navBlur}px)`,
                    }}
                    className={`pointer-events-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 transition-colors duration-500 max-w-7xl mx-auto ${isScrolled
                        ? 'bg-black/40 border border-white/10 shadow-2xl'
                        : 'bg-transparent border-transparent'
                        }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Left: Logo */}
                    <div className="flex justify-start shrink-0">
                        <Logo />
                    </div>

                    {/* Center: Desktop Links */}
                    <div className="hidden md:flex items-center justify-center bg-white/5 border border-white/5 rounded-full px-2 py-1 gap-1">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 group overflow-hidden rounded-full"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <motion.div
                                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                    layoutId="nav-hover"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Right: Auth / Profile */}
                    <div className="flex justify-end items-center gap-4">
                        {isLoggedIn ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 bg-gradient-to-r from-[#10B981]/10 to-[#4F46E5]/10 border border-white/10 px-4 py-2 rounded-full hover:border-white/20 transition-all cursor-default"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#10B981] to-[#4F46E5] flex items-center justify-center p-[2px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                        <User size={14} className="text-white" />
                                    </div>
                                </div>
                                <span className="text-white font-semibold text-xs hidden sm:block tracking-wide uppercase">
                                    {username}
                                </span>
                                <button
                                    onClick={onLogout}
                                    className="ml-2 p-1 text-white/30 hover:text-red-400 transition-colors"
                                    title="Logout"
                                >
                                    <LogOut size={16} />
                                </button>
                            </motion.div>
                        ) : (
                            <div className="flex items-center gap-1 bg-white/5 rounded-full pl-1 pr-4 py-1 border border-white/5 hover:border-white/10 transition-colors">
                                <AnimatedSphere onClick={onAuthClick} />
                                <button
                                    onClick={onAuthClick}
                                    className="text-white font-bold text-xs tracking-widest uppercase ml-2 hidden sm:block"
                                >
                                    Join Now
                                </button>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 transition-all active:scale-95"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[61] md:hidden"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[350px] bg-[#0A0A0A] border-l border-white/10 z-[62] md:hidden flex flex-col shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[100px] -z-10" />

                            <div className="p-10 pb-6 border-b border-white/5">
                                <Logo />
                                <p className="text-white/30 text-[10px] mt-4 uppercase tracking-[0.2em] font-black">Menu</p>
                            </div>

                            <div className="flex-1 px-6 py-10 flex flex-col gap-2">
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all"
                                    >
                                        <span className="text-2xl text-white/50 group-hover:text-white transition-colors">{link.name}</span>
                                        <ChevronRight size={20} className="text-white/10 group-hover:text-[#10B981] group-hover:translate-x-1 transition-all" />
                                    </motion.a>
                                ))}
                            </div>

                            <div className="p-10 mt-auto bg-white/[0.02] border-t border-white/5">
                                {!isLoggedIn && (
                                    <button
                                        onClick={() => { setIsOpen(false); onAuthClick(); }}
                                        className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-black text-sm tracking-[0.1em] rounded-xl shadow-xl active:scale-95 transition-all uppercase"
                                    >
                                        Get Started Free
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};


