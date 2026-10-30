import Hero from "../components/siteComponents/hero/Hero";
import heroImg from "../assets/studio.jpg"
import NotFoundSection from "../components/notFoundSection/NotFoundSection";

export default function NotFound() {

    return (
      <div>
        <Hero variant="page" image={heroImg} title={"Siden findes ikke"} />
        <main>
          <NotFoundSection
            title={"Hov! den side findes vist ikke..."}
            text={"Gå tilbage til forsiden eller tjek URL'en"}
            btn
          />
        </main>
      </div>
    );
}