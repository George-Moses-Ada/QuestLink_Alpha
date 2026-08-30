import "./globals.css";
import { Providers } from "../components/Providers";

export const metadata = {
  title: "QuestLink — Complete quests. Build your Power.",
  description: "QuestLink Alpha"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Providers>{children}</Providers></body></html>;
}
