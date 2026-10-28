import Hero from "../components/hero/Hero";
import heroImg from "../assets/studio.jpg"
import SectionHeader from "../components/sectionHeader/SectionHeader";
import ContactForm from "../components/contactSection/contactForm/ContactForm";

export default function Contact() {
    return (
        <div>
            <Hero 
                variant="page"
                image={heroImg}
                title={"KONTAKT"}
                breadcrumbs={[{label: "FORSIDE", to: "/"}, {label: "KONTAKT"}]}
            />
            <main style={{background:"#000", padding: "60px 20px"}}>
                <SectionHeader eyebrow={"KONTAKT"} title={"TØV IKKE MED AT TAGE KONTAKT"} body={"Har du spørgsmål eller brug for mere information om vores tjenester og processer? Vores team står klar til at hjælpe dig. Kontakt os, og lad os tage en uforpligtende samtale om dine behov og idéer."}/>
                <ContactForm />
            </main>
        </div>
    )
}