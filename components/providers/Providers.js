"use client";

import { AppKit } from "@reown/appkit";
import { WalletProvider } from "@/components/auth/WalletProvider";
import { useEffect } from "react";
import { appKitConfig, getAppKit } from "@/lib/appkit-config";

export default function Providers({ children }) {
  useEffect(() => {
    // Initialize AppKit when the client component mounts
    getAppKit();
  }, []);

  return <WalletProvider>{children}</WalletProvider>;
}
