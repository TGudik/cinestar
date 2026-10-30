import { Link } from "react-router-dom"
import styles from "./notFoundSection.module.css"
import {QuestionCircleFill} from "react-bootstrap-icons"

export default function NotFoundSection( ) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}><QuestionCircleFill /></div>
                <h2 className={styles.oops}>Hov! den side findes vist ikke...</h2>
                <p className={styles.body}>Gå tilbage til forsiden eller tjek URL'en</p>
                <Link className={styles.btn} to={"/"}>Til Forsiden</Link>
            </div>
        </div>
    )
} 