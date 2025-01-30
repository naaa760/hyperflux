"use client";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { createAppKit } from "@reown/appkit";
import { motion } from "framer-motion";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project Id is not defined.");
}

export const networks = [solana, solanaTestnet, solanaDevnet];

export const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});
const metadata = {
  name: "appkit-example",
  description: "AppKit Example - Solana",
  url: "https://exampleapp.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const modal = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  projectId,
  networks: [solana, solanaTestnet, solanaDevnet],
  features: {
    analytics: true,
    email: true,
    socials: ["google", "x", "github", "discord", "farcaster"],
    emailShowWallets: true,
  },
  themeMode: "light",
});

// Update the colors with more metallic shades
const colors = {
  gold: "#FFD700",
  silver: "#E8E8E8",
  silverShine: "#F4F4F4",
  darkBlue: "#00008B",
  neon: "#39FF14",
  metallic: "linear-gradient(180deg, #FFFFFF 0%, #C0C0C0 47.92%, #787878 100%)",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-br from-[#00008B] via-black to-[#000033]">
      {/* Hero Section with enhanced animations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mb-16 text-center relative"
      >
        {/* Animated shine effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4F4F4]/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />

        <motion.h1
          className="text-6xl font-bold mb-4 relative"
          style={{
            background: `linear-gradient(
              to right,
              #FFD700,
              #FFF,
              #FFD700,
              #C0C0C0,
              #39FF14
            )`,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 20px rgba(255,215,0,0.3)",
          }}
          animate={{
            backgroundPosition: ["0% center", "200% center"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Social Soulbound NFT Gallery
        </motion.h1>

        <motion.p
          className="text-xl relative z-10"
          style={{
            background: `linear-gradient(to right, #C0C0C0, #FFF, #C0C0C0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Evolving AI-generated artwork based on your social activity
        </motion.p>
      </motion.section>

      {/* Enhanced Gallery Grid */}
      <motion.section
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <NFTCard key={i} index={i} />
        ))}
      </motion.section>
    </main>
  );
}

// Enhanced NFT Card Component
const NFTCard = ({ index }: { index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `
          0 0 20px rgba(57, 255, 20, 0.2),
          0 0 40px rgba(255, 215, 0, 0.2),
          0 0 60px rgba(192, 192, 192, 0.1)
        `,
      }}
      className="relative bg-gradient-to-br from-[#00008B]/90 to-black/90 rounded-xl overflow-hidden border border-[#FFD700]/30"
    >
      {/* Metallic shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />

      <motion.div
        className="aspect-square relative"
        whileHover={{ scale: 1.02 }}
      >
        {/* NFT Image with enhanced gradient */}
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#FFD700] via-[#C0C0C0] to-[#39FF14] opacity-80" />
        <motion.div
          className="absolute inset-0 bg-black/50"
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="p-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#FFD700] to-[#FFF] bg-clip-text text-transparent">
          Dynamic SBT #{index}
        </h3>
        <div className="flex justify-between items-center">
          <motion.button
            className="flex items-center space-x-1 text-[#39FF14]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeartIcon className="w-5 h-5" />
            <span className="text-[#39FF14] font-medium">{123 + index}</span>
          </motion.button>
          <motion.div
            className="text-sm bg-gradient-to-r from-[#C0C0C0] to-[#FFF] bg-clip-text text-transparent font-medium"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 5px rgba(192,192,192,0.3)",
                "0 0 20px rgba(192,192,192,0.5)",
                "0 0 5px rgba(192,192,192,0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Level {index}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Update HeartIcon with animation
const HeartIcon = ({ className = "w-6 h-6" }) => (
  <motion.svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    whileHover={{
      scale: 1.2,
      color: colors.neon,
    }}
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
  </motion.svg>
);
