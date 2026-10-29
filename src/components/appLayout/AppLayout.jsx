import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../siteComponents/navigation/Navigation";
import Footer from "../siteComponents/footer/Footer";

export default function AppLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navigation />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}
