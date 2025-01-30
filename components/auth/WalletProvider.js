"use client";

import { useAppKit } from "@reown/appkit/react";
import { createContext, useContext, useEffect, useState } from "react";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const { connect, disconnect, isConnected, address } = useAppKit();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check initial connection status
    setIsLoading(false);
  }, []);

  const value = {
    connect,
    disconnect,
    isConnected,
    address,
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
