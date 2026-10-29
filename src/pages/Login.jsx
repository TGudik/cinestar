import Hero from "../components/siteComponents/hero/Hero";
import heroImg from "../assets/studio.jpg";
import LoginForm from "../components/siteComponents/loginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <Hero
        variant="page"
        image={heroImg}
        title={"LOGIN"}
        breadcrumbs={[{ label: "FORSIDE", to: "/" }, { label: "LOGIN" }]}
      />
      <main>
        <LoginForm />
      </main>
    </div>
  );
}
