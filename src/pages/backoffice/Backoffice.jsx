import Hero from "../../components/siteComponents/hero/Hero";
import heroImg from "../../assets/studio.jpg";
import BoNav from "../../components/backoffice/boNav/BoNav";
export default function Backoffice() {
  return (
    <div>
      <Hero
        variant="page"
        image={heroImg}
        breadcrumbs={[{ label: "FORSIDE", to: "/" }, { label: "BACKOFFICE" }]}
      />
      <main>
        <BoNav />
      </main>
    </div>
  );
}
