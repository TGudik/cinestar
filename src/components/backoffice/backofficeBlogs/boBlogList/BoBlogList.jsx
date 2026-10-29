import BlogListItem from "./blogListItem/BlogListItem";
import styles from "./boBlogList.module.css";

export default function BoBlogList({blogs, setCurrentBlog}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.tableHeader}>
                <div className={styles.column}>
                    <p className={styles.heading}>Title</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.heading}>Billede</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.heading}>Teaser</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.heading}>Beskrivelse</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.heading}>Handlinger</p>
                </div>
            </div>
            {blogs.map((blog, i) => (
                <BlogListItem key={i} blog={blog} setCurrentBlog={setCurrentBlog}/>
            ))}
        </div>
    )
}