import styles from "./contactInfo.module.css"
import { EnvelopeFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";

export default function ContactInfo() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.infoLine}>
          <div className={styles.iconWrapper}>
            <TelephoneFill fill="#F07232" />
          </div>
          <p className={styles.lineText}>+45 12 34 56 78</p>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.iconWrapper}>
            <GeoAltFill fill="#F07232" />
          </div>
          <p className={styles.lineText}>Fotovej 66, 8456 Cineby</p>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.iconWrapper}>
            <EnvelopeFill fill="#F07232" />
          </div>
          <p className={styles.lineText}>cinestar@production.dk</p>
        </div>
      </div>
    );
}