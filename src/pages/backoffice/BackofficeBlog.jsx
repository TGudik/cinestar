import Hero from "../../components/siteComponents/hero/Hero";
import heroImg from "../../assets/studio.jpg";
import BackofficeBlogs from "../../components/backoffice/backofficeBlogs/BackofficeBlogs";

export default function BackofficeBlog() {
  return (
    <div>
      <Hero
        variant="page"
        image={heroImg}
        title={"ADMINISTRER BLOGS"}
        breadcrumbs={[
          { label: "FORSIDE", to: "/" },
          { label: "BACKOFFICE", to: "/backoffice" },
          { label: "BLOGS" },
        ]}
      />
      <main>
        <BackofficeBlogs />
      </main>
    </div>
  );
}
