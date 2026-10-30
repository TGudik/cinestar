import Hero from "../components/siteComponents/hero/Hero";
import heroImg from "../assets/studio.jpg"
import NotFoundSection from "../components/notFoundSection/NotFoundSection";

export default function NotFound() {

    return (
        <div>
            <Hero 
                variant="page"
                image={heroImg}
                title={"Siden findes ikke"}

            />
            <main>
                <NotFoundSection />
            </main>
        </div>
    )
}