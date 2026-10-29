import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../sectionHeader/SectionHeader";
import styles from "./latestBlogSection.module.css";
import BlogCard from "../blogCard/BlogCard";
import { formatTime } from "../../../../utils/timeFormatter";

export default function LatestBlogSection() {
  const { blogs } = useLoaderData();

  function findLatest(blogs) {
    if (!blogs) return;

    const latest = blogs.reduce((newest, blog) => {
      if (!newest) return blog;
      return new Date(blog.created) > new Date(newest.created) ? blog : newest;
    }, null);

    return latest;
  }

  const latest = findLatest(blogs);

  return (
    <div className={styles.wrapper}>
      <SectionHeader
        eyebrow={"BLOG"}
        title={"VORES SENESTE BLOG"}
        body={
          "Hold dig opdateret med de seneste nyheder, indblik og historier fra Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores spændende projekter og produktioner."
        }
      />
      <div className={styles.blogWrapper}>
        <BlogCard
          title={latest.title}
          text={latest.teaser}
          image={latest.image}
          created={formatTime(latest.created)}
        />
      </div>
    </div>
  );
}
