"use client";

export default function LocationMap() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_350px_at_20%_50%,rgba(147,197,253,0.12),transparent),radial-gradient(600px_300px_at_80%_30%,rgba(196,181,253,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Find us</h2>
          <p className="mt-3 text-white/70">We’re remote-first with presence across India.</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.77%2C18.94%2C77.64%2C13.08&layer=mapnik"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none -mt-[1px] h-[1px] w-full bg-white/10" />
        </div>
      </div>
    </section>
  );
}


