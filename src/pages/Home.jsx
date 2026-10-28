import Hero from "../components/hero/Hero";
import heroImg from "../assets/studio.jpg"
import StudioSection from "../components/studioSection/StudioSection";
import Portfolio from "../components/portfolio/Portfolio";
import ServiceSection from "../components/serviceSection/ServiceSection";
import HistorySection from "../components/historySection/HistorySection";
import TestimonialsSection from "../components/testimonialsSection/TestimonialsSection";
import ContactSection from "../components/contactSection/ContactSection";

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
        </main>
      </div>
    );
}