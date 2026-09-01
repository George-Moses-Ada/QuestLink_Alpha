 "use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { defineChain } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const robinhoodTestnet = defineChain({
  id: 46630,
  name: "Robinhood Chain Testnet",
  nativeCurrency: { name: "Robinhood", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [process.env.NEXT_PUBLIC_RPC_URL || "https://rpc.testnet.chain.robinhood.com"] } }
});

export const ethereumMainnet = defineChain({
  id: 1,
  name: "Ethereum Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: ["https://eth.llamarpc.com"] } }
});

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

const config = createConfig({
  chains: [ethereumMainnet, robinhoodTestnet],
  connectors: [
    injected(),
    walletConnect({ projectId, showQrModal: false })
  ],
  transports: {
    [ethereumMainnet.id]: http(),
    [robinhoodTestnet.id]: http()
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return <WagmiProvider config={config}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></WagmiProvider>;
}
