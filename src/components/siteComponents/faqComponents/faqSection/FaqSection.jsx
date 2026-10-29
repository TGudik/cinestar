import SectionHeader from "../../sectionHeader/SectionHeader";
import SomeSection from "../../someSection/SomeSection";
import FaqList from "../faqList/FaqList";
import styles from "./faqSection.module.css";

export default function FaqSection() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader
        centered
        eyebrow={"OFTE STILLEDE SPØRGSMÅL"}
        title="DE MEST ALMINDELIGE SPØRGSMÅL, VI FÅR"
        body={
          "Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores processer, tjenester og produktioner. Har du brug for yderligere information? Tøv ikke med at kontakte os!"
        }
      />
      <FaqList />
    </div>
  );
}
