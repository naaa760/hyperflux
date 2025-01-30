"use client";
import { motion } from "framer-motion";

interface EvolutionStage {
  level: number;
  description: string;
  requiredActions: string;
}

const evolutionStages: EvolutionStage[] = [
  {
    level: 1,
    description: "Basic Geometric Pattern",
    requiredActions: "Connect Wallet",
  },
  {
    level: 2,
    description: "Enhanced Pattern with Social Elements",
    requiredActions: "Complete Profile",
  },
  {
    level: 3,
    description: "Dynamic Landscape",
    requiredActions: "First Swap",
  },
  {
    level: 4,
    description: "Financial Motifs Integration",
    requiredActions: "Refer Friends",
  },
];

export const NFTEvolutionPreview = ({ currentLevel = 1 }) => {
  return (
    <motion.div
      className="w-full max-w-md bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#C0C0C0] to-[#FFFFFF] bg-clip-text text-transparent">
        Evolution Progress
      </h3>
      <div className="space-y-4">
        {evolutionStages.map((stage, index) => (
          <motion.div
            key={stage.level}
            className={`relative p-4 rounded-lg ${
              currentLevel >= stage.level ? "bg-white/10" : "bg-white/5"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFFFFF] bg-clip-text text-transparent font-semibold">
                Level {stage.level}
              </span>
              {currentLevel >= stage.level && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-[#FFD700]"
                >
                  ✓
                </motion.div>
              )}
            </div>
            <p className="text-[#C0C0C0] text-sm">{stage.description}</p>
            <p className="text-xs text-[#C0C0C0]/70 mt-1">
              {stage.requiredActions}
            </p>
            {currentLevel === stage.level && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFFFFF]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
