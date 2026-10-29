import { NavLink } from "react-router-dom";
import styles from "./boNav.module.css";

export default function BoNav() {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.sectionTitle}>Vælg hvad du vil opdatere</h1>
            <nav className={styles.nav}>
                <NavLink className={styles.navLink} to="/backoffice/blogs">Blogs</NavLink>
            </nav>
        </div>
    )
}