import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./newsLetter.module.css";
import bgImg from "../../../assets/liquifer.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSubscriptions } from "../../../hooks/useSubscription";
import SuccessScreen from "../contactSection/contactForm/successScreen/SuccessScreen";
import { useMail } from "../../../hooks/useMail";

const schema = yup.object({
  email: yup.string().email("Skal være en mail").required("Indtast en mail"),
});

export default function NewsLetter() {
  const [show, setShow] = useState(false);

  const { sendSubscription } = useSubscriptions();
  const { sendConfirmation } = useMail();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema) });

  const email = watch("email");

  function onClose() {
    setShow(false);
    reset();
  }

  async function onSubmit(data) {
    try {
      await sendSubscription(data);
      setShow(true);
      try {
        await sendConfirmation(data.email);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      setError("root", { message: "Noget gik galt, prøv igen" });
    }
  }

  return (
    <div className={styles.wrapper}>
      <img src={bgImg} aria-hidden className={styles.bgImg} />
      <SectionHeader
        eyebrow={"EN BLOG, DER KAN INSPIRERE OG HJÆLPE DIG"}
        body={
          "Få de nyeste opdateringer, tips og indsigter direkte i din indbakke. Vores blog deler viden, inspiration og historier, der kan hjælpe dig med at tage dine projekter til det næste niveau."
        }
      />
      <SuccessScreen
        title={"Tak for at tilmelde "}
        message={
          "Du vil nu modtage opdateringer via mail når vi laver nye blogposts"
        }
        onClose={onClose}
        show={show}
        name={email}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          placeholder="Email"
          {...register("email")}
          defaultValue={""}
          type="text"
          className={styles.input}
        />
        <button className={styles.submitBtn} type="submit">
          {isSubmitting ? "Tilmelder..." : "TILMELD NU"}
        </button>
      </form>
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      {errors.root && <p className={styles.error}>{errors.root.message}</p>}
    </div>
  );
}
