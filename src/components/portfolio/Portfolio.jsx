import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./portfolio.module.css";
import image1 from "../../assets/school_life.jpg";
import image2 from "../../assets/into_your_heart.jpg";
import image3 from "../../assets/daughter_mom.jpg";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const images = [image1, image2, image3];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  }, [AutoPlay(4000)]);

  useEffect(() => {
    if (!emblaApi) return;
    function onSelect() {
      const index = emblaApi.selectedScrollSnap();
      setActive(index);
    }
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  function goNext() {
    emblaApi?.scrollNext();
    emblaApi?.plugins().autoplay?.reset();
  }

  function goLast() {
    emblaApi?.scrollPrev();
    emblaApi?.plugins().autoplay?.reset();
  }

  function goTo(i) {
    emblaApi?.scrollTo(i);
    emblaApi?.plugins().autoplay?.reset();
  }

  function getPosition(index) {
  const count = images.length;

  if (index === (active + 1) % count) return styles.next;
  if (index === (active - 1 + count) % count) return styles.prev;
  return "";
}
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <SectionHeader eyebrow={"PORTFOLIO"} title={`UDVALGTE PROJEKTER`} />
      </div>
      <div className={styles.carouselWrapper}>
        <div className={styles.sliderWrapper} ref={emblaRef}>
          <div className={styles.imgWrapper}>
            {images.map((image, index) => (
              <div className={`${styles.slideWrapper}  ${getPosition(index)}`} key={index}>
                <img
                  src={image}
                  alt="Cinestar projekt"
                  className={`${styles.sliderImg} ${active === index ? styles.active : getPosition(index)}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.sliderBtn} onClick={goLast}>
            {String.fromCharCode(8592)}
          </button>
          <button className={styles.sliderBtn} onClick={goNext}>
            {String.fromCharCode(8594)}
          </button>
        </div>
        <div className={styles.sliderDots}>
          <div
            onClick={() => goTo(0)}
            className={`${styles.dot} ${active === 0 && styles.active}`}
          ></div>
          <div
            onClick={() => goTo(1)}
            className={`${styles.dot} ${active === 1 && styles.active}`}
          ></div>
          <div
            onClick={() => goTo(2)}
            className={`${styles.dot} ${active === 2 && styles.active}`}
          ></div>
        </div>
      </div>
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
