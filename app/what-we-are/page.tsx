import Hero from "@/components/whatWeAre/Hero";
import MissionVision from "@/components/whatWeAre/MissionVision";
import Stats from "@/components/whatWeAre/Stats";
import TeamSpotlight from "@/components/whatWeAre/TeamSpotlight";
import Values from "@/components/whatWeAre/Values";
import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("@/components/whatWeAre/Hero"), { ssr: false });
// const Values = dynamic(() => import("@/components/whatWeAre/Values"), { ssr: false });
// const Stats = dynamic(() => import("@/components/whatWeAre/Stats"), { ssr: false });
// const MissionVision = dynamic(() => import("@/components/whatWeAre/MissionVision"), { ssr: false });
// const TeamSpotlight = dynamic(() => import("@/components/whatWeAre/TeamSpotlight"), { ssr: false });

export const metadata = {
  title: "What We Are • School Platform",
  description: "Learn about our mission, values, and the team behind the platform.",
};

export default function WhatWeArePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero  />
      <Values />
      <Stats         />
      <MissionVision />
      <TeamSpotlight />
    </main>
  );
}


