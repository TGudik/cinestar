import { useState } from "react";
import styles from "./faqAcc.module.css";
import {ChevronDown} from "react-bootstrap-icons"

export default function FaqAcc( {title, text} ) {
    
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.wrapper}>

            <div onClick={() => setOpen((prev) => !prev)} className={`${styles.header} ${open && styles.open}`}>
                <h2 className={styles.title}>{title}</h2>
                <div className={`${styles.iconWrapper} ${open && styles.open}`}>
                    <ChevronDown />
                </div>
            </div>
            <div className={`${styles.bodyWrapper} ${open && styles.open}`}>
                <p className={styles.body}>
                    {text}
                </p>
            </div>
        </div>
    )
}