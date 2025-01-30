import { PublicKey } from "@solana/web3.js";

export interface NFT {
  id: string;
  address: PublicKey;
  owner: PublicKey;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: {
      level: number;
      hasGoldenFrame: boolean;
      lastUpdate: string;
    };
  };
  likes: number;
  evolution: {
    stage: number;
    nextUpdateAt: Date;
  };
}

export interface User {
  id: string;
  wallet: PublicKey;
  socialHandle: string;
  referralCount: number;
  nfts: NFT[];
  joinedAt: Date;
}
