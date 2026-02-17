import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { StarParticles } from './components/StarParticles';
import { Navbar } from './components/Navbar';
import { InfoSection } from './components/InfoSection';
import { ValuePropSection } from './components/ValuePropSection';
import { ProcessSection } from './components/ProcessSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { AuthPage } from './components/AuthPage';
import { WhatsAppFloatingUI } from './components/WhatsAppFloatingUI';
import { Sparkles, Zap, MessageCircle } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [showAuthPage, setShowAuthPage] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUsername(name);
    setShowAuthPage(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <div className="min-h-screen bg-[#000000] overflow-x-hidden relative selection:bg-[#10B981] selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] via-[#4F46E5] to-[#7C3AED] z-[110] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[98] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Star Particles Background */}
      <StarParticles mouseX={mousePosition.x} mouseY={mousePosition.y} />

      {/* Gradient Overlay for Hero */}
      <div className="absolute top-0 inset-x-0 h-screen bg-gradient-to-b from-transparent via-transparent to-[#000000] pointer-events-none" style={{ zIndex: 2 }} />

      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        onAuthClick={() => setShowAuthPage(true)}
        onLogout={handleLogout}
      />

      <WhatsAppFloatingUI />

      <AnimatePresence>
        {showAuthPage && (
          <AuthPage onLogin={handleLogin} onClose={() => setShowAuthPage(false)} />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        {/* Abstract Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          {/* New Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Introducing v2.0 - Now with AI Voice</span>
          </motion.div>

          {/* Floating Icons with Ambient Glow */}
          <motion.div
            className="flex justify-center gap-12 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { Icon: Sparkles, color: '#4F46E5', delay: 0 },
              { Icon: Zap, color: '#10B981', delay: 0.5 },
              { Icon: MessageCircle, color: '#7C3AED', delay: 0.2 }
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, i % 2 === 0 ? 5 : -5, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                className="relative group"
              >
                <item.Icon className="w-10 h-10" style={{
                  color: item.color,
                  filter: `drop-shadow(0 0 15px ${item.color}80)`
                }} />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-full" />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <div className="relative inline-block">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white tracking-tight leading-[0.9] md:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Master Your <br />
              <span
                className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent italic px-4 inline-block py-2 pb-4 tracking-tighter"
                style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))' }}
              >
                Business Operations
              </span>
            </motion.h1>

            {/* Floating 'Mental Clarity' Chip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute -right-4 top-1/2 hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-2xl rotate-12 hover:rotate-0 transition-transform cursor-pointer group shadow-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#10B981] group-hover:scale-150 transition-transform" />
              <span className="text-xs font-bold text-white tracking-widest uppercase">98% Clarity</span>
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            The world's first AI Assistant that runs your entire agency through simple WhatsApp conversations.
          </motion.p>

          {/* CTA Buttons - More Premium */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              onClick={() => setShowAuthPage(true)}
              className="group relative px-10 py-5 bg-[#10B981] text-black font-black text-sm tracking-[0.2em] uppercase rounded-2xl overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_#10B98180]" />
            </motion.button>

            <motion.button
              className="group px-10 py-5 bg-white/5 text-white font-black text-sm tracking-[0.2em] uppercase rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features
            </motion.button>
          </motion.div>

          {/* Feature Pills - Better Alignment & Style */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-20 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {['English & Urdu', 'Daily Scans', 'Financial Tracking', 'Automated Reminders'].map((feature, index) => (
              <motion.div
                key={feature}
                className="px-6 py-2.5 bg-white/[0.03] border border-white/5 rounded-xl text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#10B981] hover:border-[#10B981]/20 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-1 h-1 rounded-full bg-current opacity-50" />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main >

      <ValuePropSection />

      <InfoSection />

      <ProcessSection />

      <AboutSection />

      <PricingSection />

      <RoadmapSection />

      <Footer />


    </div >
  );
}