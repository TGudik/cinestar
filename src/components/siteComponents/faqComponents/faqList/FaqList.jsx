import { useLoaderData } from "react-router-dom";
import styles from "./FaqList.module.css";
import FaqAcc from "../faqAcc/FaqAcc";

export default function FaqList() {

    const { faqs } = useLoaderData()

    return (
        <div className={styles.wrapper}>
            {faqs.map((faq, i) => (
                <FaqAcc key={i} title={faq.question} text={faq.answer}/>
            ))}
        </div>
    )
}