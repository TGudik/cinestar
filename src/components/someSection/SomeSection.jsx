import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./someSection.module.css"
import {Facebook, TwitterX, Linkedin, Instagram, Youtube} from "react-bootstrap-icons"

export default function SomeSection() {

    return (
        <div className={styles.wrapper}>
            <SectionHeader centered title={"HAR DU EN IDÉ I TANKERNE?\nLAD OS STARTE DIT PROJEKT SAMMEN"}/>
            <div className={styles.infoWrapper}>
                <p className={styles.info}>Cinestar Studio</p>
                <p className={styles.info}>+123-456-789</p>
                <p className={styles.info}>hello@awesomesite.com</p>
            </div>
            <div className={styles.iconsWrapper}>
                <div className={styles.row}>
                    <div className={styles.iconWrapper}>
                        <Facebook/>
                    </div>
                    <div className={styles.iconWrapper}>
                        <TwitterX/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.iconWrapper}>
                        <Linkedin/>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Instagram/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.iconWrapper}>
                        <Youtube/>
                    </div>
                </div>
            </div>

        </div>
    )

}