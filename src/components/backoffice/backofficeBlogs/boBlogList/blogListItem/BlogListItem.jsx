import { useFetchBlogs } from "../../../../../hooks/useFetchBlogs";
import styles from "./blogListItem.module.css";

export default function BlogListItem( {blog, setCurrentBlog} ) {

    const {deleteBlog} = useFetchBlogs()

    return (
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <p className={styles.listText}>{blog.title}</p>
        </div>
        <div className={styles.column}>
          <img className={styles.listImg} src={blog.image} />
        </div>
        <div className={styles.column}>
          <p className={styles.listText}>{blog.teaser}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.listText}>{blog.description}</p>
        </div>
        <div className={`${styles.column} ${styles.btn}`}>
            <button onClick={() => setCurrentBlog(blog)} className={styles.listBtn}>Opdater</button>
            <button onClick={() => deleteBlog(blog._id)} className={styles.listBtn}>Slet</button>
        </div>
      </div>
    );

}