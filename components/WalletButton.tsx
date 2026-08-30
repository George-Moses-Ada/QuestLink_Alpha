 "use client";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { robinhoodTestnet } from "./Providers";

export function WalletButton() {
  const { address, isConnected, chainId } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: switching } = useSwitchChain();

  if (isConnected && chainId !== robinhoodTestnet.id) {
    return <button onClick={() => switchChain({ chainId: robinhoodTestnet.id })} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">{switching ? "Switching…" : "Switch network"}</button>;
  }
  if (isConnected) {
    return <button onClick={() => disconnect()} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium">{address?.slice(0,6)}…{address?.slice(-4)}</button>;
  }
  return <button onClick={() => connect({ connector: connectors[0] })} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">{isPending ? "Connecting…" : "Connect wallet"}</button>;
}
