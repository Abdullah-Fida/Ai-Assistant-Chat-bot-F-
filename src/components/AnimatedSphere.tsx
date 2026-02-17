import { motion } from 'motion/react';

interface AnimatedSphereProps {
    onClick?: () => void;
    className?: string;
}

export const AnimatedSphere = ({ onClick, className }: AnimatedSphereProps) => {
    return (
        <motion.div
            onClick={onClick}
            className={`cursor-pointer relative group ${className}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Main Sphere */}
            <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#10B981] via-[#4F46E5] to-[#7C3AED] relative overflow-hidden"
                animate={{
                    boxShadow: [
                        '0 0 10px rgba(16, 185, 129, 0.5), 0 0 20px rgba(79, 70, 229, 0.3)',
                        '0 0 20px rgba(16, 185, 129, 0.7), 0 0 40px rgba(79, 70, 229, 0.5)',
                        '0 0 10px rgba(16, 185, 129, 0.5), 0 0 20px rgba(79, 70, 229, 0.3)',
                    ],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Inner Glow/Highlight */}
                <div className="absolute top-1 left-1 w-3 h-3 bg-white/40 rounded-full blur-[2px]" />

                {/* Rotating Shine */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ skewX: -20 }}
                />
            </motion.div>

            {/* Orbiting particles or rings could be added here for more "wow" factor */}
            <motion.div
                className="absolute inset-0 border border-white/20 rounded-full"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
        </motion.div>
    );
};
