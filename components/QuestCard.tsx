 "use client";
import { useState } from "react";
import { useAccount, useWriteContract, useReadContract } from "wagmi";
import { robinhoodTestnet } from "./Providers";

export function QuestCard({ title, description, tag, done=false, isConnected=false }: { title:string; description:string; tag:string; done?:boolean; isConnected?:boolean }) {
  const [completed, setCompleted] = useState(done);
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const handleQuestStart = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    // In a real implementation, this would interact with a smart contract
    // to verify onchain actions and mark quests as complete
    try {
      // Mock quest completion - in production this would be a real contract call
      setCompleted(true);
      console.log("Quest started:", title, "by", address);
    } catch (error) {
      console.error("Failed to start quest:", error);
    }
  };

  return <article className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.055]">
    <div className="mb-8 flex items-start justify-between gap-4">
      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[.18em] text-white/55">{tag}</span>
      <span className="text-sm font-semibold text-white/70">+100 Power</span>
    </div>
    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    <p className="mt-2 min-h-12 text-sm leading-6 text-white/50">{description}</p>
    <button onClick={handleQuestStart} disabled={completed || !isConnected} className="mt-6 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black disabled:bg-white/10 disabled:text-white/45">
      {completed ? "Completed ✓" : !isConnected ? "Connect wallet first" : "Start quest"}
    </button>
  </article>
}
