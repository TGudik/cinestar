import styles from "./footer.module.css"
import bgImg from "../../assets/liquifer.png"
import logo from "../../assets/logo.png"

export default function Footer() {


    return (
      <div className={styles.wrapper}>
        <img src={bgImg} aria-hidden className={styles.bgImg} />
        <img src={logo} alt="Cinestar logo" className={styles.logo} />
        <p className={styles.copyright}>
          COPYRIGHT 2026 © CINESTAR | POWERED BY ROMETHEM E STUDIO
        </p>
      </div>
    );
}