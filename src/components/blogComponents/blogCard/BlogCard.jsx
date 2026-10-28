import styles from "./blogCard.module.css"

export default function BlogCard( {image, title, text, created} ) {

    return (
        <div className={styles.wrapper}>
            <img src={image} alt="Billede fra cinestar blogopslag" className={styles.blogImg} />
            <div className={styles.textContent}>
                <h3 className={styles.blogTitle}>{title}</h3>
                <p className={styles.blogText}>{text}</p>
            </div>
            <div className={styles.blogFooter}>
                <p className={styles.created}>Oprettet d. {created}</p>
            </div>
        </div>
    )
}