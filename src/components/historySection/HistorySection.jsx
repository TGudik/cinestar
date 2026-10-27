import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./historySection.module.css"
import ceoImg from "../../assets/filming.jpg"

export default function HistorySection() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow={"HISTORIEN"}
            title={"HISTORIEN BAG CINESTAR"}
            body={
              "Cinestar blev grundlagt med en passion for at fortælle historier, der fanger og bevæger sit publikum. Virksomheden begyndte som en lille uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og visuelt engagerende indhold."
            }
          />
        </div>
        <div className={styles.ceoWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.ceoEyebrow}>DYAS KARDINAL</h3>
            <h4 className={styles.ceoTitle}>CEO AF CINESTAR</h4>
          </div>
          <img
            src={ceoImg}
            alt="CEO af Cinestar Dyas Kardinal"
            className={styles.ceoImg}
          />
        </div>
      </div>
    );
}