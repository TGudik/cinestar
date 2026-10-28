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
import SingleBlog from "./pages/SingleBlog";


import { blogById, blogLoader, homeLoader } from "./loaders/DataLoaders";
import Contact from "./pages/Contact";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
      <Route index element={<Home />} loader={homeLoader  }/>
      <Route path="blogs" element={<Blog />} loader={blogLoader}/>
      <Route path="blogs/:id" element={<SingleBlog />} loader={blogById} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

export default routes;
