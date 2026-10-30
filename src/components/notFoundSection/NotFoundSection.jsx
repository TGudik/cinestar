import { Link } from "react-router-dom"
import styles from "./notFoundSection.module.css"
import { QuestionCircleFill } from "react-bootstrap-icons"

export default function NotFoundSection( {title, text, btn} ) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}><QuestionCircleFill /></div>
                <h2 className={styles.oops}>{title}</h2>
                <p className={styles.body}>{text}</p>
                {btn && <Link className={styles.btn} to={"/"}>Til Forsiden</Link>}
            </div>
        </div>
    )
} 