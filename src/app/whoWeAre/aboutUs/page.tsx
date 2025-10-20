import Header from "@/app/components/header";
import AboutHero from "./components/aboutHeroSection";
import AgencyIntro from "@/app/components/agencyIntro";
import AgencyRole from "@/app/components/agancyRole";
import PhilosophySection from "./components/philosophySection";
import WebCompany from "@/app/services/webDesign/components/webCompany";
import WebFAQSection from "@/app/services/webDesign/components/webFAQs";
import ProjectStart from "../../components/projectStart";
import SuccessfulProjects from "@/app/components/succesfullProject";
import ReviewSection from "@/app/services/webDesign/components/reviewSlider";
import Industries from "@/app/components/industries";
import ContactTabs from "@/app/components/contactTab";
import Footer from "@/app/components/footer";
import FooterNew from "@/app/components/footerNew";
import ValuesSection from "./components/valueSection";

export default function AboutUs() {
  return (
    <section>
      <Header />
      <AboutHero />
      <AgencyIntro />
      <AgencyRole />
      <PhilosophySection />
      <WebCompany />
      <ValuesSection />
      <WebFAQSection />
      <ProjectStart />
      <SuccessfulProjects />
      <ReviewSection />
      <Industries />
      <ContactTabs />
      <FooterNew />
    </section>
  );
}
