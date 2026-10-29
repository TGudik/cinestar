import Hero from "../../components/hero/Hero";
import heroImg from "../../assets/studio.jpg"
export default function Backoffice() {

    return (
        <div>
            <Hero 
                variant="page"
                image={heroImg}
                breadcrumbs={[{label: "FORSIDE", to: "/"}, {label: "BACKOFFICE"}]}
            />
            <main>
                
            </main>
        </div>
    )
}