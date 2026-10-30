import { Link } from "react-router-dom";
import styles from "./hero.module.css";
import award1 from "../../../assets/awards/award1.png"
import award2 from "../../../assets/awards/award2.png"
import award3 from "../../../assets/awards/award3.png"
import { useSubscriptions } from "../../../hooks/useSubscription";

export default function Hero({
  variant = "page", 
  image,
  eyebrow, 
  title, 
  highlight, 
  body, 
  breadcrumbs = [], 
}) {
  const isHome = variant === "home";3

  return (
    <section
      className={`${styles.hero} ${isHome ? styles.home : styles.page}`}
    >
      <div className={`${styles.content} ${isHome && styles.onHome}`}>
      {!isHome && <div className={styles.overlay} />}
      <img className={styles.bgImg} src={image} alt="" />
        {isHome ? (
          <div>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h1 className={styles.headline}>
              {title} <span className={styles.highlight}>{highlight}</span>
            </h1>
            <p className={styles.body}>{body}</p>
          </div>
        ) : (
          <>
            <h1 className={styles.title}>{title}</h1>
            <nav className={styles.breadcrumbs}>
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <span key={crumb.label}>
                    {isLast || !crumb.to ? (
                      <span className={isLast ? styles.current : undefined}>
                        {crumb.label}
                      </span>
                    ) : (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    )}
                    {!isLast && " / "}
                  </span>
                );
              })}
            </nav>
          </>
        )}
      </div>
      {isHome && (
        <div className={styles.awards}>
            <img src={award1} alt="" />
            <img src={award2} alt="" />
            <img src={award3} alt="" />
        </div>
      )}
    </section>
  );
}
