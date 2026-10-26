import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./portfolio.module.css"
import image1 from "../../assets/school_life.jpg"
import image2 from "../../assets/into_your_heart.jpg"
import image3 from "../../assets/daughter_mom.jpg"
import { useEffect, useState } from "react"

const imageArray = [
    image1, image2, image3
]

export default function Portfolio() {
    const [index, setIndex] = useState(0)
    const [before, setBefore] = useState(2)
    const [after, setAfter] = useState(1)


    function prevIndex() {
        setIndex((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1))
        setBefore((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1))
        setAfter((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1))
    }

    function nextIndex() {
        setIndex((prev) => (prev === imageArray.length - 1 ? prev = 0 : prev + 1))
        setBefore((prev) => (prev === imageArray.length - 1 ? prev = 0 : prev + 1))
        setAfter((prev) => (prev === imageArray.length - 1 ? prev = 0 : prev + 1))
    }

    useEffect(() => {
        const id = setTimeout(nextIndex, 4000)
        return () => clearTimeout(id)
    }, [index])

    return (
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <SectionHeader eyebrow={"PORTFOLIO"} title={`UDVALGTE PROJEKTER`} />
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.beforeNafter}>
            <img src={imageArray[before]} alt="Cinestar film projekt" className={styles.bgSliderImg} />
            <img src={imageArray[after]} alt="Cinestar film projekt" className={styles.bgSliderImg} />
          </div>
          <img className={styles.sliderImg} src={imageArray[index]} alt="Cinestar film projekt" />
          <div className={styles.sliderBtns}>
            <button onClick={prevIndex} className={styles.sliderBtn}>
              {String.fromCharCode(8592)}
            </button>
            <button onClick={nextIndex} className={styles.sliderBtn}>
              {String.fromCharCode(8594)}
            </button>
          </div>
          <div className={styles.sliderDots}>
            <div className={`${styles.dot} ${index === 0 && styles.active}`}></div>
            <div className={`${styles.dot} ${index === 1 && styles.active}`}></div>
            <div className={`${styles.dot} ${index === 2 && styles.active}`}></div>
          </div>
        </div>
        <p className={styles.body}>
          Her præsenterer vi et udvalg af de produktioner, vi er stolte af at
          have skabt. <br/> Hvert projekt fortæller sin unikke historie og illustrerer
          vores ambition om at levere høj kvalitet, originalitet og visuel
          gennemslagskraft. <br/> Gå på opdagelse, og lad dig inspirere af vores
          arbejde.
        </p>
      </div>
    );
}