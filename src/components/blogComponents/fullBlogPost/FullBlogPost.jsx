import { useLoaderData } from "react-router-dom"
import styles from "./fullBlogPost.module.css"
import { formatTime } from "../../../utils/timeFormatter";

export default function FullBlogPost() {

    const blog = useLoaderData()

    function splitParagraphs(string) {
        const stringArray = string.split(".")
        return stringArray
    }

    return (
      <div className={styles.wrapper}>
        <img
          src={blog.image}
          alt="Billede fra cinestar blogopslag"
          className={styles.blogImg}
        />
        <div className={styles.textContent}>
            <div className={styles.header}>
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.created}>{formatTime(blog.created)}</p>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    {splitParagraphs(blog.description).map((par) => (
                        <p className={styles.paragraph}>{par}</p>
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
}