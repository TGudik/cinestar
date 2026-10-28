import Hero from "../components/hero/Hero";
import heroImg from "../assets/studio.jpg";
import FullBlogPost from "../components/blogComponents/fullBlogPost/FullBlogPost";

export default function SingleBlog() {

    return (
        <div>
            <Hero 
                variant="page"
                image={heroImg}
                title="BLOG ARKIV"
                breadcrumbs={[{label: "Forside", to: "/"}, {label: "BLOG ARKIV", to: "/blogs"}, {label: "BLOG"}]}
            />
            <main>
                <FullBlogPost />
            </main>
        </div>
    )
}