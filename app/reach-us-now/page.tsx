import Hero from "@/components/reachUs/Hero";
import ContactCards from "@/components/reachUs/ContactCards";
import ContactForm from "@/components/reachUs/ContactForm";
import LocationMap from "@/components/reachUs/LocationMap";
import FAQ from "@/components/reachUs/FAQ";

export const metadata = {
  title: "Reach Us Now • School Platform",
  description: "Get in touch with our team for demos, support, or partnership inquiries.",
};

export default function ReachUsNowPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <ContactCards />
      <ContactForm />
      <LocationMap />
      <FAQ />
    </main>
  );
}


