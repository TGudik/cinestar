import styles from "./sectionHeader.module.css"

export default function SectionHeader({eyebrow, title}) {
    
    return (
        <div>
            <h2 className={styles.eyebrow}>{eyebrow}</h2>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )

}