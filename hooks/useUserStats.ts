"use client";
import { useAccount, useBalance, useBlockNumber } from "wagmi";
import { robinhoodTestnet } from "../components/Providers";

export function useUserStats() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address,
    chainId: robinhoodTestnet.id,
  });
  const { data: blockNumber } = useBlockNumber({
    chainId: robinhoodTestnet.id,
    watch: true,
  });

  // Calculate power based on balance (100 power per ETH)
  const power = balance ? Math.floor(Number(balance.formatted) * 100) : 0;

  // Mock streak calculation - in real app, this would come from transaction history
  const streak = isConnected ? 7 : 0;

  // Mock eligibility - in real app, this would be calculated from multiple factors
  const eligibility = isConnected ? 82 : 0;

  return {
    power,
    streak,
    eligibility,
    isConnected,
    address,
    blockNumber,
  };
}
