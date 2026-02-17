import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative">
        {/* Logo with gradient and glow */}
        <div className="text-3xl font-bold tracking-tighter">
          <span
            className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(79, 70, 229, 0.5))',
            }}
          >
            AIPM
          </span>
        </div>

        {/* Circuit/Brain design overlay */}
        <svg
          className="absolute -top-1 -right-1 w-4 h-4 opacity-70"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="3" fill="url(#logo-gradient)" />
          <circle cx="6" cy="6" r="2" fill="url(#logo-gradient)" opacity="0.6" />
          <circle cx="18" cy="6" r="2" fill="url(#logo-gradient)" opacity="0.6" />
          <circle cx="6" cy="18" r="2" fill="url(#logo-gradient)" opacity="0.6" />
          <circle cx="18" cy="18" r="2" fill="url(#logo-gradient)" opacity="0.6" />
          <line x1="12" y1="12" x2="6" y2="6" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <line x1="12" y1="12" x2="18" y2="6" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <line x1="12" y1="12" x2="6" y2="18" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <line x1="12" y1="12" x2="18" y2="18" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-white/90 text-[10px] md:text-sm font-medium tracking-wide hidden md:block uppercase tracking-[0.1em]">
        AI Assistant Project Manager
      </div>
    </motion.div>
  );
}
