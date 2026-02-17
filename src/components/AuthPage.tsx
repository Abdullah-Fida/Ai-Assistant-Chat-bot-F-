import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Phone, ArrowRight, Github, Chrome } from 'lucide-react';

interface AuthPageProps {
    onLogin: (username: string) => void;
    onClose: () => void;
}

export const AuthPage = ({ onLogin, onClose }: AuthPageProps) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        whatsapp: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login/signup logic
        const username = isLogin ? formData.email.split('@')[0] : formData.username;
        onLogin(username || 'User');
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 md:py-4 text-sm md:text-base text-white placeholder:text-white/30 focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/50 transition-all";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md overflow-y-auto"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-[100px] -z-10" />

                <div className="p-6 md:p-12">
                    <div className="text-center mb-10">
                        <motion.h2
                            key={isLogin ? 'login' : 'signup'}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-2"
                        >
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </motion.h2>
                        <p className="text-white/50">
                            {isLogin ? 'Enter your details to access your account' : 'Join our premium AI agency platform today'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AnimatePresence mode="wait">
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className={inputClasses}
                                            value={formData.username}
                                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                            required={!isLogin}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="WhatsApp Number"
                                            className={inputClasses}
                                            value={formData.whatsapp}
                                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                            required={!isLogin}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                            <input
                                type="email"
                                placeholder={isLogin ? "Gmail" : "Email Address"}
                                className={inputClasses}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                            <input
                                type="password"
                                placeholder="Password"
                                className={inputClasses}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>

                        {isLogin && (
                            <div className="flex justify-end">
                                <button type="button" className="text-sm text-[#10B981] hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-xl shadow-lg shadow-[#10B981]/20 flex items-center justify-center gap-2 group mt-6"
                        >
                            {isLogin ? 'Login Now' : 'Sign Up Free'}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </form>

                    <div className="mt-8">
                        <div className="relative flex items-center justify-center mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <span className="relative px-4 bg-[#0A0A0A] text-white/30 text-sm">Or continue with</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white text-sm">
                                <Chrome className="w-4 h-4" /> Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white text-sm">
                                <Github className="w-4 h-4" /> Github
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-white/50 hover:text-white transition-colors"
                        >
                            {isLogin ? (
                                <>Don't have an account? <span className="text-[#10B981] font-medium">Sign up</span></>
                            ) : (
                                <>Already have an account? <span className="text-[#10B981] font-medium">Login</span></>
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
