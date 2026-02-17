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
import { Sparkles, Zap, MessageCircle, ArrowRight } from 'lucide-react';

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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] via-[#4F46E5] to-[#7C3AED] z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Noise Texture Overlay - Moved to back */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transform translate-z-0" />

      {/* Star Particles Background */}
      <StarParticles mouseX={mousePosition.x} mouseY={mousePosition.y} />

      {/* Gradient Overlay for Hero */}
      <div className="absolute top-0 inset-x-0 h-screen bg-gradient-to-b from-transparent via-transparent to-[#000000] pointer-events-none" style={{ zIndex: 1 }} />

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
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#10B981]/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-[#4F46E5]/[0.04] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-12"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Introducing v2.0 — Now with AI Voice</span>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="flex justify-center gap-16 mb-12"
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
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                className="relative"
              >
                <item.Icon className="w-8 h-8" style={{
                  color: item.color,
                  filter: `drop-shadow(0 0 12px ${item.color}60)`
                }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 text-white tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Master Your{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Business
            </span>
            <br />
            <span className="text-white/80 font-light">Operations</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-white/30 mb-14 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            The world's first AI Assistant that runs your entire agency through simple WhatsApp conversations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              onClick={() => setShowAuthPage(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-[#10B981] text-black font-bold text-sm tracking-[0.15em] uppercase rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="group px-8 py-4 bg-white/[0.03] text-white/60 font-bold text-sm tracking-[0.15em] uppercase rounded-xl border border-white/[0.06] hover:border-white/15 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features
            </motion.button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            className="flex flex-wrap justify-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { value: '500+', label: 'Active Users' },
              { value: '10K+', label: 'Tasks Managed' },
              { value: '99.9%', label: 'Uptime' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              >
                <div className="text-xl font-bold text-white/60 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/20 mt-1">{stat.label}</div>
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