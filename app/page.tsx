import Image from "next/image";
import dynamic from "next/dynamic";
import HomePage from "@/components/homepage/HomePage";

// const HomePage = dynamic(() => import("@/components/homepage/HomePage"), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen">
      <HomePage />
     
    </div>
  );
}
