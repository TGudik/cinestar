import Hero from "../components/siteComponents/hero/Hero";
import heroImg from "../assets/studio.jpg";
import SomeSection from "../components/siteComponents/someSection/SomeSection";
import FaqSection from "../components/siteComponents/faqComponents/faqSection/FaqSection";

export default function Faq() {
  return (
    <div>
      <Hero
        variant="page"
        title={"FAQ"}
        image={heroImg}
        breadcrumbs={[{ label: "FORSIDE", to: "/" }, { label: "FAQ" }]}
      />
      <main>
        <FaqSection />
        <SomeSection />
      </main>
    </div>
  );
}
