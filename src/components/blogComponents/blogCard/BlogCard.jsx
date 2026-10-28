import { Link } from "react-router-dom"
import styles from "./blogCard.module.css"

export default function BlogCard( {id, image, title, text, created, withBtn} ) {

    return (
        <div className={`${withBtn && styles.borderDiv}`}>
            <div className={`${styles.wrapper} ${withBtn && styles.altStyling}`}>
                <img src={image} alt="Billede fra cinestar blogopslag" className={styles.blogImg} />
                <div className={styles.textContent}>
                    <h3 className={styles.blogTitle}>{title}</h3>
                    <p className={styles.blogText}>{text}</p>
                    {withBtn && <Link to={`/blogs/${id}`} className={styles.readMoreBtn}>Læs Mere</Link>}
                </div>
                {created && <div className={styles.blogFooter}>
                    <p className={styles.created}>Oprettet d. {created}</p>
                </div>}
            </div>
        </div>
    )
}