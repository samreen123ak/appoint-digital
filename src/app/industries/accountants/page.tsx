import AcountHero from "./components/accountHero";
import WebAgency from "@/app/services/webDesign/components/webAgency";
import WebProject from "@/app/services/webDesign/components/webproject";
import ReviewSection from "@/app/services/webDesign/components/reviewSlider";
import ProjectCarousel from "@/app/services/webDesign/components/projectCarousel";
import WebCompany from "@/app/services/webDesign/components/webCompany";
import DesignConsulting from "@/app/services/webDesign/components/DesignConsulting";
import DesignRole from "@/app/services/webDesign/components/designRole";
import DesignTools from "@/app/services/webDesign/components/designTool";
import WebFAQSection from "@/app/services/webDesign/components/webFAQs";
import ContactTabs from "@/app/components/contactTab";
import Footer from "@/app/components/footer";

export default function Accountants() {
  return (
    <section>
      <AcountHero />
      <WebAgency />
      <WebProject />
      <ReviewSection />
      <ProjectCarousel />
      <WebCompany />
      <DesignConsulting />
      <DesignRole />
      <DesignTools />
      <WebFAQSection />
      <ContactTabs />
      <Footer />
    </section>
  );
}
