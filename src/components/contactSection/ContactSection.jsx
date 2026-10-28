import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./contactSection.module.css"
import bgImg from "../../assets/studie2.jpg"
import ContactForm from "./contactForm/ContactForm"

export default function ContactSection() {
    return (
        <div className={styles.wrapper}>
            <SectionHeader 
                eyebrow={"KONTAKT"}
                title={"BOOK EN SAMTALE MED OS"}
                body={"Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!"}
            />
            <img src={bgImg} aria-hidden className={styles.bgImg} />
            <ContactForm />
        </div>
    )
}