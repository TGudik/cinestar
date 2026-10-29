import styles from "./successScreen.module.css"

export default function SuccessScreen( {title, message, name, show, onClose} ) {

    return (
        <div className={`${styles.success} ${show ? styles.show : ""}`}>
                <h2 className={styles.heading}>{title} {name}!</h2>
                <p className={styles.body}>{message}</p>
                <button className={styles.closeBtn} onClick={onClose}>Luk</button>
        </div>
    )

}