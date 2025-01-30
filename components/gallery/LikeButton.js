"use client";

import { useState } from "react";
import { useWallet } from "@/components/auth/WalletProvider";

export function LikeButton({ nftId, likes: initialLikes }) {
  const { isConnected } = useWallet();
  const [likes, setLikes] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    if (!isConnected) return;

    setIsLiking(true);
    try {
      // TODO: Implement on-chain like functionality
      setLikes((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to like NFT:", error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={!isConnected || isLiking}
      className={`flex items-center gap-1 px-3 py-1 rounded-full ${
        isConnected
          ? "bg-pink-100 hover:bg-pink-200 text-pink-600"
          : "bg-gray-100 text-gray-400"
      }`}
    >
      <span>♥</span>
      <span>{likes}</span>
    </button>
  );
}
