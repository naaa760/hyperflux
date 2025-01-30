"use client";

import { useWallet } from "./WalletProvider";

export default function LoginButton() {
  const { connect, disconnect, isConnected, isLoading } = useWallet();

  if (isLoading) {
    return (
      <button
        className="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg"
        disabled
      >
        Loading...
      </button>
    );
  }

  return isConnected ? (
    <button
      onClick={disconnect}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Disconnect
    </button>
  ) : (
    <button
      onClick={connect}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      Connect Wallet
    </button>
  );
}
