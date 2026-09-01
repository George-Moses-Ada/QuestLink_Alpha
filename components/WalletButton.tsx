 "use client";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { robinhoodTestnet, ethereumMainnet } from "./Providers";

export function WalletButton() {
  const { address, isConnected, chainId } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: switching } = useSwitchChain();

  const chains = [
    { id: ethereumMainnet.id, name: "Ethereum Mainnet" },
    { id: robinhoodTestnet.id, name: "Robinhood Testnet" }
  ];

  if (isConnected) {
    const currentChain = chains.find(c => c.id === chainId);
    return (
      <div className="flex items-center gap-2">
        <select
          value={chainId}
          onChange={(e) => switchChain({ chainId: Number(e.target.value) })}
          disabled={switching}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white outline-none disabled:opacity-50"
        >
          {chains.map(chain => (
            <option key={chain.id} value={chain.id} className="text-black">
              {chain.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => disconnect()}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium"
        >
          {address?.slice(0,6)}…{address?.slice(-4)}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
    >
      {isPending ? "Connecting…" : "Connect wallet"}
    </button>
  );
}
