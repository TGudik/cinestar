import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

export default routes;
