import Header from "@/app/components/header";
import BlogHero from "../components/blogHeroSection";
import ContactTabs from "@/app/components/contactTab";
import FooterNew from "@/app/components/footerNew";
import ArticlesSection from "@/app/components/articlesSection";

export default function Blogs() {
  return (
    <section>
      <Header />
      <BlogHero />
      <ArticlesSection />
      <ContactTabs />
      <FooterNew />
    </section>
  );
}
