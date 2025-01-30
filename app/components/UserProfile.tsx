"use client";
import { motion } from "framer-motion";

interface UserStats {
  loginStreak: number;
  swapsCompleted: number;
  referrals: number;
}

export const UserProfile = ({ stats }: { stats: UserStats }) => {
  return (
    <motion.div
      className="w-full max-w-md bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#C0C0C0] to-[#FFFFFF] bg-clip-text text-transparent">
        Activity Stats
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Login Streak" value={stats.loginStreak} />
        <StatCard title="Swaps" value={stats.swapsCompleted} />
        <StatCard title="Referrals" value={stats.referrals} />
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value }: { title: string; value: number }) => (
  <motion.div
    className="text-center p-3 rounded-lg bg-white/5"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFFFFF] bg-clip-text text-transparent"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {value}
    </motion.div>
    <div className="text-xs text-[#C0C0C0] mt-1">{title}</div>
  </motion.div>
);
