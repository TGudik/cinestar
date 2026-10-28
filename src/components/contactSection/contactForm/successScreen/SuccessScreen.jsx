import styles from "./successScreen.module.css"

export default function SuccessScreen( {name, show, onClose} ) {

    return (
        <div className={`${styles.success} ${show ? styles.show : ""}`}>
                <h2 className={styles.heading}>Tak for din besked {name}!</h2>
                <p className={styles.body}>Vi bestræber os på at kontakte dig via din email indenfor 24 timer</p>
                <button className={styles.closeBtn} onClick={onClose}>Luk</button>
        </div>
    )

}