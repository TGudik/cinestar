import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

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
