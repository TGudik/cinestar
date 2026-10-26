import styles from "./navigation.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../../assets/logo.png"

export default function Navigation() {
    const [isOpen, setOpen] = useState(false)

    const pathname = window.location.pathname


    return(
        <div className={styles.navContainer}>
            <div className={styles.navContent}>
              <Link to="/" className={styles.logoLink}><img className={styles.logoImg} src={logo} alt="Logo Cinestar" /></Link>
                <div 
                onClick={() => setOpen((prev) => !prev)} 
                className={`${styles.burger} ${isOpen ? styles.open : ""}`}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
              <nav onClick={() => setOpen((prev) => !prev)} className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <Link 
                className={`${styles.navLink} ${pathname === "/" && styles.active}`} to="/">
                  FORSIDE
                </Link>
                <Link 
                className={`${styles.navLink} ${pathname === "/blogs" && styles.active}`} to="/blogs">
                  BLOG
                </Link>
              </nav>
            </div>

        </div>
    )

}