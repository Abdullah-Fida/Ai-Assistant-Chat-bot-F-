import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2.5"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Logo Mark */}
      <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#10B981] via-[#4F46E5] to-[#7C3AED] flex items-center justify-center overflow-hidden">
        <span className="text-white font-bold text-xs tracking-tight">AI</span>
        <div className="absolute inset-0 bg-white/10 rounded-lg" />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm tracking-tight leading-none">
          AIPM
        </span>
        <span className="text-white/20 text-[8px] font-medium tracking-[0.15em] uppercase leading-none mt-0.5 hidden sm:block">
          Project Manager
        </span>
      </div>
    </motion.div>
  );
}
