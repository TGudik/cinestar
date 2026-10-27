import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import { homeLoader } from "./loaders/DataLoaders";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
      <Route index element={<Home />} loader={homeLoader  }/>
      <Route path="blogs" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

export default routes;
