import Hero from "../components/hero/Hero";
import heroImg from "../assets/studio.jpg"
import SomeSection from "../components/someSection/SomeSection";
import FaqSection from "../components/faqComponents/faqSection/FaqSection";

export default function Faq() {

    return (
        <div>
            <Hero 
                variant="page"
                title={"FAQ"}
                image={heroImg}
                breadcrumbs={[{label: "FORSIDE", to: "/"}, {label: "FAQ"}]}
            />
            <main>
                <FaqSection />
                <SomeSection />
            </main>
        </div>
    )
}