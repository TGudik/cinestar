import SectionHeader from "../sectionHeader/SectionHeader";
import TestimonialCarousel from "./testimonialCarousel/TestimonialCarousel";
import styles from "./testimonialsSection.module.css";

export default function TestimonialsSection() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <SectionHeader
            centered
            eyebrow={"UDTALELSER"}
            title={"HVAD SIGER VORES SAMARBEJDSPARTNERE OM OS?"}
          />
          <p className={styles.body}>
            “Cinestar er
            en fantastisk samarbejdspartner, der formår at kombinere kreativitet
            med professionalisme. Deres evne til at skabe unikke og engagerende
            produktioner er imponerende, og resultatet taler altid for sig
            selv.”
          </p>
        </div>
        <div className={styles.carouselWrapper}>
            <TestimonialCarousel />
        </div>
      </div>
    );

}