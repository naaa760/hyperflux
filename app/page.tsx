"use client";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { createAppKit } from "@reown/appkit";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NFTEvolutionPreview } from "./components/NFTEvolutionPreview";
import { UserProfile } from "./components/UserProfile";

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
  platinumGlow: "#E5E4E2",
  chrome: "linear-gradient(180deg, #FFFFFF 0%, #C0C0C0 47.92%, #787878 100%)",
  neonSilver: "linear-gradient(to right, #C0C0C0, #FFFFFF, #C0C0C0)",
};

// Add a custom hook for wallet connection status
const useWalletStatus = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Listen for wallet connection events
    const checkConnection = () => {
      const walletElement = document.querySelector("appkit-button");
      const isConnected = walletElement?.getAttribute("connected") === "true";
      setIsConnected(isConnected);
    };

    // Check initially and set up observer
    checkConnection();
    const observer = new MutationObserver(checkConnection);
    const walletElement = document.querySelector("appkit-button");

    if (walletElement) {
      observer.observe(walletElement, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  return isConnected;
};

export default function Home() {
  const isWalletConnected = useWalletStatus();
  const [userStats, setUserStats] = useState({
    loginStreak: 3,
    swapsCompleted: 2,
    referrals: 1,
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mb-16 text-center relative"
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFD700] bg-clip-text text-transparent">
          Social Soulbound NFT Gallery
        </h1>
        <p className="text-xl bg-gradient-to-r from-[#C0C0C0] via-[#FFFFFF] to-[#C0C0C0] bg-clip-text text-transparent mb-8">
          Evolving AI-generated artwork based on your social activity
        </p>

        {!isWalletConnected && (
          <motion.div
            className="max-w-md mx-auto bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 mb-12 border border-white/20"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFFFFF] bg-clip-text text-transparent">
              Connect Your Wallet
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-xs">
                <appkit-button />
              </div>
              <div className="w-full max-w-xs">
                <appkit-network-button />
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>

      {isWalletConnected && (
        <>
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <UserProfile stats={userStats} />
            <NFTEvolutionPreview currentLevel={2} />
          </div>

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
            {[1, 2, 3].map((i) => (
              <NFTCard key={i} index={i} />
            ))}
          </motion.section>
        </>
      )}
    </main>
  );
}

// Enhanced NFT Card Component with silver effects
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
          0 0 20px rgba(255, 255, 255, 0.3),
          0 0 40px rgba(192, 192, 192, 0.2),
          0 0 60px rgba(255, 215, 0, 0.1)
        `,
      }}
      className="relative bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-white/20"
    >
      {/* Enhanced metallic shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
        {/* NFT Image with silver gradient */}
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#C0C0C0] via-[#FFFFFF] to-[#E8E8E8] opacity-80" />
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
        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#C0C0C0] to-[#FFFFFF] bg-clip-text text-transparent">
          Dynamic SBT #{index}
        </h3>
        <div className="flex justify-between items-center">
          <motion.button
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeartIcon className="w-5 h-5 text-[#C0C0C0]" />
            <span className="bg-gradient-to-r from-[#C0C0C0] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
              {123 + index}
            </span>
          </motion.button>
          <motion.div
            className="text-sm bg-gradient-to-r from-[#C0C0C0] to-[#FFFFFF] bg-clip-text text-transparent font-medium"
            animate={{
              opacity: [0.7, 1, 0.7],
              textShadow: [
                "0 0 5px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 5px rgba(255,255,255,0.3)",
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
