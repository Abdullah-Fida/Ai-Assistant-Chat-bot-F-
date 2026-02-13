import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { StarParticles } from './components/StarParticles';
import { Navbar } from './components/Navbar';
import { InfoSection } from './components/InfoSection';
import { ValuePropSection } from './components/ValuePropSection';
import { ProcessSection } from './components/ProcessSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Sparkles, Zap, MessageCircle } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] overflow-hidden relative">
      {/* Star Particles Background */}
      <StarParticles mouseX={mousePosition.x} mouseY={mousePosition.y} />

      {/* Gradient Overlay for Hero */}
      <div className="absolute top-0 inset-x-0 h-screen bg-gradient-to-b from-transparent via-transparent to-[#000000] pointer-events-none" style={{ zIndex: 2 }} />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Icons */}
          <motion.div
            className="flex justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-8 h-8 text-[#4F46E5]" style={{ filter: 'drop-shadow(0 0 10px rgba(79, 70, 229, 0.7))' }} />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Zap className="w-8 h-8 text-[#10B981]" style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.7))' }} />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <MessageCircle className="w-8 h-8 text-[#7C3AED]" style={{ filter: 'drop-shadow(0 0 10px rgba(124, 58, 237, 0.7))' }} />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Your AI Personal Assistant for <br />
            <span
              className="bg-gradient-to-r from-[#10B981] via-[#6EE7B7] to-[#059669] bg-clip-text text-transparent italic px-2 inline-block"
              style={{ filter: 'drop-shadow(0 0 1px rgba(16, 185, 129, 0.2))' }}
            >
              Projects, Tasks, and Payments
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-3xl text-white/70 mb-12 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Turn your daily chaos into total mental clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {/* Start Free Trial Button */}
            <motion.button
              className="group relative px-8 py-4 bg-[#10B981] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Free Trial</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#059669]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)',
                }}
              />
            </motion.button>

            {/* Learn More Button */}
            <motion.button
              className="group relative px-8 py-4 bg-[#4F46E5] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 30px rgba(79, 70, 229, 0.6), 0 0 60px rgba(79, 70, 229, 0.3)',
                }}
              />
            </motion.button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-16 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >

            {['English & Urdu Support', 'WhatsApp Interface', 'No API Needed', 'Daily Cron Summaries'].map((feature, index) => (
              <motion.div
                key={feature}
                className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
              >
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