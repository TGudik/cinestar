import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./serviceSection.module.css"
import bgImg from "../../../assets/liquifer.png"
import ServiceCard from "./serviceCard/ServiceCard"
import {CameraReelsFill, Film, Images, MusicNote} from "react-bootstrap-icons"

export default function ServiceSection() {

    return (
      <div className={styles.wrapper}>
        <img src={bgImg} aria-hidden className={styles.bgImg} />
        <SectionHeader
          centered
          eyebrow={"SERVICE"}
          title={"HVILKEN SERVICE TILBYDER VI ?"}
        />
        <div className={styles.cardsWrapper}>
          <ServiceCard
            icon={<Film fill="#F07232" />}
            title={"FILM PRODUKTION"}
            body={
              "Vi skaber professionelle filmproduktioner, der formidler dit budskab klart, engagerende og visuelt overbevisende."
            }
          />
          <ServiceCard
            icon={<Images fill="#F07232" />}
            title={"EN KREATIV RETNING"}
            body={
              "Vi sikrer en kreativ retning, der løfter dit projekt fra almindeligt til uforglemmeligt."
            }
          />
          <ServiceCard
            icon={<CameraReelsFill fill="#F07232" />}
            title={"TV PRODUKTION"}
            body={
              "Vi leverer komplette løsninger inden for formatudvikling, optagelse og redigering."
            }
          />
          <ServiceCard
            icon={<MusicNote fill="#F07232" />}
            title={"MUSIK VIDEO"}
            body={
              "Lad din musik træde frem i et visuelt univers, der forstærker din lyd og dit budskab."
            }
          />
        </div>
      </div>
    );

}