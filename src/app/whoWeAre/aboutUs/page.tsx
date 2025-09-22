import Header from "@/app/components/header";
import AboutHero from "./components/aboutHeroSection";
import AgencyIntro from "@/app/components/agencyIntro";
import AgencyRole from "@/app/components/agancyRole";
import PhilosophySection from "./components/philosophySection";

export default function AboutUs() {
  return (
    <section>
      <Header />
      <AboutHero />
      <AgencyIntro />
      <AgencyRole />
      <PhilosophySection />
    </section>
  );
}
