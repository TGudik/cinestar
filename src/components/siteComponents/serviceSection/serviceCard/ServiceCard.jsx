import styles from "./serviceCard.module.css"

export default function ServiceCard({icon, title, body}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.body}>{body}</p>
            </div>
        </div>
    )

}