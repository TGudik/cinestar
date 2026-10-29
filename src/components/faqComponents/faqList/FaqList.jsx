import { useLoaderData } from "react-router-dom";
import styles from "./FaqList.module.css";
import FaqAcc from "../faqAcc/FaqAcc";
import { useState } from "react";

export default function FaqList() {

    const { faqs } = useLoaderData()
    
    return (
        <div className={styles.wrapper}>
            {faqs.map((faq) => (
                <FaqAcc title={faq.question} text={faq.answer}/>
            ))}
        </div>
    )
}