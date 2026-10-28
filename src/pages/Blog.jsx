import Hero from "../components/hero/Hero";
import heroImg from "../assets/studio.jpg"
import BlogList from "../components/blogComponents/blogList/BlogList";
import NewsLetter from "../components/newsLetterSection/NewsLetter";

export default function Blog() {
    return (
        <div>
            <Hero 
                variant="page"
                image={heroImg}
                title="BLOG ARKIV"
                breadcrumbs={[{label: "Forside", to: "/"}, {label: "BLOG ARKIV"}]}
            />
            <main>
                <BlogList />
                <NewsLetter />
            </main>
        </div>
    )
}