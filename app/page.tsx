"use client";
import Link from "next/link";
import { WalletButton } from "../components/WalletButton";
import { QuestCard } from "../components/QuestCard";
import { useUserStats } from "../hooks/useUserStats";

const quests = [
  { title: "Make your first onchain action", description: "Complete your first qualifying action on Robinhood Chain Testnet.", tag: "ONCHAIN" },
  { title: "Explore QuestLink", description: "Open your first quest and begin building your Power.", tag: "STARTER" },
  { title: "Return and keep your streak", description: "Complete a qualifying action today to keep your daily streak alive.", tag: "STREAK" }
];

export default function Home() {
  const { power, streak, eligibility, isConnected, address } = useUserStats();
  const referralCode = address ? `questlink.xyz/?ref=${address.slice(0,8)}` : "questlink.xyz/?ref=ABC123";

  return <main className="min-h-screen overflow-hidden">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,.08),transparent_32%),radial-gradient(circle_at_20%_45%,rgba(120,120,255,.06),transparent_30%)]" />
    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <div className="text-lg font-bold tracking-tight">Quest<span className="text-white/45">Link</span></div>
      <div className="hidden gap-8 text-sm text-white/55 md:flex"><a href="#quests">Quests</a><a href="#how">How it works</a><a href="#referral">Referral</a></div>
      <WalletButton />
    </nav>

    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pt-28">
      <div className="max-w-4xl">
        <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs uppercase tracking-[.2em] text-white/55">QuestLink Alpha · Robinhood Chain</div>
        <h1 className="text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-7xl lg:text-[92px]">Complete quests.<br/><span className="text-white/40">Build your Power.</span></h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">Complete onchain quests, build your streak, invite your network, and qualify for the QuestLink airdrop.</p>
        <div className="mt-9 flex flex-wrap gap-3"><WalletButton /><Link href="#quests" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium">Explore quests</Link></div>
      </div>
      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {[[power.toString(),"POWER"],[streak.toString(),"DAY STREAK"],[eligibility.toString()+"%","ELIGIBILITY"]].map(([v,l])=><div key={l} className="rounded-3xl border border-white/10 bg-white/[.035] p-6"><div className="text-4xl font-semibold tracking-tight">{v}</div><div className="mt-2 text-xs uppercase tracking-[.18em] text-white/40">{l}</div></div>)}
      </div>
    </section>

    <section id="quests" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-8 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[.2em] text-white/35">Your quests</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Start earning Power</h2></div><span className="text-sm text-white/40">100 Power / action</span></div>
      <div className="grid gap-4 md:grid-cols-3">{quests.map(q=><QuestCard key={q.title} {...q} isConnected={isConnected}/>)}</div>
    </section>

    <section id="how" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[.025] p-8 lg:p-12">
        <p className="text-xs uppercase tracking-[.2em] text-white/35">The loop</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">One simple path from questing to claiming.</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-7">{["Connect","Quest","+100 Power","Streak","1 Referral","Eligible","Claim"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-black/30 p-4"><div className="text-xs text-white/30">0{i+1}</div><div className="mt-5 text-sm font-medium">{x}</div></div>)}</div>
      </div>
    </section>

    <section id="referral" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 lg:p-14">
        <p className="text-xs uppercase tracking-[.2em] text-white/35">Referral</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Invite your people.<br/><span className="text-white/40">Unlock your eligibility.</span></h2>
        <p className="mt-5 max-w-xl text-white/50">One qualified referral satisfies the Alpha referral requirement.</p>
        <div className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2"><div className="flex-1 truncate px-3 text-sm text-white/55">{referralCode}</div><button onClick={() => navigator.clipboard.writeText(referralCode)} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">Copy link</button></div>
      </div>
    </section>

    <footer className="relative mx-auto max-w-7xl px-6 py-10 text-sm text-white/35 lg:px-10">QuestLink Alpha · Built for the Robinhood Chain testnet.</footer>
  </main>
}
