import { useLoaderData } from "react-router-dom";
import styles from "./testimonialCarousel.module.css";
import TestimonialCard from "../testimonialCard/TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const { reviews } = useLoaderData();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.cardWrapper}>
          {reviews.map((review, index) => {
            return (
              <TestimonialCard
                key={review._id}
                isActive={index === active}
                review={review}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button
          onClick={() => {
            emblaApi?.scrollPrev();
          }}
        >
          {String.fromCharCode(8592)}
        </button>
        <button
          onClick={() => {
            emblaApi?.scrollNext();
          }}
        >
          {String.fromCharCode(8594)}
        </button>
      </div>
    </div>
  );
}
