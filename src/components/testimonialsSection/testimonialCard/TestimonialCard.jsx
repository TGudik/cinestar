import styles from "./testimonialCard.module.css"
import {StarFill, Quote} from "react-bootstrap-icons"

export default function TestimonialCard({review, isActive}) {

    return (
      <div className={`${styles.wrapper} ${isActive && styles.active}`}>
        <div className={styles.content}>
          <div className={styles.starWrapper}>
            {Array(review.rating)
              .fill(1)
              .map((star, i) => (
                <StarFill key={i} fill="#DCB036" />
              ))}
          </div>
          <p className={styles.testBody}>"{review.text}"</p>
          <div className={styles.cardFooter}>
            <div className={styles.authorWrapper}>
              <h4 className={styles.name}>{review.name}</h4>
              <h5 className={styles.position}>{review.position}</h5>
            </div>
            <div className={styles.iconWrapper}>
              <Quote fill="#999999" />
            </div>
          </div>
        </div>
      </div>
    );
}