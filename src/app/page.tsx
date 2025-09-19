import AgencyRole from "./components/agancyRole";
import AgencyIntro from "./components/agencyIntro";
import AppointSection from "./components/appointSection";
import ArticlesSection from "./components/articlesSection";
import BrandSection from "./components/brandSection";
import ContactTabs from "./components/contactTab";
import DigitalSection from "./components/digitalSection";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Industries from "./components/industries";
import ServicesSection from "./components/serviceSection";
import StartProject from "./components/startProject";
import ThriveSection from "./components/thriveSection";
import AOSWrapper from "./components/aosProvider";
import ProjectStart from "./components/projectStart";
import SuccessfulProjects from "./components/succesfullProject";

export default function Home() {
  return (
    <AOSWrapper>
      <section>
        <Header />
        <Hero />
        <BrandSection />
        <ServicesSection />
        <AppointSection />
        <Industries />
        <ProjectStart />
        <SuccessfulProjects />
        <AgencyIntro />
        <AgencyRole />
        <ArticlesSection />
        <ContactTabs />
        <Footer />
      </section>
    </AOSWrapper>
  );
}
