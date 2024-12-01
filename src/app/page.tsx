import { Actualites } from "@/components/Actualites";
import HeroSection from "@/components/Hero";
import NavBar from "../components/global/NavBar";
import Services from "@/components/Services";
import Contact from "@/components/Feedback";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Services />
      <Actualites />
      <Contact />
    </main>
  );
}
