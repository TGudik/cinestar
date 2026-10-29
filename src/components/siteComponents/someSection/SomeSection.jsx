import { Link } from "react-router-dom"
import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./someSection.module.css"
import {Facebook, TwitterX, Linkedin, Instagram, Youtube} from "react-bootstrap-icons"

export default function SomeSection() {

    return (
      <div className={styles.wrapper}>
        <SectionHeader
          centered
          title={"HAR DU EN IDÉ I TANKERNE?\nLAD OS STARTE DIT PROJEKT SAMMEN"}
        />
        <div className={styles.infoWrapper}>
          <p className={styles.info}>Cinestar Studio</p>
          <p className={styles.info}>+123-456-789</p>
          <p className={styles.info}>hello@awesomesite.com</p>
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.row}>
            <Link
              to={"https://www.facebook.com/"}
              target="_blank"
              className={styles.iconWrapper}
            >
              <Facebook />
            </Link>
            <Link
              target="_blank"
              to={"https://www.x.com/"}
              className={styles.iconWrapper}
            >
              <TwitterX />
            </Link>
          </div>
          <div className={styles.row}>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/"}
              className={styles.iconWrapper}
            >
              <Linkedin />
            </Link>
            <Link
              target="_blank"
              to={"https://www.instagram.com/"}
              className={styles.iconWrapper}
            >
              <Instagram />
            </Link>
          </div>
          <div className={styles.row}>
            <Link
              target="_blank"
              to={"https://www.youtube.com/"}
              className={styles.iconWrapper}
            >
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    );

}