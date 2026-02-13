import { Logo } from './Logo';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative z-10 bg-black border-t border-white/10 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <Logo />
                        </div>
                        <p className="text-white/60 max-w-sm mb-8">
                            Empowering agencies and freelancers to manage projects effortlessy through the power of AI and WhatsApp.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Integration</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} AI Assistant Project Manager. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
