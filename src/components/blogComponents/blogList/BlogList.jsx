import { useLoaderData } from "react-router-dom"
import styles from "./blogList.module.css"
import BlogCard from "../blogCard/BlogCard"


export default function BlogList() {

    const { blogs } = useLoaderData()

    return (
        <div className={styles.wrapper}>
            {blogs.map((blog) => (
                <BlogCard id={blog._id} key={blog._id} withBtn image={blog.image} title={blog.title} text={blog.teaser}/>
            ))}
        </div>
    )
}