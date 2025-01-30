"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAppKit } from "@/lib/appkit-config";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [walletState, setWalletState] = useState({
    isConnected: false,
    address: null,
  });

  useEffect(() => {
    const appKit = getAppKit();
    if (appKit) {
      // Initial state
      const updateState = () => {
        setWalletState({
          isConnected: Boolean(appKit.wallet),
          address: appKit.wallet?.address || null,
        });
        setIsLoading(false);
      };

      updateState();

      // Watch for wallet changes
      const interval = setInterval(updateState, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  const connect = async () => {
    try {
      const appKit = getAppKit();
      await appKit?.connectWallet();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnect = async () => {
    try {
      const appKit = getAppKit();
      await appKit?.disconnectWallet();
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  const value = {
    connect,
    disconnect,
    isConnected: walletState.isConnected,
    address: walletState.address,
    isLoading,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
