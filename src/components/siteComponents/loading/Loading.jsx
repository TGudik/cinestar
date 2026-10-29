import styles from "./loading.module.css"
import logo from "../../../assets/logo.png"
import { useEffect, useState } from "react"

export default function Loading() {
  const [fade, setFade] = useState(false)



    useEffect(() => {

      setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setFade(false);
        }, 2000);
      }, 4000);

      return () => clearInterval()
    }, [])

  return (
      <div className={`${styles.wrapper} ${fade && styles.fade}`}>
          <img src={logo} alt="Logo" className={styles.img}/>
      </div>
  )
}
