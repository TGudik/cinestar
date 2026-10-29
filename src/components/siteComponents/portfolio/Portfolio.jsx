import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./portfolio.module.css";
import PortfolioSlider from "./portfolioSlider/PortfolioSlider";


export default function Portfolio() {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <SectionHeader eyebrow={"PORTFOLIO"} title={`UDVALGTE PROJEKTER`} />
      </div>
      <PortfolioSlider />
      <p className={styles.body}>
        Her præsenterer vi et udvalg af de produktioner, vi er stolte af at have
        skabt. <br />
        <br /> Hvert projekt fortæller sin unikke historie og illustrerer vores
        ambition om at levere høj kvalitet, originalitet og visuel
        gennemslagskraft. <br />
        <br /> Gå på opdagelse, og lad dig inspirere af vores arbejde.
      </p>
    </div>
  );
}
