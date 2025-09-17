"use client";

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  image: string;
};

const team: Member[] = [
  { name: "Aarav Mehta", role: "Product Lead", image: "/school.png" },
  { name: "Isha Verma", role: "Engineering", image: "/school.png" },
  { name: "Rahul Nair", role: "Design", image: "/school.png" },
  { name: "Priya Singh", role: "Success", image: "/school.png" },
];

export default function TeamSpotlight() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_380px_at_50%_20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Team Spotlight</h2>
          <p className="mt-3 text-white/70">The people crafting your school’s digital future.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image src={m.image} alt={m.name} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              </div>
              <div className="mt-4">
                <div className="text-base font-semibold">{m.name}</div>
                <div className="text-sm text-white/70">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


