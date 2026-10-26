import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../navigation/Navigation";

export default function AppLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navigation />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  );
}
