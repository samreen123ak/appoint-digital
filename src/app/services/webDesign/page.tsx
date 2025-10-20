import Industries from "@/app/components/industries";
import ProjectCarousel from "./components/projectCarousel";
import ReviewSection from "./components/reviewSlider";
import WebAgency from "./components/webAgency";
import WebCompany from "./components/webCompany";
import WebHero from "./components/webHero";
import WebProject from "./components/webproject";
import DesignConsulting from "./components/DesignConsulting";
import DesignRole from "./components/designRole";
import DesignTools from "./components/designTool";
import CustomWebsite from "./components/customWebsite";
import ContactTabs from "@/app/components/contactTab";
import Footer from "@/app/components/footer";
import WebFAQSection from "./components/webFAQs";
import Header from "@/app/components/header";
import ProjectStart from "../../components/projectStart";
import SuccessfulProjects from "../../components/succesfullProject";
import FooterNew from "@/app/components/footerNew";

export default function WebDesign() {
  return (
    <section>
      <Header />
      <WebHero />
      <WebAgency />
      <ProjectStart />
      <SuccessfulProjects />
      <ReviewSection />
      <ProjectCarousel />
      <WebCompany />
      <Industries />
      <DesignConsulting />
      <DesignRole />
      <DesignTools />
      <CustomWebsite />
      <WebFAQSection />
      <ContactTabs />
      <FooterNew />
    </section>
  );
}
