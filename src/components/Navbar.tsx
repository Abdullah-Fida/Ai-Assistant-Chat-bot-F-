import { motion } from 'motion/react';
import { Logo } from './Logo';

export const Navbar = () => {
    const links = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Plans', href: '#pricing' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="shrink-0">
                <Logo />
            </div>

            <div className="flex gap-6 md:gap-10 text-xl md:text-2xl whitespace-nowrap">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative group text-white/90 hover:text-white font-medium transition-colors"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};
