import { AppKit } from "@reown/appkit";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

// 2. Create a metadata object
const metadata = {
  name: "SBT Social Gallery",
  description: "AI-Generated Soulbound Token Social Gallery",
  url: process.env.NEXT_PUBLIC_APP_URL,
  icons: ["https://your-icon-url.com"],
};

// 3. Create AppKit configuration
const config = {
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
  },
};

// Create a singleton instance
let appKitInstance;

export const getAppKit = () => {
  if (typeof window !== "undefined" && !appKitInstance) {
    appKitInstance = new AppKit();
    appKitInstance.configure(config);
  }
  return appKitInstance;
};
