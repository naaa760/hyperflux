"use client";
import { motion } from "framer-motion";

export const AnimatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
      {/* Enhanced animated background with multiple gradients */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#000000] to-[#1a1a1a] opacity-90" />

        {/* Animated overlay gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-[#C0C0C0]/10 via-transparent to-[#FFFFFF]/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shimmering effect */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:25px_25px]"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Moving shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Subtle color waves */}
        <motion.div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(135,206,235,0.1)_0deg,rgba(255,248,220,0.1)_120deg,rgba(139,69,19,0.1)_240deg)]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Golden dust particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FFD700]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
