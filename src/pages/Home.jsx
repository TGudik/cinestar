import Hero from "../components/siteComponents/hero/Hero";
import heroImg from "../assets/studio.jpg";
import StudioSection from "../components/siteComponents/studioSection/StudioSection";
import Portfolio from "../components/siteComponents/portfolio/Portfolio";
import ServiceSection from "../components/siteComponents/serviceSection/ServiceSection";
import HistorySection from "../components/siteComponents/historySection/HistorySection";
import TestimonialsSection from "../components/siteComponents/testimonialsSection/TestimonialsSection";
import ContactSection from "../components/siteComponents/contactSection/ContactSection";
import LatestBlogSection from "../components/siteComponents/blogComponents/latestBlogSection/LatestBlogSection";
import SomeSection from "../components/siteComponents/someSection/SomeSection";

export default function Home() {
  return (
    <div>
      <Hero
        variant="home"
        image={heroImg}
        eyebrow="CINESTAR STUDIO"
        title="FILM & TV"
        highlight="PRODUKTION"
        body="Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til færdigt produkt leverer vi professionelle film- og tv-løsninger, der gør din historie uforglemmelig"
      />
      <main>
        <StudioSection />
        <Portfolio />
        <ServiceSection />
        <HistorySection />
        <TestimonialsSection />
        <ContactSection />
        <LatestBlogSection />
        <SomeSection />
      </main>
    </div>
  );
}
