import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./loginForm.module.css"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const schema = yup.object({
    email: yup.string().email("Skal være en mail").required("Udfyld email"),
    password: yup.string().required("Udfyld password")
})

export default function LoginForm() {

    const { login } = useAuth()
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        reset,
        setError,
        formState: {errors, isSubmitting}
    } = useForm({resolver: yupResolver(schema)})

    async function onSubmit(data) {
        try {
            await login(data.email, data.password)
            navigate("/backoffice")
        } catch (error) {
            const message = 
            error.status === 401 
            ? "Forkert email eller password"
            : "Noget gik galt, prøv igen"
            setError("root", {message})
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <SectionHeader centered eyebrow={"LOGIN"} title={"BACKOFFICE"}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputWrapper}>
                    <input {...register("email")} className={styles.input} type="text"  placeholder="Email" defaultValue={""}/>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                <div className={styles.inputWrapper}>
                    <input {...register("password")} className={styles.input} type="password"  placeholder="Password" defaultValue={""}/>
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>
                <button disabled={isSubmitting} type="submit" className={styles.submitBtn}>{isSubmitting ? "Logger ind..." : "Log ind"}</button>
                {errors.root && <p className={styles.error}>{errors.root.message}</p>}
            </form>
        </div>  
    )

}