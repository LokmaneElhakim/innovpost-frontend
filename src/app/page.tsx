import { Actualites } from "@/components/Actualites";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/FeedBack";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Actualites />
      <Contact />
    </main>
  );
}
