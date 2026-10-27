import styles from "./studioSection.module.css"
import thumbnail from "../../assets/studio3.jpg"
import video from "../../assets/aboutVideo.mp4"
import { useRef, useState } from "react";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function StudioSection() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    function playPause() {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <SectionHeader
            eyebrow={"CINESTAR STUDIO"}
            title={"HAR DU EN IDE TIL DIT NÆSTE PROJEKT?"}
            body={"Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion."}
          />
          <div className={styles.videoWrapper}>
            <video
              onClick={playPause}
              onEnded={() => setPlaying(false)}
              ref={videoRef}
              className={styles.video}
              poster={thumbnail}
            >
              <source src={video} type="video/mp4" />
            </video>
            {!playing && (
              <div onClick={playPause} className={styles.playBtn}>
                {String.fromCharCode(9658)}
              </div>
            )}
          </div>
          <h4 className={styles.subTitle}>
            TØV IKKE MED AT VÆLGE CINESTAR TIL DIT NÆSTE FILM-PROJEKT
          </h4>
          <p className={styles.body}>
            Hos Cinestar kombinerer vi vores passion for historiefortælling med
            et skarpt øje for detaljen. Med moderne udstyr og et erfarent team
            sikrer vi, at din produktion løfter sig fra skitse til strålende
            slutresultat – hver gang.
          </p>
          <div className={styles.statWrapper}>
            <div className={styles.stat}>
              <p className={styles.statValue}>250+</p>
              <p className={styles.statKey}>FILM PRODUKTION</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>78+</p>
              <p className={styles.statKey}>MUSIK VIDEO</p>
            </div>
          </div>
        </div>
      </div>
    );
}