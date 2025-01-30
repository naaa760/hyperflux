"use client";

import Image from "next/image";
import { useState } from "react";
import { LikeButton } from "./LikeButton";

export default function NFTCard({ nft }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={nft.metadata.image}
          alt={nft.metadata.name}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{nft.metadata.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{nft.metadata.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Level {nft.metadata.attributes.level}
          </div>
          <LikeButton nftId={nft.id} likes={nft.likes} />
        </div>
      </div>
    </div>
  );
}
