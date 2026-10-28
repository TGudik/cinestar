import ContactInfo from "../contactInfo/ContactInfo"
import styles from "./contactForm.module.css"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import SuccessScreen from "./successScreen/SuccessScreen"
import { useState } from "react"
import { useFetchMessages } from "../../../hooks/useFetchMessages"

    const schema = yup.object({
        name: yup.string().trim().required("Indtast navn").min(2, "Minimum 2 tegn"),
        email: yup.string().email("Skal være en rigtig mail").required("Indtast email"),
        subject: yup.string().required("Indtast emnet af beskeden").min(2, "Minimum 2 tegn"),
        description: yup.string().required("Indtast en besked").min(5, "skriv mindst 5 tegn")
    })

export default function ContactForm() {
    const [show, setShow] = useState(false)

    const { sendMessage } = useFetchMessages()

    const {
        register, 
        handleSubmit, 
        watch, 
        reset, 
        setError,
        formState: {errors, isSubmitting}
    } = useForm({ 
        resolver: yupResolver(schema),
        mode: "onTouched"   
    })

    const name = watch("name")

    function onClose() {
        setShow(false)
        reset()
    }

    async function onSubmit(data) {
        try {
            await sendMessage(data)
            setShow(true)
        } catch (error) {
            setError("root", {message: "Noget gik galt, prøv igen"})
        }
    }


    return (
      <div className={styles.wrapper}>
        <ContactInfo />
        <SuccessScreen name={name} show={show} onClose={onClose}/>
        <form noValidate className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputWrapper}>
                    <input {...register("name")} type="text" placeholder="Navn" className={styles.input} defaultValue={""}/>
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>
                <div className={styles.inputWrapper}>
                    <input {...register("email")} type="text" placeholder="Email" className={styles.input} defaultValue={""}/>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                <div className={styles.inputWrapper}>
                    <input {...register("subject")} type="text" placeholder="Emne" className={styles.input} defaultValue={""}/>
                    {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}
                </div>
            </div>
            <div className={styles.textareaWrapper}>
                <textarea rows={6} {...register("description")} placeholder="Besked" defaultValue="" className={styles.textarea}></textarea>
                {errors.message && <p className={styles.error}>{errors.description.message}</p>}
            </div>
            <button className={styles.submitBtn} disabled={isSubmitting} type="submit">{isSubmitting ? "Sender besked..." : "Send Besked"}</button>
            {errors.root && <p className={styles.error}>{errors.root.message}</p>}
        </form>
      </div>
    );

}