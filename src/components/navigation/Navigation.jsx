import styles from "./navigation.module.css"
import { Link, NavLink } from "react-router-dom"
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
                <NavLink 
                end
                className={({isActive}) => `${styles.navLink} ${isActive && styles.active}`} to="/">
                  FORSIDE
                </NavLink>
                <NavLink 
                className={({isActive}) => `${styles.navLink} ${isActive && styles.active}`} to="/blogs">
                  BLOG
                </NavLink>
                <NavLink 
                className={({isActive}) => `${styles.navLink} ${isActive && styles.active}`} to="/kontakt">
                  KONTAKT
                </NavLink>
              </nav>
            </div>

        </div>
    )

}