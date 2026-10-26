import { Outlet, ScrollRestoration } from "react-router-dom";

export default function AppLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  );
}
