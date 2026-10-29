import { useLoaderData } from "react-router-dom";
import styles from "./backofficeBlogs.module.css";
import BlogEdit from "./blogEdit/BlogEdit";
import BoBlogList from "./boBlogList/BoBlogList";
import { useState } from "react";

export default function BackofficeBlogs() {
    const [currentBlog, setCurrentBlog] = useState(null)

    const { blogs } = useLoaderData()

    return (
        <div className={styles.wrapper}>
            <div className={styles.listWrapper}>
                <BoBlogList blogs={blogs} setCurrentBlog={setCurrentBlog}/>
            </div>
            <div className={styles.editWrapper}>
                <BlogEdit currentBlog={currentBlog} setCurrentBlog={setCurrentBlog}/>
            </div>
        </div>
    )
}